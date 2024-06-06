import styles from "./Hero.module.css"

export default function HeroBackground() {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.blueBlur}>
        <svg
          width={375}
          height={609}
          viewBox="0 0 375 609"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_56_2417)">
            <path
              d="M294.68 446.455L174.223 417.518L123.899 381.106L138.857 285.09L237.639 274.072L236.733 205.517L350.631 174.966L424.001 192.591L377.58 342.436L305.912 361.126L294.68 446.455Z"
              fill="#4D5BCE"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_56_2417"
              x="-50.1006"
              y="0.965652"
              width="648.102"
              height="619.489"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={87}
                result="effect1_foregroundBlur_56_2417"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.greenBlur}>
        <svg
          width={375}
          height={593}
          viewBox="0 0 375 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_56_2418)">
            <path
              d="M266.255 221.259L275.554 344.793L256.282 403.843L160.292 418.975L119.585 328.299L54.5936 350.132L-9.3357 251.04L-14.9998 175.796L141.863 174.153L181.58 236.668L266.255 221.259Z"
              fill="#43D9AD"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_56_2418"
              x={-189}
              y="0.152924"
              width="638.554"
              height="592.822"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={87}
                result="effect1_foregroundBlur_56_2418"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}
