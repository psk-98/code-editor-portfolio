import Link from "next/link"
import { closeIcon } from "../../../public/assests/svgs"
import CodeSnippet from "../codeSnippet/CodeSnippet"
import styles from "./TextArea.module.css"

export default function TextArea({ data, searchParams, code, codeDetails }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>
        {data[0]?.content && `// ${data[0]?.folder}`}
        <span> {data[0]?.content && `/ ${data[0]?.file}`}</span>
      </h2>
      <div className={styles.textAreaWrapper}>
        {searchParams?.file && (
          <div className={styles.filesTab}>
            <h2 className={styles.headerDesktop}>
              {data[0]?.file} <Link href="/about-me">{closeIcon}</Link>
            </h2>
          </div>
        )}
        <div className={styles.text}>
          {data[0]?.content.map((line) =>
            line?.listItem ? (
              <li key={line?._key}>* {line.children[0]?.text}</li>
            ) : line?.markDefs[0]?._type == "link" ? (
              <a
                href={line?.markDefs[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {line.children[0]?.text}
              </a>
            ) : (
              <p
                key={line._key}
                className={line.children[0].text == "" && styles.space}
              >
                {line.children[0].text}
              </p>
            )
          )}
        </div>
      </div>
      <div className={styles.codeSnippetWrapper}>
        {searchParams?.file && (
          <div className={styles.filesTab}>
            <div className={styles.headerDesktop}>
              Code Snippet<div>{closeIcon}</div>
            </div>
          </div>
        )}
        <h3 className={styles.codeSnippetHeader}>
          {`// Code snippet here showcase:`}
        </h3>
        <CodeSnippet code={code} codeDetails={codeDetails} />
      </div>
    </div>
  )
}
