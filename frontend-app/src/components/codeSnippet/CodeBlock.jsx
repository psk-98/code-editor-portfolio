"use client"

import "@/app/prism-atom-dark.css"
import { useEffect, useState } from "react"

export default function CodeBlock({ link }) {
  const [code, setCode] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(link)
      const res = await data.text()
      console.log(res)
      setCode(res)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    // <Markdown>{`\`\`\`js ${code.replace('"', "")} \`\`\``}</Markdown>
    <code>
      <pre className="language-js">{code.replace(/"/g, "")}</pre>
    </code>
  )
}
