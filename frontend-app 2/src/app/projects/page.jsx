import StackFile from '@/components/StackComponent/StackFile'
import ProjectsDisplay from '@/components/projectsDisplay/ProjectsDisplay'
import { sanityFetch } from '@/lib/sanity-fetch'

export default async function Projects({ searchParams }) {
  const query = await searchParams
  const tags = await getTags()
  const projects = await getProjects(query?.stack)

  return (
    <div className="min-h-[calc(100vh-4rem-6.25rem-7.75rem-6vh)] lg:flex lg:max-h-[var(--max-height-desktop-between-footer-nav)]">
      <StackFile
        searchParams={query}
        tags={tags}
      />
      <ProjectsDisplay
        projects={projects}
        searchParams={query}
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
    query,
    tags: ['stackTags', 'projects'],
  })

  return res
}

async function getProjects(stack) {
  if (!stack) return []

  const query = `*[_type == 'stackTags' && name == $stack]
  {
    _id, name,
    "projects": *[_type == 'projects' && references(^._id)]
    {
      _id, name, description, link, category,
      'coverUrl': projectCoverImage.asset->url
    }
  }`

  const res = await sanityFetch({
    query,
    params: { stack },
    tags: ['stackTags', 'projects'],
  })

  return res
}

export const metadata = {
  title: 'My Projects | Website Software Developer, Frontend, Backend',
  description:
    "Browse Paul Khoza's web development projects featuring responsive websites, custom applications, and practical software solutions built with modern technologies.",
  alternates: {
    canonical: '/projects',
  },
}
