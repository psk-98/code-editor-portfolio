import FoldersWrapper from '@/components/folderComponent/FoldersWrapper'
import TextArea from '@/components/textArea/TextArea'
import { sanityFetch } from '@/lib/sanity-fetch'
import { filterByFile } from '@/utils/filterByFile'

export default async function About({ searchParams }) {
  const data = await getData()
  const code = await getCode()

  return (
    <div className="aboutWrapper">
      <FoldersWrapper
        data={data}
        searchParams={searchParams}
      />
      <TextArea
        data={filterByFile(data, searchParams?.file)}
        searchParams={searchParams}
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
      query: query,
      tags: ["aboutMe"],
    })

  return res
}



async function getCode() {
  const res = await fetch(`https://api.github.com/users/psk-98/gists`)

  return res.json()
}

export const metadata = {
  title: 'About Me | Website Software Developer, Frontend, Backend',
  description:
    'Learn about Paul Khoza, a software developer passionate about building user-friendly websites, solving technical challenges, and creating reliable digital solutions.',
  alternates: {
    canonical: "/about-me",
  },}
