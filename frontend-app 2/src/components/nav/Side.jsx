import { navLinkVariants, sidebarVariants } from '@/animations/nav'
import { motion } from 'framer-motion'
import Link from 'next/link'

const sideItem =
  'border-b border-line p-[2rem] transition-colors duration-400 hover:bg-canvas [&_a]:text-label [&_a]:font-light [&_a]:text-foreground'

const activeSideItem = '[&_a]:!font-normal [&_a]:!text-muted'

export default function Side({ setToggle, toggle, pathname }) {
  return (
    <motion.ul
      className="fixed right-[2rem] left-[2rem] z-40 flex h-0 max-w-[calc(100vw-30px)] flex-col justify-between overflow-hidden rounded-b-[1rem] border border-t-0 border-line bg-panel lg:hidden"
      initial={false}
      animate={toggle ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <motion.li
        className={`${sideItem} ${pathname === '/' ? activeSideItem : ''}`}
        variants={navLinkVariants}
      >
        <Link
          href="/"
          onClick={() => setToggle(false)}
        >
          _hello
        </Link>
      </motion.li>
      <motion.li
        className={`${sideItem} ${pathname === '/about-me' ? activeSideItem : ''}`}
        variants={navLinkVariants}
      >
        <Link
          href="/about-me"
          onClick={() => setToggle(false)}
        >
          _about-me
        </Link>
      </motion.li>
      <motion.li
        className={`${sideItem} ${pathname === '/projects' ? activeSideItem : ''}`}
        variants={navLinkVariants}
      >
        <Link
          href="/projects"
          onClick={() => setToggle(false)}
        >
          _projects
        </Link>
      </motion.li>
      <motion.li
        className={`${sideItem} ${pathname === '/contact-me' ? activeSideItem : ''}`}
        variants={navLinkVariants}
      >
        <Link
          href="/contact-me"
          onClick={() => setToggle(false)}
        >
          _contact-me
        </Link>
      </motion.li>
    </motion.ul>
  )
}
