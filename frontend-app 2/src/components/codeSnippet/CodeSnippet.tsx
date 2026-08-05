import { detailsIcon, starsIcon } from '@/components/icons'
import type { GitHubGist } from '@/types/content'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import CodeBlock from './CodeBlock'

dayjs.extend(relativeTime)

type CodeSnippetProps = {
  code?: GitHubGist
  codeDetails?: string
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  if (!code?.owner || !code?.files) {
    return (
      <p className="mt-[4rem] text-body text-muted">
        Code snippet unavailable.
      </p>
    )
  }

  return (
    <div className="lg:mx-[4rem] lg:mt-[4rem] lg:max-h-[calc(100vh-10rem-50.5px-56px-16rem)] lg:overflow-x-scroll">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="[&_img]:w-full [&_img]:rounded-full">
            <Image
              src={code.owner.avatar_url}
              alt="user avatar"
              height={36}
              width={36}
            />
          </div>
          <div className="ml-[1rem] flex flex-col">
            <span className="text-code font-semibold text-accent-purple">
              @{code.owner.login}
            </span>
            <span className="text-[1.5rem] text-muted">
              {`Created ${dayjs(code.created_at).fromNow()}`}
            </span>
          </div>
        </div>
        <div className="hidden">
          <div className="mr-[2rem] flex cursor-pointer items-center text-code text-muted hover:text-foreground [&_svg]:mr-[1rem]">
            {detailsIcon}details
          </div>
          <div className="hidden cursor-pointer items-center text-code text-muted hover:text-foreground [&_svg]:mr-[1rem]">
            {starsIcon}stars
          </div>
        </div>
      </div>
      <CodeBlock />
    </div>
  )
}
