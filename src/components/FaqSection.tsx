import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FaqSection.css';

const faqs = [
  {
    question: "How early should I book?",
    answer: "For big events and weddings, we recommend booking at least 2 months before. For birthday parties and small events, 1 month before is usually sufficient."
  },
  {
    question: "Do you provide complete event management?",
    answer: "Yes, we offer end-to-end event management. From conceptualization, venue selection, and decor design to catering, entertainment, and on-day execution, we handle every detail so you can enjoy your celebration."
  },
  {
    question: "Can I customize packages?",
    answer: "Absolutely. While we offer curated packages for convenience, every event we manage is unique. We can tailor any package to align perfectly with your specific vision, requirements, and budget."
  },
  {
    question: "What is your payment process?",
    answer: "We require an initial deposit to secure your date, with the remaining balance divided into structured milestones leading up to your event. We accept various payment methods for your convenience."
  },
  {
    question: "Do you provide day-of coordination?",
    answer: "Absolutely. If you have planned the event yourself but want to relax and enjoy the day, our day-of coordination team will manage the execution, timeline, and any troubleshooting on the event day."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Common <span className="text-gold">Inquiries</span></h2>
          <p className="section-subtitle">
            Find answers to frequently asked questions about our luxury event management services.
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div 
              className={`faq-item glass-panel ${activeIndex === index ? 'active' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer-inner">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
