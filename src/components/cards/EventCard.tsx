import Image from "next/image";
import Link from "next/link";
import { formatEventDate } from "@/lib/date-formater";
import { Calendar, MapPin } from "lucide-react";
import { EventWithRelations } from "@/types/events";

interface EventCardProps {
  event: EventWithRelations;
}

export function EventCard({ event }: EventCardProps) {
  const imageUrl = event.galleryImages?.[0]?.url || "/images/no-image.jpeg";

  return (
    <Link href={`/eventos/${event.id}`} className="group block h-full">
      <div className="overflow-hidden rounded-2xl bg-card border border-border/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-amber-500/40 h-full flex flex-col">
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          <Image
            src={imageUrl}
            alt={event.title || "Imagem do evento"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
          <h3 className="text-lg font-bold text-card-foreground line-clamp-2 group-hover:text-amber-500 transition-colors">
            {event.title}
          </h3>
          <div className="pt-3 border-t border-border/60 space-y-1.5 text-xs text-muted-foreground">
            <p className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />{" "}
              {formatEventDate(event.date)}
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary" />{" "}
              {event.Municipality.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}