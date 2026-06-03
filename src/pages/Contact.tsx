import SEO from '../components/SEO';

export default function Contact() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Book Your Event | Samarva Events",
    "description": "Get in touch with Samarva Events for your next big celebration.",
    "provider": {
      "@type": "Organization",
      "name": "Samarva Events"
    }
  });

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '50px', textAlign: 'center' }}>
      <SEO 
        title="Contact Us - Book Your Event | Samarva Events"
        description="Get in touch with Samarva Events for your next big celebration."
        schema={schema}
      />
      <h1>Contact Us - Book Your Event</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
        Get in touch with Samarva Events for your next big celebration.
      </p>
      
      {/* Conversion Optimization Section */}
      <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="https://wa.me/918309653769" target="_blank" rel="noopener noreferrer" className="book-btn" style={{ padding: '12px 24px', backgroundColor: '#25D366', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          WhatsApp Us
        </a>
        <a href="tel:+918309653769" className="book-btn" style={{ padding: '12px 24px', backgroundColor: '#e2ab64', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          Call Now: +91-8309653769
        </a>
      </div>
    </div>
  );
}
