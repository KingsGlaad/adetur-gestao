import { prisma } from "@/lib/prisma";
import { columns } from "./_components/tables/columns";
import { Municipality } from "@/types/municipality";
import { MunicipiosDataTable } from "./_components/tables/data-table";

async function getData(): Promise<Municipality[]> {
  const data = await prisma.municipality.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return [...data];
}
export default async function CitiesPage() {
  const data = await getData();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cidades</h2>
      </div>
      <MunicipiosDataTable columns={columns} data={data} />
    </div>
  );
}
