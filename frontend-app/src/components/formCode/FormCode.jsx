"use client"

import { useEffect, useState } from "react"
import styles from "./FormCode.module.css"

export default function FormCode({ inputs }) {
  const [codeSnippet, setCodeSnippet] = useState("")

  useEffect(() => {
    const snippet = () => (
      <>
        <div>
          <span className="token keyword">const</span> message{" "}
          <span className="token operator">=</span>{" "}
          <span className="token punctuation">{`{`}</span>
        </div>
        <div style={{ padding: "0 0 0 1rem" }}>
          <span className="token literal-property property">name</span>
          <span className="token operator">:</span>{" "}
          <span className="token string">&quot;{inputs?.name}&quot;</span>,{" "}
        </div>
        <div style={{ padding: "0 0 0 1rem" }}>
          <span className="token literal-property property">email</span>
          <span className="token operator">:</span>{" "}
          <span className="token string">&quot;{inputs?.email}&quot; </span>,{" "}
        </div>
        <div style={{ padding: "0 0 0 1rem" }}>
          <span className="token literal-property property">message</span>
          <span className="token operator">:</span>{" "}
          <span className="token string" style={{ whiteSpace: "break-spaces" }}>
            &quot;{inputs?.message}&quot;
          </span>
        </div>
        <span className="token punctuation">{`}`}</span>
      </>
    )
    setCodeSnippet(snippet)
  }, [inputs])

  return (
    <div className={styles.formCodeWrapper}>
      <pre className="language-js">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  )
}
