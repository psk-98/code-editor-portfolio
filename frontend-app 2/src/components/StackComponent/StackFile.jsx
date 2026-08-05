'use client'

import { fileVariants, filesWrapperVariants } from '@/animations/folders'
import { useRouter } from 'next/navigation'
import {
  CSSIcon,
  HTMLIcon,
  SanityIcon,
  checkedIcon,
  djangoIcon,
  nextIcon,
  reactIcon,
} from '../../../public/assests/svgs'
import { MotionDiv } from '../motionComponents/MotionComponents'
import StackFolder from './StackFolder'

export default function StackFile({ tags, searchParams }) {
  const router = useRouter()

  return (
    <StackFolder stack={searchParams?.stack}>
      <MotionDiv
        className="p-[2rem]"
        variants={filesWrapperVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {tags?.map(tag => (
          <MotionDiv
            className="group flex cursor-pointer text-label text-muted capitalize"
            key={tag._id}
            variants={fileVariants}
            onClick={() => router.push(`/projects?stack=${tag?.name}`)}
          >
            <div className="h-[2.375rem] w-[2.375rem] border border-line transition-all">
              {searchParams?.stack?.includes(tag?.name) && checkedIcon}
            </div>
            <span className="px-[1rem] pl-[3rem] [&_svg]:h-[3rem] [&_svg]:w-auto [&_svg]:fill-muted">
              {returnStackIcon(tag?.name)}
            </span>
            <span
              className={`font-light transition-colors group-hover:text-foreground ${searchParams?.stack?.includes(tag?.name) ? 'text-foreground' : 'text-muted'}`}
            >
              {tag.name}
            </span>
          </MotionDiv>
        ))}
      </MotionDiv>
    </StackFolder>
  )
}

const returnStackIcon = stackName => {
  if (!stackName) return null

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
    default:
      return null
  }
}
