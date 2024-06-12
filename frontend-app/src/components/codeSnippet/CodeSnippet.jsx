import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Image from "next/image"
import { detailsIcon, starsIcon } from "../../../public/assests/svgs"
import CodeBlock from "./CodeBlock"
import styles from "./CodeSnippet.module.css"

dayjs.extend(relativeTime)

export default function CodeSnippet({ code }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoTab}>
        <div className={styles.leftSide}>
          <div className={styles.profileImage}>
            <Image
              src={code.owner.avatar_url}
              alt="user avatar"
              height={36}
              width={36}
            />
          </div>
          <div className={styles.doubleLine}>
            <span className={styles.username}>{code.owner.login}</span>
            <span className={styles.created}>
              {`Created ${dayjs(code.created_at).fromNow()}`}
            </span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>{detailsIcon}details</div>
          <div className={styles.stars}>{starsIcon}stars</div>
        </div>
      </div>
      <CodeBlock link={returnRawUrl(code.files)[0]} />
    </div>
  )
}

const returnRawUrl = (file) => {
  //   console.log(file)
  const keys = Object.keys(file)
  let rawUrl = ""
  //   console.log(keys)
  keys.forEach((key) => {
    rawUrl = file[key].raw_url
    // console.log(`${key}: ${rawUrl}`)
  })

  return [rawUrl]
}
