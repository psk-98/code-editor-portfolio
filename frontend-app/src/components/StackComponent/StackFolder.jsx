"use client"

import { useState } from "react"
import { folderArrow } from "../../../public/assests/svgs"
import styles from "./Stack.module.css"

export default function StackFolder({ children, stack }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={styles.folderWrapper}>
      <button className={styles.folder} onClick={() => setOpen(!isOpen)}>
        <span
          className={isOpen ? `${styles.icon} ${styles.openIcon}` : styles.icon}
        >
          {folderArrow}
        </span>
        <span className={styles.name}>projects</span>
      </button>
      {isOpen ? children : <></>}
      <h2>{stack && <span>{`// projects`}</span> / stack}</h2>
    </div>
  )
}
