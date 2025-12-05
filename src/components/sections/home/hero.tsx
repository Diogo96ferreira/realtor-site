"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChild } from "@/components/motion/stagger";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useParallaxMouse } from "@/hooks/useParallaxMouse";

const highlights = [
  "Tours privados e agendamento flexível",
  "Curadoria de imóveis singulares",
  "Consultoria financeira e jurídica integrada",
];

export function HeroSection() {
  const scope = useHeroAnimation();
  const parallaxTargets = useMemo(
    () => [
      { selector: ".hero-media", movement: 10 },
      { selector: ".hero-copy", movement: 8 },
      { selector: ".hero-headline", movement: 6 },
    ],
    []
  );
  useParallaxMouse(parallaxTargets, true);

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-gradient-to-b from-warm-white to-white pb-section-y pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 h-36 w-36 rounded-full bg-gold-luxe/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-royal-blue/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-8">
        <FadeIn className="space-y-6 text-center md:text-left">
          <Badge className="inline-flex">Seleção Prime</Badge>
          <div className="space-y-4">
            <h1 className="hero-headline font-heading text-4xl font-semibold leading-tight text-navy-luxury md:text-5xl">
              Encontre imóveis que refletem o seu padrão de vida.
            </h1>
            <p className="hero-copy max-w-2xl text-lg text-slate-gray md:text-xl">
              Experiência completa com tours imersivos, agendamento sob demanda
              e acompanhamento personalizado em cada negociação.
            </p>
          </div>
          <div className="hero-cta flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start">
            <Button size="lg" className="hero-cta-primary w-full md:w-auto">
              Agendar visita exclusiva
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hero-cta-secondary w-full md:w-auto"
            >
              <Link href="/listings">Ver portfólio</Link>
            </Button>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Card className="hero-media overflow-hidden border border-gold-luxe/30 bg-gradient-to-br from-white via-warm-white to-soft-gold/20 shadow-elevated-soft">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/hero-property.png"
                  alt="Residência contemporânea com vista aberta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 720px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-luxury/35 via-transparent to-transparent" />
              </div>
            </CardContent>
          </Card>

          <Stagger className="space-y-4 rounded-2xl border border-border bg-card/80 p-6 shadow-elevated-soft/50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-gray">
              Experiência
            </p>
            <div className="grid gap-3 text-sm text-foreground">
              {highlights.map((item) => (
                <FadeIn
                  key={item}
                  className="rounded-lg border border-border/70 bg-warm-white/60 px-4 py-3"
                  variants={staggerChild}
                >
                  {item}
                </FadeIn>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
