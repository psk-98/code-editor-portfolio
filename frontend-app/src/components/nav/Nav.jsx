"use client"

import { useState } from "react"
import Side from "./Side"
import Top from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {console.log(toggle)}
      <Top setToggle={setToggle} toggle={toggle} />
      <Side setToggle={setToggle} toggle={toggle} />
    </>
  )
}
