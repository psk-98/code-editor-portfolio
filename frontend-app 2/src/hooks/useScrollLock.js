import { useCallback } from 'react'

export default function useScrollLock() {
  const lock = useCallback(() => {
    document.body.style.overflowY = 'hidden'
  }, [])

  const unlock = useCallback(() => {
    document.body.style.overflowY = ''
  }, [])

  return [lock, unlock]
}
