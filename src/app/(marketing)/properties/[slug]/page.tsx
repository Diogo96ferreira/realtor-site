import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PropertyPageProps = {
  params: { slug: string };
};

const mockProperties: Record<
  string,
  { title: string; price: string; area: string; description: string }
> = {
  "cobertura-jardins": {
    title: "Cobertura Jardins",
    price: "R$ 12.400.000",
    area: "540 m² · 4 suítes · 5 vagas",
    description:
      "Living integrado a um terraço amplo com vista 270º, cozinha gourmet e acabamentos em mármore italiano.",
  },
};

export default function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = params;
  const property = mockProperties[slug];

  if (!property) {
    notFound();
  }

  return (
    <section className="bg-white pb-section-y pt-10">
      <Container className="space-y-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated-soft">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/hero-property.png"
                alt={property.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>
          </div>

          <Card className="border-border/70 bg-warm-white/80">
            <CardHeader className="space-y-3">
              <Badge>Disponível</Badge>
              <CardTitle className="text-3xl">{property.title}</CardTitle>
              <CardDescription className="text-base text-foreground">
                {property.area}
              </CardDescription>
              <p className="text-lg font-semibold text-navy-luxury">
                {property.price}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-gray">{property.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button>Agendar visita</Button>
                <Button variant="ghost">Falar com concierge</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
