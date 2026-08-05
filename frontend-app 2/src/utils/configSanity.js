import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = process.env.SANITY_APIVERSION

export const sanityClient =
  projectId && dataset && apiVersion
    ? createClient({ projectId, dataset, apiVersion, useCdn: true })
    : null
