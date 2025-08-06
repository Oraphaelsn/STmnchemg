export default function DifferentialsSection() {
  const differentials = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      title: "ISO 9001:2015",
      description: "Certificação internacional de gestão da qualidade em serviços de saúde",
      bgColor: "from-[hsl(207,90%,97%)] to-[hsl(207,90%,94%)]",
      iconBg: "bg-[hsl(207,90%,54%)]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      ),
      title: "Abordagem Humanista",
      description: "Tratamento individualizado com foco no acolhimento e dignidade humana",
      bgColor: "from-[hsl(142,76%,96%)] to-[hsl(142,76%,92%)]",
      iconBg: "bg-[hsl(142,76%,36%)]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      ),
      title: "Cinturão Verde",
      description: "Localização privilegiada em área de preservação ambiental",
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
        </svg>
      ),
      title: "Desde 2002",
      description: "Mais de 20 anos de experiência em tratamentos de saúde mental",
      bgColor: "from-[var(--soft-green)] to-[var(--secondary)]",
      iconBg: "bg-[var(--warm-gold)]"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reconhecimento e certificações que garantem a qualidade do nosso atendimento em saúde mental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} className={`text-center p-6 bg-gradient-to-br ${differential.bgColor} rounded-xl`}>
              <div className={`${differential.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                {differential.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{differential.title}</h3>
              <p className="text-gray-600">{differential.description}</p>
            </div>
          ))}
        </div>

        {/* Hospital Network Information */}
        <div className="mt-16 bg-gradient-to-br from-[var(--soft-green)] to-[var(--secondary)] rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Grupo Hospitais Estância</h3>
            <p className="text-xl text-gray-600">
              Fazemos parte da maior rede própria de hospitais psiquiátricos do Brasil
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--trust-blue)] mb-2">450+</div>
              <div className="text-gray-900 font-semibold mb-1">Leitos Disponíveis</div>
              <div className="text-sm text-gray-600">Em toda a rede nacional</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">100+</div>
              <div className="text-gray-900 font-semibold mb-1">Profissionais</div>
              <div className="text-sm text-gray-600">Equipe multidisciplinar especializada</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--warm-gold)] mb-2">1000+</div>
              <div className="text-gray-900 font-semibold mb-1">Internações/Ano</div>
              <div className="text-sm text-gray-600">Atendimentos realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
