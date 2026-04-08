import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import { HighlightCard } from '@/components/cards/HighlightCard'
import { PageTitle } from '@/components/layout/PageTitle'

export const metadata: Metadata = {
  title: 'Destaques | ADETUR',
  description:
    'Explore os melhores destaques, eventos e pontos turísticos da nossa região. Encontre sua próxima aventura!',
}

export default async function HighlightsPage() {
  const highlights = await prisma.highlight.findMany({
    // Fictional "most viewed" logic: ordering by newest.
    // In the future, you could add a `views` count to the model
    // and sort by it: orderBy: { views: 'desc' }
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Municipality: {
        select: {
          name: true,
        },
      },
      galleryImages: {
        take: 1, // We only need the first image for the card
        select: {
          url: true,
        },
      },
    },
  })

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-10">
        <PageTitle>Destaques da Região</PageTitle>
        <p className="mt-2 text-lg text-gray-600">
          Descubra experiências únicas e lugares inesquecíveis.
        </p>
      </div>

      {/* Highlights Grid */}
      {highlights.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.id} highlight={highlight} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Nenhum destaque encontrado</h3>
          <p className="mt-2 text-sm text-gray-500">Volte em breve para ver as novidades da nossa região!</p>
        </div>
      )}
    </div>
  )
}