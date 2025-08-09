import { prisma } from "@/lib/prisma";
import { columns } from "./_components/tables/columns";
import { EventDataTable } from "./_components/tables/data-table";
import { Event } from "@/types/events";

async function getData(): Promise<Event[]> {
  const data = await prisma.event.findMany({
    orderBy: {
      title: "asc",
    },
  });
  return [...data];
}
export default async function EventsPage() {
  const data = await getData();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cidades</h2>
      </div>
      <EventDataTable columns={columns} data={data} />
    </div>
  );
}
