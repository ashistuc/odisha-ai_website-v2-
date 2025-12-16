import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Newspaper, GraduationCap, Database, ArrowRight, ExternalLink, FileText, BarChart, PlayCircle, X, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useSearchParams, Link } from 'react-router-dom';
import AINewsInteractive from './AINewsInteractive';
import { useLanguage } from '../contexts/LanguageContext';
import InteractivePDFReader from './InteractivePDFReader';

const ResourcesSection = ({ aiNews, limit, onOpenPolicyPDF }) => {
    const [activeDialog, setActiveDialog] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const { isOdia } = useLanguage();
    const [isPDFReaderOpen, setIsPDFReaderOpen] = useState(false);
    const [videoPopup, setVideoPopup] = useState({ isOpen: false, url: '', title: '', originalUrl: '' });
    const [videoKey, setVideoKey] = useState(0);
    const [pdfPopup, setPdfPopup] = useState({ isOpen: false, url: '', title: '' });

    const handleOpenPolicyPDF = () => {
        if (onOpenPolicyPDF) {
            onOpenPolicyPDF();
        } else {
            setIsPDFReaderOpen(true);
        }
    };

    useEffect(() => {
        const dialogParam = searchParams.get('dialog');
        if (dialogParam) {
            setActiveDialog(dialogParam);
        }
    }, [searchParams]);

    // Handle Escape key to close popups (PDF popup first, then video popup)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                // Close PDF popup first if open (it's on top)
                if (pdfPopup.isOpen) {
                    e.preventDefault();
                    e.stopPropagation();
                    setPdfPopup({ isOpen: false, url: '', title: '' });
                    return; // Don't close video popup or parent dialog
                }
                // Then close video popup if open
                if (videoPopup.isOpen) {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoPopup({ isOpen: false, url: '', title: '', originalUrl: '' });
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [videoPopup.isOpen, pdfPopup.isOpen]);

    // State to control iframe rendering with delay
    const [iframeReady, setIframeReady] = useState(false);

    // Delay iframe rendering to ensure portal is fully mounted
    useEffect(() => {
        if (videoPopup.isOpen && videoPopup.url) {
            setIframeReady(false);
            const timer = setTimeout(() => {
                setIframeReady(true);
            }, 100);
            return () => clearTimeout(timer);
        } else {
            setIframeReady(false);
        }
    }, [videoPopup.isOpen, videoPopup.url, videoKey]);

    const handleOpenChange = (open) => {
        if (!open) {
            // Don't close parent dialog if PDF popup or Video popup is open
            if (pdfPopup.isOpen || videoPopup.isOpen) {
                return;
            }
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

    // Helper function to convert video URLs to embeddable format
    const getEmbedUrl = (url) => {
        // Google Drive: convert /view to /preview
        if (url.includes('drive.google.com/file/d/')) {
            const fileIdMatch = url.match(/\/file\/d\/([^/]+)/);
            if (fileIdMatch) {
                return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
            }
        }
        // YouTube: convert watch URL to embed
        if (url.includes('youtube.com/watch')) {
            const videoId = new URL(url).searchParams.get('v');
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
        }
        // YouTube short URLs
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
        }
        // Return original URL if no transformation needed
        return url;
    };

    const learningResources = [
        { title: "Odisha For AI Portal", url: "https://ai.odisha.gov.in/", description: "Odisha for AI is a self-learning online program designed to raise public awareness about Artificial Intelligence.", logo: "/odisha-ai_website-v2-/logo/odisha-logo.png" },
        { title: "AI For All", url: "https://ai-for-all.in/", description: "Self-learning programme for everyone in India.", logo: "/odisha-ai_website-v2-/logo/India_AI_logo.png" },
        { title: "AI for Everyone", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", description: "Introductory course by deeplearning.ai to understand AI.", logo: "/odisha-ai_website-v2-/logo/deeplearning.png" },
        { title: "Elements of AI", url: "https://www.elementsofai.com/", description: "Free online course to demystify AI.", logo: "/odisha-ai_website-v2-/logo/elementsofai.png" },
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
            video: "https://aimission.odisha.gov.in/media/Video-4-Chat-With-Document.mp4",
            videoOriginal: "https://bit.ly/video_chatwithdoc",
            guide: "https://bit.ly/guide_chatwithdoc",
            pdfFile: "/pdf/Chat_with_Document.pdf"
        },
        {
            useCase: "Drafting a Document",
            video: "https://aimission.odisha.gov.in/media/Video-2-Drafting-Document.mp4",
            videoOriginal: "https://bit.ly/video_draftadoc",
            guide: "https://bit.ly/guide_draftadoc",
            pdfFile: "/pdf/Document_Drafting.pdf"
        },
        {
            useCase: "Deep Research",
            video: "https://aimission.odisha.gov.in/media/Video-3-Deep-Research.mp4",
            videoOriginal: "https://bit.ly/video_deepresearch",
            guide: "https://bit.ly/guide_deepresearch",
            pdfFile: "/pdf/Deep_Research.pdf"
        },
        {
            useCase: "Data Analysis and Visualisation",
            video: "https://aimission.odisha.gov.in/media/Video-1-Data-Analysis.mp4",
            videoOriginal: "https://bit.ly/video_data_analysis",
            guide: "https://bit.ly/guide_data_analysis",
            pdfFile: "/pdf/Data_Analysis.pdf"
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
                                        <button
                                            onClick={() => {
                                                // Open video popup on top of the current dialog (don't close parent)
                                                setVideoKey(prev => prev + 1);
                                                setVideoPopup({ isOpen: true, url: resource.video, title: resource.useCase, originalUrl: resource.videoOriginal || resource.video });
                                            }}
                                            className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 transition-colors group/link"
                                        >
                                            <span className="flex items-center gap-3 font-medium">
                                                <PlayCircle className="w-5 h-5 text-orange-500 group-hover/link:text-orange-600" />
                                                Watch Video Tutorial
                                            </span>
                                            <PlayCircle className="w-4 h-4 opacity-50 group-hover/link:opacity-100" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                // Open PDF popup on top of the current dialog (don't close parent)
                                                setPdfPopup({ isOpen: true, url: resource.pdfFile, title: resource.useCase });
                                            }}
                                            className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 transition-colors group/link"
                                        >
                                            <span className="flex items-center gap-3 font-medium">
                                                <FileText className="w-5 h-5 text-orange-500 group-hover/link:text-orange-600" />
                                                Read One-Pager Guide
                                            </span>
                                            <FileText className="w-4 h-4 opacity-50 group-hover/link:opacity-100" />
                                        </button>
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
                                handleOpenPolicyPDF();
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
                    <Link to="/resources">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg px-8">
                            {isOdia ? 'ଅଧିକ ଅନ୍ୱେଷଣ କରନ୍ତୁ' : 'Explore More'}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
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

            {/* Interactive PDF Reader for Policy */}
            <InteractivePDFReader
                isOpen={isPDFReaderOpen}
                onClose={() => setIsPDFReaderOpen(false)}
                pdfUrl="/Odisha%20AI%20Policy-2025.pdf"
            />

            {/* Video Popup Modal - Using Portal to render outside Dialog */}
            {videoPopup.isOpen && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
                    style={{ zIndex: 10000, pointerEvents: 'none' }}
                >
                    {/* Backdrop - clicking here closes the popup */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        style={{ pointerEvents: 'auto' }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setVideoPopup({ isOpen: false, url: '', title: '', originalUrl: '' });
                        }}
                    />

                    {/* Modal Content - all interactions work normally */}
                    <div
                        className="relative w-full max-w-5xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                        style={{ pointerEvents: 'auto' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-700 bg-gray-900">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                                    <PlayCircle className="w-5 h-5 text-orange-400" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-widest text-orange-400 font-medium">Video Tutorial</p>
                                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">{videoPopup.title}</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Download Button - Opens video in new tab */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        // Open video in new tab for download
                                        window.open(videoPopup.url, '_blank', 'noopener,noreferrer');
                                    }}
                                    className="w-10 h-10 rounded-full bg-orange-500/20 hover:bg-orange-500/40 flex items-center justify-center text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                                    title="Download Video"
                                >
                                    <Download className="w-5 h-5" />
                                </button>
                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setVideoPopup({ isOpen: false, url: '', title: '', originalUrl: '' });
                                    }}
                                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors cursor-pointer"
                                    aria-label="Close video"
                                    title="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Video Container - with proper pointer-events for controls */}
                        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                            {/* Loading Spinner - shown when iframe is not ready */}
                            {!iframeReady && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-gray-400 text-sm">Loading video...</p>
                                    </div>
                                </div>
                            )}
                            {/* Video player - with pointer-events for controls */}
                            {iframeReady && videoPopup.url && (
                                videoPopup.url.endsWith('.mp4') ? (
                                    <video
                                        key={`video-frame-${videoKey}`}
                                        src={videoPopup.url}
                                        className="absolute top-0 left-0 w-full h-full bg-black"
                                        style={{ pointerEvents: 'auto' }}
                                        controls
                                        autoPlay
                                    />
                                ) : (
                                    <iframe
                                        key={`video-frame-${videoKey}`}
                                        src={getEmbedUrl(videoPopup.url)}
                                        title={videoPopup.title}
                                        className="absolute top-0 left-0 w-full h-full bg-black"
                                        style={{ pointerEvents: 'auto' }}
                                        frameBorder="0"
                                        loading="eager"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                )
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 sm:px-6 py-3 border-t border-gray-700 bg-gray-900 flex flex-wrap items-center justify-between gap-2">
                            <p className="text-xs sm:text-sm text-gray-400">
                                Press <kbd className="px-2 py-0.5 rounded bg-gray-700 border border-gray-600 text-white font-mono text-xs">Esc</kbd> or click outside to close
                            </p>
                            <a
                                href={videoPopup.originalUrl || videoPopup.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Use window.open as fallback for reliable opening
                                    const videoUrl = videoPopup.originalUrl || videoPopup.url;
                                    window.open(videoUrl, '_blank', 'noopener,noreferrer');
                                }}
                            >

                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* PDF Popup for Productivity Resources - Simple iframe viewer */}
            {pdfPopup.isOpen && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
                    style={{ zIndex: 10000, pointerEvents: 'none' }}
                >
                    {/* Backdrop - clicking here closes the popup */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        style={{ pointerEvents: 'auto' }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setPdfPopup({ isOpen: false, url: '', title: '' });
                        }}
                    />

                    {/* Modal Content - all interactions work normally */}
                    <div
                        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col"
                        style={{ pointerEvents: 'auto' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 bg-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5 text-orange-600" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-widest text-orange-600 font-medium">One-Pager Guide</p>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{pdfPopup.title}</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Download Button */}
                                <a
                                    href={`${process.env.PUBLIC_URL || ''}${pdfPopup.url}`}
                                    download
                                    className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                                    title="Download PDF"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setPdfPopup({ isOpen: false, url: '', title: '' });
                                    }}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                                    aria-label="Close PDF"
                                    title="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Container - Clean view without toolbar/sidebar */}
                        <div className="flex-1 bg-gray-100 overflow-hidden">
                            <iframe
                                src={`${process.env.PUBLIC_URL || ''}${pdfPopup.url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                                title={pdfPopup.title}
                                className="w-full h-full border-0"
                                style={{ minHeight: '100%', pointerEvents: 'auto' }}
                                allow="fullscreen"
                            />
                        </div>

                        {/* Footer - Simplified */}
                        <div className="px-4 sm:px-6 py-3 border-t border-gray-200 bg-white flex items-center justify-center shrink-0">
                            <p className="text-xs sm:text-sm text-gray-500">
                                Press <kbd className="px-2 py-0.5 rounded bg-gray-100 border border-gray-300 text-gray-700 font-mono text-xs">Esc</kbd> or click outside to close
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ResourcesSection;
