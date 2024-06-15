"use client"

import useInnerHeight from "@/hooks/useInnerHeight"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import styles from "./HeroCarousel.module.css"

export default function VerticalCarousel() {
  const innerHeight = useInnerHeight()
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3 // Customize this based on your number of pages

  const handleSwipe = (direction) => {
    if (direction === "Up") {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
      // to stay in the same page
      if (currentPage + 1 == totalPages) {
        setCurrentPage(totalPages - 1)
      }
    } else if (direction === "Down") {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
      // to stay in the same page
      if (currentPage == 0) {
        setCurrentPage(0)
      }
    }
  }

  //   const [index, setIndex] = useState(0)
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
      style={{
        // height: '100vh',
        height: "calc(100vh - 10rem - 4rem - 6.5rem)",
        overflow: "hidden",
        position: "relative",
        background: "#f44336",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "calc(25vh - 10rem - 4rem - 6.5rem)",
          left: "0",
          right: "3rem",
          width: "100%",
          height: "calc(100vh - 10rem - 4rem - 6.5rem)",
          transform: `translateY(calc(-${currentPage * 25}vh))`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {[...Array(totalPages)].map((_, index) => (
          <motion.div
            key={index}
            drag="y"
            dragConstraints={{
              top: "calc(25vh - 10rem - 4rem - 6.5rem)",
              bottom: "calc(25vh - 10rem - 4rem - 6.5rem)",
            }}
            dragElastic={0.2}
            style={{
              height: "calc(50vh - 10rem - 4rem - 6.5rem)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              background: index % 2 == 0 ? "#cfd8dc" : "#78909c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            className={currentPage == index && styles.active}
          >
            {/* Render the content for each page here */}
            <h1>Page {index + 1}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
