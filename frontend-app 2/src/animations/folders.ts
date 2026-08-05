import type { Variants } from 'framer-motion'

export const filesWrapperVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      //   delayChildren: 0.4,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      //   delayChildren: 0.4,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
}

export const fileVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'linear',
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'linear',
      y: { stiffness: 1000 },
    },
  },
}
