import StackFile from "@/components/StackComponent/StackFile"
import ProjectsDisplay from "@/components/projectsDisplay/ProjectsDisplay"
import { sanityClient } from "@/utils/configSanity"

export default async function Projects({ searchParams }) {
  const tags = await getTags()
  const projects = await getProjects(searchParams)

  return (
    <div className="projectsWrapper">
      {console.log(projects)}
      <StackFile searchParams={searchParams} tags={tags} />
      <ProjectsDisplay projects={projects} searchParams={searchParams} />
    </div>
  )
}

async function getTags() {
  const query = `*[_type == 'stackTags'] {
    _id, name, icon,
    'iconUrl': icon.asset->url
  }`
  const res = await sanityClient.fetch(query)

  console.log(res)

  return res
}

async function getProjects({ searchParams }) {
  const query = `*[_type=='stackTags' && name=='React' || name=='HTML'] 
  {
    _id, name,
    "projects": *[_type == 'projects' && references(^._id)] 
    {
      name, description,
      'coverUrl': projectCoverImage.asset->url
    }
  }`
  const res = await sanityClient.fetch(query)

  return res
}
