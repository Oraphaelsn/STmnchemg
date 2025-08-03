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
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />
      <HeroSection />
      
      {/* Urgent Care Banner */}
      <section className="bg-gradient-to-r from-[hsl(20,90%,48%)] to-[hsl(20,90%,43%)] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center mb-2 md:mb-0">
              <svg className="w-6 h-6 mr-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
              <span className="font-semibold">Emergência Psiquiátrica? Canal de Internação 24h - Acolhimento Imediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <a 
                href="tel:+5515997559520" 
                className="bg-white text-[hsl(20,90%,48%)] px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors flex items-center text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Interior/SP
              </a>
              <a 
                href="tel:+5511915672582" 
                className="bg-white text-[hsl(20,90%,48%)] px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors flex items-center text-sm"
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
