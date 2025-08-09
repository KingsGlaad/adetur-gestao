import Image from "next/image";
import React from "react";

export default function ArquiteturaSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-md">
          <Image
            src="/cmf/bricks-bond.jpg"
            width={800}
            height={600}
            alt="Arquitetura Industrial"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-gray-800 leading-relaxed text-justify text-lg">
            Nas edificações, a Mogiana aplicava estilo industrial europeu, quase
            sempre em alvenaria aparente com tijolos de 2 ou 3 cores arranjados
            em aparelho do tipo inglês ou flamengo. Usou madeira ou ferro nas
            plataformas das estações, estruturas metálicas para pontes e
            construiu poucas gares. Havia simplicidade e discretos elementos
            decorativos em todas as construções, significando o rigor técnico e
            a modernidade da companhia.
          </p>
        </div>
      </div>
    </div>
  );
}
