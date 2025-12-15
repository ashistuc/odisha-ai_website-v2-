import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
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
    { name: isOdia ? 'ମିଶନ ବିଷୟରେ' : 'About Mission', path: '/about-mission' },
    { name: isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars', path: '/strategic-pillars' },
    { name: isOdia ? 'ସହଭାଗୀ' : 'Partners', path: '/partners' },
    { name: isOdia ? 'ସମ୍ପଦ' : 'Resources', path: '/resources' },

    { name: isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact Us', path: '/contact' }
  ];

  const footerLinks = [
    {
      titleKey: 'footer.quickLinks',
      links: quickLinks.map(link => ({
        name: link.name,
        path: link.path
      }))
    },
    {
      titleKey: 'footer.resources',
      links: [
        { name: isOdia ? 'ଓଡ଼ିଶା AI ନୀତି' : 'Odisha AI Policy', path: '/policy-acts' },
        { name: isOdia ? 'ପ୍ରବନ୍ଧ ଏବଂ ବ୍ଲଗ୍' : 'Articles & Blogs', href: 'https://indiaai.gov.in/articles' },
        { name: isOdia ? 'ସମାଚାର' : 'News', href: 'https://indiaai.gov.in/news' },
        { name: isOdia ? 'ଗବେଷଣା ଏବଂ କେସ୍ ଷ୍ଟଡିଜ୍' : 'Research & Case Studies', href: 'https://indiaai.gov.in/research-reports' },
        { name: isOdia ? 'ଶିକ୍ଷଣ' : 'Learning', path: '/resources?dialog=learning' },
        { name: isOdia ? 'ଡାଟାସେଟ୍' : 'Datasets', path: '/resources?dialog=datasets' },
        { name: isOdia ? 'ସରକାରୀ ଉତ୍ପାଦକତା ପାଇଁ AI' : 'AI for Govt Productivity', path: '/resources?dialog=productivity' }
      ]
    },
    /* {
      titleKey: 'footer.skilling',
      links: [
        { nameKey: 'footer.aiInSchools', path: '/skilling/schools' },
        { nameKey: 'footer.higherEducation', path: '/skilling/higher-ed' },
        { nameKey: 'footer.workforceDevelopment', path: '/skilling/workforce' },
        { nameKey: 'footer.odishaForAI', path: '/skilling/odisha-for-ai' }
      ]
    },*/
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img alt="Odisha AI Mission Logo" class="w-[150px] object-contain group-hover:scale-110 transition-transform duration-300" src="/odisha-ai_website-v2-/logo/Odisha_Ai_Mission.png"></img>

            </div>
            <p className="text-sm text-gray-400 mb-6">
              {t('footer.brandDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/eit_odisha" target="_blank" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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
                    ) : link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.name || t(link.nameKey)}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.name || t(link.nameKey)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-sm text-gray-400">aiteam.ocac@odisha.gov.in</p>
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

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;