"use client"

import { sortByFolder } from "@/utils/sortByFolder"
import { useState } from "react"
import FolderComponent from "./FolderComponent"
import styles from "./FolderComponent.module.css"

export default function FoldersWrapper({ data }) {
  const [openFolder, setOpenFolder] = useState(folderNames[0])

  return (
    <div className={styles.wrapper}>
      <div className={styles.foldersWrapper}>
        {console.log(returnFolderName(data))}
        {returnFolderName(data).map((folderName) => (
          <FolderComponent
            folderName={folderName}
            data={sortByFolder(data, folderName)}
            openFolder={openFolder}
            setOpenFolder={setOpenFolder}
          />
        ))}
      </div>
    </div>
  )
}

const folderNames = ["personal-info", "professional-info", "contacts"]

const returnFolderName = (data) => {
  let folders = []
  data.forEach((item) => {
    if (!folders.includes(item.folder)) {
      folders.push(item.folder)
    }
  })

  return folders
}
