import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Compass, ArrowLeft, Building2, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const attraction = await prisma.attraction.findUnique({
    where: { id },
    include: {
      Municipality: true,
    },
  });

  if (!attraction) {
    return {
      title: "Atração não encontrada | ADETUR",
    };
  }

  return {
    title: `${attraction.name} | ${attraction.Municipality.name} | ADETUR`,
    description:
      attraction.description?.substring(0, 160) ||
      `Conheça ${attraction.name} em ${attraction.Municipality.name}, Alta Mogiana.`,
  };
}

export default async function AtracaoDetailPage({ params }: PageProps) {
  const { id } = await params;

  const attraction = await prisma.attraction.findUnique({
    where: { id },
    include: {
      Municipality: {
        include: {
          events: {
            take: 3,
            orderBy: {
              date: "asc",
            },
          },
          attractions: {
            where: {
              id: {
                not: id,
              },
            },
            take: 3,
          },
        },
      },
    },
  });

  if (!attraction) {
    return notFound();
  }

  const imageUrl = attraction.image || "/images/no-image.jpeg";

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      {/* HEADER HERO */}
      <section className="relative h-[380px] sm:h-[480px] w-full bg-zinc-950">
        <Image
          src={imageUrl}
          alt={attraction.name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-between py-8">
          {/* Voltar */}
          <div>
            <Link
              href="/atracoes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold hover:bg-black/70 transition-all border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Atrações & Eventos</span>
            </Link>
          </div>

          {/* Título & Cidade */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <Compass className="w-3.5 h-3.5" />
              <span>Atração Turística Oficial</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md leading-tight">
              {attraction.name}
            </h1>

            <Link
              href={`/municipios/${attraction.Municipality.slug}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-base font-semibold transition-colors"
            >
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>{attraction.Municipality.name} - SP</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Coluna Esquerda: Descrição */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground">
                Sobre este Ponto Turístico
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {attraction.description || "Descrição em processo de atualização pela equipe da ADETUR."}
              </p>
            </div>

            {/* Outras atrações do mesmo município */}
            {attraction.Municipality.attractions.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Mais atrações em {attraction.Municipality.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {attraction.Municipality.attractions.map((other) => (
                    <Link
                      key={other.id}
                      href={`/atracoes/${other.id}`}
                      className="group rounded-xl bg-card border border-border overflow-hidden hover:border-emerald-500/40 transition-all shadow-sm flex flex-col"
                    >
                      <div className="relative h-32 w-full bg-muted">
                        <Image
                          src={other.image || "/images/no-image.jpeg"}
                          alt={other.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                          {other.name}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita: Sidebar com dados do Município e Eventos */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card do Município */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                {attraction.Municipality.coatOfArms ? (
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden border p-1">
                    <Image
                      src={attraction.Municipality.coatOfArms}
                      alt={attraction.Municipality.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Município
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {attraction.Municipality.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Descubra mais sobre a história, hospedagens, gastronomia e roteiros completos deste município.
              </p>

              <Button className="w-full gap-2" asChild>
                <Link href={`/municipios/${attraction.Municipality.slug}`}>
                  <span>Explorar {attraction.Municipality.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Eventos Próximos nesta Cidade */}
            {attraction.Municipality.events.length > 0 && (
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Eventos em {attraction.Municipality.name}</span>
                </div>

                <div className="space-y-3">
                  {attraction.Municipality.events.map((evt) => (
                    <Link
                      key={evt.id}
                      href={`/eventos/${evt.id}`}
                      className="block p-3 rounded-xl bg-muted/40 hover:bg-muted border border-border/50 transition-colors"
                    >
                      <p className="text-xs font-bold text-foreground line-clamp-1">
                        {evt.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span>{new Date(evt.date).toLocaleDateString("pt-BR")}</span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
