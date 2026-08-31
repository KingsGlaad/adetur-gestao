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
    <div
      className={cn(
        "rounded-2xl border border-border/80 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        background || "bg-card text-card-foreground"
      )}
    >
      <div className="relative h-48 bg-muted">
        <Image
          src={municipality.coatOfArms || "/logo.png"}
          alt={municipality.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/municipios/${municipality.slug}`}>
          <h3 className={cn("text-xl font-bold mb-2 transition-colors hover:text-primary", title || "text-card-foreground")}>
            {municipality.name}
          </h3>
        </Link>
        <p className={cn("mb-4 text-sm line-clamp-2 leading-relaxed", description || "text-muted-foreground")}>
          {municipality.description}
        </p>
        <div className="text-sm font-medium flex flex-wrap gap-2">
          {municipality.highlights?.slice(0, 2).map((item) => (
            <span
              key={item.id}
              className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", bgHighlight || "bg-primary/10 text-primary border border-primary/20")}
            >
              {item.title}
            </span>
          ))}
          {(municipality.highlights?.length ?? 0) > 2 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer", bgHighlight || "bg-muted text-muted-foreground border border-border")}>
                    +{(municipality.highlights?.length ?? 0) - 2} mais
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-popover text-popover-foreground border border-border p-2 rounded-lg shadow-lg">
                  <div className="flex flex-col gap-1 text-xs">
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
