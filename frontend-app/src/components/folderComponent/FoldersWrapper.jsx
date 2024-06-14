"use client"

import { sortByFolder } from "@/utils/sortByFolder"
import { useState } from "react"
import FolderComponent from "./FolderComponent"
import styles from "./FolderComponent.module.css"

export default function FoldersWrapper({ data }) {
  const [openFolder, setOpenFolder] = useState("")

  return (
    <div className={styles.wrapper}>
      <div className={styles.foldersWrapper}>
        {returnFolderName(data).map((folderName, i) => (
          <FolderComponent
            folderName={folderName}
            data={sortByFolder(data, folderName)}
            openFolder={openFolder}
            setOpenFolder={setOpenFolder}
            key={i}
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
