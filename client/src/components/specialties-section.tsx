export default function SpecialtiesSection() {
  const specialties = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      title: "Dependência Química",
      description: "Tratamento integral para dependência de álcool, drogas e outras substâncias com programas de desintoxicação e reabilitação.",
      features: ["Desintoxicação assistida", "Terapia individual e em grupo", "Programa de prevenção à recaída"],
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      ),
      title: "Depressão",
      description: "Tratamento especializado para todos os tipos de depressão com terapias personalizadas e acompanhamento médico.",
      features: ["Psicoterapia individual", "Medicação assistida", "Terapias complementares"],
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12Z"/>
        </svg>
      ),
      title: "Transtorno Bipolar",
      description: "Acompanhamento especializado para estabilização do humor e controle dos episódios maníacos e depressivos.",
      features: ["Estabilização do humor", "Psicoeducação familiar", "Monitoramento contínuo"],
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
        </svg>
      ),
      title: "Ansiedade",
      description: "Tratamento para transtornos de ansiedade, síndrome do pânico e fobias com técnicas modernas de terapia.",
      features: ["Terapia cognitivo-comportamental", "Técnicas de relaxamento", "Controle da ansiedade"],
      bgColor: "from-yellow-50 to-yellow-100",
      iconBg: "bg-yellow-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2L8,6V8H16V6L12,2M18,8V6L22,10L18,14V12H16V14L12,18L8,14V12H6V14L2,10L6,6V8H8V6L12,2L16,6V8H18Z"/>
        </svg>
      ),
      title: "TEA - Transtorno do Espectro Autista",
      description: "Programas especializados para crianças, adolescentes e adultos com TEA, focando no desenvolvimento de habilidades.",
      features: ["Terapia comportamental", "Desenvolvimento de habilidades sociais", "Suporte familiar"],
      bgColor: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
        </svg>
      ),
      title: "Tratamento Infantojuvenil",
      description: "Atendimento especializado para crianças e adolescentes com transtornos mentais, em ambiente acolhedor e seguro.",
      features: ["Equipe especializada", "Ambiente lúdico", "Participação da família"],
      bgColor: "from-red-50 to-red-100",
      iconBg: "bg-red-500"
    }
  ];

  const internmentTypes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
        </svg>
      ),
      title: "Internação Voluntária",
      description: "Quando o próprio paciente reconhece a necessidade de tratamento",
      bgColor: "bg-[hsl(207,90%,97%)]"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V6.5C15,7.3 14.3,8 13.5,8H12V10.5A0.5,0.5 0 0,1 11.5,11A0.5,0.5 0 0,1 11,10.5V8H9.5C8.7,8 8,7.3 8,6.5V5A3,3 0 0,1 11,2H12M12,4A1,1 0 0,0 11,5V6H13V5A1,1 0 0,0 12,4M12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13M12,14A1,1 0 0,0 11,15A1,1 0 0,0 12,16A1,1 0 0,0 13,15A1,1 0 0,0 12,14M7,19H17V18A5,5 0 0,0 12,13A5,5 0 0,0 7,18V19M5,19V18A7,7 0 0,1 12,11A7,7 0 0,1 19,18V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19Z"/>
        </svg>
      ),
      title: "Internação Involuntária",
      description: "Solicitada por familiares com avaliação médica especializada",
      bgColor: "bg-[hsl(142,76%,96%)]"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,6.9L3.87,4.78L5.28,3.37L7.4,5.5L6,6.9M13,1V4H11V1H13M20.13,4.78L18,6.9L16.6,5.5L18.72,3.37L20.13,4.78M4.5,10.5V12.5H1.5V10.5H4.5M19.5,10.5H22.5V12.5H19.5V10.5M6,17.1L7.4,18.5L5.28,20.62L3.87,19.21L6,17.1M18,17.1L20.13,19.22L18.72,20.63L16.6,18.5L18,17.1M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>
        </svg>
      ),
      title: "Hospital-Dia",
      description: "Tratamento intensivo durante o dia, retorno para casa à noite",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Especialidades e Tratamentos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos tratamentos especializados com abordagem multidisciplinar para diversos transtornos mentais e dependências
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className={`bg-gradient-to-br ${specialty.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
              <div className={`${specialty.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white`}>
                {specialty.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{specialty.title}</h3>
              <p className="text-gray-600 mb-4">{specialty.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {specialty.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modalidades de Internação</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {internmentTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className={`${type.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-[hsl(207,90%,54%)]`}>
                    {type.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
