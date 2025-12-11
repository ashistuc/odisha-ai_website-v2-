import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const PartnersScrolling = () => {
  const { isOdia } = useLanguage();

  const partners = [
    {
      id: 1,
      name: 'AHRC, IIT Bhubaneswar',
      role: isOdia ? 'ଶୈକ୍ଷିକ ସହଯୋଗୀ' : 'Academic Collaborators',
      logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/IIT_Bhubaneswar_Logo.png',
    },
    {
      id: 2,
      name: 'Wadhwani Foundation',
      role: isOdia ? 'ତାଲିମ ସହଭାଗୀ' : 'Training Partner',
      logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/wadhwani-logo.webp',
    },
    {
      id: 3,
      name: 'NASSCOM',
      role: isOdia ? 'ଉତ୍କୃଷ୍ଟତା କେନ୍ଦ୍ର ସହଭାଗୀ' : 'Centre of Excellence Partner',
      logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/nasscom-logo.jpg',
    }
  ];

  return (
    <section id="partners-section" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold border border-orange-100 dark:border-orange-800/50 shadow-sm">
            <Handshake className="w-4 h-4" />
            <span>{isOdia ? 'ରଣନୀତିକ ମିତ୍ରତା' : 'Strategic Alliances'}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {isOdia ? 'ନବସୃଜନରେ ' : 'Partners in '}<span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">{isOdia ? 'ସହଭାଗୀ' : 'Innovation'}</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {isOdia ? 'ଓଡ଼ିଶାରେ AI ର ଭବିଷ୍ୟତକୁ ଚାଳିତ କରିବା ପାଇଁ ଶିଳ୍ପ ନେତା ଏବଂ ଶୈକ୍ଷିକ ଅଗ୍ରଦୂତମାନଙ୍କ ସହିତ ସହଯୋଗ।' : 'Collaborating with industry leaders and academic pioneers to drive the future of AI in Odisha.'}
          </p>
        </div>

        {/* Partner Logos Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
                {/* Logo Box */}
                <div className="w-full h-28 mb-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center p-6 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  {partner.role}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link to="/partners">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg px-8">
              {isOdia ? 'ଅଧିକ ଜାଣନ୍ତୁ' : 'Explore More'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersScrolling;
