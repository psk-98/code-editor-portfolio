const baseUrl = 'https://paulkhoza.co.za'

export const revalidate = 3600

export default async function sitemap() {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-01'),
    },
    {
      url: `${baseUrl}/about-me`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-08-01'),
    },
    {
      url: `${baseUrl}/contact-me`,
      lastModified: new Date('2026-06-15'),
    },
  ]

  const blogPages = posts
    .filter(post => post.status === 'published')
    .map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : undefined,
    }))

  return [...staticPages, ...blogPages]
}
