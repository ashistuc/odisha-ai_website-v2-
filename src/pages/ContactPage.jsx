import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'ଠିକଣା' : 'Address'}</p>
                                    <p className="text-gray-600">N-1/7, Acharya Vihar, IRC Village, Bhubaneswar, Odisha 751015</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'ଫୋନ୍' : 'Phone'}</p>
                                    <p className="text-gray-600">+91-674-2567892</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'ଇମେଲ୍' : 'Email'}</p>
                                    <p className="text-gray-600">contact@odisha-ai-mission.gov.in</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{isOdia ? 'କାର୍ଯ୍ୟାଳୟ ସମୟ' : 'Office Hours'}</p>
                                    <p className="text-gray-600">
                                        {isOdia ? 'ସୋମବାର - ଶୁକ୍ରବାର: ୧୦:୦୦ - ୫:୩୦' : 'Monday - Friday: 10:00 AM - 5:30 PM'}
                                    </p>
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
