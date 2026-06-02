import { motion } from 'framer-motion';
import './TrustSection.css';

const TrustSection = () => {
  // We'll use text-based logos for the premium look if real logos aren't provided
  const partners = [
    'The Ritz-Carlton', 'Four Seasons', 'Vogue Weddings', 'Marriott Bonvoy', 'Taj Hotels', 'Oberoi Group'
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <motion.div 
          className="trust-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="trust-heading">Trusted By Hundreds Of Families & Businesses</p>
          
          <div className="logo-slider">
            <div className="logo-slide-track">
              {/* Double the array for infinite scrolling effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div className="slide" key={index}>
                  <span className="partner-logo">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
