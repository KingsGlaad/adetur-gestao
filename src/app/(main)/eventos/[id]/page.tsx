import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { formatEventDate } from "@/lib/date-formater";
import { PublicImageGallery } from "@/app/(main)/municipios/[slug]/_components/PublicImageGallery";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id },
    select: { title: true, description: true },
  });

  if (!event) {
    return {
      title: "Evento não encontrado",
    };
  }

  return {
    title: `${event.title} | ADETUR`,
    description:
      event.description?.substring(0, 150) ||
      `Detalhes sobre o evento ${event.title}.`,
  };
}

export default async function EventoDetailPage({ params }: PageProps) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      Municipality: {
        select: {
          name: true,
          slug: true,
        },
      },
      galleryImages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!event) {
    return notFound();
  }

  const imageUrl = event.galleryImages?.[0]?.url || "/images/no-image.jpeg";
  const galleryUrls = event.galleryImages.map((img) => img.url);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full bg-slate-950 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Imagem principal do evento ${event.title}`}
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg tracking-tight max-w-4xl">
            {event.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm sm:text-base text-white/90">
            <p className="flex items-center justify-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              <Calendar className="w-4 h-4 text-emerald-400" />{" "}
              {formatEventDate(event.date)}
            </p>
            <Link
              href={`/municipios/${event.Municipality.slug}`}
              className="flex items-center justify-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:text-emerald-300 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-400" /> {event.Municipality.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Description */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Sobre o Evento
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Galeria
            </h2>
            <div className="rounded-2xl overflow-hidden">
              <PublicImageGallery
                images={galleryUrls}
                municipalityName={event.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
