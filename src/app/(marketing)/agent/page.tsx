import { Container } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export default function AgentPage() {
  return (
    <section className="bg-warm-white py-section-y">
      <Container className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
        <FadeIn className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-gray">
            Agente responsável
          </p>
          <h1 className="font-heading text-3xl font-semibold text-navy-luxury md:text-4xl">
            Sofia Azevedo
          </h1>
          <p className="max-w-xl text-lg text-slate-gray">
            Especialista em imóveis de alto padrão há 12 anos, com histórico de
            negociações internacionais e atendimento discreto e consultivo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Agendar conversa</Button>
            <Button variant="ghost">Portfólio recente</Button>
          </div>
        </FadeIn>

        <FadeIn className="grid gap-4">
          <Card className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
              <CardDescription>
                Alto padrão · Mercado internacional · Nova York · Miami · Lisboa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground">
              <p>+320 negociações concluídas</p>
              <p>Curadora de arquitetura contemporânea</p>
              <p>Time dedicado de concierge e assessoria jurídica</p>
            </CardContent>
          </Card>
          <Card className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle>Contato</CardTitle>
              <CardDescription>Resposta em até 1 hora útil.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>Email: sofia@realtorluxe.com</p>
              <p>Telefone: +55 (11) 9 9999-0000</p>
              <p>Endereço: Av. Europa, 321 - Jardins</p>
            </CardContent>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
