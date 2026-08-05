'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { folderArrow } from '../../../public/assests/svgs'

export default function StackFolder({ children, stack }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="w-full lg:h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)] lg:w-[calc(16.19vw-2rem)] lg:border-r lg:border-line">
      <button
        className="w-[calc(100vw-4rem)] cursor-pointer bg-line py-[1rem] pl-[2rem] text-left font-mono lg:m-0 lg:w-full lg:border-b lg:border-line lg:bg-transparent lg:p-[2rem]"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <span
          className={`[&_svg]:mr-[1rem] [&_svg]:h-[1rem] [&_svg]:w-auto [&_svg]:fill-foreground [&_svg]:transition-transform [&_svg]:duration-400 ${isOpen ? '[&_svg]:rotate-90' : ''}`}
        >
          {folderArrow}
        </span>
        <span className="text-label text-foreground">filter</span>
      </button>
      <AnimatePresence>{isOpen && children}</AnimatePresence>
      <h2 className="mx-[2rem] mt-[3rem] text-label text-muted lowercase lg:hidden [&_span]:text-foreground">
        {stack && (
          <>
            <span>{`// projects`}</span> / {stack}
          </>
        )}
      </h2>
    </div>
  )
}
