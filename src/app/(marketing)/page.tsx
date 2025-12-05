import { Container } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroSection } from "@/components/sections/home/hero";

const services = [
  {
    title: "Visitas imersivas",
    description:
      "Tours guiados com roteiros personalizados e apoio de concierge para cada agendamento.",
  },
  {
    title: "Due diligence completa",
    description:
      "Equipe jurídica e financeira dedicada para agilizar análise documental e aprovação de crédito.",
  },
  {
    title: "Portfólio exclusivo",
    description:
      "Imóveis selecionados com curadoria de mercado, arquitetura autoral e diferenciais de segurança.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="bg-white py-section-y">
        <Container className="space-y-10">
          <FadeIn className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-gray">
              Experiência 360º
            </p>
            <h2 className="font-heading text-3xl font-semibold text-navy-luxury md:text-4xl">
              Cada detalhe foi pensado para quem valoriza sofisticação.
            </h2>
            <p className="max-w-3xl text-lg text-slate-gray">
              Da descoberta ao fechamento, criamos uma jornada integrada com dados
              de mercado, visitas privativas e acompanhamento humano para decisões
              seguras.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={0.05 * index}>
                <Card className="h-full border-border/70 bg-warm-white/70">
                  <CardContent className="space-y-3 p-6">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
