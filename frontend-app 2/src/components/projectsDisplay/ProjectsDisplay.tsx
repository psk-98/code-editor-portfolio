import { closeIcon } from '@/components/icons'
import type { Project, ProjectGroup, SearchParams } from '@/types/content'
import Image from 'next/image'
import Link from 'next/link'

type ProjectsDisplayProps = {
  projects: ProjectGroup[]
  searchParams: SearchParams
}

export default function ProjectsDisplay({
  projects,
  searchParams,
}: ProjectsDisplayProps) {
  const projectGroups = returnProjects(projects)
  const hasProjects =
    Boolean(searchParams?.stack) && projectGroups.some(group => group?.length)

  return (
    <div className="mx-[2rem] lg:mx-0 lg:mb-[8rem] lg:h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)] lg:w-[calc(83.81vw+1rem)] lg:overflow-hidden">
      <div className="hidden lg:block lg:w-[calc(100vw-16.19vw-8rem)] lg:border-b lg:border-line">
        <h2 className="flex w-fit items-center border-r border-line p-[2rem] font-light leading-normal text-muted capitalize [&_a]:w-fit [&_a]:cursor-pointer [&_a]:bg-transparent [&_a]:pl-[5rem] [&_a]:text-muted [&_a_path]:transition-colors hover:[&_a_path]:fill-foreground">
          {searchParams?.stack} <Link href="/projects">{closeIcon}</Link>
        </h2>
      </div>
      <div className="lg:flex lg:max-h-[calc(100vh-10rem-6rem-3rem)] lg:max-w-full lg:flex-wrap lg:overflow-x-scroll lg:p-[4rem]">
        {hasProjects ? (
          projectGroups.map(project => (
            <div
              className="lg:ml-[4rem] lg:w-[19.27vw]"
              key={project[0]?._id}
            >
              <h3 className="my-[2rem] text-label font-semibold text-accent-purple [&_span]:font-normal [&_span]:text-muted">
                {project[0]?.name} <span>{`// _${project[0]?.category}`}</span>
              </h3>
              <div className="mb-[4rem] rounded-[2rem] border border-line bg-canvas pb-[4rem]">
                <div className="mb-[2rem] h-[calc((100vw-4rem)/1.9)] w-full border-b border-line lg:h-[calc((20.76vw-4rem)/1.9)] [&_img]:h-full [&_img]:w-full [&_img]:rounded-t-[2rem] [&_img]:object-cover">
                  {project[0]?.coverUrl && (
                    <Image
                      src={project[0].coverUrl}
                      height={500}
                      width={500}
                      alt={`${project[0].name} cover image`}
                    />
                  )}
                </div>
                <div className="px-[2rem]">
                  <p className="mb-[2rem] text-label leading-[1.5] text-muted lg:text-body">
                    {project[0]?.description}
                  </p>
                  <a
                    className="rounded-[1rem] bg-line px-[2rem] py-[1rem] text-code text-foreground"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={project[0]?.link}
                  >
                    view-project
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="my-[3rem] text-label text-accent-orange">
            <span>
              {searchParams?.stack
                ? 'No projects, please select another project filter'
                : 'Please select a project filter'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

const returnProjects = (projects: ProjectGroup[]): Project[][] => {
  const filteredProjects: Project[][] = []
  for (let i = 0; i < projects.length; i++) {
    filteredProjects.push(projects[i]?.projects)
  }

  return filteredProjects
}
