import Image from "next/image"
import Link from "next/link"
import { closeIcon } from "../../../public/assests/svgs"
import styles from "./ProjectsDisplay.module.css"

export default function ProjectsDisplay({ projects, searchParams }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filesTab}>
        <h2 className={styles.headerDesktop}>
          {searchParams?.stack} <Link href="/projects">{closeIcon}</Link>
        </h2>
      </div>
      <div className={styles.projectsWrapper}>
        {searchParams?.stack && returnProjects(projects)[0]?.length != 0 ? (
          returnProjects(projects).map((project) => (
            <div className={styles.projectWrapper} key={project[0]?._id}>
              <h3 className={styles.projectName}>
                {project[0]?.name} <span>{`// _${project[0]?.category}`}</span>
              </h3>
              <div className={styles.project}>
                <div className={styles.imgContainer}>
                  <Image
                    src={project[0]?.coverUrl}
                    height={500}
                    width={500}
                    alt={project[0]?.name + " cover image"}
                  />
                </div>
                <div className={styles.details}>
                  <p className={styles.description}>
                    {project[0]?.description}
                  </p>
                  <a
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
          <div className={styles.warning}>
            <span>
              {searchParams?.stack
                ? "No projects, please select another project filter"
                : "Please select a project filter"}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

const returnProjects = (projects) => {
  let filteredProjects = []
  for (let i = 0; i < projects.length; i++) {
    filteredProjects.push(projects[i]?.projects)
  }

  return filteredProjects
}
