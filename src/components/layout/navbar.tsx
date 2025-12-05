import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";

const links = [
  { label: "Início", href: "/" },
  { label: "Imóveis", href: "/listings" },
  { label: "Agente", href: "/agent" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-warm-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-luxury text-soft-gold shadow-glow-gold">
            RL
          </span>
          <span className="font-heading text-base tracking-tight text-navy-luxury">
            Realtor Luxe
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-gray md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-navy-luxury"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Entrar
          </Button>
          <Button size="sm" className="shadow-glow-gold">
            Marcar visita
          </Button>
        </div>
      </Container>
    </header>
  );
}
