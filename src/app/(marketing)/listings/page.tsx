import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const listings = [
  {
    title: "Cobertura Jardins",
    price: "R$ 12.400.000",
    area: "540 m² · 4 suítes",
    status: "Disponível",
  },
  {
    title: "Casa Alto de Pinheiros",
    price: "R$ 9.850.000",
    area: "720 m² · 5 suítes",
    status: "Nova",
  },
  {
    title: "Penthouse Faria Lima",
    price: "R$ 15.100.000",
    area: "480 m² · 4 suítes",
    status: "Exclusivo",
  },
];

export default function ListingsPage() {
  return (
    <section className="bg-warm-white py-section-y">
      <Container className="space-y-10">
        <FadeIn className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-gray">
            Portfólio
          </p>
          <h1 className="font-heading text-3xl font-semibold text-navy-luxury md:text-4xl">
            Imóveis em destaque
          </h1>
          <p className="max-w-2xl text-slate-gray">
            Explore lançamentos e unidades únicas com visitas privadas e proposta
            assistida por nossos especialistas.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {listings.map((item, index) => (
            <FadeIn key={item.title} delay={0.06 * index}>
              <Card className="h-full border-border/70 bg-card/90">
                <CardHeader className="flex items-start justify-between">
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.area}</CardDescription>
                  </div>
                  <Badge>{item.status}</Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold text-navy-luxury">
                    {item.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Consulte valores de condomínio e IPTU com o concierge.
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="ghost" size="sm">
                    Ver detalhes
                  </Button>
                  <Button size="sm">Agendar visita</Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
