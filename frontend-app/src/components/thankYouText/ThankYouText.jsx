import Link from "next/link"
import FormCode from "../formCode/FormCode"
import styles from "./ThankYouText.module.css"

export default function ThankYouText() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thankYou}>
        <h2>Thank you! 🤘</h2>
        <p>Your message has been sent. I will get back to you ASAP</p>
        <button>
          <Link href="/contact-me">send-new-message</Link>
        </button>
      </div>
      <FormCode />
    </div>
  )
}
