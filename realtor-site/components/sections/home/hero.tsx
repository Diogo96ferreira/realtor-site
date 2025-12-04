"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const bg = bgRef.current;
        if (!container || !bg) return;

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const intensity = 12; // profundidade (recomendado 10-20)

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left; // posição dentro do hero
            const y = e.clientY - rect.top;

            // normaliza para valores entre -1 e 1
            mouseX = (x / rect.width) * 2 - 1;
            mouseY = (y / rect.height) * 2 - 1;
        };

        const animate = () => {
            // Lerp suave → movimento cinematográfico, não brusco
            targetX += (mouseX * intensity - targetX) * 0.08;
            targetY += (mouseY * intensity - targetY) * 0.08;

            bg.style.transform = `translate(${targetX}px, ${targetY}px) scale(1.05)`;

            requestAnimationFrame(animate);
        };

        container.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[90vh] w-full overflow-hidden bg-navy-luxury"
        >
            {/* BACKGROUND WITH DEPTH */}
            <div
                ref={bgRef}
                className="absolute inset-0 will-change-transform"
                style={{
                    transform: "translate(0px, 0px) scale(1.05)",
                    transition: "transform 0.2s ease-out",
                }}
            >
                <Image
                    src="/images/hero.jpg"
                    alt="Luxury View"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* CENTER CONTENT */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
            w-full max-w-3xl bg-white/10 backdrop-blur-md 
            border border-white/20 shadow-xl rounded-3xl 
            px-10 py-14 text-center
          "
                >
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-warm-white">
                        Experience Unparalleled
                        <br />
                        Luxury Living
                    </h1>

                    <p className="text-warm-white/70 mt-4 text-sm md:text-base">
                        Your expert guide to the finest properties in the exclusive market.
                    </p>

                    <div className="mt-8">
                        <Button variant="primary" className="text-sm px-6 py-3">
                            View Exclusive Listings
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
