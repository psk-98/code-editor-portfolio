import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion =
  process.env.SANITY_API_VERSION ??
  process.env.SANITY_APIVERSION ??
  '2026-02-01'

export const sanityClient =
  projectId && dataset
    ? createClient({ projectId, dataset, apiVersion, useCdn: true })
    : null
