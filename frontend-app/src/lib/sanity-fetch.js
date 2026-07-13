import { client } from "./client"

export async function sanityFetch({
  query,
  params = {},
  tags = [],
}) {
  return client.fetch(query, params, {
    next: {
      tags,
    },
  })
}
