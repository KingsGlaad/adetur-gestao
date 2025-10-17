export function MunicipalitiesCardSkeleton() {
  return (
    <div className="rounded-lg shadow-md overflow-hidden animate-pulse bg-gray-200">
      <div className="relative h-48 bg-gray-300" /> {/* Área da imagem */}
      <div className="p-6"> {/* Área do conteúdo */}
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div> {/* Título */}
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div> {/* Descrição linha 1 */}
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div> {/* Descrição linha 2 */}
        <div className="flex flex-wrap gap-2"> {/* Destaques */}
          <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}