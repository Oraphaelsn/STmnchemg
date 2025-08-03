export default function EducationalSection() {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Atividades terapêuticas em grupo",
      category: "ARTIGO EDUCATIVO",
      categoryColor: "text-[hsl(207,90%,54%)]",
      title: "Como Reconhecer Sinais de Depressão",
      description: "Aprenda a identificar os principais sintomas da depressão e quando buscar ajuda profissional."
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Suporte familiar em saúde mental",
      category: "GUIA PARA FAMÍLIAS",
      categoryColor: "text-[hsl(142,76%,36%)]",
      title: "Apoiando um Familiar em Tratamento",
      description: "Dicas importantes para familiares sobre como apoiar durante o processo de recuperação."
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Atividades de bem-estar mental",
      category: "PREVENÇÃO",
      categoryColor: "text-green-600",
      title: "Práticas Diárias para Saúde Mental",
      description: "Atividades e hábitos que contribuem para o bem-estar mental e prevenção de transtornos."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conteúdo Educativo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Materiais informativos para ajudar você e sua família a entender melhor a saúde mental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img 
                src={article.image} 
                alt={article.alt} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className={`text-sm ${article.categoryColor} font-medium mb-2`}>
                  {article.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <button className="text-[hsl(207,90%,54%)] hover:text-[hsl(207,90%,49%)] font-medium inline-flex items-center">
                  Ler mais 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[hsl(207,90%,54%)] text-white px-8 py-3 rounded-lg hover:bg-[hsl(207,90%,49%)] transition-colors inline-flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"/>
            </svg>
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  );
}
