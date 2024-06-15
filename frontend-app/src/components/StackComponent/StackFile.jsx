import Link from "next/link"
import {
  CSSIcon,
  HTMLIcon,
  SanityIcon,
  checkedIcon,
  djangoIcon,
  nextIcon,
  reactIcon,
} from "../../../public/assests/svgs"
import styles from "./Stack.module.css"
import StackFolder from "./StackFolder"

export default function StackFile({ tags, searchParams }) {
  return (
    <StackFolder stack={searchParams?.stack}>
      <div className={styles.file}>
        {console.log(searchParams.stack)}
        {tags?.map((tag) => (
          <Link
            href={`/projects?stack=${tag?.name}`}
            className={
              searchParams?.stack?.includes(tag?.name)
                ? styles.checked
                : undefined
            }
            key={tag?.id}
          >
            <div className={styles.checkBox}>
              {searchParams?.stack?.includes(tag?.name) && checkedIcon}
            </div>
            <span className={styles.icon}>{returnStackIcon(tag?.name)}</span>
            <span className={styles.name}>{tag.name}</span>
          </Link>
        ))}
      </div>
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
  }
}
