import FoldersWrapper from "@/components/folderComponent/FoldersWrapper"
import TextArea from "@/components/textArea/TextArea"
import { sanityClient } from "@/utils/configSanity"
import { filterByFile } from "@/utils/filterByFile"

export default async function About({ searchParams }) {
  const data = await getData()
  const code = await getCode()

  return (
    <div className="aboutWrapper">
      <FoldersWrapper data={data} searchParams={searchParams} />
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
  "This is used to show the drop downs for personal-info, contacts etc..."

async function getData() {
  const query = `*[_type == 'aboutMe'] {
        _id,folder,file,content
      } | order(file asc)`
  const res = await sanityClient.fetch(query)

  return res
}

async function getCode() {
  const res = await fetch(`https://api.github.com/users/psk-98/gists`)

  return res.json()
}

export const metadata = {
  title: "About Me | Website Software Developer, Frontend, Backend",
  description:
    "Paul Khoza is a proficient software developer specializing in creating websites. Discover more about his contributions to the development of software for the web.",
}
