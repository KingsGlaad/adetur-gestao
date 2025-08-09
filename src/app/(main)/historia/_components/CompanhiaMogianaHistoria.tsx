import Image from "next/image";
import React from "react";

export default function HistoriaSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <p className="text-gray-800 leading-relaxed text-justify">
          A <strong>Companhia Mogiana de Estradas de Ferro</strong> foi fundada
          em 1872 por produtores de café. O primeiro trecho da linha principal
          ligava <strong>Campinas</strong> a <strong>Jaguariúna</strong>,
          inaugurado em 1875. Em 1878, chegou a <strong>Casa Branca</strong> e,
          em vez de seguir diretamente para Franca, desviou-se para{" "}
          <strong>Ribeirão Preto</strong>, alcançada em 1883. Só depois iniciou
          a construção da <em>Linha do Rio Grande</em> em direção a Minas
          Gerais.
        </p>
        <p className="text-gray-800 leading-relaxed text-justify mt-4">
          Entre 1886 e 1888, foram inauguradas as estações de{" "}
          <strong>Batatais</strong>, <strong>Franca</strong>,{" "}
          <strong>Rifaina</strong> e <strong>Jaguara (MG)</strong>. A expansão
          continuou com a <em>Linha do Catalão</em>, chegando a{" "}
          <strong>Uberaba</strong> em 1889 e <strong>Araguari</strong> em 1896.
        </p>
        <p className="text-gray-800 leading-relaxed text-justify mt-4">
          Por volta de 1899, iniciou-se a construção de um segundo ramal para
          Minas Gerais, ligando <strong>Entroncamento</strong> (1900) a{" "}
          <strong>Igarapava</strong> (1915) e, posteriormente, a Uberaba. Até a
          década de 1910, a Mogiana construiu ramais para atender fazendas,
          adquiriu ferrovias menores e ampliou sua malha entre São Paulo e
          Minas.
        </p>
        <p className="text-gray-800 leading-relaxed text-justify mt-4">
          Entre 1920 e 1940, a companhia focou em consolidar sua rede. Em 1952,
          foi incorporada ao governo paulista e, em 1971, passou a integrar a{" "}
          <strong>FEPASA</strong>. Em 1998, seus bens foram transferidos para a{" "}
          <strong>RFFSA</strong>, que foi privatizada no mesmo ano.
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
