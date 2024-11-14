"use client"

import { useForm } from "@formspree/react"
import { useState } from "react"
import FormCode from "../formCode/FormCode"
import ThankYouText from "../thankYouText/ThankYouText"
import styles from "./ContactForm.module.css"

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID
  )

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  // const [isSuccess, setSuccess] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const handleReset = () => {
    setInputs({ name: "", email: "", message: "" })
    reset()
  }

  return (
    <>
      <div className={styles.contactFormWrapper}>
        {state.succeeded ? (
          <ThankYouText handleReset={handleReset} />
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
              <button type="submit">
                {state.submitting ? "submitting.." : "submit-message"}
              </button>
            </div>
          </form>
        )}
      </div>
      <FormCode inputs={inputs} />
    </>
  )
}
