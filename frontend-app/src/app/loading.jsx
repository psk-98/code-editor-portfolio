import styles from "./loader.module.css"

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  )
}
