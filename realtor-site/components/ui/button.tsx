// components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm md:text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe focus-visible:ring-offset-2 focus-visible:ring-offset-navy-luxury disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-luxe text-navy-luxury shadow-elevated-soft hover:shadow-glow-gold hover:translate-y-[-1px] active:translate-y-[0px]",
  secondary:
    "border border-gold-luxe text-gold-luxe bg-transparent hover:bg-royal-blue/60",
  ghost:
    "bg-transparent text-warm-white hover:bg-warm-white/5 border border-transparent",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
