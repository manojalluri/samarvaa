import SEO from '../../components/SEO';

export default function WeddingPlanning() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Best Wedding Planner & Organizers | Samarva Events",
    "description": "Premium Wedding Planning Services. We handle everything from venue selection to decorations.",
    "provider": {
      "@type": "Organization",
      "name": "Samarva Events"
    }
  });

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '50px', textAlign: 'center' }}>
      <SEO 
        title="Best Wedding Planner & Organizers | Samarva Events"
        description="Premium Wedding Planning Services. We handle everything from venue selection to decorations."
        schema={schema}
      />
      <h1>Best Wedding Planner & Organizers</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
        Premium Wedding Planning Services. We handle everything from venue selection to decorations.
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
