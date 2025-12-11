import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import EventGallery from '../components/EventGallery';
import { eventGallery } from '../mock';

const EventsPage = () => {
    const { isOdia } = useLanguage();

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Badge className="bg-white/20 text-white mb-6 px-4 py-2 border-white/30">
                        <Calendar className="w-4 h-4 mr-2" />
                        {isOdia ? 'ଇଭେଣ୍ଟ ଏବଂ ୱର୍କସପ' : 'Events & Workshops'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ଇଭେଣ୍ଟ' : 'Events'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ଓଡ଼ିଶା AI ମିଶନର ନବୀନତମ ଇଭେଣ୍ଟ, ୱର୍କସପ ଏବଂ ସମ୍ମେଳନ ବିଷୟରେ ଜାଣନ୍ତୁ।'
                            : 'Stay updated with the latest events, workshops, and conferences from Odisha AI Mission.'}
                    </p>
                </div>
            </div>

            {/* Interactive Event Gallery Section */}
            <div className="bg-orange-50 dark:bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <EventGallery events={eventGallery} />
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
