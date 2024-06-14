import styles from "./Hero.module.css"

export default function HeroBackground() {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.greenBlur}></div>
      <div className={styles.purpleBlur}></div>
    </div>
  )
}
