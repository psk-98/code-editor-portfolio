import { line1Variants, line2Variants, line3Variants } from '@/animations/nav'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItem =
  'px-[2rem] py-[2rem] [&_a]:text-muted [&_a]:transition-colors [&_a]:duration-400 hover:[&_a]:text-foreground'

const activeNavItem =
  'border-b-[3px] border-b-accent-orange [&_a]:!text-foreground'

export default function TopNav({ toggle, setToggle, pathname }) {
  return (
    <div className="flex items-center justify-between border-b border-line text-label">
      <div className="mx-[2rem] flex h-[6vh] w-full items-center justify-between lg:m-0 lg:h-fit lg:w-fit">
        <div className="[&_a]:text-muted [&_a]:transition-colors hover:[&_a]:text-foreground lg:w-[calc(16.19vw-4rem)] lg:border-r lg:border-line lg:py-[2rem] lg:pl-[2rem]">
          <Link href="/">paul-khoza</Link>
        </div>
        <button
          className="flex h-[2rem] flex-col justify-between lg:hidden [&>div]:h-[0.25rem] [&>div]:w-[2.25rem] [&>div]:bg-muted"
          onClick={() => setToggle(!toggle)}
          type="button"
          aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggle}
        >
          <motion.div
            variants={line1Variants}
            animate={toggle ? 'open' : 'closed'}
          />
          <motion.div
            variants={line2Variants}
            animate={toggle ? 'open' : 'closed'}
          />
          <motion.div
            variants={line3Variants}
            animate={toggle ? 'open' : 'closed'}
          />
        </button>
        <div className="hidden lg:flex">
          <div
            className={`${navItem} ${pathname === '/' ? activeNavItem : ''}`}
          >
            <Link href="/">_hello</Link>
          </div>
          <div
            className={`${navItem} border-x border-line ${pathname === '/about-me' ? activeNavItem : ''}`}
          >
            <Link href="/about-me">_about-me</Link>
          </div>
          <div
            className={`${navItem} border-r border-line ${pathname === '/projects' ? activeNavItem : ''}`}
          >
            <Link href="/projects">_projects</Link>
          </div>
        </div>
      </div>
      <div
        className={`${navItem} hidden border-l border-line lg:block ${pathname === '/contact-me' ? activeNavItem : ''}`}
      >
        <Link href="/contact-me">_contact-me</Link>
      </div>
    </div>
  )
}
