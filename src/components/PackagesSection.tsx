import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './PackagesSection.css';



const PackagesSection = () => {
  return (
    <section id="packages" className="packages-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Exclusive <span className="text-gold">Packages</span></h2>
          <p className="section-subtitle">
            Curated tiers of luxury to suit the scale and grandeur of your celebration.
          </p>
        </motion.div>

        <motion.div 
          className="packages-contact-cta glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderRadius: '16px' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Looking for the Perfect Package?</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Every event is unique, and so are your needs. Contact us directly to discuss your vision, and our team will craft a custom package tailored specifically for your special day.
          </p>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            Contact Us for Packages
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
