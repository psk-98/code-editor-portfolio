import { emailIcon, githubIcon } from "../../../public/assests/svgs"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.leftSide}>
        <div className={styles.findMe}>find me on:</div>
        <div className={styles.socialIcon}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {emailIcon}
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href="https://github.com/psk-98"
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubIcon}
          </a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.socialIcon}>
          <a
            href="https://github.com/psk-98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>@psk-98</span> {githubIcon}
          </a>
        </div>
      </div>
    </div>
  )
}
