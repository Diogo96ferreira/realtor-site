import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-white/70">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-lg font-semibold text-navy-luxury">
            Realtor Luxe
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            Imóveis selecionados, atendimento sob medida e experiência premium
            em cada visita.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/listings" className="hover:text-foreground">
            Imóveis
          </Link>
          <Link href="/agent" className="hover:text-foreground">
            Agente
          </Link>
          <Link href="/properties" className="hover:text-foreground">
            Dashboard
          </Link>
        </div>
      </Container>
    </footer>
  );
}
