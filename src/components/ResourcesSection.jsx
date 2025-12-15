import React, { useState, useEffect } from 'react';
import { Newspaper, GraduationCap, Database, ArrowRight, ExternalLink, FileText, BarChart, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useSearchParams } from 'react-router-dom';
import AINewsInteractive from './AINewsInteractive';
import { useLanguage } from '../contexts/LanguageContext';

const ResourcesSection = ({ aiNews, limit }) => {
    const [activeDialog, setActiveDialog] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const { isOdia } = useLanguage();

    useEffect(() => {
        const dialogParam = searchParams.get('dialog');
        if (dialogParam) {
            setActiveDialog(dialogParam);
        }
    }, [searchParams]);

    const handleOpenChange = (open) => {
        if (!open) {
            setActiveDialog(null);
            // Optional: Clear the query param when closing
            // setSearchParams({}); 
            // Better to just clear the dialog param but keep others if any, 
            // but for now simplest is not to force clear URL to avoid history stack spam if not needed.
            // But to allow re-clicking the footer link to work even if URL is same, 
            // usually React Router handles this if we push state.
            // Let's remove the param from URL to keep it clean.
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('dialog');
            setSearchParams(newParams);
        }
    };

    const learningResources = [
        { title: "Odisha AI Portal", url: "https://ai.odisha.gov.in/", description: "Official AI portal of the Government of Odisha.", logo: "/odisha-ai_website-v2-/logo/odisha-logo.png" },
        { title: "AI For All", url: "https://ai-for-all.in/", description: "Self-learning programme for everyone in India.", logo: "/odisha-ai_website-v2-/logo/India_AI_logo.png" },
        { title: "AI for Everyone", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", description: "Introductory course by deeplearning.ai to understand AI.", logo: null },
        { title: "Elements of AI", url: "https://www.elementsofai.com/", description: "Free online course to demystify AI.", logo: null },
        { title: "Google AI", url: "https://grow.google/ai/", description: "Learn to use AI to make things faster and smarter.", logo: "/odisha-ai_website-v2-/logo/Google-AI-Logo.png" },
        { title: "IndiaAI Learning", url: "https://indiaai.gov.in/learning", description: "Comprehensive learning resources from IndiaAI.", logo: "/odisha-ai_website-v2-/logo/India_AI_logo.png" },
    ];

    const datasetResources = [
        {
            category: "OVA Datasets on AIKosh",
            items: [
                { title: "OVA Odia Poetry Dataset", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_poetry_dataset.html" },
                { title: "OVA Odia Prose Literature Dataset 1", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_prose_literature_dataset_1.html" },
                { title: "OVA Odia Literature Dataset v1.30", url: "https://aikosh.indiaai.gov.in/home/datasets/details/ova_odia_literature_dataset_v1_30.html" }
            ]
        },
        {
            category: "Odisha Datasets on OGD",
            items: [
                { title: "Ministry/Department Odisha Datasets", url: "https://www.data.gov.in/ministrydepartment/Odisha" }
            ]
        }
    ];

    const productivityResources = [
        {
            useCase: "Chat with Document",
            video: "https://bit.ly/video_chatwithdoc",
            guide: "https://bit.ly/guide_chatwithdoc"
        },
        {
            useCase: "Drafting a Document",
            video: "https://bit.ly/video_draftadoc",
            guide: "https://bit.ly/guide_draftadoc"
        },
        {
            useCase: "Deep Research",
            video: "https://bit.ly/video_deepresearch",
            guide: "https://bit.ly/guide_deepresearch"
        },
        {
            useCase: "Data Analysis and Visualisation",
            video: "https://bit.ly/video_data_analysis",
            guide: "https://bit.ly/guide_data_analysis"
        }
    ];

    const cards = [
        {
            id: 'policy',
            title: isOdia ? 'ଓଡ଼ିଶା AI ନୀତି' : 'Odisha AI Policy',
            icon: FileText,
            description: isOdia ? 'ରାଜ୍ୟର AI ଦୃଷ୍ଟିକୋଣ ଏବଂ ନିର୍ଦ୍ଦେଶାବଳୀ ଜାଣନ୍ତୁ।' : 'Explore the comprehensive AI policy framework and guidelines for the state.',
            color: 'from-orange-500 to-red-600',
            delay: '0'
        },
        {
            id: 'articles',
            title: isOdia ? 'ପ୍ରବନ୍ଧ ଏବଂ ବ୍ଲଗ୍' : 'Articles & Blogs',
            icon: GraduationCap,
            description: isOdia ? 'AI ବିଷୟରେ ଗଭୀର ବିଶ୍ଳେଷଣ ଏବଂ ବିଚାର।' : 'In-depth analysis, expert opinions, and latest trends in the AI ecosystem.',
            color: 'from-orange-500 to-red-600',
            url: 'https://indiaai.gov.in/articles',
            delay: '100'
        },
        {
            id: 'news-link',
            title: isOdia ? 'ସମାଚାର' : 'News',
            icon: Newspaper,
            description: isOdia ? 'ସର୍ବଶେଷ AI ସମ୍ବାଦ ସହିତ ଅଦ୍ୟତନ ରହନ୍ତୁ।' : 'Stay updated with the latest happenings and announcements in the world of AI.',
            color: 'from-orange-500 to-red-600',
            url: 'https://indiaai.gov.in/news',
            delay: '200'
        },
        {
            id: 'research',
            title: isOdia ? 'ଗବେଷଣା ଏବଂ କେସ୍ ଷ୍ଟଡିଜ୍' : 'Research & Case Studies',
            icon: Database,
            description: isOdia ? 'ବିସ୍ତୃତ ଗବେଷଣା ରିପୋର୍ଟ ଏବଂ ସଫଳ କାହାଣୀ।' : 'Access detailed research reports and real-world implementation case studies.',
            color: 'from-orange-500 to-red-600',
            url: 'https://indiaai.gov.in/research-reports',
            delay: '300'
        },
        {
            id: 'learning',
            title: isOdia ? 'ଶିକ୍ଷଣ' : 'Learning',
            icon: GraduationCap,
            description: isOdia ? 'AI ରେ ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ ବା ଅଗ୍ରଗତି କରିବା ପାଇଁ ବିଶ୍ବସ୍ତରୀୟ କୋର୍ସ, ଟ୍ୟୁଟୋରିୟାଲ ଓ ସାମଗ୍ରୀ ପ୍ରାପ୍ତ କରନ୍ତୁ।' : 'Access world-class courses, tutorials, and materials to start or advance your journey in AI.',
            color: 'from-orange-500 to-red-700',
            delay: '400'
        },
        {
            id: 'datasets',
            title: isOdia ? 'ଡାଟାସେଟ୍' : 'Datasets',
            icon: Database,
            description: isOdia ? 'ଗବେଷଣା ଓ ବିକାଶ ପାଇଁ ଆଞ୍ଚଳିକ ଭାଷା ଡାଟା ସହ ଡାଟାସେଟ୍‌ର ଏକ ଧନୀ ଭଣ୍ଡାର ଅନ୍ବେଷଣ କରନ୍ତୁ।' : 'Explore a rich repository of datasets including regional language data for research and development.',
            color: 'from-orange-500 to-red-500',
            delay: '500'
        },
        {
            id: 'productivity',
            title: isOdia ? 'ସରକାରୀ ଉତ୍ପାଦକତା ପାଇଁ AI' : 'AI for Govt Productivity',
            icon: BarChart,
            description: isOdia ? 'ପ୍ରଶାସନିକ ଦକ୍ଷତା ବୃଦ୍ଧି ପାଇଁ AI ସାଧନ।' : 'Tools and frameworks to enhance administrative efficiency and public service delivery.',
            color: 'from-orange-500 to-red-600',
            delay: '600'
        }
    ];

    const displayedCards = limit ? cards.slice(0, limit) : cards;

    const renderDialogContent = () => {
        switch (activeDialog) {
            case 'news':
                return (
                    <div className="h-[700px] w-full">
                        <AINewsInteractive news={aiNews} />
                    </div>
                );
            case 'learning':
            case 'learning':
                return (
                    <div className="p-6 bg-gray-50/50 min-h-full">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {learningResources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:h-2 transition-all duration-300" />

                                    <div className="p-6 flex-grow flex flex-col content-between h-full">
                                        <div className="mb-4">
                                            {/* Logo or Icon */}
                                            {resource.logo ? (
                                                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-200 shadow-sm p-3">
                                                    <img
                                                        src={resource.logo}
                                                        alt={resource.title}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>';
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                                    <GraduationCap className="w-8 h-8" />
                                                </div>
                                            )}
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-700 transition-colors">
                                                {resource.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                                {resource.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-orange-600 font-semibold text-sm">
                                            <span>{isOdia ? 'ଶିକ୍ଷଣ ଆରମ୍ଭ କରନ୍ତୁ' : 'Start Learning'}</span>
                                            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                );
            case 'datasets':
                return (
                    <div className="p-6 space-y-10">
                        {datasetResources.map((section, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 border-b-2 border-orange-100 pb-1 pr-6 inline-block">
                                        {section.category}
                                    </h3>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {section.items.map((item, itemIdx) => (
                                        <a
                                            key={itemIdx}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-400 hover:shadow-md hover:bg-orange-50/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-3">
                                                <span className="font-semibold text-gray-800 group-hover:text-orange-800 leading-tight">
                                                    {item.title}
                                                </span>
                                                <Badge variant="outline" className="bg-gray-50 text-xs font-mono text-gray-500 border-gray-200 group-hover:border-orange-300 group-hover:text-orange-700">
                                                    DATA
                                                </Badge>
                                            </div>
                                            <div className="flex items-center justify-end">
                                                <span className="text-xs font-medium text-gray-400 group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                                                    Access Dataset <ArrowRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'productivity':
                return (
                    <div className="p-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {productivityResources.map((resource, idx) => (
                                <div key={idx} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">
                                            {idx + 1}
                                        </span>
                                        {resource.useCase}
                                    </h3>
                                    <div className="space-y-3">
                                        <a
                                            href={resource.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 transition-colors group/link"
                                        >
                                            <span className="flex items-center gap-3 font-medium">
                                                <PlayCircle className="w-5 h-5 text-orange-500 group-hover/link:text-orange-600" />
                                                Watch Video Tutorial
                                            </span>
                                            <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100" />
                                        </a>
                                        <a
                                            href={resource.guide}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 transition-colors group/link"
                                        >
                                            <span className="flex items-center gap-3 font-medium">
                                                <FileText className="w-5 h-5 text-orange-500 group-hover/link:text-orange-600" />
                                                Read One-Pager Guide
                                            </span>
                                            <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const getDialogTitle = () => {
        switch (activeDialog) {
            case 'news': return 'AI News & Updates';
            case 'learning': return 'Learning Resources';
            case 'datasets': return 'Open Datasets';
            case 'productivity': return 'AI for Government Productivity';
            default: return '';
        }
    };

    return (
        <div>
            {limit && (
                <div className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-2">
                        {isOdia ? 'ଜ୍ଞାନ କେନ୍ଦ୍ର' : 'Knowledge Hub'}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900">{isOdia ? 'ସମ୍ପଦ' : 'RESOURCES'}</span>
                    </h2>
                    <p className="text-xl text-gray-700 font-medium max-w-4xl mx-auto mb-3">
                        {isOdia ? 'ଆପଣଙ୍କ AI ଯାତ୍ରାକୁ ଶକ୍ତିଶାଳୀ କରିବା ପାଇଁ ବ୍ୟାପକ ସାଧନ ଓ ତଥ୍ୟ' : 'Comprehensive tools and information to empower your AI journey'}
                    </p>
                </div>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 ${limit ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-8 max-w-7xl mx-auto px-4`}>
                {displayedCards.map((card) => (
                    <Card
                        key={card.id}
                        className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                        onClick={() => {
                            if (card.url) {
                                window.open(card.url, '_blank', 'noopener,noreferrer');
                            } else if (card.id === 'policy') {
                                const reader = document.getElementById('policy-section');
                                if (reader) reader.scrollIntoView({ behavior: 'smooth' });
                                else window.location.href = '/odisha-ai_website-v2-/policy-acts';
                            } else {
                                setActiveDialog(card.id);
                            }
                        }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />

                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${card.color} bg-opacity-10 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                                {card.title}
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                {card.description}
                            </p>

                            <Button variant="ghost" className="group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent font-semibold">
                                {isOdia ? 'ଅନ୍ବେଷଣ କରନ୍ତୁ' : 'Explore'}
                                {card.url ? <ExternalLink className="ml-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {limit && (
                <div className="text-center mt-12">
                    <a href="/odisha-ai_website-v2-/resources">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg px-8">
                            {isOdia ? 'ଅଧିକ ଅନ୍ୱେଷଣ କରନ୍ତୁ' : 'Explore More'}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </div>
            )}

            <Dialog open={!!activeDialog} onOpenChange={handleOpenChange}>
                <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="p-6 pb-2 border-b bg-white shrink-0">
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            {activeDialog === 'news' && <Newspaper className="w-6 h-6 text-orange-600" />}
                            {activeDialog === 'learning' && <GraduationCap className="w-6 h-6 text-orange-600" />}
                            {activeDialog === 'datasets' && <Database className="w-6 h-6 text-orange-600" />}
                            {getDialogTitle()}
                        </DialogTitle>
                        <DialogDescription>
                            Explore detailed information and external resources.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="flex-grow bg-gray-50/50">
                        <div className="p-2">
                            {renderDialogContent()}
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ResourcesSection;
