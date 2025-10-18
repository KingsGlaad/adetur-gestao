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
      municipality: {
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
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full bg-blue-900">
        <Image
          src={imageUrl}
          alt={`Imagem principal do evento ${event.title}`}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            {event.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-lg text-white/90">
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />{" "}
              {formatEventDate(event.date)}
            </p>
            <Link
              href={`/municipios/${event.municipality.slug}`}
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              <MapPin className="w-5 h-5" /> {event.municipality.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Description */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sobre o Evento
            </h2>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeria</h2>
            <PublicImageGallery
              images={galleryUrls}
              municipalityName={event.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
