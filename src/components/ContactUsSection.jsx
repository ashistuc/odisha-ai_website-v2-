import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

const ContactUsSection = ({ contactInfo }) => {
  const { isOdia } = useLanguage();

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 hover:bg-orange-200 mb-4 px-4 py-2">
          <MapPin className="w-4 h-4 mr-2" />
          {isOdia ? 'ଯୋଗାଯୋଗ କରନ୍ତୁ' : 'Get in Touch'}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {isOdia ? 'ଆମ ସହ ' : 'Contact '}<span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">{isOdia ? 'ଯୋଗାଯୋଗ' : 'Us'}</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {isOdia ? 'ଓଡ଼ିଶା AI ମିଶନ ବିଷୟରେ ପ୍ରଶ୍ନ ଅଛି? ଆମେ ସାହାଯ୍ୟ କରିବାକୁ ଏଠାରେ ଅଛୁ!' : 'Have questions about Odisha AI Mission? We\'re here to help!'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {contactInfo.address}
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{isOdia ? 'ଠିକଣା' : 'Address'}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.fullAddress}
                  </p>
                </div>
              </div>



              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{isOdia ? 'ଇମେଲ୍' : 'Email'}</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">{isOdia ? 'ସୋସିଆଲ ମିଡିଆ' : 'Follow Us'}</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1BjYfN9pnG/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Facebook">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="X (Twitter)">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/odisha-computer-application-centre" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors" aria-label="Instagram">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div>
          <Card className="border-2 border-gray-200 dark:border-gray-700 h-full overflow-hidden">
            <CardContent className="p-0 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f0c0c0c0c0%3A0x1234567890!2sOCAC%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OCAC Bhubaneswar Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
