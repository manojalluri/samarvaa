import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Complete <span className="text-gold">Wedding Solution</span> Under One Roof
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We solve the biggest wedding headache by providing everything you need in one place. From premium decor and catering to top-tier vendors, SAMARVA handles it all so you can simply enjoy your big day.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Plan My Event</button>
            <button className="btn-outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
