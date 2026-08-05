import { useEffect, useState } from 'react'

export default function useInnerHeight() {
  const [innerHeight, setInnerHeight] = useState<number>()

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return innerHeight
}
