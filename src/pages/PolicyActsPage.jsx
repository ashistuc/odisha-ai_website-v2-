import React, { useState } from 'react';
import { FileText, Shield, Building2, Lock, Gift, GraduationCap, ShoppingCart, Download, Filter, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { actsNotifications } from '../mock';

const PolicyActsPage = () => {
    const { isOdia } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const iconMap = {
        FileText: FileText,
        Shield: Shield,
        Building2: Building2,
        Lock: Lock,
        Gift: Gift,
        GraduationCap: GraduationCap,
        ShoppingCart: ShoppingCart
    };

    const typeColorMap = {
        'Act': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', hoverBorder: 'hover:border-orange-400' },
        'Notification': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', hoverBorder: 'hover:border-orange-400' },
        'Govt Order': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', hoverBorder: 'hover:border-orange-400' },
        'Guideline': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', hoverBorder: 'hover:border-orange-400' }
    };

    const filterOptions = ['All', 'Act', 'Notification', 'Govt Order', 'Guideline'];

    const getFilterLabel = (key) => {
        if (!isOdia) return key;
        const labels = {
            'All': 'ସମସ୍ତ',
            'Act': 'ଆଇନ',
            'Notification': 'ବିଜ୍ଞପ୍ତି',
            'Govt Order': 'ସରକାରୀ ଆଦେଶ',
            'Guideline': 'ନିର୍ଦ୍ଦେଶାବଳୀ'
        };
        return labels[key] || key;
    };

    const filteredItems = actsNotifications.filter(item => {
        const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = [
        { label: isOdia ? 'ଆଇନ' : 'Acts', count: actsNotifications.filter(i => i.type === 'Act').length, color: 'bg-orange-500' },
        { label: isOdia ? 'ବିଜ୍ଞପ୍ତି' : 'Notifications', count: actsNotifications.filter(i => i.type === 'Notification').length, color: 'bg-orange-500' },
        { label: isOdia ? 'ସରକାରୀ ଆଦେଶ' : 'Govt Orders', count: actsNotifications.filter(i => i.type === 'Govt Order').length, color: 'bg-orange-500' },
        { label: isOdia ? 'ନିର୍ଦ୍ଦେଶାବଳୀ' : 'Guidelines', count: actsNotifications.filter(i => i.type === 'Guideline').length, color: 'bg-orange-500' }
    ];

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
                        <FileText className="w-4 h-4 mr-2" />
                        {isOdia ? 'ଅଫିସିଆଲ୍ ଅପଡେଟ୍ସ' : 'Official Updates'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ନୀତି, ଆଦେଶ ଏବଂ ସରକାରୀ ପ୍ରକାଶନ' : 'Policies, Orders & Official Releases'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ବିଭାଗ ବର୍ଣ୍ଣନା: AI ଇକୋସିଷ୍ଟମ ସହ ଜଡିତ ସରକାରୀ ନୀତି, ଆଇନ, ସରକାରୀ ନିର୍ଦ୍ଦେଶ, ବିଜ୍ଞପ୍ତି ଏବଂ ପ୍ରେସ୍ ରିଲିଜ୍ ବିଷୟରେ ଅବଗତ ରୁହନ୍ତୁ।'
                            : 'Section description: Stay informed with official policies, acts, government orders, notifications, and press releases related to AI ecosystem'}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filter Section 
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-12 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                       
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder={isOdia ? 'ଖୋଜନ୍ତୁ...' : 'Search documents...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                       
                        <div className="flex flex-wrap gap-2 items-center">
                            <Filter className="w-5 h-5 text-gray-500 mr-2" />
                            {filterOptions.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                        ? 'bg-orange-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                                        }`}
                                >
                                    {getFilterLabel(filter)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
*/}
                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || FileText;
                        const typeStyle = typeColorMap[item.type] || typeColorMap['Guideline'];

                        return (
                            <Card
                                key={index}
                                className={`border-2 ${typeStyle.border} ${typeStyle.hoverBorder} hover:shadow-xl transition-all duration-300 group bg-white dark:bg-gray-800`}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between mb-3">
                                        <Badge className={`${typeStyle.bg} ${typeStyle.text} border ${typeStyle.border}`}>
                                            {getFilterLabel(item.type)}
                                        </Badge>
                                        <div className={`${typeStyle.bg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`w-5 h-5 ${typeStyle.text}`} />
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-600 transition-colors">
                                        {isOdia && item.titleOd ? item.titleOd : item.title}
                                    </CardTitle>
                                    {item.source && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {item.source}
                                        </p>
                                    )}
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                                        {isOdia && item.descriptionOd ? item.descriptionOd : item.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                                        <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                                            {new Date(item.date).toLocaleDateString(isOdia ? 'or-IN' : 'en-IN', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <div className="flex gap-2">
                                            {item.externalUrl && item.externalUrl !== '#' && (
                                                <a
                                                    href={item.externalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-orange-600 border-orange-300 hover:bg-orange-50"
                                                    >
                                                        {isOdia ? 'ବିବରଣୀ' : 'Read'}
                                                    </Button>
                                                </a>
                                            )}
                                            {item.fileUrl && item.fileUrl !== '#' && (
                                                <a
                                                    href={item.fileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        size="sm"
                                                        className="bg-orange-600 hover:bg-orange-700 text-white"
                                                    >
                                                        <Download className="w-4 h-4 mr-1" />
                                                        {isOdia ? 'ଡାଉନଲୋଡ୍' : 'Download'}
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                            {isOdia ? 'କୌଣସି ଦସ୍ତାବେଜ ମିଳିଲା ନାହିଁ' : 'No documents found'}
                        </h3>
                        <p className="text-gray-500">
                            {isOdia ? 'ଅନ୍ୟ ଫିଲ୍ଟର କିମ୍ବା ସନ୍ଧାନ ଶବ୍ଦ ଚେଷ୍ଟା କରନ୍ତୁ' : 'Try a different filter or search term'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PolicyActsPage;
