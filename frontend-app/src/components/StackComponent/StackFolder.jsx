"use client"

import { useState } from "react"
import { folderArrow } from "../../../public/assests/svgs"
import styles from "./Stack.module.css"

export default function StackFolder({ children, stack }) {
  const [isOpen, setOpen] = useState(true)
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
      <h2>
        <span>// projects</span> / {stack ? writeStackLine(stack) : "all"}
      </h2>
    </div>
  )
}

const writeStackLine = (stack) => {
  let stackLine = ""
  for (let i = 0; i < stack?.length; i++) {
    if (i !== 0) stackLine = stackLine + `, ${stack[i]}`
    else stackLine = stackLine + stack[i]
  }
  return stackLine
}
