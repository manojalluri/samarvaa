import { motion } from 'framer-motion';
import './BookingSection.css';

const BookingSection = () => {
  return (
    <section id="contact" className="booking-section">
      <div className="container">
        <div className="booking-container glass-panel">
          <motion.div 
            className="booking-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">Plan Your <span className="text-gold">Dream Event</span></h2>
            <p className="booking-desc">
              Ready to start planning the celebration of a lifetime? Fill out the form, 
              and our luxury event specialists will get in touch with you shortly.
            </p>
            
            <div className="booking-contact-options">
              <div className="contact-option">
                <h4>Direct Contact</h4>
                <p>+91 8309653769</p>
              </div>

            </div>
          </motion.div>
          
          <motion.div 
            className="booking-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="booking-form" action="https://formspree.io/f/mnjrelaz" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Manoj Alluri" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 8309653769" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="manoj@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select id="eventType" name="eventType" required>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="sangeet">Sangeet</option>
                    <option value="mehndi">Mehndi</option>
                    <option value="haldi">Haldi</option>
                    <option value="reception">Reception</option>
                    <option value="engagement">Engagement</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Event Date</label>
                  <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget (₹)</label>
                  <input type="text" id="budget" name="budget" placeholder="e.g. 5,00,000" required />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Additional Details</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us more about your vision..."></textarea>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn-primary">Book Consultation</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
