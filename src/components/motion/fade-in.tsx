"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const motionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  header: motion.header,
  footer: motion.footer,
};

type FadeInProps = MotionProps & {
  as?: keyof typeof motionMap;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export function FadeIn({
  as: Component = "div",
  className,
  children,
  delay = 0,
  y = 24,
  ...motionProps
}: FadeInProps) {
  const MotionComponent = motionMap[Component] ?? motion.div;
  const hasVariants = Boolean(motionProps.variants);

  const resolvedInitial =
    motionProps.initial ?? (hasVariants ? "hidden" : { opacity: 0, y });
  const resolvedWhileInView =
    motionProps.whileInView ??
    (hasVariants ? "show" : { opacity: 1, y: 0 });
  const resolvedViewport =
    motionProps.viewport ?? ({ once: true, amount: 0.2 } as const);
  const resolvedTransition =
    motionProps.transition ??
    (!hasVariants ? { duration: 0.5, ease: "easeOut", delay } : undefined);

  return (
    <MotionComponent
      {...motionProps}
      initial={resolvedInitial}
      whileInView={resolvedWhileInView}
      viewport={resolvedViewport}
      transition={resolvedTransition}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
