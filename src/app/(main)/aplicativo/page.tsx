import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  MapPin,
  Calendar,
  Compass,
  Sparkles,
  ShieldCheck,
  Download,
  CheckCircle2,
  Star,
  QrCode,
  Navigation,
  Coffee,
  Info,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AppQRCode } from "@/components/shared/AppQRCode";

export const metadata: Metadata = {
  title: "Baixe o Aplicativo ADETUR | Disponível para Android e iOS",
  description:
    "Baixe gratuitamente o aplicativo oficial da ADETUR Alta Mogiana. Explore pontos turísticos, eventos, rotas gastronômicas e culturais na palma da sua mão.",
  keywords: [
    "ADETUR",
    "Alta Mogiana",
    "Aplicativo Turismo",
    "App ADETUR",
    "Baixar App Android",
    "Baixar App iOS",
    "Turismo SP",
    "Pontos Turísticos",
  ],
};

// Ícone SVG Google Play Store
function GooglePlayIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path
        fill="#4285F4"
        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.9.02.2z"
      />
      <path
        fill="#34A853"
        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
      />
      <path
        fill="#FBBC04"
        d="M47 512c13 6.8 29.3 4.2 40.7-2.3l297.8-171.1-60.1-60.2L47 512z"
      />
      <path
        fill="#EA4335"
        d="M473.4 233.1L385.6 182l-60.2 60.2 60.2 60.2 87.8-50.6c14.6-8.4 23.6-23.7 23.6-40.4 0-16.6-9-31.9-23.6-40.3z"
      />
    </svg>
  );
}

// Ícone SVG Apple App Store
function AppleIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 170" fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.83-11.87-14.36-5.74-8.89-10.22-19.3-13.43-31.25-3.21-11.94-4.82-23.2-4.82-33.79 0-14.44 3.73-26.65 11.18-36.64 7.45-9.98 17-15.08 28.66-15.31 4.79 0 10.13 1.25 16.03 3.76 5.89 2.5 9.77 3.82 11.64 3.96 1.52-.14 5.62-1.57 12.3-4.3 6.69-2.72 12.28-3.9 16.79-3.53 12.39.98 22.39 5.87 29.99 14.67-10.99 6.63-16.38 15.75-16.17 27.37.21 9.02 3.66 16.65 10.36 22.88 6.7 6.23 14.61 9.68 23.72 10.35-2.06 6.19-4.78 12.87-8.16 20.03zM119.22 31.84c0-7.39 2.66-14.38 7.98-20.97 5.32-6.59 12-10.58 20.04-11.97.22 1.3.33 2.49.33 3.58 0 7.28-2.79 14.36-8.37 21.24-5.58 6.88-12.44 10.87-20.58 11.97-.43-1.09-.6-2.37-.6-3.85h.02-.8z" />
    </svg>
  );
}

const features = [
  {
    icon: Compass,
    title: "Roteiros Turísticos Exclusivos",
    description:
      "Descubra itinerários detalhados de ecoturismo, turismo rural, histórico, religioso e de aventura na região da Alta Mogiana.",
    color:
      "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: MapPin,
    title: "Guia Completo dos Municípios",
    description:
      "Acesse informações detalhadas, história, fotos, monumentos e pontos de visitação de todas as cidades associadas.",
    color: "from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Calendar,
    title: "Calendário Oficial de Eventos",
    description:
      "Fique por dentro de festas tradicionais, feiras culturais, festivais gastronômicos e eventos esportivos em tempo real.",
    color:
      "from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Coffee,
    title: "Gastronomia & Hospedagem",
    description:
      "Encontre os melhores restaurantes, cafeterias artesanais, pousadas aconchegantes e produtores locais da Alta Mogiana.",
    color: "from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    icon: Navigation,
    title: "Navegação & Como Chegar",
    description:
      "Integração rápida com seu aplicativo de mapas favorito para traçar rotas seguras e diretas aos atrativos turísticos.",
    color:
      "from-indigo-500/20 to-purple-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "Informações Oficiais & Acessibilidade",
    description:
      "Dados verificados pela Associação de Desenvolvimento do Turismo, com contatos de emergência e suporte ao turista.",
    color:
      "from-violet-500/20 to-fuchsia-500/10 text-violet-600 dark:text-violet-400",
  },
];

const steps = [
  {
    number: "01",
    title: "Escolha sua plataforma",
    description:
      "Clique no botão da Google Play para Android ou App Store para dispositivos iOS (iPhone/iPad).",
  },
  {
    number: "02",
    title: "Instale gratuitamente",
    description:
      "O download é 100% gratuito, leve e rápido, sem necessidade de assinaturas para explorar.",
  },
  {
    number: "03",
    title: "Viva a Alta Mogiana",
    description:
      "Abra o aplicativo, selecione sua cidade de interesse e aproveite o melhor do turismo regional!",
  },
];

const faqs = [
  {
    question: "O aplicativo da ADETUR é gratuito?",
    answer:
      "Sim! O aplicativo da ADETUR Alta Mogiana é totalmente gratuito tanto para Android quanto para iOS. Nosso objetivo é incentivar e facilitar o acesso ao turismo e à cultura regional.",
  },
  {
    question: "Quais são os requisitos mínimos do sistema?",
    answer:
      "Para Android, é recomendado Android 7.0 ou superior. Para iOS (iPhone), é recomendado iOS 13.0 ou posterior.",
  },
  {
    question: "Consigo utilizar as informações quando estiver sem internet?",
    answer:
      "Sim! As principais informações sobre os municípios e atrativos previamente visualizados ficam salvas em cache no dispositivo para consulta mesmo em áreas rurais com sinal limitado.",
  },
  {
    question:
      "Como os municípios ou comércios locais podem fazer parte do aplicativo?",
    answer:
      "Os municípios associados e parceiros oficiais da ADETUR têm seus atrativos e infraestrutura catalogados pela equipe. Você também pode entrar em contato conosco pela página de 'Faça Parte' para obter mais informações.",
  },
];

