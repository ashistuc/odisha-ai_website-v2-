import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const ContactPage = () => {
    const { isOdia } = useLanguage();

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ଆମ ସହ ଯୋଗାଯୋଗ' : 'Contact Us'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl">
                        {isOdia ? 'ଓଡ଼ିଶା AI ମିଶନ ବିଷୟରେ ପ୍ରଶ୍ନ ଅଛି? ଆମେ ସାହାଯ୍ୟ କରିବାକୁ ଏଠାରେ ଅଛୁ!' : 'Have questions about Odisha AI Mission? We\'re here to help!'}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    <Card className="border-2 border-gray-100">
                        <CardContent className="p-8 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {isOdia ? 'ଓଡ଼ିଶା କମ୍ପ୍ୟୁଟର ଆପ୍ଲିକେସନ୍ ସେଣ୍ଟର (OCAC)' : 'Odisha Computer Application Centre (OCAC)'}
                            </h2>

                            <div className="flex items-start space-x-4">
                                <div className="min-w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'ଠିକଣା' : 'Address'}</p>
                                    <p className="text-gray-600">Odisha Computer Application Centre
                                        (Technical Directorate to Electronics & IT Department)
                                        OCAC BUILDING, PLOT NO-N-1/7-D, ACHARYA VIHAR
                                        RRL POST OFFICE, BHUBANESWAR- 751013.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="min-w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'ଇମେଲ୍' : 'Email'}</p>
                                    <p className="text-gray-600">aiteam.ocac@odisha.gov.in</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <p className="font-semibold text-gray-900 mb-4">{isOdia ? 'ସୋସିଆଲ ମିଡିଆ' : 'Follow Us'}</p>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/EIT.Odisha" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-300">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://x.com/EIT_Odisha" className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all duration-300">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/eitodisha/" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-700 transition-all duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/eit_odisha/" className="w-10 h-10 bg-gray-50 hover:bg-pink-50 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-600 transition-all duration-300">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>


                        </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-100 overflow-hidden">
                        <CardContent className="p-0 h-full min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f0c0c0c0c0%3A0x1234567890!2sOCAC%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="OCAC Location"
                            ></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
