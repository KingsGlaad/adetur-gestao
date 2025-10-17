import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MunicipalityRefined } from "@/types/municipality";
import Image from "next/image";
import Link from "next/link";

interface MunicipalitiesCardProps {
  municipality: MunicipalityRefined;
  background?: string;
  title?: string;
  description?: string;
  bgHighlight?: string;
}

export function MunicipalitiesCard({
  municipality,
  background,
  title,
  description,
  bgHighlight,
}: MunicipalitiesCardProps) {
  return (
    <div className={cn("rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105", background || "bg-blue-900")}>
      <div className="relative h-48">
        <Image
          src={municipality.coatOfArms || ""}
          alt={municipality.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/municipios/${municipality.slug}`}>
          <h3 className={cn("text-xl font-semibold mb-2", title ||"text-white")}>
            {municipality.name}
          </h3>
        </Link>
        <p className={cn("mb-4", description || "text-gray-400")}>{municipality.description}</p>
        <div className="text-sm font-medium flex flex-wrap gap-2">
          {municipality.highlights?.slice(0, 2).map((item) => (
            <span
              key={item.id}
              className={cn("px-2 py-1 rounded-full text-xs", bgHighlight || "bg-accent text-white")}
            >
              {item.title}
            </span>
          ))}
          {(municipality.highlights?.length ?? 0) > 2 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className={cn("px-2 py-1 rounded-full text-xs cursor-pointer", bgHighlight || "bg-accent text-white")}>
                    +{(municipality.highlights?.length ?? 0) - 2} mais
                  </span>
                </TooltipTrigger>
                <TooltipContent className={cn("bg-accent text-amber-50 ", bgHighlight || "bg-accent text-white")}>
                  <div className="flex flex-col gap-1">
                    {municipality.highlights?.slice(2).map((h) => (
                      <span key={h.id}>{h.title}</span>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
}
