import { line1Variants, line2Variants, line3Variants } from "@/animations/nav"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./Nav.module.css"

export default function TopNav({ toggle, setToggle, pathname }) {
  return (
    <div className={styles.nav}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Link href="/">paul-khoza</Link>
        </div>
        <div className={styles.burger} onClick={() => setToggle(!toggle)}>
          <motion.div
            className={styles.line1}
            variants={line1Variants}
            animate={toggle ? "open" : "closed"}
          ></motion.div>
          <motion.div
            className={styles.line2}
            variants={line2Variants}
            animate={toggle ? "open" : "closed"}
          ></motion.div>
          <motion.div
            className={styles.line3}
            variants={line3Variants}
            animate={toggle ? "open" : "closed"}
          ></motion.div>
        </div>
        <div className={styles.navLinks}>
          <div
            className={`${styles.navLink} ${pathname == "/" && styles.active}`}
          >
            <Link href="/">_hello</Link>
          </div>
          <div
            className={`${styles.navLink} ${pathname == "/about-me" && styles.active}`}
          >
            <Link href="/about-me">_about-me</Link>
          </div>
          <div
            className={`${styles.navLink} ${pathname == "/projects" && styles.active}`}
          >
            <Link href="/projects">_projects</Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.contactMe} ${pathname == "/contact-me" && styles.active}`}
      >
        <Link href="/contact-me">_contact-me</Link>
      </div>
    </div>
  )
}
