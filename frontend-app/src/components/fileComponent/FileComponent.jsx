import Link from "next/link"
import {
  externalLinkIcon,
  fileArrow,
  fileIcon,
} from "../../../public/assests/svgs"
import styles from "./FileComponent.module.css"

export default function FileComponent({ data, folderName }) {
  return (
    <div className={styles.filesWrapper}>
      {data?.map((file, i) => (
        <div className={styles.file} key={i}>
          {console.log(file)}
          {folderName == "contacts" ? (
            <div>
              <span className={styles.arrow}>{fileArrow}</span>
              <span className={styles.icon}>{fileIcon}</span>
              <span className={styles.fileName}>{file.file}</span>
            </div>
          ) : folderName == "also-find-me-on" ? (
            <a target="_blank" rel="noopener noreferrer" href={socialLink}>
              <span className={styles.icon}>{externalLinkIcon}</span>
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
        </div>
      ))}
    </div>
  )
}
