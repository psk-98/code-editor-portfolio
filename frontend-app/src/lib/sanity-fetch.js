import { sanityClient } from "@/utils/configSanity"

export async function sanityFetch({
  query,
  params = {},
  tags = [],
}) {
  return sanityClient.fetch(query, params, {
    next: {
      tags,
    },
  })
}
