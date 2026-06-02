import { motion } from 'framer-motion';
import { Camera, Paintbrush, Utensils, Scissors, Music, MapPin } from 'lucide-react';
import './VendorNetworkSection.css';

const vendors = [
  { name: 'Photographers', icon: <Camera size={32} /> },
  { name: 'Decorators', icon: <Paintbrush size={32} /> },
  { name: 'Caterers', icon: <Utensils size={32} /> },
  { name: 'Makeup Artists', icon: <Scissors size={32} /> },
  { name: 'Entertainers', icon: <Music size={32} /> },
  { name: 'Venue Partners', icon: <MapPin size={32} /> }
];

const VendorNetworkSection = () => {
  return (
    <section className="vendor-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Premium <span className="text-gold">Vendor Network</span></h2>
          <p className="section-subtitle">
            We collaborate only with the finest professionals in the industry to ensure excellence in every aspect of your event.
          </p>
        </motion.div>

        <div className="vendor-grid">
          {vendors.map((vendor, index) => (
            <motion.div 
              className="vendor-card glass-panel"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="vendor-icon">{vendor.icon}</div>
              <h3 className="vendor-name">{vendor.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorNetworkSection;
