import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a internação voluntária?",
      answer: "A internação voluntária ocorre quando o próprio paciente reconhece a necessidade de tratamento e solicita a internação. É um processo que respeita completamente a autonomia do paciente, seguindo todos os protocolos médicos e legais estabelecidos pela reforma psiquiátrica."
    },
    {
      question: "Quando é necessária a internação involuntária?",
      answer: "A internação involuntária é solicitada por familiares quando o paciente não reconhece sua condição e oferece risco a si mesmo ou a terceiros. Sempre requer avaliação médica especializada e segue rigorosamente a legislação brasileira, sendo revisada periodicamente."
    },
    {
      question: "Quais convênios são aceitos?",
      answer: "Trabalhamos com os principais convênios como Bradesco Saúde, Amil, SulAmérica, Unimed, Hapvida, NotreDame Intermédica e muitos outros. También oferecemos condições especiais para atendimento particular com facilidades de pagamento."
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "O tempo de tratamento varia conforme cada caso, sendo sempre personalizado. Pode variar de alguns dias até algumas semanas, dependendo da avaliação médica contínua e da evolução do paciente. Nossa equipe monitora constantemente o progresso."
    },
    {
      question: "Familiares podem visitar o paciente?",
      answer: "Sim, a participação da família é fundamental no processo de recuperação. Temos horários específicos para visitas e oferecemos orientação familiar para auxiliar no processo terapêutico e na reintegração social."
    },
    {
      question: "O hospital oferece atendimento 24 horas?",
      answer: "Sim, mantemos atendimento médico e de enfermagem 24 horas por dia, 7 dias por semana. Nossa equipe está preparada para emergências psiquiátricas e oferece acolhimento imediato quando necessário."
    },
    {
      question: "Qual é a localização e como chegar?",
      answer: "Estamos localizados em Ibiúna/SP, região do cinturão verde, proporcionando um ambiente tranquilo e terapêutico. A localização privilegiada em meio à natureza contribui significativamente para o processo de recuperação."
    },
    {
      question: "Como funciona o processo de alta?",
      answer: "A alta hospitalar é sempre uma decisão médica baseada na evolução clínica do paciente. Oferecemos orientações para continuidade do tratamento ambulatorial e suporte familiar para garantir a reinserção social adequada."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre internação psiquiátrica e nossos tratamentos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-[hsl(207,90%,54%)] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[hsl(207,90%,97%)] to-[hsl(142,76%,96%)] p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-600 mb-6">Nossa equipe está disponível 24h para esclarecer todas as suas questões</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+5515997559520" 
                className="bg-[hsl(207,90%,54%)] text-white px-6 py-3 rounded-lg hover:bg-[hsl(207,90%,49%)] transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Falar com Especialista
              </a>
              <a 
                href="https://wa.me/5515997559520?text=Olá,%20tenho%20algumas%20dúvidas%20sobre%20internação%20psiquiátrica" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                WhatsApp 24h
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}