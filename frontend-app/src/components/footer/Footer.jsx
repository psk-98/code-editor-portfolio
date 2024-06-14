import { emailIcon, githubIcon } from "../../../public/assests/svgs"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.leftSide}>
        <div className={styles.findMe}>find me on:</div>
        <div className={styles.socialIcon}>
          <a href="#">{emailIcon}</a>
        </div>
        <div className={styles.socialIcon}>
          <a href="#">{githubIcon}</a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.socialIcon}>
          <a href="#">
            <span>@psk-98</span> {githubIcon}
          </a>
        </div>
      </div>
    </div>
  )
}
