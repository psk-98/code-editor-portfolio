"use client"

import { useState } from "react"
import FormCode from "../formCode/FormCode"
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
      <FormCode inputs={inputs} />
    </>
  )
}
