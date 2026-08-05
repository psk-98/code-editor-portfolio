import { sanityClient } from '@/utils/configSanity'

export async function sanityFetch({ query, params = {}, tags = [] }) {
  if (!sanityClient) return []

  return sanityClient.fetch(query, params, {
    next: {
      tags,
    },
  })
}
