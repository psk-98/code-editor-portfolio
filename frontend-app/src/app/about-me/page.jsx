import FoldersWrapper from "@/components/folderComponent/FoldersWrapper"
import TextArea from "@/components/textArea/TextArea"
import { sanityClient } from "@/utils/configSanity"
import { filterByFile } from "@/utils/filterByFile"

export default async function About({ searchParams }) {
  const data = await getData()
  const code = await getCode()
  // console.log(await getCode())
  const snippet = await getSnippet()

  return (
    <div className="aboutWrapper">
      {console.log(code[0])}
      <FoldersWrapper data={data} searchParams={searchParams} />
      <TextArea
        data={filterByFile(data, searchParams?.file)}
        searchParams={searchParams}
        code={code[0]}
      />
    </div>
  )
}

async function getData() {
  const query = `*[_type == 'aboutMe'] {
        _id,folder,file,content
      } | order(file asc)`
  const res = await sanityClient.fetch(query)

  return res
}

async function getCode() {
  // const res = await octokit.request("GET /gists", {
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // })

  const res = await fetch(`https://api.github.com/users/psk-98/gists`)

  return res.json()
}

async function getSnippet() {
  const res = await fetch(
    `https://gist.githubusercontent.com/psk-98/1a32ec64a1d4525fa340b00fbc4c7aa4/raw/30cb388daa1154cd08ecd7bd59d7e01412e43615/returnFolderName.js`
  )
  console.log("snippets")
  console.log(res)
  console.log("snippets")

  // return res.json()
}
