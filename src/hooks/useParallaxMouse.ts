import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

type ParallaxTarget = {
  selector: string;
  movement?: number;
};

export function useParallaxMouse(targets: ParallaxTarget[], enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (event.clientY - innerHeight / 2) / (innerHeight / 2);

      targets.forEach((target) => {
        const movement = target.movement ?? 12;
        gsap.to(target.selector, {
          x: x * movement,
          y: y * movement,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, targets]);
}
