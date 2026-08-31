import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

type Highlight = {
  id: string
  title: string
  Municipality: {
    name: string
  }
  galleryImages: {
    url: string
  }[]
}

interface HighlightCardProps {
  highlight: Highlight
}

export function HighlightCard({ highlight }: HighlightCardProps) {
  const imageUrl = highlight.galleryImages?.[0]?.url || '/images/no-image.jpeg'

  return (
    <Link href={`/municipios/highlights/${highlight.id}`} className="group block">
      <div className="relative w-full overflow-hidden rounded-2xl bg-muted aspect-square xl:aspect-[7/8] border border-border/60 shadow-sm group-hover:shadow-lg transition-all">
        <Image
          src={imageUrl}
          alt={`Imagem do destaque ${highlight.title}`}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{highlight.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {highlight.Municipality.name}
          </p>
        </div>
        {/* Fictional Rating */}
        <div className="flex flex-shrink-0 items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
          <Star
            className="h-3.5 w-3.5 flex-shrink-0 text-amber-500 fill-amber-500"
          />
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400">4.8</span>
        </div>
      </div>
    </Link>
  )
}