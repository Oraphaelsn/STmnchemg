import { useState } from "react";
import logoPath from "@assets/1x1_1754246987711.png";

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
            <img 
              src={logoPath} 
              alt="Estância Morro Grande" 
              className="h-12 w-auto"
            />
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
