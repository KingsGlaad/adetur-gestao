import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

interface MunicipalitiesCardProps {
  municipalities: {
    id: string;
    name: string;
    slug: string | null;
    coatOfArms: string | null;
    description: string | null;
    highlights: {
      id: string;
      title: string;
    }[];
  };
}

export function MunicipalitiesCard({
  municipalities,
}: MunicipalitiesCardProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-blue-900 transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={municipalities.coatOfArms || ""}
          alt={municipalities.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/municipios/${municipalities.slug}`}>
          <h3 className="text-xl font-semibold mb-2 text-white">
            {municipalities.name}
          </h3>
        </Link>
        <p className="text-gray-400 mb-4">{municipalities.description}</p>
        <div className="text-sm font-medium flex flex-wrap gap-2">
          {municipalities.highlights.slice(0, 2).map((item) => (
            <span
              key={item.id}
              className="px-2 py-1 bg-accent text-white rounded-full text-xs"
            >
              {item.title}
            </span>
          ))}
          {municipalities.highlights.length > 2 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="px-2 py-1 bg-accent text-white rounded-full text-xs cursor-pointer">
                    +{municipalities.highlights.length - 2} mais
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-accent text-amber-50 ">
                  <div className="flex flex-col gap-1">
                    {municipalities.highlights.slice(2).map((h) => (
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
