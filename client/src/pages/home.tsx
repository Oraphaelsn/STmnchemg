import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import SpecialtiesSection from "@/components/specialties-section";
import TeamSection from "@/components/team-section";
import DifferentialsSection from "@/components/differentials-section";
import TestimonialsSection from "@/components/testimonials-section";
import InsuranceSection from "@/components/insurance-section";
import EducationalSection from "@/components/educational-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import MiniContactForm from "@/components/mini-contact-form";
import FAQSection from "@/components/faq-section";
import VideoSection from "@/components/video-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--soft-green)]">
      <NavigationHeader />
      <HeroSection />
      
      {/* Banner de Emergência Médica */}
      <section className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--trust-blue)] text-white py-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center mb-3 lg:mb-0">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">Emergência Psiquiátrica?</h2>
                <p className="text-white/90 text-sm font-medium">Canal de Internação 24h • Acolhimento Imediato • Equipe Especializada</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <a 
                href="tel:+5515997559520" 
                className="bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all duration-300 flex items-center text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[140px] justify-center"
                data-testid="emergency-phone-interior"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Interior/SP
              </a>
              <a 
                href="tel:+5511915672582" 
                className="bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all duration-300 flex items-center text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[140px] justify-center"
                data-testid="emergency-phone-capital"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Capital/SP
              </a>
            </div>
          </div>
        </div>
      </section>

      <SpecialtiesSection />
      <VideoSection />
      <TeamSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <InsuranceSection />
      <FAQSection />
      <EducationalSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <MiniContactForm />
    </div>
  );
}
