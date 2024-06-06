import Link from "next/link"
import {
  externalLinkIcon,
  fileArrow,
  fileIcon,
} from "../../../public/assests/svgs"
import styles from "./FileComponent.module.css"

export default function FileComponent({ fileName, folderName, socialLink }) {
  return (
    <div className={styles.file}>
      {folderName == "contacts" ? (
        <div>
          <span className={styles.arrow}>{fileArrow}</span>
          <span className={styles.icon}>{fileIcon}</span>
          <span className={styles.fileName}>{fileName}</span>
        </div>
      ) : folderName == "also-find-me-on" ? (
        <a target="_blank" rel="noopener noreferrer" href={socialLink}>
          <span className={styles.icon}>{externalLinkIcon}</span>
          <span className={styles.fileName}>{fileName}</span>
        </a>
      ) : (
        <Link
          href={{
            pathname: "about-me",
            query: { file: fileName, folder: folderName },
          }}
        >
          <span className={styles.arrow}>{fileArrow}</span>
          <span className={styles.icon}>{fileIcon}</span>
          <span className={styles.fileName}>{fileName}</span>
        </Link>
      )}
    </div>
  )
}
