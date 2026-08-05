import { fileVariants, filesWrapperVariants } from '@/animations/folders'
import {
  copyIcon,
  externalLinkIcon,
  fileArrow,
  fileIcon,
} from '@/components/icons'
import type { FolderDocument, SearchParams } from '@/types/content'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const fileClass =
  'group mb-[1rem] cursor-pointer break-all text-label text-muted lg:mb-[2rem] [&_span]:font-light [&_svg]:h-[2rem] [&_svg]:w-auto'

const fileIconClass = 'px-[1rem]'

const fileNameClass =
  'transition-colors duration-400 group-hover:text-foreground'

type FileComponentProps = {
  data: FolderDocument[]
  folderName: string
  searchParams?: SearchParams
}

export default function FileComponent({
  data,
  folderName,
  searchParams,
}: FileComponentProps) {
  const [isCopied, setCopied] = useState(false)

  const handleClipboard = (file: string) => {
    void navigator.clipboard.writeText(file)
    setCopied(true)
  }

  return (
    <motion.div
      className="mx-[2rem] my-[1rem] lg:m-[2rem]"
      variants={filesWrapperVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {data?.map((file, i) => (
        <motion.div
          className={`${fileClass} ${searchParams?.file === file.file ? '[&_.file-name]:text-foreground' : ''}`}
          key={i}
          variants={fileVariants}
        >
          {file.file.includes('@') ? (
            <button
              onClick={() => handleClipboard(file.file)}
              type="button"
              className={isCopied ? '[&_*]:fill-line [&_*]:text-line' : ''}
            >
              <span className={fileIconClass}>{copyIcon}</span>
              <span className={`file-name ${fileNameClass}`}>{file.file}</span>
            </button>
          ) : folderName === 'contacts' ? (
            <div>
              <span>{fileArrow}</span>
              <span className={fileIconClass}>{fileIcon}</span>
              <span className={`file-name ${fileNameClass}`}>{file.file}</span>
            </div>
          ) : folderName === 'also-find-me-on' ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={file?.socialLink}
            >
              <span className={`${fileIconClass} [&_path]:fill-muted`}>
                {externalLinkIcon}
              </span>
              <span className={`file-name ${fileNameClass}`}>{file.file}</span>
            </a>
          ) : (
            <Link
              href={{
                pathname: '/about-me',
                query: { file: file.file, folder: folderName },
              }}
            >
              <span>{fileArrow}</span>
              <span
                className={`${fileIconClass} ${i === 1 ? '[&_path]:fill-accent-green' : ''}`}
              >
                {fileIcon}
              </span>
              <span className={`file-name ${fileNameClass}`}>{file.file}</span>
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
