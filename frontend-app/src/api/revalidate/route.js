import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"
import { parseBody } from "next-sanity/webhook"

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      {
        message: "SANITY_REVALIDATE_SECRET is not configured",
      },
      {
        status: 500,
      },
    )
  }

  try {
    const { isValidSignature, body } = await parseBody(
      request,
      secret,
      true,
    )

    if (!isValidSignature) {
      return NextResponse.json(
        {
          message: "Invalid webhook signature",
        },
        {
          status: 401,
        },
      )
    }

    if (!body?._type) {
      return NextResponse.json(
        {
          message: "Document type is missing",
        },
        {
          status: 400,
        },
      )
    }

    const tags = [body._type]

    if (body.slug) {
      tags.push(`${body._type}:${body.slug}`)
    }

    for (const tag of tags) {
      revalidateTag(tag)
    }

    return NextResponse.json({
      revalidated: true,
      tags,
    })
  } catch (error) {
    console.error("Sanity revalidation failed:", error)

    return NextResponse.json(
      {
        message: "Revalidation failed",
      },
      {
        status: 500,
      },
    )
  }
}
