import React from 'react';
import { Handshake, ExternalLink, Building2, GraduationCap, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const PartnersPage = () => {
    const { isOdia } = useLanguage();

    const partners = [
        {
            id: 1,
            name: 'AHRC, IIT Bhubaneswar',
            role: isOdia ? 'ଶୈକ୍ଷିକ ସହଯୋଗୀ' : 'Academic Collaborators',
            description: isOdia
                ? 'ବାସ୍ତବ ଜଗତ ପ୍ରୟୋଗ ପାଇଁ ଉଚ୍ଚ-ପ୍ରଭାବ AI ଗବେଷଣା ଏବଂ ନବସୃଜନକୁ ଅଗ୍ରସର କରୁଥିବା ଏକ ଅଗ୍ରଣୀ ଶୈକ୍ଷିକ କେନ୍ଦ୍ର।'
                : 'A leading academic hub advancing high-impact AI research and innovation.',
            logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/IIT_Bhubaneswar_Logo.png',
            url: 'https://www.iitbbs.ac.in/index.php/ahrc/',
            icon: GraduationCap
        },
        {
            id: 2,
            name: 'Wadhwani Foundation',
            role: isOdia ? 'ତାଲିମ ସହଭାଗୀ' : 'Training Partner',
            description: isOdia
                ? 'କର୍ମଶକ୍ତି ରୂପାନ୍ତରଣ ପାଇଁ ବୃହତ୍ ମାପର ଦକ୍ଷତା ଏବଂ ଉଦ୍ୟମଶୀଳତାକୁ ତ୍ୱରାନ୍ୱିତ କରୁଥିବା ଏକ ବିଶ୍ୱ ଅଲାଭକାରୀ ସଂସ୍ଥା।'
                : 'A global non-profit accelerating large-scale skilling and entrepreneurship.',
            logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/wadhwani-logo.webp',
            url: 'https://wadhwanifoundation.org/',
            icon: Building2
        },
        {
            id: 3,
            name: 'NASSCOM',
            role: isOdia ? 'ଉତ୍କୃଷ୍ଟତା କେନ୍ଦ୍ର ସହଭାଗୀ' : 'Centre of Excellence Partner',
            description: isOdia
                ? 'ଭାରତର ଶୀର୍ଷ ପ୍ରଯୁକ୍ତି ଶିଳ୍ପ ସଂସ୍ଥା ଯାହା AI ନବସୃଜନ ଏବଂ ଷ୍ଟାର୍ଟଅପ୍ ଅଭିବୃଦ୍ଧିକୁ ଚାଳିତ କରେ।'
                : "India's apex technology industry body driving AI innovation and startup growth.",
            logo: '/odisha-ai_website-v2-/Our_Partners_in_Innovation/nasscom-logo.jpg',
            url: 'https://nasscom.in/',
            icon: Lightbulb
        }
    ];

    const partnerTypes = [
        { title: isOdia ? 'ଶୈକ୍ଷିକ ସହଭାଗୀ' : 'Academic Partners', count: 5 },
        { title: isOdia ? 'ଶିଳ୍ପ ସହଭାଗୀ' : 'Industry Partners', count: 12 },
        { title: isOdia ? 'ସରକାରୀ ସଂସ୍ଥା' : 'Government Bodies', count: 8 },
        { title: isOdia ? 'ଅନ୍ତର୍ଜାତୀୟ ସହଯୋଗ' : 'International Collaborations', count: 3 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-600 py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Badge className="bg-white/20 text-white mb-6 px-4 py-2 border-white/30">
                        <Handshake className="w-4 h-4 mr-2" />
                        {isOdia ? 'ରଣନୀତିକ ମିତ୍ରତା' : 'Strategic Alliances'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ନବସୃଜନରେ ସହଭାଗୀ' : 'Partners in Innovation'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ଓଡ଼ିଶାରେ AI ର ଭବିଷ୍ୟତକୁ ଚାଳିତ କରିବା ପାଇଁ ଶିଳ୍ପ ନେତା ଏବଂ ଶୈକ୍ଷିକ ଅଗ୍ରଦୂତମାନଙ୍କ ସହିତ ସହଯୋଗ।'
                            : 'Collaborating with industry leaders and academic pioneers to drive AI in Odisha.'}
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="grid md:grid-cols-4 gap-4">
                    {partnerTypes.map((type, index) => (
                        <Card key={index} className="bg-white shadow-xl border-0">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">{type.count}+</div>
                                <div className="text-gray-600">{type.title}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Featured Partners */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <Badge className="bg-orange-100 text-orange-700 mb-4 px-4 py-2">
                        {isOdia ? 'ପ୍ରମୁଖ ସହଭାଗୀ' : 'Featured Partners'}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {isOdia ? 'ଆମର ମୁଖ୍ୟ ସହଭାଗୀ' : 'Our Key Partners'}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {partners.map((partner) => (
                        <Card key={partner.id} className="group border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                            <CardContent className="p-8">
                                <div className="h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <Badge className="bg-orange-100 text-orange-700 mb-3">{partner.role}</Badge>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {partner.description}
                                </p>
                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                                >
                                    {isOdia ? 'ୱେବସାଇଟ୍ ପରିଦର୍ଶନ' : 'Visit Website'}
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        {isOdia ? 'ସହଭାଗୀ ହୁଅନ୍ତୁ' : 'Become a Partner'}
                    </h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        {isOdia
                            ? 'ଆସନ୍ତୁ ଏକତ୍ର ହୋଇ ଓଡ଼ିଶାରେ AI ନବସୃଜନକୁ ଅଗ୍ରସର କରିବା।'
                            : 'Join us in driving AI innovation in Odisha.'}
                    </p>
                    <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                        {isOdia ? 'ଆମ ସହ ଯୋଗାଯୋଗ' : 'Contact Us'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
