import SEO from '../../components/SEO';

export default function EventManagementGuntur() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Event Management Company in Guntur | Samarva Events",
    "description": "Leading event management services in Guntur for all your celebration needs.",
    "provider": {
      "@type": "Organization",
      "name": "Samarva Events"
    }
  });

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '50px', textAlign: 'center' }}>
      <SEO 
        title="Event Management Company in Guntur | Samarva Events"
        description="Leading event management services in Guntur for all your celebration needs."
        schema={schema}
      />
      <h1>Event Management Company in Guntur</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
        Leading event management services in Guntur for all your celebration needs.
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
