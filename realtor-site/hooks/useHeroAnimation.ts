"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useHeroAnimation(heroRef: any, titleRef: any, subtitleRef: any) {
  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // MASK REVEAL do título
      gsap.fromTo(
        titleRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.4,
          ease: "power3.out",
        }
      );

      // Fade-up do subtítulo
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        }
      );

      // PARALLAX no background
      gsap.to(heroRef.current, {
        backgroundPositionY: "40%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
}
