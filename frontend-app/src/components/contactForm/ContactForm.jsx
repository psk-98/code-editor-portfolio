"use client"

import { useState } from "react"
import Markdown from "react-markdown"
import styles from "./ContactForm.module.css"

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    event.preventDefault()
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <>
      <div className={styles.contactFormWrapper}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>_name:</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
              value={inputs.name}
            />
          </div>
          <div className={styles.formGroup}>
            <label>_email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          <div className={styles.formGroup}>
            <label>_message:</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={handleChange}
              value={inputs.message}
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">submit-message</button>
          </div>
        </form>
      </div>
      <div className={styles.formCodeWrapper}>
        <Markdown>{`\`\`\`js


const message = {
  name: "${inputs.name}",
  email: "${inputs.email}",
  message: "${inputs.message}",
}
\`\`\` `}</Markdown>
      </div>
    </>
  )
}

const markdown = `\`\`\`


export default function useScrollLock() {
  const lock = () => {
    document.body.style.overflowY = "hidden"
  } // call this function to change the overflowY property to "hidden"

  const unlock = () => {
    document.body.style.overflowY = "scroll"
  } // call this function to change the overflowY property to "hidden"

  return [lock, unlock]
}
\`\`\` `
