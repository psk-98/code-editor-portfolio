export default function sitemap() {
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
