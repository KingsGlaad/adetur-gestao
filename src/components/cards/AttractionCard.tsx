import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Prisma } from "@/generated/prisma";

// Define the type we expect for the attraction
type AttractionWithRelations = Prisma.AttractionGetPayload<{
  include: { Municipality: true };
}>;

interface AttractionCardProps {
  attraction: AttractionWithRelations;
}

export function AttractionCard({ attraction }: AttractionCardProps) {
  const imageUrl = attraction.image || "/images/no-image.jpeg";

  return (
    <Link href={`/atracoes/${attraction.id}`} className="group block h-full">
      <div className="overflow-hidden rounded-2xl bg-card border border-border/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-500/40 h-full flex flex-col">
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          <Image
            src={imageUrl}
            alt={attraction.name || "Imagem da atração"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
          <div>
            <h3 className="text-lg font-bold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {attraction.name}
            </h3>
            {attraction.description && (
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {attraction.description}
              </p>
            )}
          </div>
          <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground">
            <p className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary" />{" "}
              {attraction.Municipality.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
