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
      {navList.map((item, i) => (
        <motion.li
          className={`${styles.sideItem} ${(pathname == "/" && item == "hello") || (pathname == "/" + item && styles.active)}`}
          key={i}
          variants={navLinkVariants}
        >
          <Link
            href={item !== "hello" ? item : "/"}
            onClick={() => setToggle(false)}
          >
            {"_" + item}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

const navList = ["hello", "about-me", "projects", "contact-me"]
