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
    <Link href={`/atracoes/${attraction.id}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={attraction.name || "Imagem da atração"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow bg-white">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-primary">
            {attraction.name}
          </h3>
          {attraction.description && (
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {attraction.description}
            </p>
          )}
          <div className="mt-auto pt-4 space-y-1 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />{" "}
              {attraction.Municipality.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
