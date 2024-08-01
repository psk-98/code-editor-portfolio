import HeroCarousel from "../heroCarousel/HeroCarousel"
import styles from "./Hero.module.css"
import HeroBackground from "./HeroBackground"

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <HeroBackground />
      <div className={styles.leftSide}>
        <p className={styles.heroGreeting}>Hi. I am</p>
        <h1 className={styles.heroName}>Paul Khoza</h1>
        <p className={styles.heroSubtitle}>{"> Developer"}</p>
        <p className={styles.heroGray}>{`// find my profile on Github:`}</p>
        <p className={styles.heroGit}>
          <span className={styles.keyword}>const</span>
          <span className={styles.variableName}>{" githubLink "}</span>={" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/psk-98"
          >
            &quot;https://github.com/psk-98&quot;
          </a>
        </p>
      </div>
      <div className={styles.rightSide}>
        <HeroCarousel />
      </div>
    </section>
  )
}
