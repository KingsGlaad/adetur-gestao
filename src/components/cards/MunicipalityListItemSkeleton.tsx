export function MunicipalityListItemSkeleton() {
  return (
    <div className="border border-blue-900/35 rounded-lg overflow-hidden animate-pulse">
      <div className="relative h-32 bg-blue-900/30" />
      <div className="p-4">
        <div className="h-4 bg-blue-900/30 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-blue-900/30 rounded w-full mb-2"></div>
        <div className="h-3 bg-blue-900/30 rounded w-5/6 mb-4"></div>
        <div className="flex gap-2 mb-3">
          <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
          <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
        </div>
        <div className="h-8 bg-blue-900/30 rounded w-full"></div>
      </div>
    </div>
  );
}