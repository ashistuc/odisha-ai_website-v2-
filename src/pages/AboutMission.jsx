import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Users, ArrowRight, Eye, Zap, Lock, Leaf, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const AboutMission = () => {
    const { isOdia } = useLanguage();

    // Core Objectives
    const coreObjectives = [
        {
            id: 1,
            title: isOdia ? 'ପ୍ରାଥମିକ ସାର୍ବଜନିକ କ୍ଷେତ୍ରରେ AI ଗ୍ରହଣକୁ ତ୍ୱରାନ୍ୱିତ କରିବା' : 'Accelerate AI adoption in priority public sectors',
            icon: Zap,
            description: isOdia ? 'ସେବା ବିତରଣ ଉନ୍ନତ କରିବାକୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସରକାରୀ ବିଭାଗରେ AI ସମାଧାନର ଦ୍ରୁତ-ଟ୍ରାକ୍ କାର୍ଯ୍ୟକାରିତା' : 'Fast-track implementation of AI solutions across critical government departments to improve service delivery'
        },
        {
            id: 2,
            title: isOdia ? 'AI ଶିକ୍ଷଣ, ଦକ୍ଷତା ଏବଂ ସଚେତନତାକୁ ଶକ୍ତିଶାଳୀ କରିବା' : 'Strengthen AI learning, skilling and awareness',
            icon: Users,
            description: isOdia ? 'ଦକ୍ଷ କର୍ମଶକ୍ତି ସୃଷ୍ଟି ପାଇଁ AI ଶିକ୍ଷା, ତାଲିମ କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ବ୍ୟାପକ ଇକୋସିଷ୍ଟମ୍ ନିର୍ମାଣ' : 'Build ecosystem for AI education, training programs, and awareness'
        },
        {
            id: 3,
            title: isOdia ? 'ସ୍ଥାନୀୟ ନବସୃଜନ ଏବଂ ଉଦ୍ୟମଶୀଳତାକୁ ପ୍ରୋତ୍ସାହିତ କରିବା' : 'Encourage local innovation and entrepreneurship',
            icon: Lightbulb,
            description: isOdia ? 'ଆଞ୍ଚଳିକ ଆହ୍ୱାନ ପାଇଁ AI ସମାଧାନ ବିକଶିତ କରିବାକୁ ଷ୍ଟାର୍ଟଅପ୍ ଇକୋସିଷ୍ଟମ ପୋଷଣ' : 'Foster startup ecosystem to develop AI solutions for regional challenges'
        },
        {
            id: 4,
            title: isOdia ? 'ଦାୟିତ୍ୱଶୀଳ, ସ୍ୱଚ୍ଛ ଏବଂ ସୁରକ୍ଷିତ AI ନିୟୋଜନ ସକ୍ଷମ କରିବା' : 'Enable responsible, transparent and secure AI deployment',
            icon: Lock,
            description: isOdia ? 'ନୈତିକ AI ବ୍ୟବହାର, ଡାଟା ସୁରକ୍ଷା ସୁନିଶ୍ଚିତ କରୁଥିବା ଶାସନ ଢାଞ୍ଚା ପ୍ରତିଷ୍ଠା' : 'Establish governance frameworks ensuring ethical AI use and data security'
        },
        {
            id: 5,
            title: isOdia ? 'ଓଡ଼ିଶାର ଭାଷା, ସଂସ୍କୃତି ଏବଂ ବିକାଶ ଆବଶ୍ୟକତାରେ AI ସମାଧାନ ପ୍ରୋତ୍ସାହିତ' : "Promote AI solutions rooted in Odisha's languages and culture",
            icon: Leaf,
            description: isOdia ? 'ସ୍ଥାନୀୟ ଭାଷା, ପରମ୍ପରା ଏବଂ ଅନନ୍ୟ ବିକାଶ ଆହ୍ୱାନକୁ ସମ୍ମାନ କରୁଥିବା AI ପ୍ରୟୋଗ' : 'Develop AI applications respecting local languages and traditions'
        }
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
                        <Target className="w-4 h-4 mr-2" />
                        {isOdia ? 'ଓଡ଼ିଶା AI ମିଶନ' : 'Odisha AI Mission'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ଆମ ମିଶନ ବିଷୟରେ' : 'About Our Mission'}
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ଓଡ଼ିଶାର AI ମିଶନ ଜନସାଧାରଣ ମଙ୍ଗଳ ପାଇଁ AI ବ୍ୟବହାର ଉପରେ ଧ୍ୟାନ ଦିଏ—ଜୀବନକୁ ଉନ୍ନତ କରିବା, ଅର୍ଥନୀତିକୁ ଶକ୍ତିଶାଳୀ କରିବା ଏବଂ ରାଜ୍ୟରେ ଅନ୍ତର୍ଭୁକ୍ତ ଡିଜିଟାଲ ଅଭିବୃଦ୍ଧି ସୁନିଶ୍ଚିତ କରିବା।'
                            : "Odisha's AI Mission is focused on using AI for public good—improving lives, strengthening the economy and ensuring inclusive digital growth across the state."}
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>
                    <div className="relative grid lg:grid-cols-2 gap-0">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6 w-fit">
                                <Eye className="w-5 h-5" />
                                <span className="text-sm uppercase tracking-wider">{isOdia ? 'ଆମର ଦୃଷ୍ଟିକୋଣ' : 'Our Vision'}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                {isOdia ? 'AI ବିପ୍ଳବରେ' : 'Leading the'}
                                <br />
                                <span className="text-white/90">{isOdia ? 'ନେତୃତ୍ୱ ନେଉଛୁ' : 'AI Revolution'}</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                                {isOdia ? 'ଦାୟିତ୍ୱଶୀଳ ଏବଂ ଅନ୍ତର୍ଭୁକ୍ତ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା ମାଧ୍ୟମରେ ଓଡ଼ିଶାର ରୂପାନ୍ତରଣ' : 'Transforming Odisha through responsible and inclusive artificial intelligence'}
                            </p>
                            <div className="mt-8 w-24 h-1 bg-white/40"></div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed mb-6">
                                {isOdia ? (
                                    <>ଓଡ଼ିଶାକୁ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତାର ଦାୟିତ୍ୱଶୀଳ ବ୍ୟବହାରରେ <span className="text-orange-600">ଅଗ୍ରଣୀ ରାଜ୍ୟ</span> କରିବା</>
                                ) : (
                                    <>To make Odisha a <span className="text-orange-600">leading state</span> in the responsible use of Artificial Intelligence</>
                                )}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ଅନ୍ତର୍ଭୁକ୍ତ ଅଭିବୃଦ୍ଧି' : 'Inclusive Growth'}</span> - {isOdia ? 'AI-ଚାଳିତ ସୁଯୋଗ ସହିତ ସମସ୍ତ ନାଗରିକଙ୍କୁ ସଶକ୍ତ କରିବା' : 'Empowering all citizens with AI-driven opportunities'}
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ସ୍ଥିତିସ୍ଥାପକ ଶାସନ' : 'Resilient Governance'}</span> - {isOdia ? 'ଦୃଢ଼ ଏବଂ ସ୍ୱଚ୍ଛ ବ୍ୟବସ୍ଥା ନିର୍ମାଣ' : 'Building robust and transparent systems'}
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold text-gray-900 dark:text-white">{isOdia ? 'ନାଗରିକ-କେନ୍ଦ୍ରିତ ସେବା' : 'Citizen-Centric Services'}</span> - {isOdia ? 'ସୁଗମ ସାର୍ବଜନିକ ସେବା ପ୍ରଦାନ' : 'Delivering accessible public services'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Objectives Section */}
            <div className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Left Side: Heading */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className="relative p-6 border-l-4 border-orange-500 bg-orange-50 dark:bg-gray-800/50 rounded-r-2xl">
                                <div className="absolute -left-20 -top-20 w-40 h-40 bg-orange-200 dark:bg-orange-900/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                                <h3 className="relative text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                                    {isOdia ? 'ମୂଳ' : 'Core'} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                                        {isOdia ? 'ଉଦ୍ଦେଶ୍ୟ' : 'Objectives'}
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                                    {isOdia ? 'ପାଞ୍ଚଟି ରଣନୀତିକ ସ୍ତମ୍ଭ ଯାହା ଓଡ଼ିଶାକୁ ଏକ ବିଶ୍ୱସ୍ତରୀୟ AI କେନ୍ଦ୍ରରେ ପରିଣତ କରିବା ପାଇଁ ଆମର AI ଗ୍ରହଣ ପ୍ରୟାସକୁ ମାର୍ଗଦର୍ଶନ କରେ।' : 'Five strategic pillars guiding our AI adoption efforts to transform Odisha into a global AI hub.'}
                                </p>
                                <Link to="/strategic-pillars" className="mt-6 inline-block">
                                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                                        {isOdia ? 'ରଣନୈତିକ ସ୍ତମ୍ଭଗୁଡ଼ିକ ଦେଖନ୍ତୁ' : 'View Strategic Pillars'}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Objectives List */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                            {coreObjectives.map((objective) => {
                                const IconComponent = objective.icon;
                                return (
                                    <div
                                        key={objective.id}
                                        className="relative bg-white dark:bg-gray-800 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-500 to-amber-600 rounded-l-xl"></div>
                                        <div className="flex items-start gap-4 pl-3">
                                            <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{objective.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{objective.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="bg-white dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/strategic-pillars" className="group">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Server className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isOdia ? 'ରଣନୈତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars'}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{isOdia ? 'ଚାରିଟି ମୂଳ ସ୍ତମ୍ଭ ଅନୁସନ୍ଧାନ କରନ୍ତୁ' : 'Explore the four foundational pillars'}</p>
                            </div>
                        </Link>
                        <Link to="/policy-acts" className="group">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isOdia ? 'ଅଫିସିଆଲ୍ ଅପଡେଟ୍ସ' : 'Official Updates'}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{isOdia ? 'ଆଇନଗତ ଢାଞ୍ଚା ଏବଂ ନିର୍ଦ୍ଦେଶାବଳୀ' : 'Legal framework and guidelines'}</p>
                            </div>
                        </Link>
                        <Link to="/partners" className="group">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isOdia ? 'ସହଯୋଗୀ' : 'Partners'}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{isOdia ? 'ଆମର ସହଯୋଗୀଙ୍କୁ ଦେଖନ୍ତୁ' : 'Meet our collaborators'}</p>
                            </div>
                        </Link>
                        <Link to="/events" className="group">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Lightbulb className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isOdia ? 'କାର୍ଯ୍ୟକ୍ରମ' : 'Events'}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{isOdia ? 'ଆଗାମୀ ଇଭେଣ୍ଟ ଏବଂ ୱର୍କସପ' : 'Upcoming events and workshops'}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {isOdia ? 'ମିଶନରେ ଅଂଶ ନିଅନ୍ତୁ' : 'Be Part of the Mission'}
                    </h2>
                    <p className="text-xl text-orange-100 mb-8">
                        {isOdia
                            ? 'ଆପଣ ଜଣେ ଷ୍ଟାର୍ଟଅପ୍, ଗବେଷକ, ଛାତ୍ର କିମ୍ବା ସରକାରୀ କର୍ମଚାରୀ ହୁଅନ୍ତୁ, ଓଡ଼ିଶାର AI ଯାତ୍ରାରେ ଆପଣଙ୍କ ପାଇଁ ଏକ ସ୍ଥାନ ଅଛି।'
                            : "Whether you're a startup, researcher, student, or government official, there's a place for you in Odisha's AI journey."}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl">
                            {isOdia ? 'ଆପଣଙ୍କ ଧାରଣା ଦାଖଲ କରନ୍ତୁ' : 'Submit Your Idea'}
                        </Button>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                                {isOdia ? 'ଆମ ସହ ଯୋଗାଯୋଗ' : 'Contact Us'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMission;
