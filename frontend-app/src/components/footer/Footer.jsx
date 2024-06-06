import { emailIcon, githubIcon } from "../../../public/assests/svgs"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.sideBarFooter}>
      <div className={styles.findMe}>find me on:</div>
      <div className={styles.socialIcons}>
        <a href="#">{emailIcon}</a>
      </div>
      <div className={styles.socialIcons}>
        <a href="#">{githubIcon}</a>
      </div>
    </div>
  )
}
