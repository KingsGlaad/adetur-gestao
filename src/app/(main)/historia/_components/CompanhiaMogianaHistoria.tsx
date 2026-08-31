import Image from "next/image";
import React from "react";

export default function HistoriaSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
        <p>
          A <strong className="text-foreground font-semibold">Companhia Mogiana de Estradas de Ferro</strong> foi fundada
          em 1872 por produtores de café. O primeiro trecho da linha principal
          ligava <strong className="text-foreground font-semibold">Campinas</strong> a <strong className="text-foreground font-semibold">Jaguariúna</strong>,
          inaugurado em 1875. Em 1878, chegou a <strong className="text-foreground font-semibold">Casa Branca</strong> e,
          em vez de seguir diretamente para Franca, desviou-se para{" "}
          <strong className="text-foreground font-semibold">Ribeirão Preto</strong>, alcançada em 1883. Só depois iniciou
          a construção da <em className="text-foreground">Linha do Rio Grande</em> em direção a Minas
          Gerais.
        </p>
        <p>
          Entre 1886 e 1888, foram inauguradas as estações de{" "}
          <strong className="text-foreground font-semibold">Batatais</strong>, <strong className="text-foreground font-semibold">Franca</strong>,{" "}
          <strong className="text-foreground font-semibold">Rifaina</strong> e <strong className="text-foreground font-semibold">Jaguara (MG)</strong>. A expansão
          continuou com a <em className="text-foreground">Linha do Catalão</em>, chegando a{" "}
          <strong className="text-foreground font-semibold">Uberaba</strong> em 1889 e <strong className="text-foreground font-semibold">Araguari</strong> em 1896.
        </p>
        <p>
          Por volta de 1899, iniciou-se a construção de um segundo ramal para
          Minas Gerais, ligando <strong className="text-foreground font-semibold">Entroncamento</strong> (1900) a{" "}
          <strong className="text-foreground font-semibold">Igarapava</strong> (1915) e, posteriormente, a Uberaba. Até a
          década de 1910, a Mogiana construiu ramais para atender fazendas,
          adquiriu ferrovias menores e ampliou sua malha entre São Paulo e
          Minas.
        </p>
        <p>
          Entre 1920 e 1940, a companhia focou em consolidar sua rede. Em 1952,
          foi incorporada ao governo paulista e, em 1971, passou a integrar a{" "}
          <strong className="text-foreground font-semibold">FEPASA</strong>. Em 1998, seus bens foram transferidos para a{" "}
          <strong className="text-foreground font-semibold">RFFSA</strong>, que foi privatizada no mesmo ano.
        </p>
      </div>
      <div className="w-full h-full">
        <Image
          src="/cmf/linhas-cmf.jpg"
          width={800}
          height={600}
          alt="Linhas ferroviárias da Companhia Mogiana"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
