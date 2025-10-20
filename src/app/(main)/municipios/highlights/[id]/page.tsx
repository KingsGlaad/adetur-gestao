import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { PublicImageGallery } from "@/app/(main)/municipios/[slug]/_components/PublicImageGallery";
import Link from "next/link";
import { fictionalReviews } from "@/data/site-data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const highlight = await prisma.highlight.findUnique({
    where: { id },
    include:{
        municipality: true
    }
  });

  if (!highlight) {
    return {
      title: "Destaque não encontrado",
    };
  }

  return {
    title: `${highlight.title} | ${highlight.municipality.name} | ADETUR`,
    description:
      highlight.description?.substring(0, 150) ||
      `Detalhes sobre o destaque ${highlight.title}.`,
  };
}

export default async function DestaqueDetailPage({ params }: PageProps) {
  const { id } = await params;

  const highlight = await prisma.highlight.findUnique({
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

  if (!highlight) {
    return notFound();
  }

  const imageUrl = highlight.galleryImages?.[0]?.url || "/images/no-image.jpeg";
  const galleryUrls = highlight.galleryImages.map((img) => img.url);

 

  // Helper component for star rating
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full">
        {/* Background Image with Gradient Overlay */}
        <Image
          src={imageUrl}
          alt={`Imagem principal do evento ${highlight.title}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-8 md:p-12">
          <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-4xl font-bold text-white drop-shadow-md md:text-6xl">
              {highlight.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-white/90 sm:text-lg">
              {/* Fictional Rating Section */}
              <div className="flex items-center gap-1.5">
                <Star
                  className="h-5 w-5 flex-shrink-0 text-yellow-400"
                  fill="currentColor"
                />
                <span className="font-bold">4.8</span>
                <span className="text-white/80">(123 avaliações)</span>
              </div>

              <span className="hidden sm:block text-white/50">•</span>

              {/* Location */}
              <Link
                href={`/municipios/${highlight.municipality.slug}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MapPin className="h-5 w-5" />
                <span>{highlight.municipality.name}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Sobre o Destaque
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {highlight.description}
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Opening Days Section */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Dias e Horários de Funcionamento
                </h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>
                      <strong className="font-semibold text-gray-800">
                        Segunda a Sexta:
                      </strong>{' '}
                      Aberto para visitação
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>
                      <strong className="font-semibold text-gray-800">
                        Horário:
                      </strong>{' '}
                      09:00 - 17:00
                    </span>
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* Gallery Section */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Galeria de Fotos
                </h3>
                <div className="mt-4">
                  <PublicImageGallery
                    images={galleryUrls}
                    municipalityName={highlight.title}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                Informações Rápidas
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Localização</p>
                    <p className="font-semibold text-gray-800">
                      {highlight.municipality.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Aberto</p>
                    <p className="font-semibold text-gray-800">
                      Segunda a Sexta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-200 lg:my-16" />

        {/* Testimonials Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            O que os visitantes dizem
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fictionalReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <div className="flex items-center gap-4">
                  <Image src={review.avatarUrl} alt={review.name} width={48} height={48} className="rounded-full bg-gray-200" />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
