import { navLinkVariants, sidebarVariants } from "@/animations/nav"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./Nav.module.css"

export default function Side({ setToggle, toggle, pathname }) {
  return (
    <motion.ul
      className={styles.sideBar}
      initial={false}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.li
        className={`${styles.sideItem} ${pathname == "/" && styles.active}`}
        variants={navLinkVariants}
      >
        <Link href="/" onClick={() => setToggle(false)}>
          _hello
        </Link>
      </motion.li>
      <motion.li
        className={`${styles.sideItem} ${pathname == "/about-me" && styles.active}`}
        variants={navLinkVariants}
      >
        <Link href="/about-me" onClick={() => setToggle(false)}>
          _about-me
        </Link>
      </motion.li>
      <motion.li
        className={`${styles.sideItem} ${pathname == "/projects" && styles.active}`}
        variants={navLinkVariants}
      >
        <Link href="/projects" onClick={() => setToggle(false)}>
          _projects
        </Link>
      </motion.li>
      <motion.li
        className={`${styles.sideItem} ${pathname == "/contact-me" && styles.active}`}
        variants={navLinkVariants}
      >
        <Link href="/contact-me" onClick={() => setToggle(false)}>
          _contact-me
        </Link>
      </motion.li>
    </motion.ul>
  )
}

const navList = ["hello", "about-me", "projects", "contact-me"]
