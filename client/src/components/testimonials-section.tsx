export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carmen M.",
      role: "Familiar de paciente - São Paulo/SP",
      message: "Depois de meses procurando um lugar adequado, encontramos na Estância Morro Grande exatamente o que precisávamos. A internação foi imediata e o acolhimento da equipe nos tranquilizou desde o primeiro momento. Recomendo de coração.",
      bgColor: "bg-[hsl(207,90%,97%)]",
      iconColor: "text-[hsl(207,90%,54%)]",
      treatment: "Internação Involuntária - Depressão Severa"
    },
    {
      name: "Roberto F.",
      role: "Paciente - Sorocaba/SP",
      message: "A localização em Ibiúna, cercada pela natureza, fez uma diferença incrível no meu processo de recuperação. Saí de lá com uma nova perspectiva de vida e ferramentas para lidar com minha ansiedade. Eternamente grato.",
      bgColor: "bg-[hsl(142,76%,96%)]",
      iconColor: "text-[hsl(142,76%,36%)]",
      treatment: "Internação Voluntária - Transtorno de Ansiedade"
    },
    {
      name: "Dra. Patricia L.",
      role: "Médica Psiquiatra - Referência de paciente",
      message: "Como profissional, posso afirmar que a Estância Morro Grande mantém excelentes padrões de atendimento. A certificação ISO 9001:2015 não é apenas um selo, é refletida na qualidade do cuidado oferecido aos pacientes.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      treatment: "Avaliação Profissional"
    },
    {
      name: "Sandra T.",
      role: "Familiar de paciente - Campinas/SP", 
      message: "Minha filha foi internada em estado crítico e a equipe da Estância nos acolheu 24h. O tratamento humanizado e a participação da família no processo foram fundamentais. Hoje ela está bem e em acompanhamento ambulatorial.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      treatment: "Emergência Psiquiátrica - TEA"
    }
  ];

  const StarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
    </svg>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Depoimentos de Famílias</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que as famílias dizem sobre nosso atendimento e tratamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`${testimonial.bgColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                  <svg className={`w-6 h-6 ${testimonial.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <span className={`text-xs ${testimonial.iconColor} bg-white px-2 py-1 rounded-full font-medium mt-1 inline-block border`}>
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.message}"
              </p>
              <div className="flex text-yellow-400">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
