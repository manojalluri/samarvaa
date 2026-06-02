import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/image.png';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="SAMARVA Logo" className="footer-logo-img" />
            <p className="footer-tagline">Where Celebrations Unite</p>
            <p className="footer-desc">
              Transforming your life's most precious moments into cinematic, unforgettable experiences with our premium event management services.
            </p>
            

          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Our Services</h3>
            <ul>
              <li><a href="#">Wedding Planning</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Birthday Celebrations</a></li>
              <li><a href="#">Catering Services</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Bhimavaram, West Godavari, Andhra Pradesh</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 8309653769</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@samarvaevents.com</span>
              </li>
            </ul>
            

          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SAMARVA. Where Celebrations Unite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
