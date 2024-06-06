'use client'

import '@/app/prism-atom-dark.css'
import ReturnFolderName from './returnFolderName.mdx'
import { MDXProvider } from '@mdx-js/react'
import styles from './CodeSnippet.module.css'

export default function CodeBlock({ link }) {
  return (
    <div className={styles.codeWrapper}>
      <MDXProvider>
        <ReturnFolderName />
      </MDXProvider>
    </div>
  )
}
