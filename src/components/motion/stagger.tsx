"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function Stagger({ children, className, delay = 0.08, amount = 0.2 }: StaggerProps) {
  return (
    <motion.div
      className={cn("flex flex-col gap-4", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 1 },
        show: { transition: { staggerChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
