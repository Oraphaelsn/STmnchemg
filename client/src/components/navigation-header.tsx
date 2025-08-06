import { useState, useEffect } from "react";
import logoPath from "@assets/1x1_1754246987711.png";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={logoPath} 
                alt="Estância Morro Grande" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10 w-auto' : 'h-14 w-auto'
                }`}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--primary)] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[var(--primary)] leading-tight">
                Estância Morro Grande
              </h1>
              <p className="text-xs text-[var(--muted-foreground)] font-medium">
                Hospital de Saúde Mental • ISO 9001:2015
              </p>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('especialidades')} 
              className="px-4 py-2 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-all duration-200 font-medium text-sm"
              data-testid="nav-especialidades"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="px-4 py-2 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-all duration-200 font-medium text-sm"
              data-testid="nav-equipe"
            >
              Nossa Equipe
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="px-4 py-2 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-all duration-200 font-medium text-sm"
              data-testid="nav-diferenciais"
            >
              Diferenciais
            </button>
            <div className="w-px h-6 bg-[var(--border)] mx-2"></div>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-6 py-2.5 rounded-lg hover:from-[var(--primary-dark)] hover:to-[var(--primary)] transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
              data-testid="nav-contato"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Agende Consulta</span>
            </button>
          </div>

          {/* Contatos Rápidos e Menu Mobile */}
          <div className="flex items-center space-x-3">
            {/* Telefones de Emergência - Desktop */}
            <div className="hidden xl:flex items-center space-x-2">
              <div className="text-xs">
                <p className="text-[var(--muted-foreground)] font-medium">Emergência 24h:</p>
                <div className="flex space-x-2">
                  <a 
                    href="tel:+5515997559520" 
                    className="text-[var(--primary)] font-semibold hover:underline"
                    data-testid="phone-interior"
                  >
                    (15) 99755-9520
                  </a>
                  <span className="text-[var(--muted-foreground)]">•</span>
                  <a 
                    href="tel:+5511915672582" 
                    className="text-[var(--primary)] font-semibold hover:underline"
                    data-testid="phone-capital"
                  >
                    (11) 91567-2582
                  </a>
                </div>
              </div>
            </div>
            
            {/* Menu Mobile Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-colors"
                data-testid="mobile-menu-toggle"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[var(--border)] shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('especialidades')} 
              className="block w-full text-left py-3 px-4 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-colors font-medium"
              data-testid="mobile-nav-especialidades"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="block w-full text-left py-3 px-4 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-colors font-medium"
              data-testid="mobile-nav-equipe"
            >
              Nossa Equipe
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="block w-full text-left py-3 px-4 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--soft-green)] rounded-lg transition-colors font-medium"
              data-testid="mobile-nav-diferenciais"
            >
              Diferenciais
            </button>
            
            {/* Divisor */}
            <div className="border-t border-[var(--border)] my-3"></div>
            
            {/* Telefones de Emergência - Mobile */}
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-[var(--primary)] mb-2">Emergência 24h:</p>
              <div className="space-y-2">
                <a 
                  href="tel:+5515997559520" 
                  className="flex items-center space-x-3 p-3 bg-[var(--soft-green)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors group"
                  data-testid="mobile-phone-interior"
                >
                  <svg className="w-5 h-5 text-[var(--primary)] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">(15) 99755-9520</p>
                    <p className="text-sm text-[var(--muted-foreground)] group-hover:text-white/80">Interior/SP</p>
                  </div>
                </a>
                <a 
                  href="tel:+5511915672582" 
                  className="flex items-center space-x-3 p-3 bg-[var(--soft-green)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors group"
                  data-testid="mobile-phone-capital"
                >
                  <svg className="w-5 h-5 text-[var(--primary)] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">(11) 91567-2582</p>
                    <p className="text-sm text-[var(--muted-foreground)] group-hover:text-white/80">Capital/SP</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Botão de Contato Principal - Mobile */}
            <button 
              onClick={() => scrollToSection('contato')} 
              className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-6 py-4 rounded-lg hover:from-[var(--primary-dark)] hover:to-[var(--primary)] transition-all duration-300 font-semibold shadow-lg flex items-center justify-center space-x-2"
              data-testid="mobile-nav-contato"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Agende sua Consulta</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
