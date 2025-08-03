import { useState } from "react";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[hsl(207,90%,54%)]">
              <svg className="inline w-8 h-8 text-[hsl(142,76%,36%)] mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
              Estância Morro Grande
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('especialidades')} 
              className="text-gray-700 hover:text-[hsl(207,90%,54%)] transition-colors"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="text-gray-700 hover:text-[hsl(207,90%,54%)] transition-colors"
            >
              Nossa Equipe
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="text-gray-700 hover:text-[hsl(207,90%,54%)] transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-[hsl(207,90%,54%)] text-white px-6 py-2 rounded-lg hover:bg-[hsl(207,90%,49%)] transition-colors"
            >
              Contato
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('especialidades')} 
              className="block w-full text-left py-2 text-gray-700"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="block w-full text-left py-2 text-gray-700"
            >
              Nossa Equipe
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="block w-full text-left py-2 text-gray-700"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full text-left py-2 text-[hsl(207,90%,54%)] font-medium"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
