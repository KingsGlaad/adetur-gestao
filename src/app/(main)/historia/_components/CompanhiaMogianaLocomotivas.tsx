import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";

type LocomotivaProps = {
  url: string;
  title: string;
  description: string;
};

const locomotivas: LocomotivaProps[] = [
  {
    title: "Locomotiva a vapor American Locomotive Company",
    url: "/cmf/locomotivas/locomotiva_American.jpg",
    description:
      "Alugada à Estrada de Ferro São Paulo e Minas em 1964. Fez parte do patrimônio transferido para a Ferrovia Paulista S.A., em 1971. Na ABPF - Regional Campinas, aguardando restauração.",
  },
  {
    title: "Locomotiva a vapor Beyer Peacock",
    url: "/cmf/locomotivas/locomotiva_Beyer_Peacock.jpg",
    description:
      "Fez parte do patrimônio transferido à Ferrovia Paulista S.A. em 1971. Foi doada à prefeitura de Campinas e ficou em exposição no Parque Portugal por anos. Após atos de vandalismo, foi doada à Associação Brasileira de Preservação Ferroviária, onde operou na extinta Estrada de Ferro Vale do Bom Jesus, entre Pedregulho e Rifaina. Com a desativação do trem, foi transferida para a ABPF - Campinas, onde hoje se encontra aguardando restauração.",
  },
  {
    title: "Locomotiva Beyer Garratt",
    url: "/cmf/locomotivas/locomotiva_garratt.jpg",
    description:
      "Sem descrição. Caso saiba, nos envie um email em: contato@adeturaltamogiana.com.br",
  },
  {
    title: "Locomotiva Mogyana",
    url: "/cmf/locomotivas/locomotiva_Mogyana.jpg",
    description:
      "Sem descrição. Caso saiba, nos envie um email em: contato@adeturaltamogiana.com.br",
  },
  {
    title: "Locomotiva diesel-elétrica General Motors modelo G12",
    url: "/cmf/locomotivas/locomotiva_diesel.jpg",
    description:
      "Sem descrição. Caso saiba, nos envie um email em: contato@adeturaltamogiana.com.br",
  },
  {
    title: "Carro de passageiros tipo Pullman",
    url: "/cmf/locomotivas/carro_pullman.jpg",
    description:
      "Sem descrição. Caso saiba, nos envie um email em: contato@adeturaltamogiana.com.br",
  },
];

export default function LocomotivasSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <TooltipProvider>
          {locomotivas.map((locomotiva, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="w-full rounded-2xl overflow-hidden bg-card border border-border/80 shadow-sm transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={locomotiva.url}
                      alt={locomotiva.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-card-foreground line-clamp-1">
                      {locomotiva.title}
                    </h3>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-md bg-popover text-popover-foreground border border-border p-4 rounded-xl shadow-xl">
                <h3 className="font-bold mb-1 text-sm text-foreground">{locomotiva.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{locomotiva.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
