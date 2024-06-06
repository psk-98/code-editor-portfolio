import ContactForm from "@/components/contactForm/ContactForm"
import FoldersWrapper from "@/components/folderComponent/FoldersWrapper"
import { sanityClient } from "@/utils/configSanity"

require("prismjs/components/prism-javascript")

export default async function Contact() {
  const data = await getDatas()
  return (
    <div className="contactWrapper">
      <FoldersWrapper data={data} />
      <ContactForm />
    </div>
  )
}

async function getDatas() {
  const query = `*[_type == 'contactMe'] {
    _id,folder,file,socialLink
  } | order(file asc)`
  const res = await sanityClient.fetch(query)

  // console.log(res)
  return res
}
