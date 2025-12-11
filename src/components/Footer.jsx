import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Footer = () => {
  const { language, isOdia } = useLanguage();
  const { t } = useTranslation(language);

  const scrollToSection = (sectionId) => {
    // Navigate to home first if not there, then scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: isOdia ? 'ମିଶନ ବିଷୟରେ' : 'About Mission', section: 'about-mission-section' },
    { name: isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars', section: 'strategic-pillars-section' },
    { name: isOdia ? 'ସହଭାଗୀ' : 'Partners', section: 'partners-section' },
    { name: isOdia ? 'ସମ୍ପଦ' : 'Resources', section: 'resources-section' },
    { name: isOdia ? 'ଇଭେଣ୍ଟ' : 'Events', section: 'gallery-section' },
    { name: isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact Us', section: 'contact-section' }
  ];

  const footerLinks = [
    {
      titleKey: 'footer.quickLinks',
      links: quickLinks.map(link => ({
        name: link.name,
        section: link.section
      }))
    },
    {
      titleKey: 'footer.resources',
      links: [
        { nameKey: 'footer.aiPolicy', path: '/resources/policy' },
        { nameKey: 'footer.guidelines', path: '/resources/guidelines' },
        { nameKey: 'footer.publications', path: '/resources/publications' },
        { nameKey: 'nav.faq', path: '/resources/faq' }
      ]
    },
    {
      titleKey: 'footer.skilling',
      links: [
        { nameKey: 'footer.aiInSchools', path: '/skilling/schools' },
        { nameKey: 'footer.higherEducation', path: '/skilling/higher-ed' },
        { nameKey: 'footer.workforceDevelopment', path: '/skilling/workforce' },
        { nameKey: 'footer.odishaForAI', path: '/skilling/odisha-for-ai' }
      ]
    },
    {
      titleKey: 'footer.legal',
      links: [
        { nameKey: 'footer.privacyPolicy', path: '/privacy' },
        { nameKey: 'footer.termsOfService', path: '/terms' },
        { nameKey: 'footer.accessibility', path: '/accessibility' },
        { nameKey: 'footer.sitemap', path: '/sitemap' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-white font-bold text-lg">{t('footer.brandTitle')}</h3>
                <p className="text-xs text-gray-400">{t('footer.brandSubtitle')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{t(section.titleKey)}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.section ? (
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                      >
                        {t(link.nameKey)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">{t('contact.address')}</h5>
                <p className="text-sm text-gray-400">OCAC, Electronics Niketan, Bhubaneswar, Odisha - 751012</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">{t('contact.email')}</h5>
                <p className="text-sm text-gray-400">ai-mission@odisha.gov.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-white font-medium mb-1">{t('contact.phone')}</h5>
                <p className="text-sm text-gray-400">+91-674-2535201</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Visitor Counter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6">
              {/* Visitor Counter */}
              <div className="flex items-center space-x-4 px-4 py-2 bg-gray-800 rounded-lg">
                <div className="text-center">
                  <div className="text-xs text-gray-400">{t('footer.totalVisitors')}</div>
                  <div className="text-lg font-bold text-orange-500">
                    {(() => {
                      if (typeof window !== 'undefined') {
                        return parseInt(localStorage.getItem('totalVisitors') || '15247').toLocaleString('en-IN');
                      }
                      return '15,247';
                    })()}
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">{t('footer.today')}</div>
                  <div className="text-base font-semibold text-green-500">
                    {(() => {
                      if (typeof window !== 'undefined') {
                        return parseInt(localStorage.getItem('todayVisitors') || '342').toLocaleString('en-IN');
                      }
                      return '342';
                    })()}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-400">{t('footer.madeWithLove')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;