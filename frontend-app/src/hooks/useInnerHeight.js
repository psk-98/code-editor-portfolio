import { useEffect, useState } from "react"

export default function useInnerHeight() {
  const [innerHeight, setInnerHeight] = useState(window?.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window?.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return innerHeight
}
