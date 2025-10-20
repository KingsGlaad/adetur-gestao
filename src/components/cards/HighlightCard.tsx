import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

type Highlight = {
  id: string
  title: string
  municipality: {
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
    <Link href={`/municipios/highlights/${highlight.id}`} className="group">
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-200 aspect-square xl:aspect-[7/8]">
        <Image
          src={imageUrl}
          alt={`Imagem do destaque ${highlight.title}`}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{highlight.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {highlight.municipality.name}
          </p>
        </div>
        {/* Fictional Rating */}
        <div className="flex flex-shrink-0 items-center gap-1">
          <Star
            className="h-4 w-4 flex-shrink-0 text-yellow-400"
            fill="currentColor"
          />
          <span className="text-sm font-semibold text-gray-700">4.8</span>
        </div>
      </div>
    </Link>
  )
}