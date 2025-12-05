import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const mockRows = [
  { title: "Cobertura Jardins", status: "Publicado", updatedAt: "Hoje" },
  { title: "Casa Alto de Pinheiros", status: "Rascunho", updatedAt: "Ontem" },
  { title: "Penthouse Faria Lima", status: "Publicado", updatedAt: "Há 3 dias" },
];

export default function DashboardPropertiesPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold text-navy-luxury">
            Propriedades
          </h1>
          <p className="text-muted-foreground">
            CRUD pronto para conectar ao Supabase em seguida.
          </p>
        </div>
        <div className="flex gap-3">
          <Input placeholder="Buscar imóvel" className="w-64" />
          <Button>Novo imóvel</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {mockRows.map((row) => (
          <Card key={row.title} className="h-full border-border/70">
            <CardHeader>
              <CardTitle>{row.title}</CardTitle>
              <CardDescription>Status: {row.status}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Atualizado: {row.updatedAt}
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" size="sm">
                Editar
              </Button>
              <Button size="sm">Publicar</Button>
            </CardFooter>
          </Card>
        ))}
        <Skeleton className="hidden h-40 rounded-xl md:block" />
      </div>
    </section>
  );
}
