import Image from "next/image"
import Link from "next/link"
import styles from "./Stack.module.css"
import StackFolder from "./StackFolder"

export default function StackFile({ tags, searchParams }) {
  return (
    <StackFolder stack={searchParams?.stack}>
      <div className={styles.file}>
        {tags?.map((tag) => (
          <Link
            href={{
              pathname: "projects",
              query: {
                stack: [
                  ...returnStringArrayOfParams(searchParams?.stack),
                  tag?.name,
                ],
              },
            }}
            className={
              searchParams?.stack?.includes(tag?.name)
                ? styles.checked
                : undefined
            }
          >
            <div className={styles.checkBox}></div>
            <span className={styles.icon}>
              <Image src={tag.iconUrl} width={24} height={24} />
            </span>
            <span className={styles.name}>{tag.name}</span>
          </Link>
        ))}
      </div>
    </StackFolder>
  )
}

const returnStringArrayOfParams = (stack, tag) => {
  if (stack?.length) {
    if (stack?.length == 0) return [stack, tag]
    return [...stack]
  }
  return []
}
