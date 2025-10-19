import { MapPin } from "lucide-react";
import Image from "next/image";

interface MunicipioHeaderProps {
  name: string;
  description: string | null;
  coverImage: string | null;
}

export function MunicipioHeader({
  name,
  description,
  coverImage,
}: MunicipioHeaderProps) {
  return (
    <div className="relative isolate py-24 text-center text-white">
      {coverImage && (
        <Image
          src={coverImage}
          alt={`Imagem de fundo de ${name}`}
          fill
          className="object-cover blur-xs brightness-90"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative">
        <h1 className="flex items-center justify-center gap-2 text-4xl font-bold tracking-tight sm:text-5xl">
          <MapPin className="h-10 w-10" /> {name}
        </h1>
        <p className="mt-6 text-xl">{description}</p>
      </div>
    </div>
  );
}