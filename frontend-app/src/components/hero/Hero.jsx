import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftSide}>
        <p className={styles.heroGreeting}>Hi. I am</p>
        <h1 className={styles.heroName}>Paul Khoza</h1>
        <p className={styles.heroSubtitle}>{"> Developer"}</p>
        <p className={styles.heroGray}>// find my profile on Github:</p>
        <p className={styles.heroGit}>
          <span className={styles.keyword}>const</span>
          <span className={styles.variableName}>{" githubLink "}</span>={" "}
          <a href="https://github.com/psk-98">"https://github.com/psk-98"</a>
        </p>
      </div>
      <div className={styles.rightSide}>this is the right side</div>
    </section>
  )
}
