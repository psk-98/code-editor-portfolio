import { createClient } from "next-sanity"

export const sanityClient = createClient({
  projectId: "z0rzpg8e",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
})
