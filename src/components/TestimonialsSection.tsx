import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    event: "Wedding",
    text: "SAMARVA turned our dream wedding into reality. The attention to detail, the stunning decor, and the seamless execution left us and our guests speechless. It was truly a royal experience.",
    rating: 5
  },
  {
    id: 2,
    name: "Arjun Mehta",
    event: "Corporate Gala",
    text: "Professional, elegant, and perfectly executed. Our annual corporate gala was a massive success thanks to the incredible team at SAMARVA. They handled everything flawlessly.",
    rating: 5
  },
  {
    id: 3,
    name: "The Sharma Family",
    event: "Anniversary Celebration",
    text: "From the first consultation to the final dance, everything was magical. The gold-themed decor was exactly what we envisioned for our 25th anniversary.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Client <span className="text-gold">Stories</span></h2>
          <p className="section-subtitle">
            Read what our clients have to say about their luxurious experiences with SAMARVA.
          </p>
        </motion.div>

        <div className="testimonial-carousel-container">
          <button className="carousel-control prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonial-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card glass-panel"
              >
                <Quote className="quote-icon" size={60} />
                
                <div className="stars">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                
                <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-event">{testimonials[currentIndex].event}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className="carousel-control next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
