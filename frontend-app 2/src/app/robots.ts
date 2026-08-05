import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://paulkhoza.co.za/sitemap.xml',
    host: 'https://paulkhoza.co.za',
  }
}
