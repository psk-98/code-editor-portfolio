import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paulkhoza.co.za'

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about-me`,
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/contact-me`,
    },
  ]
}
