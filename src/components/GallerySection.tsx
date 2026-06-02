import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './GallerySection.css';

const categories = ['All', 'Weddings', 'Decor', 'Corporate', 'Catering'];

const galleryItems = [
  { id: 1, category: 'Weddings', size: 'large' },
  { id: 2, category: 'Decor', size: 'small' },
  { id: 3, category: 'Corporate', size: 'medium' },
  { id: 4, category: 'Catering', size: 'medium' },
  { id: 5, category: 'Weddings', size: 'small' },
  { id: 6, category: 'Decor', size: 'large' },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gold">Gallery</span></h2>
          <p className="section-subtitle">
            A visual journey through some of our most spectacular and memorable events.
          </p>
        </motion.div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery-masonry">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`gallery-item ${item.size}`}
              >
                <div className="gallery-image-placeholder">
                  <div className="gallery-overlay">
                    <button className="gallery-zoom-btn">
                      <Plus size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
