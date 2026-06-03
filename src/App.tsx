import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Services
import WeddingPlanning from './pages/services/WeddingPlanning';
import CorporateEvents from './pages/services/CorporateEvents';
import BirthdayEvents from './pages/services/BirthdayEvents';
import EngagementEvents from './pages/services/EngagementEvents';
import Decorations from './pages/services/Decorations';

// Main
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/blog/index';

// Local SEO
import EventManagementVijayawada from './pages/locations/EventManagementVijayawada';
import WeddingPlannerVijayawada from './pages/locations/WeddingPlannerVijayawada';
import EventManagementGuntur from './pages/locations/EventManagementGuntur';
import WeddingPlannerGuntur from './pages/locations/WeddingPlannerGuntur';
import EventManagementBhimavaram from './pages/locations/EventManagementBhimavaram';
import WeddingPlannerAP from './pages/locations/WeddingPlannerAP';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Services */}
          <Route path="services/wedding-planning" element={<WeddingPlanning />} />
          <Route path="services/corporate-events" element={<CorporateEvents />} />
          <Route path="services/birthday-events" element={<BirthdayEvents />} />
          <Route path="services/engagement-events" element={<EngagementEvents />} />
          <Route path="services/decorations" element={<Decorations />} />

          {/* Main Pages */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />

          {/* Local SEO Pages */}
          <Route path="event-management-vijayawada" element={<EventManagementVijayawada />} />
          <Route path="wedding-planner-vijayawada" element={<WeddingPlannerVijayawada />} />
          <Route path="event-management-guntur" element={<EventManagementGuntur />} />
          <Route path="wedding-planner-guntur" element={<WeddingPlannerGuntur />} />
          <Route path="event-management-bhimavaram" element={<EventManagementBhimavaram />} />
          <Route path="wedding-planner-andhra-pradesh" element={<WeddingPlannerAP />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
