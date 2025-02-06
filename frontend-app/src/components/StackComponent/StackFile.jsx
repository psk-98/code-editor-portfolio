"use client"

import { fileVariants, filesWrapperVariants } from "@/animations/folders"
import { useRouter } from "next/navigation"
import {
  CSSIcon,
  HTMLIcon,
  SanityIcon,
  checkedIcon,
  djangoIcon,
  dotNetIcon,
  nextIcon,
  reactIcon,
} from "../../../public/assests/svgs"
import { MotionDiv } from "../motionComponents/MotionComponents"
import styles from "./Stack.module.css"
import StackFolder from "./StackFolder"

export default function StackFile({ tags, searchParams }) {
  const router = useRouter()

  return (
    <StackFolder stack={searchParams?.stack}>
      <MotionDiv
        className={styles.files}
        variants={filesWrapperVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {tags?.map((tag) => (
          <MotionDiv
            className={
              searchParams?.stack?.includes(tag?.name)
                ? styles.checked + " " + styles.file
                : styles.file
            }
            key={tag.id}
            variants={fileVariants}
            onClick={() => router.push(`/projects?stack=${tag?.name}`)}
          >
            <div className={styles.checkBox}>
              {searchParams?.stack?.includes(tag?.name) && checkedIcon}
            </div>
            <span className={styles.icon}>{returnStackIcon(tag?.name)}</span>
            <span className={styles.name}>{tag.name}</span>
          </MotionDiv>
        ))}
      </MotionDiv>
    </StackFolder>
  )
}

const returnStackIcon = (stackName) => {
  switch (stackName.toLowerCase()) {
    case "react":
      return reactIcon
    case "django":
      return djangoIcon
    case "nextjs":
      return nextIcon
    case "sanity":
      return SanityIcon
    case "html":
      return HTMLIcon
    case "css":
      return CSSIcon
    case ".net":
      return dotNetIcon
<<<<<<< HEAD
=======
    //remeber to write the case in lower case letters
>>>>>>> 42e8b1b (update footer email)
  }
}
