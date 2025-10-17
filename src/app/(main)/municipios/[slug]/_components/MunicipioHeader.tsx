import { MapPin } from "lucide-react";

interface MunicipioHeaderProps {
  name: string;
  description: string | null;
}

export function MunicipioHeader({ name, description }: MunicipioHeaderProps) {
  return (
    <>
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        <MapPin className="w-10 h-10 text-blue-600" /> {name}
      </h1>
      <p className="mt-6 text-xl text-slate-600">{description}</p>
    </>
  );
}