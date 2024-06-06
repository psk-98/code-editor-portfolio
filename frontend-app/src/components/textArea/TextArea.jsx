import { closeIcon } from "../../../public/assests/svgs"
import CodeSnippet from "../codeSnippet/CodeSnippet"
import styles from "./TextArea.module.css"

export default function TextArea({ data, searchParams, code }) {
  console.log(
    "................................................................"
  )
  console.log(searchParams)
  console.log(
    "................................................................"
  )

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>
        {data[0]?.content && `// ${data[0]?.folder}`}{" "}
        <span> {data[0]?.content && `/ ${data[0]?.file}`}</span>
      </h2>
      <div className={styles.textAreaWrapper}>
        <div className={styles.filesTab}>
          {searchParams.file && (
            <h2 className={styles.headerDesktop}>
              {data[0]?.file} <button>{closeIcon}</button>
            </h2>
          )}
        </div>
        <p className={styles.text}>
          {data[0]?.content.map((line) => {
            console.log(line.children)
            return (
              <>
                <p key={line._key}>{line.children[0].text}</p>
              </>
            )
          })}
        </p>
      </div>
      <div className={styles.codeSnippetWrapper}>
        <div className={styles.filesTab}>
          <div className={styles.headerDesktop}>
            Code Snippet<button>{closeIcon}</button>
          </div>
        </div>
        <h3 className={styles.codeSnippetHeader}>
          // Code snippet here showcase:
        </h3>
        <CodeSnippet code={code} />
      </div>
    </div>
  )
}
