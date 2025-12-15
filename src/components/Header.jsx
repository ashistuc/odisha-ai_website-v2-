import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import AccessibilityToolbar from './AccessibilityToolbar';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, isOdia } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll to show/hide parts of header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: <Home className="w-5 h-5" />, ariaLabel: isOdia ? 'ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Home', type: 'link', href: '/' },
    { name: isOdia ? 'ମିଶନ୍ ବିଷୟରେ' : 'About Mission', type: 'link', href: '/about-mission' },
    { name: isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars', type: 'link', href: '/strategic-pillars' },
    { name: isOdia ? 'ସମ୍ବଳ' : 'Resources', type: 'link', href: '/resources' },
    { name: isOdia ? 'ସହଯୋଗୀ' : 'Partners', type: 'link', href: '/partners' },
    { name: isOdia ? 'ନୀତି ଏବଂ ଆଇନ' : 'Policy & Acts', type: 'link', href: '/policy-acts' },
    /*  { name: isOdia ? 'କାର୍ଯ୍ୟକ୍ରମ' : 'Events', type: 'link', href: '/events' },*/
    { name: isOdia ? 'ଧାରଣା ଦାଖଲ' : 'Submit Idea', type: 'scroll', section: 'submit-idea-section' },

    { name: isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact', type: 'link', href: '/contact' }
  ];

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (item.type === 'scroll') {
      scrollToSection(item.section);
    }
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 sticky top-0 z-stack-header shadow-sm transition-all duration-300  header-glow">
        {/* Top Strip - Always visible */}
        <div className="bg-orange-700 text-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Left Side - Government of Odisha - Always visible */}
              <div className="text-sm font-medium">
                Government of Odisha | ଓଡ଼ିଶା ସରକାର
              </div>

              {/* Right Side - Language Toggle & Settings - Always visible */}
              <div className="flex items-center space-x-3 py-1">
                <div className="hidden sm:block text-white">
                  <LanguageToggle inline={true} />
                </div>
                {/*  <div className="relative text-white">
                  <AccessibilityToolbar inline={true} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section - Always visible */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1 lg:py-2">

            {/* Logo Section with Government Logos */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="flex items-center space-x-3 group border-r border-gray-200 dark:border-gray-700 pr-6"
              >
                <img
                  src="/odisha-ai_website-v2-/logo/india_elc_it.png"
                  alt="Government of Odisha"
                  className="w-[200px] object-contain"
                />
              </Link>
              <Link
                to="/"
                className="flex items-center space-x-3 group"
              >
                <img
                  src="/odisha-ai_website-v2-/logo/odisha-govt.svg"
                  alt="Government of Odisha"
                  className="w-[200px] object-contain"
                />
              </Link>

              {/* Partner Logos */}
              <div className="hidden xl:flex items-center space-x-6 pl-6 ml-4 border-l border-gray-200 dark:border-gray-700">
                {/* Odisha Govt Logo 
                <div className="flex flex-col items-center space-y-1">
                  <img
                    src="/odisha-ai_website-v2-/logo/Odisha_Ai_Mission.png"
                    alt="Odisha AI Mission Logo"
                    className="w-[100px] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
*/}
                {/* E&IT Dept / OCAC Logo */}
                <div className="flex flex-col items-center space-y-1">
                  <img
                    src="/odisha-ai_website-v2-/logo/ocac-logo.png"
                    alt="E&IT Department, OCAC"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Actions: CM Section */}
            <div className="flex items-center space-x-4">
              {/* CM Section - Inline */}
              <div className="hidden lg:flex items-end gap-4 mr-2 pl-4 border-l-2 border-orange-500 -mb-3 lg:-mb-2">
                {/* Text Content */}
                <div className="text-right mb-3">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {t?.header?.cmName || 'Shri Mohan Charan Majhi'}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                    {t?.header?.cmDesignation || "Hon'ble Chief Minister"}
                  </p>
                </div>

                {/* CM Photo - Extends from bottom */}
                <div className="relative">
                  <img
                    src="/odisha-ai_website-v2-/images/cm-img.png"
                    alt="Shri Mohan Charan Majhi - Hon'ble Chief Minister"
                    className="h-[90px] w-auto object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Mobile Menu Button - Only visible on small screens */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 dark:text-white hover:text-orange-600 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Orange Navigation Bar - Always Visible */}
        <nav className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 shadow-md">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Navigation - Reduced Padding */}
            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.type === 'link' ? (
                      <Link
                        to={item.href}
                        aria-label={item.ariaLabel || item.name}
                        className={`px-3 py-1.5 text-white font-medium text-sm rounded-md transition-all duration-200 whitespace-nowrap ${
                          // Remove active state for home icon (index 0), keep for others
                          index !== 0 && location.pathname === item.href ? 'bg-white/30' : 'hover:bg-white/20'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        aria-label={item.ariaLabel || item.name}
                        className="px-3 py-1.5 text-white font-medium text-sm hover:bg-white/20 rounded-md transition-all duration-200 whitespace-nowrap"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Navigation - Horizontal Scroll - Reduced Padding */}
            <div className="lg:hidden overflow-x-auto py-1.5 scrollbar-hide">
              <ul className="flex items-center space-x-1 min-w-max">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.type === 'link' ? (
                      <Link
                        to={item.href}
                        aria-label={item.ariaLabel || item.name}
                        className={`px-2.5 py-1 text-white font-medium text-xs rounded-md transition-all duration-200 whitespace-nowrap ${
                          // Remove active state for home icon (index 0), keep for others  
                          index !== 0 && location.pathname === item.href ? 'bg-white/30' : 'hover:bg-white/20'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        aria-label={item.ariaLabel || item.name}
                        className="px-2.5 py-1 text-white font-medium text-xs hover:bg-white/20 rounded-md transition-all duration-200 whitespace-nowrap"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Menu - Full Screen (for smaller screens) */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-stack-modal overflow-y-auto animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{isOdia ? 'ନାଭିଗେସନ୍' : 'Navigation'}</h2>
                <div className="flex items-center space-x-4">
                  <LanguageToggle inline={true} />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-700 dark:text-white hover:text-orange-600"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  item.type === 'link' ? (
                    <Link
                      key={index}
                      to={item.href}
                      aria-label={item.ariaLabel || item.name}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full block text-left px-6 py-4 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg transition-all"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handleNavClick(item)}
                      aria-label={item.ariaLabel || item.name}
                      className="w-full text-left px-6 py-4 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg transition-all"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;