import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useHeroAnimation() {
  const scope = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-copy", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-cta > *", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.from(".hero-media", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.12,
        ease: "power3.out",
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}