export default function AplicativoPage() {
  const androidDownloadUrl =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps";
  const iosDownloadUrl =
    process.env.NEXT_PUBLIC_APP_STORE_URL || "https://www.apple.com/app-store/";

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      {/* Background Decorativo e Atmosférico */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-10 dark:opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/bg/bg-municipios1.png')" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Coluna de Texto & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide shadow-sm animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Aplicativo Oficial ADETUR Alta Mogiana</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                O Turismo da{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
                  Alta Mogiana
                </span>{" "}
                na Palma da Sua Mão
              </h1>

              {/* Subtítulo */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Planeje suas viagens, descubra pontos turísticos fascinantes,
                fique por dentro dos eventos e explore o rico patrimônio
                cultural e gastronômico dos nossos municípios.
              </p>

              {/* Destaques Rápidos */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground font-medium pt-1">
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  100% Gratuito
                </span>
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Sem Anúncios Intrusivos
                </span>
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Guia Oficial
                </span>
              </div>

              {/* BLOCO DOS 2 BOTÕES CTA */}
              <div className="w-full pt-4 space-y-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                  Escolha seu sistema operacional e baixe agora:
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  {/* CTA 1: Android (Google Play) */}
                  <a
                    href={androidDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cta-download-android"
                    className="group relative inline-flex items-center justify-start gap-4 px-6 py-3.5 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-800 dark:border-zinc-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center p-1 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                      <GooglePlayIcon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                        Disponível no
                      </span>
                      <span className="text-lg font-bold tracking-tight text-white leading-tight mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* CTA 2: iOS (App Store) */}
                  <a
                    href={iosDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cta-download-ios"
                    className="group relative inline-flex items-center justify-start gap-4 px-6 py-3.5 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-800 dark:border-zinc-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center p-1 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                      <AppleIcon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                        Baixar na
                      </span>
                      <span className="text-lg font-bold tracking-tight text-white leading-tight mt-0.5">
                        App Store
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* QR Code Inteligente com Auto-detecção */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-muted/40 backdrop-blur-sm border border-border/70 max-w-lg">
                <AppQRCode size={90} className="shrink-0" />
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    <QrCode className="w-4 h-4" />
                    <span>QR Code Inteligente</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Aponte a câmera do seu smartphone. O código detecta se você usa <strong>Android ou iOS</strong> e abre a loja correta automaticamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna do Mockup Smartphone */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Efeitos de Glow / Fundo Luminoso */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-full blur-3xl -z-10 transform scale-90 sm:scale-105" />

              {/* Frame do Smartphone */}
              <div className="relative w-[280px] sm:w-[310px] rounded-[44px] bg-zinc-950 p-3 shadow-2xl ring-1 ring-white/20 border-4 border-zinc-800">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                </div>

                {/* Tela do Aplicativo com a Imagem Real */}
                <div className="relative h-[580px] sm:h-[620px] rounded-[36px] bg-zinc-900 overflow-hidden flex items-center justify-center border border-zinc-800">
                  <Image
                    src="/assets/app-screen.png"
                    alt="Interface do Aplicativo ADETUR Alta Mogiana"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 310px"
                    className="object-cover object-top select-none"
                  />
                  {/* Reflexo sutil de vidro na tela */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos e Vantagens */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              Tudo em um só lugar
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Por que ter o app da ADETUR no seu celular?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Desenvolvido especialmente para turistas, visitantes e moradores
              que desejam aproveitar o melhor que a nossa região tem a oferecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-card border border-border/70 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona em 3 Passos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              Fácil e Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Como começar em 3 etapas simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card/60 border border-border/60 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-black text-xl flex items-center justify-center mb-5 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Dúvidas Frequentes */}
      <section className="py-16 md:py-20 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              Tire suas dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-card border border-border rounded-xl px-5 py-1"
              >
                <AccordionTrigger className="text-left font-semibold text-base sm:text-lg hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Banner CTA Final de Download */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-zinc-900 to-zinc-950 p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-emerald-500/20 overflow-hidden text-center flex flex-col items-center">
            {/* Elementos Decorativos */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <Smartphone className="w-4 h-4" />
                <span>Disponível para Download Gratuito</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Pronto para explorar o melhor da Alta Mogiana?
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Baixe agora mesmo no seu smartphone e tenha o guia turístico
                oficial sempre com você.
              </p>

              {/* OS 2 BOTÕES CTA REPETIDOS NO FINAL */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* CTA Android */}
                <a
                  href={androidDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-bottom-download-android"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-7 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <GooglePlayIcon className="w-7 h-7" />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-600 font-semibold leading-none">
                      Disponível no
                    </span>
                    <span className="text-lg font-black tracking-tight text-zinc-950 leading-tight mt-0.5">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* CTA iOS */}
                <a
                  href={iosDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-bottom-download-ios"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-7 py-4 rounded-2xl bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <AppleIcon className="w-7 h-7" />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-300 font-medium leading-none">
                      Baixar na
                    </span>
                    <span className="text-lg font-black tracking-tight text-white leading-tight mt-0.5">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>
                  Uma iniciativa da ADETUR Alta Mogiana e Municípios Associados
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
