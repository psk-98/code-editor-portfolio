'use client'

import { MDXProvider } from '@mdx-js/react'
import { motion } from 'framer-motion'
import Prism from 'prismjs'
import { type CSSProperties, useEffect, useRef, useState } from 'react'
import Slide1 from './returnFolderName.mdx'
import Slide2 from './returnFolderName1.mdx'
import Slide3 from './returnFolderName2.mdx'

export default function HeroCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3 // Customize this based on your number of pages

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current) Prism.highlightAllUnder(wrapperRef.current)
  }, [])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentPage(prevPage => (prevPage + 1) % totalPages)
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
      ref={wrapperRef}
      className="relative h-[calc(100vh-10rem-4rem-6.5rem)] overflow-hidden lg:h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)]"
    >
      <ul
        className="mr-[4rem]"
        style={{
          position: 'absolute',
          top: 'calc(25vh - 10rem - 4rem - 6.5rem)',
          left: '0',
          width: '100%',
          height: 'calc(100vh - 10rem - 4rem - 6.5rem)',
          transform: `translateY(calc(-${currentPage * 25}vh))`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <MDXProvider>
          {slides.map((slide, i) => (
            <motion.li
              style={liStyle}
              className={`mr-[3rem] overflow-hidden rounded-[1rem] border border-line bg-canvas px-[4rem] py-[1rem] opacity-40 [&_code]:text-code [&_code_span]:text-code [&_pre]:overflow-hidden [&_pre]:overflow-y-scroll [&_pre]:text-code ${i === 1 ? 'my-[3rem]' : ''} ${currentPage === i ? 'opacity-90' : ''}`}
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

const liStyle: CSSProperties = {
  maxHeight: 'calc(50vh - 10rem - 4rem - 6.5rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}

const slides = [<Slide1 key={0} />, <Slide2 key={1} />, <Slide3 key={2} />]
