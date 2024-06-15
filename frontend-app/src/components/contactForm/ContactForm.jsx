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
  // const [codeSnippet, setCodeSnippet] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  // useEffect(() => {
  //   const snippet = () => (
  //     <>
  //       <div>
  //         <span className="token keyword">const</span> message{" "}
  //         <span className="token operator">=</span>{" "}
  //         <span className="token punctuation">{`{`}</span>
  //       </div>
  //       <div style={{ padding: "0 0 0 1rem" }}>
  //         <span className="token literal-property property">name</span>
  //         <span className="token operator">:</span>{" "}
  //         <span className="token string">&quot;{inputs.name}&quot;</span>,{" "}
  //       </div>
  //       <div style={{ padding: "0 0 0 1rem" }}>
  //         <span className="token literal-property property">email</span>
  //         <span className="token operator">:</span>{" "}
  //         <span className="token string">&quot;{inputs.email}&quot; </span>,{" "}
  //       </div>
  //       <div style={{ padding: "0 0 0 1rem" }}>
  //         <span className="token literal-property property">message</span>
  //         <span className="token operator">:</span>{" "}
  //         <span className="token string" style={{ whiteSpace: "break-spaces" }}>
  //           &quot;{inputs.message}&quot;
  //         </span>
  //       </div>
  //       <span className="token punctuation">{`}`}</span>
  //     </>
  //   )
  //   setCodeSnippet(snippet)
  // }, [inputs])

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
      {/* <div className={styles.formCodeWrapper}>
        <pre className="language-js">
          <code>{codeSnippet}</code>
        </pre>
      </div> */}
    </>
  )
}
