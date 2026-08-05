import ContactForm from '@/components/contactForm/ContactForm'
import FoldersWrapper from '@/components/folderComponent/FoldersWrapper'
import { sanityFetch } from '@/lib/sanity-fetch'
import type { ContactMeDocument } from '@/types/content'
import type { Metadata } from 'next'

export default async function Contact() {
  const data = await getData()
  return (
    <div className="min-h-[calc(100vh-4rem-6.25rem-7.75rem-6vh)] lg:flex lg:max-h-[var(--max-height-desktop-between-footer-nav)]">
      <FoldersWrapper data={data} />
      <ContactForm />
    </div>
  )
}

async function getData(): Promise<ContactMeDocument[]> {
  const query = `*[_type == 'contactMe'] {
    _id,folder,file,socialLink
  } | order(file asc)`
  const res = await sanityFetch<ContactMeDocument[]>({
    query,
    tags: ['contactMe'],
  })

  return res
}

export const metadata: Metadata = {
  title: 'Contact Me | Website Software Developer, Frontend, Backend',
  description:
    'Get in touch with Paul Khoza to discuss website development, software projects, or collaboration. Reach out for professional web development services today.',
  alternates: {
    canonical: '/contact-me',
  },
}
