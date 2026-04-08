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
    <Link
      href={`/eventos/${event.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={event.title || "Imagem do evento"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600">
            {event.title}
          </h3>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" /> {formatEventDate(event.date)}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" /> {event.Municipality.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}