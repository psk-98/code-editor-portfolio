"use client"

import { Fira_Code } from "next/font/google"
import { usePathname } from "next/navigation"
import Prism from "prismjs"
import { useEffect } from "react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"

const fira_code = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--my-font",
})

export default function Layout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className={fira_code.className}>
      <div className="container">
        <Nav />
        {pathname !== "/" && (
          <h1 className="currentPage">_{pathname.slice(1)}</h1>
        )}
        {children}
        <Footer />
      </div>
    </div>
  )
}
