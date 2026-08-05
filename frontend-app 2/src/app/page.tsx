import Hero from '@/components/hero/Hero'
import type { Metadata } from 'next'

export default function Home() {
  return <Hero />
}

export const metadata: Metadata = {
  title: 'Paul Khoza | Website Software Developer, Frontend, Backend',
  description:
    'Meet Paul Khoza, a skilled software developer passionate about building websites. Explore his journey and contributions to web development.',
  alternates: {
    canonical: '/',
  },
}
