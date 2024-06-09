import Image from 'next/image'
import Link from 'next/link'
import styles from './Stack.module.css'
import StackFolder from './StackFolder'
import {
  CSSIcon,
  HTMLIcon,
  SanityIcon,
  djangoIcon,
  nextIcon,
  reactIcon,
} from '../../../public/assests/svgs'

export default function StackFile({ tags, searchParams }) {
  return (
    <StackFolder stack={searchParams?.stack}>
      <div className={styles.file}>
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
            <div className={styles.checkBox}></div>
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
    case 'react':
      return reactIcon
    case 'django':
      return djangoIcon
    case 'nextjs':
      return nextIcon
    case 'sanity':
      return SanityIcon
    case 'html':
      return HTMLIcon
    case 'css':
      return CSSIcon
  }
}
