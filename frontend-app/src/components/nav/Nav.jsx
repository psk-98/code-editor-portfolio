"use client"

import useScrollLock from "@/hooks/useScrollLock"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Side from "./Side"
import Top from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const [lock, unlock] = useScrollLock()
  const pathname = usePathname()

  useEffect(() => {
    toggle ? lock() : unlock()
  }, [toggle, setToggle])

  return (
    <>
      <Top setToggle={setToggle} toggle={toggle} pathname={pathname} />
      <Side setToggle={setToggle} toggle={toggle} pathname={pathname} />
    </>
  )
}
