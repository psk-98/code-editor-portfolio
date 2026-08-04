import StackFile from '@/components/StackComponent/StackFile'
import ProjectsDisplay from '@/components/projectsDisplay/ProjectsDisplay'
import { sanityFetch } from '@/lib/sanity-fetch'
import { sanityClient } from '@/utils/configSanity'

export default async function Projects({ searchParams }) {
  const tags = await getTags()
  const projects = await getProjects(searchParams)

  return (
    <div className="projectsWrapper">
      <StackFile
        searchParams={searchParams}
        tags={tags}
      />
      <ProjectsDisplay
        projects={projects}
        searchParams={searchParams}
      />
    </div>
  )
}

async function getTags() {
  const query = `*[_type == 'stackTags'] {
    _id, name, icon,
    'iconUrl': icon.asset->url
  }`

  const res = await sanityFetch({
      query: query,
      tags: ["stackTags", "projects"],
    })

  return res
}

async function getProjects(searchParams) {
  const query = `*[_type=='stackTags' && name=='${searchParams?.stack}']
  {
    _id, name,
    "projects": *[_type == 'projects' && references(^._id)]
    {
      name, description, link, category,
      'coverUrl': projectCoverImage.asset->url
    }
  }`

  const res = await sanityFetch({
      query: query,
      tags: ["stackTags", "projects"],
    })

  return res
}

export const metadata = {
  title: 'My Projects | Website Software Developer, Frontend, Backend',
  description:
    'Browse Paul Khoza\'s web development projects featuring responsive websites, custom applications, and practical software solutions built with modern technologies.',
    alternates: {
    canonical: "/projects",
  },
}
