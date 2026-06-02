import { motion } from 'framer-motion';
import './ProcessSection.css';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Understanding your vision, preferences, and requirements.' },
  { id: 2, title: 'Planning', desc: 'Creating a comprehensive blueprint for your event.' },
  { id: 3, title: 'Design & Coordination', desc: 'Curating vendors, decor, and scheduling every detail.' },
  { id: 4, title: 'Execution', desc: 'Flawless on-ground management of your celebration.' },
  { id: 5, title: 'Celebration', desc: 'You enjoy the moments while we handle the rest.' },
  { id: 6, title: 'Feedback', desc: 'Ensuring your complete satisfaction post-event.' }
];

const ProcessSection = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gold">Process</span></h2>
          <p className="section-subtitle">
            A seamless journey from your first idea to the final spectacular moment.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-content glass-panel">
                <div className="step-number">{step.id}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
