import { prisma } from "@/lib/prisma";
import { PostForm } from "../_components/PostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return (
    // Renderiza o formulário com os dados iniciais do post
    <PostForm initialData={post} />
  );
}
