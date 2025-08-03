export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja de perto nosso ambiente terapêutico, localizado em meio à natureza de Ibiúna/SP, 
            projetado para proporcionar bem-estar e recuperação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video 
                controls 
                className="absolute inset-0 w-full h-full object-cover"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' font-size='48' fill='%236b7280'%3EEstância Morro Grande%3C/text%3E%3C/svg%3E"
              >
                <source src="/attached_assets/WhatsApp Video 2025-07-18 at 09.25.19_1752995612939-BMs3pHkN_1754246975683.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>

          {/* Video description */}
          <div className="mt-8 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[hsl(142,76%,96%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[hsl(142,76%,36%)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ambiente Terapêutico</h3>
                <p className="text-gray-600 text-sm">Espaços projetados para promover tranquilidade e bem-estar durante o tratamento</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[hsl(207,90%,97%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[hsl(207,90%,54%)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Localização Privilegiada</h3>
                <p className="text-gray-600 text-sm">Em meio à natureza de Ibiúna/SP, longe da agitação urbana</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,12L11,14L15,10L13,8L11,10L9,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Certificação ISO</h3>
                <p className="text-gray-600 text-sm">Qualidade certificada ISO 9001:2015 em todos os nossos processos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}