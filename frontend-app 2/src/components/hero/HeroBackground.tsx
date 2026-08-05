export default function HeroBackground() {
  return (
    <div className="absolute right-[2rem] left-[2rem] flex h-[calc(100vh-4rem-6vh-6.25rem)] w-full max-w-[calc(100vw-4rem+1px)] flex-col justify-center overflow-hidden lg:left-[5rem] lg:h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)] lg:w-[calc(100vw-10rem+1px)] lg:max-w-[calc(100vw-10rem+1px)]">
      <div className="h-[30%] w-[70%] rounded-full bg-accent-green blur-[174px]" />
      <div className="ml-[50%] h-[30%] w-[70%] rounded-full bg-accent-purple blur-[174px]" />
    </div>
  )
}
