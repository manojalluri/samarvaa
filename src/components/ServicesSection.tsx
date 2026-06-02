import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Cake, 
  Building2, 
  GlassWater, 
  Camera, 
  UtensilsCrossed
} from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    title: 'Wedding Planning',
    description: 'Bespoke wedding planning from concept to execution for your perfect day.',
    icon: <HeartHandshake size={40} className="service-icon" />
  },
  {
    title: 'Birthday Events',
    description: 'Unforgettable birthday celebrations with personalized themes and entertainment.',
    icon: <Cake size={40} className="service-icon" />
  },
  {
    title: 'Corporate Events',
    description: 'Professional event management for product launches, galas, and conferences.',
    icon: <Building2 size={40} className="service-icon" />
  },
  {
    title: 'Private Parties',
    description: 'Exclusive and intimate gatherings crafted with elegance and privacy in mind.',
    icon: <GlassWater size={40} className="service-icon" />
  },
  {
    title: 'Photography',
    description: 'Cinematic photography and videography to capture your timeless memories.',
    icon: <Camera size={40} className="service-icon" />
  },
  {
    title: 'Catering Services',
    description: 'Premium culinary experiences with customized menus by top chefs.',
    icon: <UtensilsCrossed size={40} className="service-icon" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
          <p className="section-subtitle">
            Experience unparalleled luxury with our comprehensive event management services, 
            tailored perfectly to your vision and desires.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More <span>→</span></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
