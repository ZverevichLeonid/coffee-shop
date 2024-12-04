import { Variants } from "motion/react";

export const CARDS_CONTAINER_CONFIG: Variants = {
  hidden: {
    transition: { opacity: 0 },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const CARD_CONFIG: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
