"use client";

import { Landmark, StarOff } from "lucide-react";
import Image from "next/image";
import { Highlight } from "@/types/highligth";
import { EmptyPlaceholder } from "@/components/shared/EmptyPlaceholder";
import Link from "next/link";

interface HighlightsSectionProps {
  highlights: Highlight[];
  onHighlightSelect: (id: string) => void;
}

export function HighlightsSection({
  highlights,
  onHighlightSelect,
}: HighlightsSectionProps) {
  if (highlights.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <EmptyPlaceholder
          icon={<StarOff size={48} strokeWidth={1.5} />}
          title="Nenhum Destaque"
          subtitle="Este município ainda não possui destaques turísticos cadastrados."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 mb-6">
        <Landmark className="w-7 h-7 text-blue-600" />
        Destaques Turísticos
      </h3>
      <div className="flex-1 space-y-6 overflow-y-auto pr-2 -mr-2">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Link
              key={highlight.id}
              href={`/municipios/highlights/${highlight.id}`}
              passHref
            >
              <Image
                src={highlight.galleryImages?.[0]?.url || "/placeholder.png"}
                alt={highlight.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h4 className="absolute bottom-0 left-0 p-4 text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                {highlight.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
