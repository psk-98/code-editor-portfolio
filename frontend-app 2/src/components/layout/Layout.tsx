'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import Footer from '../footer/Footer'

import Nav from '../nav/Nav'

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div>
      <motion.div
        className="m-[2rem] min-h-[calc(100vh-4rem)] w-[calc(100vw-4rem)] max-w-[100vw] rounded-[1rem] border border-line bg-panel lg:m-[5rem] lg:max-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-10rem)] lg:w-[calc(100vw-10rem)] lg:overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        <Nav />
        {pathname !== '/' && (
          <h1 className="px-[2rem] py-[3rem] text-code lg:hidden">
            _{pathname.slice(1)}
          </h1>
        )}
        {children}
        <Footer />
      </motion.div>
    </div>
  )
}
