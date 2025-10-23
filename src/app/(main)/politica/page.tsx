import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Adetur',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Política de Privacidade
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="mb-4">
              A sua privacidade é importante para nós. É política do Adetur
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no nosso site e outros sites que possuímos e
              operamos.
            </p>
            <p>
              Esta política de privacidade explica como coletamos, usamos,
              compartilhamos e protegemos suas informações pessoais. Ao usar
              nossos serviços, você concorda com a coleta e uso de informações
              de acordo com esta política.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="mb-4">
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </p>
            <p className="mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Informações de Identificação Pessoal:</strong> Nome,
                endereço de e-mail, número de telefone, etc., que você nos
                fornece ao se registrar ou utilizar nossos serviços.
              </li>
              <li>
                <strong>Dados de Uso:</strong> Informações sobre como você usa
                nosso site, como páginas visitadas, tempo gasto nas páginas e
                outras estatísticas.
              </li>
              <li>
                <strong>Cookies e Tecnologias de Rastreamento:</strong> Usamos
                cookies para rastrear a atividade em nosso serviço e reter
                certas informações.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p className="mb-4">
              Usamos as informações que coletamos para diversos fins:
            </p>
            <ul className="list-disc list-inside space-y-2">
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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
            <p className="mb-4">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Você também pode se opor ao processamento de
              suas informações pessoais. Se desejar exercer algum desses
              direitos, entre em contato conosco.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text.2xl font-semibold mb-4">
              5. Segurança dos Dados
            </h2>
            <p>
              A segurança de seus dados é importante para nós, mas lembre-se de
              que nenhum método de transmissão pela Internet ou método de
              armazenamento eletrônico é 100% seguro. Embora nos esforcemos
              para usar meios comercialmente aceitáveis para proteger suas
              Informações Pessoais, não podemos garantir sua segurança
              absoluta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Alterações a Esta Política de Privacidade
            </h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em
              tempos. Notificaremos você sobre quaisquer alterações, publicando
              a nova Política de Privacidade nesta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}