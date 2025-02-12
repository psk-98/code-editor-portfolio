import { createClient } from "next-sanity"

export const sanityClient = createClient({
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  dataset: `${process.env.SANITY_DATASET}`,
  apiVersion: `${process.env.SANITY_APIVERSION}`,
  useCdn: true,
})
