import { prisma } from "@/lib/prisma";
import { HomePageClient } from "./_components/HomePageClient";

export default async function HomePage() {
  const municipalities = await prisma.municipality.findMany({
    where:{
      active: true,
    },
    include: {
      highlights: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return <HomePageClient municipalities={municipalities} />;
}
