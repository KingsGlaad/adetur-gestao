import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { NoticiasClient } from "./_components/NoticiasClient";

export const metadata: Metadata = {
  title: "Notícias e Comunicados | ADETUR Alta Mogiana",
  description:
    "Fique por dentro das últimas notícias, novidades do turismo, eventos culturais e ações da ADETUR na região da Alta Mogiana.",
  keywords: [
    "Notícias ADETUR",
    "Turismo Alta Mogiana",
    "Eventos e Novidades",
    "Comunicados Oficiais",
  ],
};

// Revalidação a cada 60 segundos
export const revalidate = 60;

export default async function NoticiasPage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      subtitle: true,
      slug: true,
      coverImage: true,
      altText: true,
      createdAt: true,
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <NoticiasClient initialPosts={posts} />;
}
