import Link from "next/link"
import styles from "./Nav.module.css"

export default function Side({ setToggle, toggle }) {
  return (
    <div
      className={toggle ? `${styles.sideBar} ${styles.open}` : styles.sideBar}
    >
      <ul className={styles.sideList}>
        {navList.map((item, i) => (
          <li key={i} className={styles.sideItem}>
            <Link
              href={{
                pathname: item,
                query: { stack: ["react", "nextjs"] },
              }}
              onClick={() => setToggle(false)}
            >
              {"_" + item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const navList = ["hello", "about-me", "projects", "contact-me"]
