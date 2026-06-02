import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';

import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import PackagesSection from './components/PackagesSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
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
      <FooterSection />
      
      <a 
        href="https://wa.me/918309653769" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} color="#FFF" />
      </a>
    </div>
  );
}

export default App;
