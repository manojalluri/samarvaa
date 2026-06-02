import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import logo from '../assets/image.png';
import './WhyChooseSection.css';

const reasons = [
  "All Wedding Items in One Area",
  "End-to-End Event Management",
  "Trusted Vendor Network",
  "Budget-Friendly Solutions",
  "Premium Decor Concepts",
  "Experienced Team",
  "On-Time Execution",
  "Dedicated Coordinator"
];

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-grid">
          <motion.div 
            className="why-choose-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder glass-panel">
              <div className="gold-accent-box"></div>
              <img src={logo} alt="SAMARVA Logo" className="why-choose-logo-img" />
            </div>
          </motion.div>
          
          <motion.div 
            className="why-choose-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">Why Choose <span className="text-gold">SAMARVA</span></h2>
            <p className="why-choose-desc">
              We eliminate the stress of dealing with multiple vendors by providing everything you need in one single place. Our comprehensive, one-stop approach ensures that your celebration is seamless, cost-effective, and absolutely extraordinary.
            </p>
            
            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <motion.div 
                  className="reason-item" 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="check-icon" />
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="btn-primary mt-4" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>Discover Our Process</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
