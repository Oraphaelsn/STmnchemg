export default function TeamSection() {
  const teamMembers = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V7A3,3 0 0,1 12,10A3,3 0 0,1 9,7V5A3,3 0 0,1 12,2M21,22H3V20A2,2 0 0,1 5,18H19A2,2 0 0,1 21,20V22M12,13C14.67,13 20,14.33 20,17V19H4V17C4,14.33 9.33,13 12,13Z"/>
        </svg>
      ),
      title: "Psiquiatras",
      description: "Especialistas em diagnóstico e tratamento medicamentoso",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L12,2L3,7V9C3,14.55 6.84,19.74 12,21C17.16,19.74 21,14.55 21,9M12,4.5C10.76,4.5 9.76,5.5 9.76,6.75C9.76,8 10.76,9 12,9S14.24,8 14.24,6.75C14.24,5.5 13.24,4.5 12,4.5Z"/>
        </svg>
      ),
      title: "Psicólogos",
      description: "Terapeutas especializados em diferentes abordagens",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3C13.75,3 16.5,4 16.5,4C16.5,4 13.75,5 12,5C10.25,5 7.5,4 7.5,4C7.5,4 10.25,3 12,3M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
        </svg>
      ),
      title: "Terapeutas",
      description: "Especialistas em terapia ocupacional e recreativa",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.5,12A4.5,4.5 0 0,0 12,7.5A4.5,4.5 0 0,0 7.5,12A4.5,4.5 0 0,0 12,16.5A4.5,4.5 0 0,0 16.5,12M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
        </svg>
      ),
      title: "Enfermeiros",
      description: "Cuidados especializados em saúde mental 24h",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  const infrastructureFeatures = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      ),
      title: "Ambiente Natural",
      description: "Cercado por mata atlântica preservada",
      bgColor: "bg-[hsl(142,76%,90%)]",
      iconColor: "text-[hsl(142,76%,36%)]"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,7H11V14H3V5H1V20H3V16H21V20H23V11A4,4 0 0,0 19,7M19,9A2,2 0 0,1 21,11V14H13V9H19Z"/>
        </svg>
      ),
      title: "Acomodações Confortáveis",
      description: "Quartos individuais e coletivos bem equipados",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L4.86,7.71L13.43,16.29L9.86,19.86L11.29,21.29L12.71,19.86L14.14,21.29L16.29,19.14L17.71,20.57L19.14,19.14L17.71,17.71L20.57,14.86Z"/>
        </svg>
      ),
      title: "Espaços Terapêuticos",
      description: "Salas de terapia, recreação e atividades físicas",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe Multidisciplinar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 100 profissionais especializados trabalham juntos para oferecer o melhor tratamento em saúde mental
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* Professional medical team in consultation */}
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe médica multidisciplinar em consulta" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Profissionais Especializados</h3>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe é formada por profissionais altamente qualificados, com experiência em saúde mental e abordagem humanizada ao tratamento.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`${member.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <div className={member.iconColor}>
                      {member.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{member.title}</h4>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Infraestrutura Acolhedora</h3>
              <p className="text-lg text-gray-600 mb-6">
                Localizada em Ibiúna/SP, nossa unidade oferece um ambiente terapêutico em meio à natureza, 
                promovendo bem-estar e tranquilidade para o processo de recuperação.
              </p>
              
              <div className="space-y-4">
                {infrastructureFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${feature.bgColor} w-10 h-10 rounded-full flex items-center justify-center mr-4`}>
                      <div className={feature.iconColor}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Peaceful therapeutic environment with nature */}
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Ambiente terapêutico tranquilo em meio à natureza" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
