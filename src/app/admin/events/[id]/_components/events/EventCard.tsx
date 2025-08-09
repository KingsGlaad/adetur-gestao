import { Event } from "@/generated";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Calendar } from "lucide-react";
import { formatEventDate } from "@/lib/date-formater";

interface EventCardProps {
  event: Event;
  onEdit: () => void;
  onDelete: () => void;
}

export function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white">
      {/* Header com a Imagem do Evento */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={event.image || "/images/no-image.jpg"}
          alt={`Imagem para ${event.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Data do Evento */}
        <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatEventDate(event.date)}</span>
        </div>

        {/* Título e Descrição */}
        <h3 className="font-bold text-lg text-slate-800 leading-tight">
          {event.title}
        </h3>
        {event.description && (
          <p className="mt-2 text-sm text-slate-600 line-clamp-3 flex-grow">
            {event.description}
          </p>
        )}
      </div>

      {/* Rodapé com Ações */}
      <div className="p-2 flex justify-end gap-2 bg-slate-50 border-t">
        <Button type="button" variant="outline" size="sm" onClick={onEdit}>
          <Edit className="mr-2 h-3 w-3" />
          Editar
        </Button>
        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={onDelete}
        >
          <Trash2 className="mr-2 h-3 w-3" />
          Remover
        </Button>
      </div>
    </div>
  );
}
