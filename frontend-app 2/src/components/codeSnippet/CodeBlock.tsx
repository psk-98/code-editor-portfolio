'use client'

import '@/app/prism-atom-dark.css'
import { MDXProvider } from '@mdx-js/react'
import Prism from 'prismjs'
import { useEffect, useRef } from 'react'
import ReturnFolderName from './returnFolderName.mdx'

export default function CodeBlock() {
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (codeRef.current) Prism.highlightAllUnder(codeRef.current)
  }, [])

  return (
    <div
      ref={codeRef}
      className="mt-[1rem] mb-[4rem] max-w-full rounded-[2rem] border border-line bg-canvas lg:mb-0 [&_code]:text-wrap [&_code]:text-code [&_pre]:m-[3rem_2rem] lg:[&_pre]:m-[2rem_1rem]"
    >
      <MDXProvider>
        <ReturnFolderName />
      </MDXProvider>
    </div>
  )
}
