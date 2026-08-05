import type { QueryParams } from '@sanity/client'
import { sanityClient } from '@/utils/configSanity'

type SanityFetchOptions = {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}

export async function sanityFetch<Result = unknown[]>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: SanityFetchOptions): Promise<Result> {
  if (!sanityClient) return [] as Result

  return sanityClient.fetch<Result>(query, params, {
    next: {
      revalidate: tags.length > 0 ? false : revalidate,
      tags,
    },
  })
}
