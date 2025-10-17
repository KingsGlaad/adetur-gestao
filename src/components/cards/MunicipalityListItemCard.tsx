import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Municipality } from "@/types/municipality";
import { cn } from "@/lib/utils";

interface MunicipalityListItemCardProps {
  municipality: Municipality;
  onClick: () => void;
  showDetailsButton?: boolean;
  className?: string;
}

export function MunicipalityListItemCard({
  municipality,
  onClick,
  showDetailsButton = true,
  className,
}: MunicipalityListItemCardProps) {
  return (
    <div
      className={cn(
        "bg-blue-900 border border-blue-900/35 rounded-lg overflow-hidden hover:border-neutral-500 hover:scale-105 transition-transform duration-300 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-32">
        <Image
          src={municipality.coatOfArms || "/images/no-image.jpeg"}
          alt={municipality.name}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-1">
          {municipality.name}
        </h2>
        <p className="text-sm text-neutral-400 mb-2 line-clamp-2">
          {municipality.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
          {municipality.highlights?.slice(0, 2).map((item) => (
            <span key={item.id} className="px-2 py-1 bg-white text-neutral-700 rounded-full text-xs">{item.title}</span>
          ))}
          {(municipality.highlights?.length ?? 0) > 2 && (
            <span className="px-2 py-1 bg-white text-neutral-700 rounded-full text-xs">+{ (municipality.highlights?.length ?? 0) - 2 } mais</span>
          )}
        </div>
        {showDetailsButton && (
          <Link href={`/municipios/${municipality.slug}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center w-full px-3 py-1.5 bg-white text-neutral-700 rounded-md hover:bg-blue-400 transition-colors text-sm">
            <MapPin className="w-3.5 h-3.5 mr-1.5" /> Ver Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}