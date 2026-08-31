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
        "bg-card text-card-foreground border border-border/80 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-36 bg-muted">
        <Image
          src={municipality.coatOfArms || "/images/no-image.jpeg"}
          alt={municipality.name}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold text-card-foreground mb-1">
          {municipality.name}
        </h2>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {municipality.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
          {municipality.highlights?.slice(0, 2).map((item) => (
            <span key={item.id} className="px-2 py-0.5 bg-muted text-muted-foreground border border-border/60 rounded-full text-xs font-medium">
              {item.title}
            </span>
          ))}
          {(municipality.highlights?.length ?? 0) > 2 && (
            <span className="px-2 py-0.5 bg-muted text-muted-foreground border border-border/60 rounded-full text-xs font-medium">
              +{(municipality.highlights?.length ?? 0) - 2} mais
            </span>
          )}
        </div>
        {showDetailsButton && (
          <Link
            href={`/municipios/${municipality.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-full px-3 py-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-xs gap-1.5 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5" /> Ver Detalhes do Município
          </Link>
        )}
      </div>
    </div>
  );
}