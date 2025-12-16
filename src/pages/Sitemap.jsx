import React from 'react';
import { Link } from 'react-router-dom';
import {
    Map, Home, Users, Building2, BookOpen, Calendar, Mail, FileText,
    Shield, Scale, AlertCircle, ChevronRight, ExternalLink, Layers,
    GraduationCap, Database, BarChart, Newspaper
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Sitemap = () => {
    const { isOdia } = useLanguage();

    // Define sitemap structure with categories
    const sitemapData = [
        {
            category: isOdia ? 'ମୁଖ୍ୟ ପୃଷ୍ଠାଗୁଡ଼ିକ' : 'Main Pages',
            icon: Home,
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            links: [
                { name: isOdia ? 'ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Home', path: '/', description: isOdia ? 'ଓଡିଶା AI ମିଶନ ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Odisha AI Mission homepage' },
                { name: isOdia ? 'ମିଶନ ବିଷୟରେ' : 'About Mission', path: '/about-mission', description: isOdia ? 'ଆମ ଦୃଷ୍ଟି ଏବଂ ମିଶନ ବିଷୟରେ ଜାଣନ୍ତୁ' : 'Learn about our vision and mission' },
                { name: isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars', path: '/strategic-pillars', description: isOdia ? 'ଆମର ମୁଖ୍ୟ ରଣନୀତିକ ଦିଗ' : 'Our key strategic focus areas' },
                { name: isOdia ? 'ସହଭାଗୀ' : 'Partners', path: '/partners', description: isOdia ? 'ଆମର ସହଭାଗୀ ଏବଂ ସହଯୋଗୀ' : 'Our partners and collaborators' },
                { name: isOdia ? 'ଇଭେଣ୍ଟ୍' : 'Events', path: '/events', description: isOdia ? 'ଆଗାମୀ ଏବଂ ଅତୀତ ଇଭେଣ୍ଟ୍' : 'Upcoming and past events' },
                { name: isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact Us', path: '/contact', description: isOdia ? 'ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' : 'Get in touch with us' }
            ]
        },
        {
            category: isOdia ? 'ସମ୍ପଦ' : 'Resources',
            icon: BookOpen,
            color: 'from-orange-500 to-orange-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            links: [
                { name: isOdia ? 'ସମ୍ପଦ ହବ୍' : 'Resources Hub', path: '/resources', description: isOdia ? 'ସମସ୍ତ AI ସମ୍ପଦ ଏକ ଜାଗାରେ' : 'All AI resources in one place' },
                { name: isOdia ? 'ଓଡ଼ିଶା AI ନୀତି' : 'Odisha AI Policy', path: '/policy-acts', description: isOdia ? 'ରାଜ୍ୟ AI ନୀତି ଦସ୍ତାବିଜ୍' : 'State AI policy document' },
                { name: isOdia ? 'ଶିକ୍ଷଣ' : 'Learning', path: '/resources?dialog=learning', description: isOdia ? 'AI କୋର୍ସ ଏବଂ ଟ୍ୟୁଟୋରିଆଲ୍' : 'AI courses and tutorials' },
                { name: isOdia ? 'ଡାଟାସେଟ୍' : 'Datasets', path: '/resources?dialog=datasets', description: isOdia ? 'ଉନ୍ମୁକ୍ତ ଡାଟାସେଟ୍ ଆକ୍ସେସ୍ କରନ୍ତୁ' : 'Access open datasets' },
                { name: isOdia ? 'ସରକାରୀ ଉତ୍ପାଦକତା ପାଇଁ AI' : 'AI for Govt Productivity', path: '/resources?dialog=productivity', description: isOdia ? 'ସରକାରୀ AI ଉପକରଣ' : 'Government AI tools' }
            ]
        },
        {
            category: isOdia ? 'ବାହ୍ୟ ସମ୍ପଦ' : 'External Resources',
            icon: ExternalLink,
            color: 'from-orange-500 to-orange-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            links: [
                { name: isOdia ? 'ପ୍ରବନ୍ଧ ଏବଂ ବ୍ଲଗ୍' : 'Articles & Blogs', href: 'https://indiaai.gov.in/articles', description: isOdia ? 'AI ପ୍ରବନ୍ଧ ଏବଂ ଅନ୍ତର୍ଦୃଷ୍ଟି' : 'AI articles and insights', external: true },
                { name: isOdia ? 'ସମାଚାର' : 'News', href: 'https://indiaai.gov.in/news', description: isOdia ? 'ସର୍ବଶେଷ AI ସମାଚାର' : 'Latest AI news', external: true },
                { name: isOdia ? 'ଗବେଷଣା ଏବଂ କେସ୍ ଷ୍ଟଡିଜ୍' : 'Research & Case Studies', href: 'https://indiaai.gov.in/research-reports', description: isOdia ? 'ଗବେଷଣା ରିପୋର୍ଟ' : 'Research reports', external: true },
                { name: isOdia ? 'ଓଡିଶା ଫର୍ AI ପୋର୍ଟାଲ' : 'Odisha For AI Portal', href: 'https://ai.odisha.gov.in/', description: isOdia ? 'ଅଫିସିଆଲ AI ପୋର୍ଟାଲ' : 'Official AI portal', external: true },
                { name: isOdia ? 'AI ଫର୍ ଅଲ୍' : 'AI For All', href: 'https://ai-for-all.in/', description: isOdia ? 'ଭାରତ AI ଶିକ୍ଷଣ ପ୍ଲାଟଫର୍ମ' : 'India AI learning platform', external: true }
            ]
        },
        {
            category: isOdia ? 'ଆଇନ ଏବଂ ନୀତି' : 'Legal & Policy',
            icon: Scale,
            color: 'from-orange-500 to-orange-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            links: [
                { name: isOdia ? 'ୱେବସାଇଟ୍ ନୀତି' : 'Website Policy', path: '/privacy-policy', description: isOdia ? 'ଗୋପନୀୟତା ଏବଂ କପିରାଇଟ୍ ନୀତି' : 'Privacy and copyright policies' },
                { name: isOdia ? 'ସେବା ନିୟମାବଳୀ' : 'Terms of Service', path: '/terms', description: isOdia ? 'ୱେବସାଇଟ୍ ବ୍ୟବହାର ନିୟମ' : 'Website usage terms' },
                { name: isOdia ? 'ଦାବିତ୍ୟାଗ' : 'Disclaimer', path: '/disclaimer', description: isOdia ? 'ଆଇନଗତ ଦାବିତ୍ୟାଗ' : 'Legal disclaimer' },
                { name: isOdia ? 'ସାଇଟମ୍ୟାପ୍' : 'Sitemap', path: '/sitemap', description: isOdia ? 'ୱେବସାଇଟ୍ ମାନଚିତ୍ର' : 'Website navigation map' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-6">
                            <Map className="w-10 h-10 text-orange-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {isOdia ? 'ସାଇଟମ୍ୟାପ୍' : 'Sitemap'}
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            {isOdia
                                ? 'ଓଡିଶା AI ମିଶନ ୱେବସାଇଟ୍‌ର ସମ୍ପୂର୍ଣ୍ଣ ନାଭିଗେସନ୍ ମାନଚିତ୍ର। ଆପଣ ଯାହା ଖୋଜୁଛନ୍ତି ତାହା ଶୀଘ୍ର ଖୋଜନ୍ତୁ।'
                                : 'Complete navigation map of the Odisha AI Mission website. Quickly find what you\'re looking for.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Sitemap Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sitemapData.map((section, sectionIndex) => {
                        const IconComponent = section.icon;
                        return (
                            <div
                                key={sectionIndex}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                {/* Section Header */}
                                <div className={`bg-gradient-to-r ${section.color} p-6`}>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl font-bold text-white">
                                            {section.category}
                                        </h2>
                                    </div>
                                </div>

                                {/* Links List */}
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                {link.external ? (
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                                                    >
                                                        <div className={`${section.bgColor} p-2 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                                            <ChevronRight className={`w-4 h-4 ${section.iconColor}`} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                                                    {link.name}
                                                                </span>
                                                                <ExternalLink className="w-3 h-3 text-gray-400" />
                                                            </div>
                                                            <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={link.path}
                                                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                                                    >
                                                        <div className={`${section.bgColor} p-2 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                                            <ChevronRight className={`w-4 h-4 ${section.iconColor}`} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors block">
                                                                {link.name}
                                                            </span>
                                                            <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Stats Section 
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {isOdia ? 'ଶୀଘ୍ର ଆକ୍ସେସ୍' : 'Quick Access'}
                        </h3>
                        <p className="text-gray-400">
                            {isOdia ? 'ସର୍ବାଧିକ ପରିଦର୍ଶିତ ପୃଷ୍ଠାଗୁଡ଼ିକ' : 'Most visited pages at a glance'}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: isOdia ? 'ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Home', path: '/', icon: Home },
                            { name: isOdia ? 'ସମ୍ପଦ' : 'Resources', path: '/resources', icon: BookOpen },
                            { name: isOdia ? 'ଇଭେଣ୍ଟ୍' : 'Events', path: '/events', icon: Calendar },
                            { name: isOdia ? 'ଯୋଗାଯୋଗ' : 'Contact', path: '/contact', icon: Mail }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-xl mb-3 group-hover:bg-orange-500 transition-colors">
                                        <Icon className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-white font-medium text-sm">{item.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
*/}
                {/* Help Section 
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        {isOdia
                            ? 'ଆପଣ ଯାହା ଖୋଜୁଛନ୍ତି ତାହା ପାଇଲେ ନାହିଁ?'
                            : 'Can\'t find what you\'re looking for?'}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-orange-500/25"
                    >
                        <Mail className="w-5 h-5" />
                        {isOdia ? 'ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' : 'Contact Us'}
                    </Link>
                </div>
                */}
            </div>
        </div>
    );
};

export default Sitemap;
