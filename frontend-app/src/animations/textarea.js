export const textAreaWrapperVaraints = {
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
      when: "afterChildren",
    },
  },
}

export const textAreaWrapperChildrenVaraints = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      type: "linear",
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      type: "linear",
      y: { stiffness: 1000 },
    },
  },
}
