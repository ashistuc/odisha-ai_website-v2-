import React, { useState } from 'react';
import { GraduationCap, Database, ExternalLink, ArrowRight, BookOpen, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ResourcesPage = () => {
    const { isOdia } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: isOdia ? 'ସମସ୍ତ' : 'All' },
        { id: 'learning', name: isOdia ? 'ଶିକ୍ଷଣ' : 'Learning' },
        { id: 'datasets', name: isOdia ? 'ଡାଟାସେଟ୍' : 'Datasets' },
        { id: 'publications', name: isOdia ? 'ପ୍ରକାଶନ' : 'Publications' }
    ];

    const resources = [
        {
            id: 1,
            title: 'Odisha AI Portal',
            titleOd: 'ଓଡ଼ିଶା AI ପୋର୍ଟାଲ',
            description: 'Official AI portal of the Government of Odisha.',
            descriptionOd: 'ଓଡ଼ିଶା ସରକାରଙ୍କ ଅଧିକୃତ AI ପୋର୍ଟାଲ।',
            url: 'https://ai.odisha.gov.in/',
            category: 'learning',
            icon: BookOpen,
            type: 'Portal'
        },
        {
            id: 2,
            title: 'AI For All',
            titleOd: 'ସମସ୍ତଙ୍କ ପାଇଁ AI',
            description: 'Self-learning programme for everyone in India.',
            descriptionOd: 'ଭାରତରେ ସମସ୍ତଙ୍କ ପାଇଁ ସ୍ୱ-ଶିକ୍ଷଣ କାର୍ଯ୍ୟକ୍ରମ।',
            url: 'https://ai-for-all.in/',
            category: 'learning',
            icon: GraduationCap,
            type: 'Course'
        },
        {
            id: 3,
            title: 'IndiaAI Datasets (Kosh)',
            titleOd: 'IndiaAI ଡାଟାସେଟ୍ (କୋଷ)',
            description: 'Repository of Indian datasets for AI/ML development.',
            descriptionOd: 'AI/ML ବିକାଶ ପାଇଁ ଭାରତୀୟ ଡାଟାସେଟ୍ ଭଣ୍ଡାର।',
            url: 'https://aikosh.indiaai.gov.in/',
            category: 'datasets',
            icon: Database,
            type: 'Dataset'
        },
        {
            id: 4,
            title: 'AI Policy 2025',
            titleOd: 'AI ନୀତି ୨୦୨୫',
            description: 'Comprehensive AI policy document for Odisha.',
            descriptionOd: 'ଓଡ଼ିଶା ପାଇଁ ବ୍ୟାପକ AI ନୀତି ଦଲିଲ।',
            url: '#',
            category: 'publications',
            icon: FileText,
            type: 'Document'
        }
    ];

    const filteredResources = activeCategory === 'all'
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 py-24 overflow-hidden">
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

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-orange-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Resources Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => {
                        const IconComponent = resource.icon;
                        return (
                            <Card key={resource.id} className="group border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <Badge className="bg-gray-100 text-gray-600">{resource.type}</Badge>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                                        {isOdia ? resource.titleOd : resource.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {isOdia ? resource.descriptionOd : resource.description}
                                    </p>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                                    >
                                        {isOdia ? 'ଅନ୍ବେଷଣ କରନ୍ତୁ' : 'Explore'}
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        {isOdia ? 'ଅଧିକ ସମ୍ପଦ ଆବଶ୍ୟକ?' : 'Need More Resources?'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                        {isOdia
                            ? 'ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସମ୍ପଦ ପାଆନ୍ତୁ।'
                            : 'Contact us and get resources tailored to your needs.'}
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        {isOdia ? 'ଯୋଗାଯୋଗ କରନ୍ତୁ' : 'Contact Us'} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
