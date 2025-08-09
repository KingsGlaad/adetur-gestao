// components/Timeline.tsx
type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  {
    year: "1872",
    title: "Fundação da Companhia Mogiana",
    description:
      "Fundada por produtores de café para expandir a malha ferroviária.",
  },
  {
    year: "1875",
    title: "Linha Campinas a Jaguariúna",
    description:
      "Inauguração do primeiro trecho da linha principal ligando Campinas a Jaguariúna.",
  },
  {
    year: "1883",
    title: "Chegada a Ribeirão Preto",
    description:
      "Após alcançar Casa Branca em 1878, a linha foi desviada para Ribeirão Preto.",
  },
  {
    year: "1894",
    title: "Construção da estação de Brodowski",
    description:
      "Estação inaugurada como parte da expansão da Companhia Mogiana.",
  },
  {
    year: "1886-1888",
    title: "Estações na Linha do Rio Grande",
    description:
      "Foram inauguradas as estações em Batatais, Franca, Rifaina e Jaguara (MG).",
  },
  {
    year: "1889-1896",
    title: "Linha do Catalão",
    description:
      "Expansão para Uberaba e Araguari, consolidando presença em Minas Gerais.",
  },
  {
    year: "1900-1915",
    title: "Segundo ramal para Minas Gerais",
    description:
      "Construção do ramal ligando Entroncamento a Igarapava e Uberaba.",
  },
  {
    year: "1920-1940",
    title: "Consolidação da rede",
    description:
      "Foco na consolidação da malha ferroviária sem expansão significativa.",
  },
  {
    year: "1952-1971",
    title: "Incorporação à FEPASA",
    description:
      "Companhia passou a pertencer ao governo paulista e integrou a FEPASA.",
  },
  {
    year: "1998",
    title: "Privatização da RFFSA",
    description:
      "Bens da FEPASA foram absorvidos pela RFFSA, que foi privatizada no mesmo ano.",
  },
];

export function Timeline() {
  return (
    <section className="py-12 mb-16 bg-gray-50">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">Linha do Tempo</h2>
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-accent">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
              <h3 className="text-xl font-semibold text-blue-900 ">
                {event.year} - {event.title}
              </h3>
              <p className="text-neutral-900">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
