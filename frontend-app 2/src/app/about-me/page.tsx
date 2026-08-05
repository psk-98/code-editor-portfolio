import FoldersWrapper from '@/components/folderComponent/FoldersWrapper'
import TextArea from '@/components/textArea/TextArea'
import { sanityFetch } from '@/lib/sanity-fetch'
import type { AboutMeDocument, GitHubGist, SearchParams } from '@/types/content'
import { filterByFile } from '@/utils/filterByFile'
import type { Metadata } from 'next'

type AboutPageProps = {
  searchParams: Promise<SearchParams>
}

export default async function About({ searchParams }: AboutPageProps) {
  const query = await searchParams
  const data = await getData()
  const code = await getCode()

  return (
    <div className="min-h-[calc(100vh-4rem-6.25rem-7.75rem-6vh)] lg:flex lg:max-h-[var(--max-height-desktop-between-footer-nav)]">
      <FoldersWrapper
        data={data}
        searchParams={query}
      />
      <TextArea
        data={filterByFile(data, query?.file)}
        searchParams={query}
        code={code[0]}
        codeDetails={codeDetails}
      />
    </div>
  )
}

const codeDetails =
  'This is used to show the drop downs for personal-info, contacts etc...'

async function getData(): Promise<AboutMeDocument[]> {
  const query = `*[_type == 'aboutMe'] {
        _id,folder,file,content
      } | order(file asc)`

  const res = await sanityFetch<AboutMeDocument[]>({
    query,
    tags: ['aboutMe'],
  })

  return res
}

async function getCode(): Promise<GitHubGist[]> {
  try {
    const res = await fetch('https://api.github.com/users/psk-98/gists', {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as GitHubGist[]) : []
  } catch {
    return []
  }
}

export const metadata: Metadata = {
  title: 'About Me | Website Software Developer, Frontend, Backend',
  description:
    'Learn about Paul Khoza, a software developer passionate about building user-friendly websites, solving technical challenges, and creating reliable digital solutions.',
  alternates: {
    canonical: '/about-me',
  },
}
