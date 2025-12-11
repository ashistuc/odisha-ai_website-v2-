import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const AboutMissionSection = () => {
  const { isOdia } = useLanguage();

  return (
    <section id="about-mission-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
            {isOdia ? 'ଆମର ରଣନୀତିକ ଦିଗ' : 'Our Strategic Direction'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            {isOdia ? 'ମିଶନ୍ ' : 'About the '}<span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">{isOdia ? 'ବିଷୟରେ' : 'Mission'}</span>
          </h2>
        </div>

        {/* VISION Section - Leading the AI Revolution */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left Side - Vision Badge & Title */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* Vision Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6 w-fit">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">{isOdia ? 'ଆମର ଦୃଷ୍ଟିକୋଣ' : 'Our Vision'}</span>
                </div>

                {/* Large Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  {isOdia ? 'AI ବିପ୍ଳବରେ' : 'Leading the'}
                  <br />
                  <span className="text-white/90">{isOdia ? 'ନେତୃତ୍ୱ ନେଉଛୁ' : 'AI Revolution'}</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  {isOdia ? 'ଦାୟିତ୍ୱଶୀଳ ଏବଂ ଅନ୍ତର୍ଭୁକ୍ତ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା ମାଧ୍ୟମରେ ଓଡ଼ିଶାର ରୂପାନ୍ତରଣ' : 'Transforming Odisha through responsible and inclusive artificial intelligence'}
                </p>

                {/* Decorative Line */}
                <div className="mt-8 w-24 h-1 bg-white/40"></div>
              </div>

              {/* Right Side - Vision Statement */}
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Main Vision Statement */}
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                    {isOdia ? (
                      <>ଓଡ଼ିଶାକୁ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତାର ଦାୟିତ୍ୱଶୀଳ ବ୍ୟବହାରରେ <span className="text-orange-600 dark:text-orange-400">ଅଗ୍ରଣୀ ରାଜ୍ୟ</span> କରିବା</>
                    ) : (
                      <>To make Odisha a <span className="text-orange-600 dark:text-orange-400">leading state</span> in the responsible use of Artificial Intelligence</>
                    )}
                  </p>

                  {/* Three Key Focus Areas */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ଅନ୍ତର୍ଭୁକ୍ତ ଅଭିବୃଦ୍ଧି' : 'Inclusive Growth'}</span> - {isOdia ? 'AI-ଚାଳିତ ସୁଯୋଗ ସହିତ ସମସ୍ତ ନାଗରିକଙ୍କୁ ସଶକ୍ତ କରିବା' : 'Empowering all citizens with AI-driven opportunities'}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ସ୍ଥିତିସ୍ଥାପକ ଶାସନ' : 'Resilient Governance'}</span> - {isOdia ? 'ଦୃଢ଼ ଏବଂ ସ୍ୱଚ୍ଛ ବ୍ୟବସ୍ଥା ନିର୍ମାଣ' : 'Building robust and transparent systems'}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ନାଗରିକ-କେନ୍ଦ୍ରିତ ସେବା' : 'Citizen-Centric Services'}</span> - {isOdia ? 'ସୁଗମ ସାର୍ବଜନିକ ସେବା ପ୍ରଦାନ' : 'Delivering accessible public services'}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link to="/about-mission">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        {isOdia ? 'ଅଧିକ ଜାଣନ୍ତୁ' : 'Learn More'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
