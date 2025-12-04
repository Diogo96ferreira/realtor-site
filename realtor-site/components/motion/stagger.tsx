"use client";

import { motion } from "framer-motion";

export function StaggerContainer({ children, delay = 0 }: any) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delay,
            staggerChildren: 0.18,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({ children }: any) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);
