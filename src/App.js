import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMission from './pages/AboutMission';
import StrategicPillarsPage from './pages/StrategicPillarsPage';
import PartnersPage from './pages/PartnersPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import PolicyActsPage from './pages/PolicyActsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Disclaimer from './pages/Disclaimer';
import Sitemap from './pages/Sitemap';
import LaunchCountdown from './components/LaunchCountdown';
import { countdownConfig } from './mock';

import ScrollToTop from './components/ScrollToTop';

// Component to handle countdown redirect
const CountdownRedirect = ({ showCountdown, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If countdown is active and user is not on home page, redirect to home
    if (showCountdown && countdownConfig.isActive && location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, [showCountdown, location.pathname, navigate]);

  return children;
};

function App() {
  // Check if countdown should be shown
  const [showCountdown, setShowCountdown] = useState(() => {
    // Check if countdown is active in config
    if (!countdownConfig.isActive) return false;

    // Check if countdown was already completed
    const countdownCompleted = localStorage.getItem('countdownCompleted');
    const completedDate = localStorage.getItem('countdownCompletedDate');

    if (countdownCompleted === 'true' && completedDate === countdownConfig.targetDate) {
      return false;
    }

    // Check if target date has passed
    const now = new Date();
    const target = new Date(countdownConfig.targetDate);
    if (now >= target) {
      return false;
    }

    return true;
  });

  const handleCountdownClose = () => {
    setShowCountdown(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          {/* Global Countdown Overlay - Shows on ALL pages when active */}
          {showCountdown && countdownConfig.isActive && (
            <LaunchCountdown
              targetDate={countdownConfig.targetDate}
              title={countdownConfig.eventTitle}
              titleOd={countdownConfig.eventTitleOd}
              subtitle={countdownConfig.subtitle}
              subtitleOd={countdownConfig.subtitleOd}
              lockWebsite={countdownConfig.lockWebsite}
              onClose={handleCountdownClose}
            />
          )}

          <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
            <CountdownRedirect showCountdown={showCountdown}>
              <ScrollToTop />
              <Header />
              <main id="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-mission" element={<AboutMission />} />
                  <Route path="/strategic-pillars" element={<StrategicPillarsPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/policy-acts" element={<PolicyActsPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfUse />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                </Routes>
              </main>
              <Footer />
            </CountdownRedirect>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

