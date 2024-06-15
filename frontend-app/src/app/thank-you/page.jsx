import FoldersWrapper from "@/components/folderComponent/FoldersWrapper"
import ThankYouText from "@/components/thankYouText/ThankYouText"
import { sanityClient } from "@/utils/configSanity"

export default async function ThankYou() {
  const data = await getData()

  return (
    <div className="thanksWrapper">
      <FoldersWrapper data={data} />
      <ThankYouText />
    </div>
  )
}

async function getData() {
  const query = `*[_type == 'contactMe'] {
    _id,folder,file,socialLink
  } | order(file asc)`
  const res = await sanityClient.fetch(query)

  return res
}
