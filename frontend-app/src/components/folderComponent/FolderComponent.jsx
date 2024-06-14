import { folderArrow } from "../../../public/assests/svgs"
import FileComponent from "../fileComponent/FileComponent"
import styles from "./FolderComponent.module.css"

export default function FolderComponent({
  folderName,
  data,
  openFolder,
  setOpenFolder,
}) {
  return (
    <>
      <button
        className={styles.folder}
        key={data[0]?._id}
        onClick={() =>
          setOpenFolder(folderName == openFolder ? "" : folderName)
        }
      >
        <span
          className={
            folderName === openFolder
              ? `${styles.icon} ${styles.openIcon}`
              : styles.icon
          }
        >
          {folderArrow}
        </span>
        <span className={styles.name}>{folderName}</span>
      </button>
      {folderName === openFolder && (
        <FileComponent data={data} folderName={folderName} />
      )}
    </>
  )
}
