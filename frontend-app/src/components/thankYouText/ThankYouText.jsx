import styles from "./ThankYouText.module.css"

export default function ThankYouText({ reset }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thankYou}>
        <h2>Thank you! 🤘</h2>
        <p>Your message has been sent. I will get back to you ASAP</p>
        <button onClick={() => reset()}>send-new-message</button>
      </div>
    </div>
  )
}
