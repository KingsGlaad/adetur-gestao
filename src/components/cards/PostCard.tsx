import Image from "next/image";
import Link from "next/link";
import { formatEventDate } from "@/lib/date-formater";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/noticias/${post.slug}`} className="group block h-full">
      <div className="overflow-hidden rounded-2xl bg-card border border-border/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-500/40 h-full flex flex-col">
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          <Image
            src={post.coverImage || "/images/no-image.jpeg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
          <div>
            <h3 className="text-lg font-bold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            {post.subtitle && (
              <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {post.subtitle}
              </p>
            )}
          </div>
          <p className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
            Publicado em {formatEventDate(post.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}