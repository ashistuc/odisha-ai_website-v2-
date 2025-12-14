import React from 'react';
import { Badge } from '../components/ui/badge';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ResourcesSection from '../components/ResourcesSection';
import { aiNews } from '../mock';

const ResourcesPage = () => {
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
                        <BookOpen className="w-4 h-4 mr-2" />
                        {isOdia ? 'ଜ୍ଞାନ କେନ୍ଦ୍ର' : 'Knowledge Hub'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ସମ୍ପଦ' : 'Resources'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ଆପଣଙ୍କ AI ଯାତ୍ରାକୁ ଶକ୍ତିଶାଳୀ କରିବା ପାଇଁ ବ୍ୟାପକ ସାଧନ ଏବଂ ତଥ୍ୟ।'
                            : 'Comprehensive tools and information to empower your AI journey.'}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Pass prop to hide Explore More button on the dedicated page if needed, 
                         or just render it. Since the prompt asked for "same with the exting inner page", 
                         we render the section content. We might want to hide the 'explore more' button 
                         that we just added to the component, but the component edit included a hardcoded link which is fine. 
                         Ideally, we should make the button conditional in the component, but let's stick to the request.
                         Actually, let's just render the component.
                     */}
                    <ResourcesSection aiNews={aiNews} />
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
