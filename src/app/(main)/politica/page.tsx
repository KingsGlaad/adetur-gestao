import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Adetur',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">Termos & Diretrizes</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Política de Privacidade
            </h1>
          </div>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Introdução</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              A sua privacidade é importante para nós. É política da ADETUR Alta Mogiana
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no nosso site e outros canais que possuímos e
              operamos.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Esta política de privacidade explica como coletamos, usamos,
              compartilhamos e protegemos suas informações pessoais. Ao usar
              nossos serviços, você concorda com a coleta e uso de informações
              de acordo com esta política.
            </p>
          </section>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Informações que Coletamos
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <strong className="text-foreground">Informações de Identificação Pessoal:</strong> Nome,
                endereço de e-mail, número de telefone, etc., que você nos
                fornece ao se registrar ou utilizar nossos serviços.
              </li>
              <li>
                <strong className="text-foreground">Dados de Uso:</strong> Informações sobre como você usa
                nosso site, como páginas visitadas, tempo gasto nas páginas e
                outras estatísticas.
              </li>
              <li>
                <strong className="text-foreground">Cookies e Tecnologias de Rastreamento:</strong> Usamos
                cookies para rastrear a atividade em nosso serviço e reter
                certas informações.
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. Como Usamos Suas Informações
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Usamos as informações que coletamos para diversos fins:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>Para fornecer e manter nosso Serviço;</li>
              <li>Para notificá-lo sobre alterações em nosso Serviço;</li>
              <li>
                Para permitir que você participe de recursos interativos do
                nosso Serviço quando você optar por fazê-lo;
              </li>
              <li>Para fornecer atendimento e suporte ao cliente;</li>
              <li>
                Para fornecer análises ou informações valiosas para que possamos
                melhorar o Serviço;
              </li>
              <li>Para monitorar o uso do Serviço;</li>
              <li>Para detectar, prevenir e resolver problemas técnicos.</li>
            </ul>
          </section>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Seus Direitos</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Você também pode se opor ao processamento de
              suas informações pessoais. Se desejar exercer algum desses
              direitos, entre em contato conosco.
            </p>
          </section>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Segurança dos Dados
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              A segurança de seus dados é importante para nós, mas lembre-se de
              que nenhum método de transmissão pela Internet ou método de
              armazenamento eletrônico é 100% seguro. Embora nos esforcemos
              para usar meios comercialmente aceitáveis para proteger suas
              Informações Pessoais, não podemos garantir sua segurança
              absoluta.
            </p>
          </section>

          <section className="bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              6. Alterações a Esta Política de Privacidade
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Podemos atualizar nossa Política de Privacidade de tempos em
              tempos. Notificaremos você sobre quaisquer alterações, publicando
              a nova Política de Privacidade nesta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}