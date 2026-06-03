import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  // Services
  { path: 'src/pages/services/WeddingPlanning.tsx', name: 'WeddingPlanning', title: 'Best Wedding Planner & Organizers', desc: 'Premium Wedding Planning Services. We handle everything from venue selection to decorations.', schemaType: 'Service' },
  { path: 'src/pages/services/CorporateEvents.tsx', name: 'CorporateEvents', title: 'Corporate Event Management', desc: 'Professional Corporate Event Management services for conferences, seminars, and company parties.', schemaType: 'Service' },
  { path: 'src/pages/services/BirthdayEvents.tsx', name: 'BirthdayEvents', title: 'Birthday Event Organizer', desc: 'Make your birthdays special with the best birthday event organizers in town.', schemaType: 'Service' },
  { path: 'src/pages/services/EngagementEvents.tsx', name: 'EngagementEvents', title: 'Engagement Event Planners', desc: 'Complete engagement event management and decoration services.', schemaType: 'Service' },
  { path: 'src/pages/services/Decorations.tsx', name: 'Decorations', title: 'Wedding Decoration Services', desc: 'Stunning wedding and event decoration services tailored to your theme.', schemaType: 'Service' },
  
  // Main
  { path: 'src/pages/Portfolio.tsx', name: 'Portfolio', title: 'Our Event Portfolio', desc: 'Explore our gallery of successful weddings, corporate events, and parties.', schemaType: 'CollectionPage' },
  { path: 'src/pages/About.tsx', name: 'About', title: 'About Samarva Events', desc: 'Learn more about Samarva Events, the leading event management company in Andhra Pradesh.', schemaType: 'AboutPage' },
  { path: 'src/pages/Contact.tsx', name: 'Contact', title: 'Contact Us - Book Your Event', desc: 'Get in touch with Samarva Events for your next big celebration.', schemaType: 'ContactPage' },
  { path: 'src/pages/blog/index.tsx', name: 'Blog', title: 'Event Planning Blog & Tips', desc: 'Read our latest articles on wedding trends, planning checklists, and event ideas.', schemaType: 'Blog' },
  
  // Local
  { path: 'src/pages/locations/EventManagementVijayawada.tsx', name: 'EventManagementVijayawada', title: 'Event Management Company Vijayawada', desc: 'Top-rated Event Management Company in Vijayawada. We organize weddings, birthdays, and corporate events.', schemaType: 'LocalBusiness' },
  { path: 'src/pages/locations/WeddingPlannerVijayawada.tsx', name: 'WeddingPlannerVijayawada', title: 'Wedding Planner Vijayawada', desc: 'Best Wedding Planner in Vijayawada. Make your dream wedding a reality.', schemaType: 'LocalBusiness' },
  { path: 'src/pages/locations/EventManagementGuntur.tsx', name: 'EventManagementGuntur', title: 'Event Management Company in Guntur', desc: 'Leading event management services in Guntur for all your celebration needs.', schemaType: 'LocalBusiness' },
  { path: 'src/pages/locations/WeddingPlannerGuntur.tsx', name: 'WeddingPlannerGuntur', title: 'Wedding Planner in Guntur', desc: 'Expert wedding planners in Guntur offering end-to-end wedding management.', schemaType: 'LocalBusiness' },
  { path: 'src/pages/locations/EventManagementBhimavaram.tsx', name: 'EventManagementBhimavaram', title: 'Event Management Bhimavaram', desc: 'Premium event management services in Bhimavaram.', schemaType: 'LocalBusiness' },
  { path: 'src/pages/locations/WeddingPlannerAP.tsx', name: 'WeddingPlannerAP', title: 'Wedding Organizer Andhra Pradesh', desc: 'The most trusted Wedding Organizer in Andhra Pradesh. Traditional and destination weddings.', schemaType: 'LocalBusiness' }
];

pages.forEach(page => {
  const fullPath = path.join(__dirname, '..', page.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Adjust relative imports depending on depth
  const depth = page.path.split('/').length - 3; // e.g. src/pages/services/... -> depth 1
  const relativePrefix = depth > 0 ? '../'.repeat(depth) : '';
  const seoImport = `import SEO from '${relativePrefix}../components/SEO';`;

  const content = `${seoImport}

export default function ${page.name}() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "${page.schemaType}",
    "name": "${page.title} | Samarva Events",
    "description": "${page.desc}",
    "provider": {
      "@type": "Organization",
      "name": "Samarva Events"
    }
  });

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '50px', textAlign: 'center' }}>
      <SEO 
        title="${page.title} | Samarva Events"
        description="${page.desc}"
        schema={schema}
      />
      <h1>${page.title}</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
        ${page.desc}
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
`;

  fs.writeFileSync(fullPath, content);
  console.log(`Created ${page.path}`);
});
