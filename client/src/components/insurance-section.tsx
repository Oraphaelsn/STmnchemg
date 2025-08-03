export default function InsuranceSection() {
  const insuranceCompanies = [
    "Bradesco Saúde",
    "Amil",
    "SulAmérica",
    "Unimed"
  ];

  const privateFeatures = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20,8H4V6C4,3.79 5.79,2 8,2H16C18.21,2 20,3.79 20,6V8M20,8V19C20,20.1 19.1,21 18,21H6C4.9,21 4,20.1 4,19V8H20M16,11V13H14V11H10V13H8V11H16M8,15H16V17H8V15Z"/>
        </svg>
      ),
      text: "Parcelamento facilitado"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5,2C7.3,2 8,2.7 8,3.5V5H16V3.5C16,2.7 16.7,2 17.5,2C18.3,2 19,2.7 19,3.5V5C20.1,5 21,5.9 21,7V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V7C3,5.9 3.9,5 5,5V3.5C5,2.7 5.7,2 6.5,2M5,9V19H19V9H5M7,11H17V13H7V11M7,15H13V17H7V15Z"/>
        </svg>
      ),
      text: "Condições especiais"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
        </svg>
      ),
      text: "Agilidade no atendimento"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,16L3,14L5,12L6.4,13.4L5,14.8L3.6,13.4L5,12L6.4,13.4L9,16L15,10L16.4,11.4L9,19L5,16Z"/>
        </svg>
      ),
      text: "Tratamento personalizado"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Convênios e Planos de Saúde</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais convênios e oferecemos facilidades de pagamento
          </p>
        </div>

        <div className="bg-gradient-to-br from-[hsl(207,90%,97%)] to-[hsl(142,76%,96%)] rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Atendemos Diversos Convênios</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {insuranceCompanies.map((company, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                    </svg>
                    <div className="font-medium text-gray-900">{company}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                E muitos outros. Entre em contato para verificar se seu convênio está credenciado.
              </p>
              <a 
                href="tel:+551140028922" 
                className="bg-[hsl(207,90%,54%)] text-white px-8 py-3 rounded-lg hover:bg-[hsl(207,90%,49%)] transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Verificar Cobertura
              </a>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Atendimento Particular</h4>
                <div className="space-y-4">
                  {privateFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-[hsl(207,90%,54%)] mr-3">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[hsl(207,90%,97%)] rounded-lg">
                  <p className="text-sm text-[hsl(207,90%,39%)]">
                    <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
                    </svg>
                    Consulte nossas condições especiais para tratamento particular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
