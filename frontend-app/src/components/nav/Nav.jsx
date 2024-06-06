'use client'

import { useState } from 'react'
import Side from './Side'
import Top from './Top'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [toggle, setToggle] = useState(false)

  const pathname = usePathname()

  return (
    <>
      {console.log(toggle)}
      <Top setToggle={setToggle} toggle={toggle} pathname={pathname} />
      <Side setToggle={setToggle} toggle={toggle} />
    </>
  )
}
