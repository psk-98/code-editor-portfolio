import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      { message: 'SANITY_REVALIDATE_SECRET is not configured' },
      { status: 500 },
    )
  }

  try {
    const signature = request.headers.get(SIGNATURE_HEADER_NAME)
    const rawBody = await request.text()
    const hasValidSignature = await isValidSignature(rawBody, signature, secret)

    if (!hasValidSignature) {
      return NextResponse.json(
        { message: 'Invalid webhook signature' },
        { status: 401 },
      )
    }

    let body

    try {
      body = JSON.parse(rawBody)
    } catch {
      return NextResponse.json(
        { message: 'Webhook body is not valid JSON' },
        { status: 400 },
      )
    }

    if (!body?._type) {
      return NextResponse.json(
        { message: 'Document type is missing' },
        { status: 400 },
      )
    }

    const tags = [body._type]

    if (body.slug) tags.push(`${body._type}:${body.slug}`)

    for (const tag of tags) revalidateTag(tag, 'max')

    return NextResponse.json({ revalidated: true, tags })
  } catch (error) {
    console.error('Sanity revalidation failed:', error)
    return NextResponse.json(
      { message: 'Revalidation failed' },
      { status: 500 },
    )
  }
}
