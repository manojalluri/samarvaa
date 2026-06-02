import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import './EventShowcaseSection.css';

const showcaseItems = [
  { title: 'Wedding Events', category: 'Luxury' },
  { title: 'Corporate Events', category: 'Professional' },
  { title: 'Birthday Celebrations', category: 'Joyful' },
  { title: 'Engagements', category: 'Intimate' },
  { title: 'Destination Weddings', category: 'Exotic' },
  { title: 'Reception Events', category: 'Grand' }
];

const EventShowcaseSection = () => {
  return (
    <section id="events" className="showcase-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Event <span className="text-gold">Showcase</span></h2>
          <p className="section-subtitle">
            Explore our portfolio of breathtaking events, each designed with unique elegance and flawless execution.
          </p>
        </motion.div>

        <div className="showcase-grid">
          {showcaseItems.map((item, index) => (
            <motion.div 
              className="showcase-item"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="showcase-image-placeholder">
                <div className="showcase-overlay">
                  <div className="showcase-content">
                    <span className="showcase-category">{item.category}</span>
                    <h3 className="showcase-title">{item.title}</h3>
                    <button className="quick-view-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      <Maximize2 size={16} /> Quick View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventShowcaseSection;
