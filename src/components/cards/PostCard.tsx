import Image from "next/image";
import Link from "next/link";
import { formatEventDate } from "@/lib/date-formater";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/noticias/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage || "/images/no-image.jpeg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
            {post.subtitle}
          </p>
          <p className="mt-4 text-xs text-gray-400 pt-2 border-t border-gray-100">
            Publicado em {formatEventDate(post.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}