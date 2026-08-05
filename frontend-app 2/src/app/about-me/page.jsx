import FoldersWrapper from '@/components/folderComponent/FoldersWrapper'
import TextArea from '@/components/textArea/TextArea'
import { sanityFetch } from '@/lib/sanity-fetch'
import { filterByFile } from '@/utils/filterByFile'

export default async function About({ searchParams }) {
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

async function getData() {
  const query = `*[_type == 'aboutMe'] {
        _id,folder,file,content
      } | order(file asc)`

  const res = await sanityFetch({
    query,
    tags: ['aboutMe'],
  })

  return res
}

async function getCode() {
  try {
    const res = await fetch('https://api.github.com/users/psk-98/gists', {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    return res.json()
  } catch {
    return []
  }
}

export const metadata = {
  title: 'About Me | Website Software Developer, Frontend, Backend',
  description:
    'Learn about Paul Khoza, a software developer passionate about building user-friendly websites, solving technical challenges, and creating reliable digital solutions.',
  alternates: {
    canonical: '/about-me',
  },
}
