"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Side from "./Side"
import Top from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)

  const pathname = usePathname()

  return (
    <>
      <Top setToggle={setToggle} toggle={toggle} pathname={pathname} />
      <Side setToggle={setToggle} toggle={toggle} />
    </>
  )
}
