import React, { useState } from 'react';
import { partners, aiNews, actsNotifications, heroSlides, contactInfo } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import ResourcesSection from '../components/sections/ResourcesSection';
import PartnersScrolling from '../components/sections/PartnersScrolling';
import InteractivePDFReader from '../components/sections/InteractivePDFReader';
import ActsNotificationsSection from '../components/sections/ActsNotificationsSection';
import FloatingSocialWidgets from '../components/layout/FloatingSocialWidgets';
import EnhancedHeroCarousel from '../components/sections/EnhancedHeroCarousel';
import ContactUsSection from '../components/sections/ContactUsSection';
import AboutMissionSection from '../components/sections/AboutMissionSection';
import StrategicPillars from '../components/sections/StrategicPillars';
import AIProjectIdeaForm from '../components/sections/AIProjectIdeaForm';

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [isPDFReaderOpen, setIsPDFReaderOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 scroll-smooth">
        {/* Hero Carousel Section */}
        <section id="main-content" className="relative section-transition">
          <EnhancedHeroCarousel
            slides={heroSlides}
            onReadPolicy={() => setIsPDFReaderOpen(true)}
          />
        </section>

        {/* About the Mission Section */}
        <AboutMissionSection />

        {/* Strategic Pillars Section */}
        <StrategicPillars />

        {/* Resources Section */}
        <section id="resources-section" className="py-10 pb-5 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
          {/* Transparent background (Inline Style to prevent Webpack compile-time module checks) */}
          <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: "url('/images/bg-resources.jpg')" }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
            <ResourcesSection aiNews={aiNews} limit={3} />
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners-section" className="py-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PartnersScrolling partners={partners} />
          </div>
        </section>

        {/* Acts & Notifications Section */}
        <section id="policy-section" className="py-10 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ActsNotificationsSection items={actsNotifications} limit={3} />
          </div>
        </section>

        {/* AI Project Idea Form */}
        <section id="submit-idea-section" className="py-10 bg-orange-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIProjectIdeaForm />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-section" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactUsSection contactInfo={contactInfo} />
          </div>
        </section>
      </div>

      {/* Interactive PDF Reader */}
      <InteractivePDFReader
        isOpen={isPDFReaderOpen}
        onClose={() => setIsPDFReaderOpen(false)}
        pdfUrl="/Odisha%20AI%20Policy-2025.pdf"
      />

      {/* Floating Social Widgets */}
      <FloatingSocialWidgets />
    </>
  );
};

export default Home;
