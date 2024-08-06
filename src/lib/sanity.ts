import { createClient } from '@sanity/client'

const SANITY_DATASET = 'production'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2024-08-07', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN,
})

export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2024-08-07/assets/images/${SANITY_DATASET}`

export const uploadAsset = async (file: Blob) => {
  const res = await fetch(assetsURL, {
    method: 'POST',
    headers: {
      'Content-Type': file.type,
      Authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
    },
    body: file,
  })
  const { document } = await res.json()
  return document
}
