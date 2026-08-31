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
    return null;
  }

  return (
    <section className="py-12 sm:py-16 border-b border-border/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-foreground tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = allEvents.filter((event) => isPast(new Date(event.date)));

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full bg-slate-950 overflow-hidden">
        <Image
          src="/bg/bg-eventos.jpg"
          alt="Multidão em um festival de música"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60 flex flex-col items-center justify-center text-center px-4">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-2">Programação Regional</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 leading-tight drop-shadow-md tracking-tight">
            Agenda de Eventos
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light">
            Descubra festivais, feiras culturais e celebrações na região da Alta Mogiana.
          </p>
        </div>
      </section>

      {/* Seções de Eventos */}
      <EventListSection title="Eventos deste Mês" events={thisMonthEvents} />
      <EventListSection title="Próximos Eventos" events={upcomingEvents} />
      <EventListSection title="Eventos Anteriores" events={pastEvents} />
    </div>
  );
}
