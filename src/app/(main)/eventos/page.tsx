import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { isFuture, isPast, isSameMonth } from "date-fns";
import { EventCard } from "@/components/cards/EventCard";
import { EventWithRelations } from "@/types/events";

export const metadata: Metadata = {
  title: "Eventos | ADETUR - Alta Mogiana",
  description:
    "Fique por dentro de todos os eventos culturais, festivais e atividades turísticas na região da Alta Mogiana.",
};

async function getEvents() {
  const events = await prisma.event.findMany({
    include: {
      Municipality: {
        select: {
          name: true,
          slug: true,
        },
      },
      galleryImages: {
        take: 1,
      },
    },
    orderBy: {
      date: "desc", // Ordena do mais recente para o mais antigo
    },
  });
  return events;
}

const EventListSection = ({
  title,
  events,
}: {
  title: string;
  events: EventWithRelations[];
}) => {
  if (events.length === 0) {
    return null; // Não renderiza a seção se não houver eventos
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default async function EventosPage() {
  const allEvents = await getEvents();
  const now = new Date();

  const thisMonthEvents = allEvents.filter((event) =>
    isSameMonth(new Date(event.date), now),
  );

  const upcomingEvents = allEvents
    .filter(
      (event) =>
        isFuture(new Date(event.date)) &&
        !isSameMonth(new Date(event.date), now),
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Ordena do mais próximo para o mais distante

  const pastEvents = allEvents.filter((event) => isPast(new Date(event.date)));

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full bg-blue-900">
        <Image
          src="/bg/bg-eventos.jpg" // **IMPORTANTE:** Adicione uma imagem de fundo para eventos
          alt="Multidão em um festival de música"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Agenda de Eventos
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Descubra o que está acontecendo na região da Alta Mogiana.
          </p>
        </div>
      </section>

      {/* Seções de Eventos */}
      <EventListSection title="Eventos deste Mês" events={thisMonthEvents} />
      <EventListSection title="Próximos Eventos" events={upcomingEvents} />
      <EventListSection title="Eventos Passados" events={pastEvents} />
    </div>
  );
}
