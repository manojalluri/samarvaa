import { MessageCircle } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Outlet renders the matched child route component */}
      <main>
        <Outlet />
      </main>
      
      <FooterSection />
      
      {/* Global WhatsApp Button for Conversion Optimization */}
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
