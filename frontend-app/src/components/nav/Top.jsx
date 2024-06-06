import Link from "next/link"
import styles from "./Nav.module.css"

export default function TopNav({ toggle, setToggle }) {
  return (
    <div className={styles.nav}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Link href="/">paul-khoza</Link>
        </div>
        <div className={styles.burger} onClick={() => setToggle(!toggle)}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.navLink}>
            <Link href="/">_hello</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="/about-me">_about-me</Link>
          </div>
          <div className={styles.navLink}>
            <Link href="/projects">_projects</Link>
          </div>
        </div>
      </div>
      <div className={styles.contactMe}>
        <Link href="/contact-me">_contact-me</Link>
      </div>
    </div>
  )
}
