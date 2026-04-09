import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardStats } from "./_components/dashboard-stats";
import { prisma } from "@/lib/prisma";
import {
  Building2,
  Calendar,
  MapPin,
  Users,
  Plus,
  LayoutDashboard,
} from "lucide-react";
import { MunicipalityList } from "./_components/municipality-list";
import { RecentEvents } from "./_components/recent-events";
import { OverviewChart } from "./_components/overview-chart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const [municipalities, events, highlights, guides] = await Promise.all([
    prisma.municipality.findMany({
      where: {
        active: true,
      },
      include: {
        users: true,
        highlights: true,
        events: true,
        guides: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.event.findMany({
      orderBy: {
        date: "desc",
      },
      take: 10,
    }),
    prisma.highlight.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
    prisma.guide.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
  ]);

  const stats = [
    {
      title: "Municípios",
      value: municipalities.length,
      icon: Building2,
      description: "Total de municípios ativos",
      trend: { value: 0, label: "em relação ao mês passado", isPositive: true },
    },
    {
      title: "Eventos",
      value: events.length,
      icon: Calendar,
      description: "Eventos programados",
      trend: { value: 12, label: "novos este mês", isPositive: true },
    },
    {
      title: "Atrações",
      value: highlights.length,
      icon: MapPin,
      description: "Pontos turísticos",
      trend: { value: 5, label: "novos este mês", isPositive: true },
    },
    {
      title: "Guias",
      value: guides.length,
      icon: Users,
      description: "Guias credenciados",
      trend: { value: 2, label: "novos este mês", isPositive: true },
    },
  ];

  const chartData = municipalities
    .map((m) => ({
      name: m.name,
      total: m.highlights.length + m.events.length,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  const hour = new Date().getHours();
  let greeting = "Boa noite";
  if (hour >= 5 && hour < 12) greeting = "Bom dia";
  else if (hour >= 12 && hour < 18) greeting = "Boa tarde";

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">
              Painel de Controle
            </h1>
          </div>
          <p className="text-muted-foreground">
            {greeting},{" "}
            <span className="font-medium text-foreground">
              {session.user?.name || "Administrador"}
            </span>
            . Hoje é{" "}
            {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="gap-2 bg-amber-200 hover:bg-amber-300"
            asChild
          >
            <Link href="/admin/cities">
              <Plus className="h-4 w-4" />
              Municípios
            </Link>
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-blue-200 hover:bg-blue-300"
            asChild
          >
            <Link href="/admin/events">
              <Plus className="h-4 w-4" />
              Novo Evento
            </Link>
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-green-200 hover:bg-green-300"
            asChild
          >
            <Link href="/admin/highlights">
              <Plus className="h-4 w-4" />
              Nova Atração
            </Link>
          </Button>
          <Button size="sm" className="gap-2" asChild>
            <Link href="/admin/posts/new">
              <Plus className="h-4 w-4" />
              Novo Post
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DashboardStats key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts & Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <OverviewChart data={chartData} />

        <MunicipalityList
          municipalities={municipalities.map((m) => ({
            ...m,
          }))}
        />

        <div className="lg:col-span-2">
          <RecentEvents events={events} />
        </div>

        <Card className="col-span-1 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm font-bold text-primary">
              Dica do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mantenha os eventos sempre atualizados para garantir que os
              turistas tenham acesso às melhores informações da região ADETUR.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
