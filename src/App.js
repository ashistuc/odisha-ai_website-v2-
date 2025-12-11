import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter basename="/odisha-ai_website-v2-">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded focus:shadow-lg"
            >
              Skip to main content
            </a>

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
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
