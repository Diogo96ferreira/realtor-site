import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide";
  const variants = {
    default: "border-gold-luxe bg-soft-gold text-navy-luxury",
    outline: "border-border text-foreground",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
