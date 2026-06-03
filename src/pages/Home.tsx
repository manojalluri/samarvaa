import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PackagesSection from '../components/PackagesSection';
import AboutSection from '../components/AboutSection';
import BookingSection from '../components/BookingSection';
import FaqSection from '../components/FaqSection';
import SEO from '../components/SEO';

export default function Home() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EventResaleService",
    "name": "Samarva Events",
    "description": "Premium Event Management Company offering Wedding Planning, Corporate Events, and Decoration Services in Andhra Pradesh.",
    "areaServed": ["Vijayawada", "Guntur", "Amaravati", "Bhimavaram", "Rajahmundry", "Visakhapatnam", "Andhra Pradesh", "Telangana"],
    "telephone": "+91-8309653769",
    "url": "https://samarvaevents.com"
  });

  return (
    <>
      <SEO 
        title="Event Management Company & Wedding Planner | Samarva Events"
        description="Samarva Events is a premium Event Management Company & Wedding Planner serving Vijayawada, Guntur, and across Andhra Pradesh. Best Event Organizers."
        canonical="https://samarvaevents.com/"
        schema={schema}
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <PackagesSection />
      <AboutSection />
      <BookingSection />
      <FaqSection />
    </>
  );
}
