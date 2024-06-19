export const line1Variants = {
  open: {
    rotateZ: -405,
    translateX: -9,
    translateY: 7,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
export const line2Variants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      //delay: 0.5,
    },
  },
}
export const line3Variants = {
  open: {
    rotateZ: 405,
    translateX: -9,
    translateY: -7,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const sidebarVariants = {
  open: {
    height: "calc(100vh - 4rem - 6vh - 1px)",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
  closed: {
    height: 0,
    // top: 0,
    borderBottom: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}
export const navLinkVariants = {
  open: {
    opacity: 1,
    transition: {
      type: "linear",
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      type: "linear",
      y: { stiffness: 1000 },
    },
  },
}
export const navVariants = {
  hidden: {
    y: -100,
    transition: {
      type: "spring",
    },
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
    },
  },
}
