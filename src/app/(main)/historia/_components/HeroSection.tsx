import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <Image
            src={"/logo-cmf.png"}
            width={150} // tamanho maior
            height={150}
            alt="Logo Companhia Mogiana de Estradas de Ferro"
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Companhia Mogiana de Estradas de Ferro
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto">
          Fundada em 1872 por produtores de café, a Companhia Mogiana foi
          essencial na expansão ferroviária paulista.
        </p>
      </div>
    </div>
  );
}
