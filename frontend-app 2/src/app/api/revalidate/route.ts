import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

type SanityWebhookPayload = {
  _type?: unknown
  slug?: unknown
}

function getSlug(value: unknown): string | undefined {
  if (typeof value === 'string') return value
  if (
    typeof value === 'object' &&
    value !== null &&
    'current' in value &&
    typeof value.current === 'string'
  ) {
    return value.current
  }

  return undefined
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      { message: 'SANITY_REVALIDATE_SECRET is not configured' },
      { status: 500 },
    )
  }

  try {
    const signature = request.headers.get(SIGNATURE_HEADER_NAME) ?? ''
    const rawBody = await request.text()
    const hasValidSignature = await isValidSignature(rawBody, signature, secret)

    if (!hasValidSignature) {
      return NextResponse.json(
        { message: 'Invalid webhook signature' },
        { status: 401 },
      )
    }

    let body: SanityWebhookPayload

    try {
      body = JSON.parse(rawBody) as SanityWebhookPayload
    } catch {
      return NextResponse.json(
        { message: 'Webhook body is not valid JSON' },
        { status: 400 },
      )
    }

    if (typeof body._type !== 'string' || body._type.length === 0) {
      return NextResponse.json(
        { message: 'Document type is missing' },
        { status: 400 },
      )
    }

    const tags = new Set([body._type])
    const slug = getSlug(body.slug)

    if (slug) tags.add(`${body._type}:${slug}`)

    // Sanity webhooks can arrive just before the CDN reflects the mutation.
    await new Promise(resolve => setTimeout(resolve, 1000))

    for (const tag of tags) revalidateTag(tag, 'max')

    return NextResponse.json({ revalidated: true, tags: [...tags] })
  } catch (error) {
    console.error('Sanity revalidation failed:', error)
    return NextResponse.json(
      { message: 'Revalidation failed' },
      { status: 500 },
    )
  }
}
