import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acessibilidade | ADETUR - Alta Mogiana",
  description:
    "Informações sobre as políticas de acessibilidade do portal da ADETUR Alta Mogiana.",
};

const leis = [
  {
    title: "Decreto nº 5.296, de 02 de dezembro de 2004",
    href: "http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5296.htm",
  },
  {
    title:
      "Decreto nº 6.949, de 25 de agosto de 2009 - Promulga a Convenção Internacional sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo, assinados em Nova York, em 30 de março de 2007",
    href: "http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6949.htm",
  },
  {
    title:
      "Decreto nº 7.724, de 16 de Maio de 2012 - Regulamenta a lei que dispõe sobre o acesso a informações.",
    href: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7724.htm",
  },
  {
    title: "LEI Nº 13.146, DE 6 DE JULHO DE 2015",
    href: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
];

export default function AcessibilidadePage() {
  return (
    <main className="bg-background text-foreground py-16 sm:py-24 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert max-w-none text-justify text-muted-foreground">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-left mb-8">
            Acessibilidade
          </h1>

          <p>
            O portal da ADETUR Alta Mogiana foi construído a partir de pesquisas
            sobre usabilidade e acessibilidade. Usabilidade para o munícipe
            encontrar a informação que deseja da melhor forma, e de um jeito
            mais fácil e intuitivo, e acessibilidade para incluir cidadãs e
            cidadãos com deficiências no uso de produtos, serviços e informações
            disponibilizados na internet.
          </p>

          <p>
            Seguindo padrões internacionais como o World Content Accessibility
            Guide (WCAG) e o Modelo de Acessibilidade em Governo Eletrônico
            (e-MAG) estabelecido federalmente pela Portaria nº 03, de 07 de Maio
            de 2007, o novo Portal da ADETUR Alta Mogiana deseja assim oferecer
            um melhor acesso à rede de informações em formatos alternativos e
            inclusivos.
          </p>

          <p>
            A acessibilidade no Portal está inserida na programação HTML das
            páginas e é automaticamente identificada por programas de leitura de
            tela como o Jaws e o Voiceover. O Portal também possui o botão de
            acesso à ferramenta VLIBRAS em sua lateral, que traduz conteúdos
            digitais (texto, áudio e vídeo) para a Língua Brasileira de Sinais -
            LIBRAS. Além disso, é possível controlar o tamanho das letras nas
            páginas e o contraste das cores por meio de botões localizados na
            barra de acessibilidade do Portal.
          </p>

          <h2 className="text-2xl font-bold mt-12 text-left mb-8 text-foreground">
            Leis e decretos sobre acessibilidade:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {leis.map((lei) => (
              <li key={lei.href}>
                <Link href={lei.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{lei.title}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 p-4 rounded-xl bg-card border border-border text-card-foreground text-sm">
            <strong className="text-foreground">Art. 63 da LEI Nº 13.146:</strong> É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso às informações disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente. § 1o Os sítios devem conter símbolo de acessibilidade em destaque.
          </p>
        </div>
      </div>
    </main>
  );
}