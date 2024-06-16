"use client"

import { MDXProvider } from "@mdx-js/react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import styles from "./HeroCarousel.module.css"
import Slide1 from "./returnFolderName.mdx"
import Slide2 from "./returnFolderName1.mdx"
import Slide3 from "./returnFolderName2.mdx"

export default function HeroCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3 // Customize this based on your number of pages

  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
      // to stay in the same page
      if (currentPage + 1 == totalPages) {
        setCurrentPage(0)
      }
    }, 4500)

    return () => {
      resetTimeout()
    }
  }, [currentPage])

  return (
    <div
      className={styles.wrapper}
      style={{
        height: "calc(100vh - 10rem - 4rem - 6.5rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ul
        style={{
          position: "absolute",
          top: "calc(25vh - 10rem - 4rem - 6.5rem)",
          left: "0",
          width: "100%",
          height: "calc(100vh - 10rem - 4rem - 6.5rem)",
          transform: `translateY(calc(-${currentPage * 25}vh))`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <MDXProvider>
          {slides.map((slide, i) => (
            <motion.li
              style={liStyle}
              className={currentPage == i && styles.active}
              key={i}
            >
              {slide}
            </motion.li>
          ))}
        </MDXProvider>
      </ul>
    </div>
  )
}

const liStyle = {
  maxHeight: "calc(50vh - 10rem - 4rem - 6.5rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
}

const slides = [<Slide1 key={0} />, <Slide2 key={1} />, <Slide3 key={2} />]
