import ContactForm from "@/components/contactForm/ContactForm"
import FoldersWrapper from "@/components/folderComponent/FoldersWrapper"
import { sanityClient } from "@/utils/configSanity"

export default async function Contact() {
  const data = await getData()
  return (
    <div className="contactWrapper">
      <FoldersWrapper data={data} />
      <ContactForm />
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

export const metadata = {
  title: "Contact Me | Website Software Developer, Frontend, Backend",
  description:
    "Paul Khoza is a proficient software developer specializing in creating websites. Discover more about his contributions to the development of software for the web.",
}
