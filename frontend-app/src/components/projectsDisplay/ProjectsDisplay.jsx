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
      {console.log(returnProjects(projects))}
      <div className={styles.projectsWrapper}>
        {returnProjects(projects).map((project) => (
          <div className={styles.projectWrapper} key={project[0]?._id}>
            <h3 className={styles.projectName}>
              {project[0]?.name} <span>{`// _category`}</span>
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
                <p className={styles.description}>{project[0]?.description}</p>
                <Link href="#">view-project</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const returnProjects = (projects) => {
  let filteredProjects = []

  for (let i = 0; i < projects.length; i++) {
    // filteredProjects = [...filteredProjects?.projects]
    filteredProjects.push(projects[i]?.projects)
  }
  // console.log("function")
  // console.log(filteredProjects)
  // console.log("function")

  return filteredProjects
}
