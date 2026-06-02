import { motion } from 'framer-motion';
import logo from '../assets/image.png';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">Crafting Extraordinary <span className="text-gold">Celebrations</span></h2>
            
            <div className="story-block">
              <h3 className="story-title">Our Story</h3>
              <p className="story-text">
                SAMARVA was founded with a singular vision: to transform life's most precious moments into 
                cinematic, unforgettable experiences. For over a decade, we have been the silent architects 
                behind the most talked-about weddings, the most glamorous galas, and the most intimate luxury gatherings.
              </p>
            </div>
            
            <div className="story-block">
              <h3 className="story-title">Our Mission</h3>
              <p className="story-text">
                To deliver flawless event execution with unparalleled elegance, ensuring our clients can fully 
                immerse themselves in the joy of their celebration without a single worry.
              </p>
            </div>
            
            <div className="story-block">
              <h3 className="story-title">Our Values</h3>
              <p className="story-text">
                Excellence, Creativity, Integrity, and Personalization. We believe that true luxury lies 
                in the details, and perfection is our only standard.
              </p>
            </div>
            
            <div className="founder-quote">
              "Every event is a blank canvas, and our passion is to paint a masterpiece that you will cherish forever."
              <span className="founder-name">- Founder, SAMARVA</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper glass-panel">
              <div className="about-image-inner">
                <div className="about-visual">
                  <img src={logo} alt="SAMARVA Logo" className="about-logo-img" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
