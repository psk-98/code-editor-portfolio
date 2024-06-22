import { fileVariants, filesWrapperVariants } from "@/animations/folders"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import {
  copyIcon,
  externalLinkIcon,
  fileArrow,
  fileIcon,
} from "../../../public/assests/svgs"
import styles from "./FileComponent.module.css"

export default function FileComponent({ data, folderName, searchParams }) {
  const [isCopied, setCopied] = useState(false)

  const handleClipboard = (file) => {
    navigator.clipboard.writeText(file)
    setCopied(true)
  }

  return (
    <motion.div
      className={styles.filesWrapper}
      variants={filesWrapperVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {data?.map((file, i) => (
        <motion.div
          className={
            searchParams?.file == file.file
              ? `${styles.file} ${styles.active}`
              : styles.file
          }
          key={i}
          variants={fileVariants}
        >
          {file.file.includes("@") ? (
            <button
              onClick={() => handleClipboard(file.file)}
              target="_blank"
              rel="noopener noreferrer"
              href={file?.socialLink}
              className={isCopied && styles.copied}
            >
              {console.log}
              <span className={styles.icon}>{copyIcon}</span>
              <span className={styles.fileName}>{file.file}</span>
            </button>
          ) : folderName == "contacts" ? (
            <div>
              <span className={styles.arrow}>{fileArrow}</span>
              <span className={styles.icon}>{fileIcon}</span>
              <span className={styles.fileName}>{file.file}</span>
              {console.log(file)}
            </div>
          ) : folderName == "also-find-me-on" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={file?.socialLink}
            >
              <span className={styles.icon + " " + styles.noChangeColor}>
                {externalLinkIcon}
              </span>
              <span className={styles.fileName}>{file.file}</span>
            </a>
          ) : (
            <Link
              href={{
                pathname: "about-me",
                query: { file: file.file, folder: folderName },
              }}
            >
              <span className={styles.arrow}>{fileArrow}</span>
              <span className={styles.icon}>{fileIcon}</span>
              <span className={styles.fileName}>{file.file}</span>
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
