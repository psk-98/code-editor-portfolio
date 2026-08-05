import { closeIcon } from '@/components/icons'
import type { AboutMeDocument, GitHubGist, SearchParams } from '@/types/content'
import Link from 'next/link'
import CodeSnippet from '../codeSnippet/CodeSnippet'

const filesTabClass = 'hidden w-full border-b border-line lg:block'

const desktopHeaderClass =
  'flex w-fit items-center border-r border-line p-[2rem] font-light text-muted [&_a]:w-fit [&_a]:cursor-pointer [&_a]:bg-transparent [&_a]:pl-[5rem] [&_a]:text-muted [&_a_path]:transition-colors hover:[&_a_path]:fill-foreground'

type TextAreaProps = {
  code?: GitHubGist
  codeDetails: string
  data: AboutMeDocument[]
  searchParams: SearchParams
}

export default function TextArea({
  data,
  searchParams,
  code,
  codeDetails,
}: TextAreaProps) {
  return (
    <div className="mx-[2rem] mt-[4rem] lg:m-0 lg:flex lg:w-[83.81vw]">
      <h2 className="mb-[2rem] text-label leading-[1.4] lg:hidden [&_span]:text-muted">
        {data[0]?.content && `// ${data[0]?.folder}`}
        <span> {data[0]?.content && `/ ${data[0]?.file}`}</span>
      </h2>
      <div className="lg:w-1/2">
        {searchParams?.file && (
          <div className={filesTabClass}>
            <h2 className={desktopHeaderClass}>
              {data[0]?.file} <Link href="/about-me">{closeIcon}</Link>
            </h2>
          </div>
        )}
        <div className="mb-[6rem] text-label leading-[1.5] text-muted lg:mb-0 lg:max-h-[calc(100vh-10rem-50.5px-56px-14.5rem)] lg:w-[calc(100%-8rem)] lg:overflow-x-scroll lg:p-[4rem] lg:text-body [&_a]:text-muted [&_a]:underline">
          {data[0]?.content?.map(line =>
            line?.listItem ? (
              <li key={line?._key}>* {line.children[0]?.text}</li>
            ) : line?.markDefs?.[0]?._type === 'link' ? (
              <a
                key={line?._key}
                href={line?.markDefs?.[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {line.children[0]?.text}
              </a>
            ) : (
              <p
                key={line._key}
                className={
                  line.children[0]?.text === ''
                    ? 'mt-[calc(var(--labels-text-size)*1.5)]'
                    : ''
                }
              >
                {line.children[0]?.text}
              </p>
            ),
          )}
        </div>
      </div>
      <div className="lg:w-1/2 lg:border-l lg:border-line">
        {searchParams?.file && (
          <div className={filesTabClass}>
            <div
              className={`${desktopHeaderClass} [&_div]:cursor-default [&_div]:opacity-0`}
            >
              Code Snippet <div>{closeIcon}</div>
            </div>
          </div>
        )}
        <h3 className="my-[4rem] text-label lg:mt-[4rem] lg:mr-0 lg:mb-0 lg:ml-[4rem] lg:text-body lg:text-muted">
          {`// Code snippet here showcase:`}
        </h3>
        <CodeSnippet
          code={code}
          codeDetails={codeDetails}
        />
      </div>
    </div>
  )
}
