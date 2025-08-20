import { prisma } from "@/lib/prisma";
import { columns } from "./_components/tables/columns";
import { HighlightDataTable } from "./_components/tables/data-table";
import { Highlight } from "@/types/highligth";

async function getData(): Promise<Highlight[]> {
  const data = await prisma.highlight.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      municipality: {
        select: {
          name: true,
        },
      },
    },
  });
  return [...data];
}

export default async function HighlightsPage() {
  const data = await getData();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Destaques</h2>
      </div>
      <HighlightDataTable columns={columns} data={data} />
    </div>
  );
}
