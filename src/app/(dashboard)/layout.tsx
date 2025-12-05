import { Container } from "@/components/layout/container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-section-y">{children}</Container>
    </div>
  );
}
