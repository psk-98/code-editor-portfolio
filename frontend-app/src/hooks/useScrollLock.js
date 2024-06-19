export default function useScrollLock() {
  const lock = () => {
    document.body.style.overflowY = "hidden"

    const container = document?.querySelector(".container")
    if (container) {
      container.style.height = "calc(100vh - 4rem)"
      container.style.overflowY = "hidden"
    } else {
      console.error("Element with class 'container' not found.")
    }
  }
  const unlock = () => {
    document.body.style.overflowY = "scroll"

    const container = document?.querySelector(".container")
    if (container) {
      container.style.height = "fit-content"
      container.style.overflowY = "scroll"
    } else {
      console.error("Element with class 'container' not found.")
    }
  }

  return [lock, unlock]
}
