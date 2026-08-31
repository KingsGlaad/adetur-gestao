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
        Municipality: true
    }
  });

  if (!highlight) {
    return {
      title: "Destaque não encontrado",
    };
  }

  return {
    title: `${highlight.title} | ${highlight.Municipality.name} | ADETUR`,
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
    <div className="bg-background text-foreground min-h-screen">
      {/* Header Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full bg-muted">
        {/* Background Image with Gradient Overlay */}
        <Image
          src={imageUrl}
          alt={`Imagem principal do destaque ${highlight.title}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-8 md:p-12">
          <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-md leading-tight">
              {highlight.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-white/90">
              {/* Fictional Rating Section */}
              <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                <Star
                  className="h-4 w-4 flex-shrink-0 text-yellow-400 fill-yellow-400"
                />
                <span className="font-bold text-white">4.8</span>
                <span className="text-white/70 text-xs">(123 avaliações)</span>
              </div>

              <span className="hidden sm:block text-white/50">•</span>

              {/* Location */}
              <Link
                href={`/municipios/${highlight.Municipality.slug}`}
                className="flex items-center gap-1.5 transition-colors hover:text-emerald-300 font-medium"
              >
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>{highlight.Municipality.name}</span>
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
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Sobre o Destaque
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
              </div>

              <hr className="border-border" />

              {/* Opening Days Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Dias e Horários de Funcionamento
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <strong className="font-semibold text-foreground">
                        Segunda a Sexta:
                      </strong>{' '}
                      Aberto para visitação
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <strong className="font-semibold text-foreground">
                        Horário:
                      </strong>{' '}
                      09:00 - 17:00
                    </span>
                  </li>
                </ul>
              </div>

              <hr className="border-border" />

              {/* Gallery Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                  Galeria de Fotos
                </h3>
                <PublicImageGallery
                  images={galleryUrls}
                  municipalityName={highlight.title}
                />
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Informações Rápidas
              </h3>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Localização</p>
                    <p className="font-semibold text-sm text-foreground">
                      {highlight.Municipality.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Visitação</p>
                    <p className="font-semibold text-sm text-foreground">
                      Segunda a Sexta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-border lg:my-16" />

        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            O que os visitantes dizem
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fictionalReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Image src={review.avatarUrl} alt={review.name} width={44} height={44} className="rounded-full bg-muted border border-border" />
                  <div>
                    <p className="font-bold text-sm text-foreground">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
