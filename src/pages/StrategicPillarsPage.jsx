import React, { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Server, GraduationCap, Zap, Scale, Cpu, Globe, Lightbulb, ShieldCheck, Database, Leaf, Users, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StrategicPillarsPage = () => {
    const [activeTab, setActiveTab] = useState('infrastructure');
    const { isOdia } = useLanguage();

    const pillars = [
        {
            id: 'infrastructure',
            label: 'INFRASTRUCTURE',
            labelOd: 'ଭିତ୍ତିଭୂମି',
            title: 'Building the Backbone',
            titleOd: 'ମେରୁଦଣ୍ଡ ନିର୍ମାଣ',
            icon: Server,
            color: 'blue',
            description: 'A strong and scalable infrastructure is the foundation of Odisha AI ecosystem.This pillar focuses on building the digital, compute, and innovation infrastructure required to support large- scale AI development, deployment, and adoption across sectors.',
            descriptionOd: 'ଏକ ଶକ୍ତିଶାଳୀ ଏବଂ ମାପନୀୟ ଭିତ୍ତିଭୂମି ଓଡ଼ିଶାର AI ଇକୋସିଷ୍ଟମର ମୂଳଦୁଆ।',
            content: {
                intro: 'Building the Digital & Innovation Backbone of AI in Odisha',
                introOd: 'ଓଡ଼ିଶାରେ AI ର ଡିଜିଟାଲ ଏବଂ ନବସୃଜନ ମେରୁଦଣ୍ଡ ନିର୍ମାଣ',
                sub_sections: [
                    {
                        title: 'Compute & Data Infrastructure',
                        titleOd: 'ଗଣନା ଏବଂ ଡାଟା ଭିତ୍ତିଭୂମି',
                        icon: Cpu,
                        text: 'AI systems require significant computing power. We are strengthening secure compute capacity, enabling high-performance computing infrastructure, and building robust data ecosystems to support research and real-world deployment.',
                        textOd: 'AI ସିଷ୍ଟମଗୁଡ଼ିକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଗଣନା ଶକ୍ତି ଆବଶ୍ୟକ କରେ।'
                    },
                    {
                        title: 'Innovation Centres',
                        titleOd: 'ନବସୃଜନ କେନ୍ଦ୍ର',
                        icon: Globe,
                        text: 'Nurturing spaces for AI innovation through research centres and incubation hubs. These focus on solving real Odisha-specific challenges in areas such as healthcare, agriculture, disaster management, and governance.',
                        textOd: 'ଗବେଷଣା କେନ୍ଦ୍ର ଏବଂ ଇନକ୍ୟୁବେସନ ହବ୍ ମାଧ୍ୟମରେ AI ନବସୃଜନ ପାଇଁ ସ୍ଥାନ ପୋଷଣ।'
                    }
                ],
                highlight: {
                    title: 'Strategic Priority: Linguistic Inclusion',
                    titleOd: 'ରଣନୀତିକ ପ୍ରାଥମିକତା: ଭାଷାଗତ ଅନ୍ତର୍ଭୁକ୍ତି',
                    text: 'Development of Large Language Models (LLMs) for Odia and tribal languages such as Santali, Saura, and Koya.',
                    textOd: 'ଓଡ଼ିଆ ଏବଂ ସାନ୍ତାଳୀ, ସାଉରା ଏବଂ କୋଏଆ ଭଳି ଆଦିବାସୀ ଭାଷା ପାଇଁ LLM ବିକାଶ।',
                    icon: Users
                }
            }
        },
        {
            id: 'skills',
            label: 'SKILLS',
            labelOd: 'ଦକ୍ଷତା',
            title: 'Future-Ready Workforce',
            titleOd: 'ଭବିଷ୍ୟତ-ପ୍ରସ୍ତୁତ କର୍ମଶକ୍ତି',
            icon: GraduationCap,
            color: 'purple',
            description: 'The success of the Odisha AI Mission depends on people. This pillar focuses on building a broad, skilled, and future-ready AI workforce across students, researchers, professionals, and public servants.',
            descriptionOd: 'ଓଡ଼ିଶା AI ମିଶନର ସଫଳତା ଲୋକଙ୍କ ଉପରେ ନିର୍ଭର କରେ।',
            content: {
                intro: 'Developing Odisha\'s AI Talent & Future Workforce',
                introOd: 'ଓଡ଼ିଶାର AI ପ୍ରତିଭା ଏବଂ ଭବିଷ୍ୟତ କର୍ମଶକ୍ତି ବିକାଶ',
                sub_sections: [
                    {
                        title: 'AI in School Education',
                        titleOd: 'ବିଦ୍ୟାଳୟ ଶିକ୍ଷାରେ AI',
                        icon: FileText,
                        text: 'Cultivating curiosity and computational thinking from an early age to prepare students for emerging careers and promote equitable access.',
                        textOd: 'ଉଦୀୟମାନ କ୍ୟାରିୟର ପାଇଁ ଛାତ୍ରଙ୍କୁ ପ୍ରସ୍ତୁତ କରିବା।'
                    },
                    {
                        title: 'Higher Education & Research',
                        titleOd: 'ଉଚ୍ଚ ଶିକ୍ଷା ଏବଂ ଗବେଷଣା',
                        icon: GraduationCap,
                        text: 'Strengthening AI education across universities with specialized programs to create a strong pipeline of researchers and engineers.',
                        textOd: 'ବିଶ୍ୱବିଦ୍ୟାଳୟରେ AI ଶିକ୍ଷାକୁ ଶକ୍ତିଶାଳୀ କରିବା।'
                    },
                    {
                        title: 'Workforce AI Skilling',
                        titleOd: 'କର୍ମଶକ୍ତି AI ଦକ୍ଷତା',
                        icon: Users,
                        text: 'Expanding skill development in data science and ethical AI for both technical and non-technical domains to support industry and entrepreneurship.',
                        textOd: 'ଡାଟା ସାଇନ୍ସ ଏବଂ ନୈତିକ AI ରେ ଦକ୍ଷତା ବିକାଶ ବିସ୍ତାର କରିବା।'
                    },
                    {
                        title: 'Government Capacity Building',
                        titleOd: 'ସରକାରୀ ସାମର୍ଥ୍ୟ ନିର୍ମାଣ',
                        icon: ShieldCheck,
                        text: 'Training public officials in AI fundamentals and data-driven decision-making to ensure responsible and effective AI adoption in governance.',
                        textOd: 'ସରକାରୀ କର୍ମଚାରୀଙ୍କୁ AI ମୌଳିକ ବିଷୟରେ ତାଲିମ ଦେବା।'
                    }
                ]
            }
        },
        {
            id: 'energy',
            label: 'ENERGY',
            labelOd: 'ଶକ୍ତି',
            title: 'Sustainable AI Growth',
            titleOd: 'ସ୍ଥାୟୀ AI ଅଭିବୃଦ୍ଧି',
            icon: Zap,
            color: 'green',
            description: 'Recognising energy as a critical enabler, Odisha emphasizes the integration of clean and sustainable energy with AI infrastructure to power growth responsibly.',
            descriptionOd: 'ଶକ୍ତିକୁ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସକ୍ଷମକାରୀ ଭାବରେ ସ୍ୱୀକାର କରି।',
            content: {
                intro: 'Powering AI Growth Through Sustainable & Clean Energy',
                introOd: 'ସ୍ଥାୟୀ ଏବଂ ପରିଷ୍କାର ଶକ୍ତି ମାଧ୍ୟମରେ AI ଅଭିବୃଦ୍ଧିକୁ ଶକ୍ତି ଯୋଗାଇବା',
                sub_sections: [
                    {
                        title: 'Reliable Power Infrastructure',
                        titleOd: 'ନିର୍ଭରଯୋଗ୍ୟ ପାୱାର ଭିତ୍ତିଭୂମି',
                        icon: Server,
                        text: 'Ensuring stable and high-capacity energy supply for data centres and compute facilities to support future AI expansion.',
                        textOd: 'ଡାଟା ସେଣ୍ଟର ପାଇଁ ସ୍ଥିର ଶକ୍ତି ଯୋଗାଣ ସୁନିଶ୍ଚିତ କରିବା।'
                    },
                    {
                        title: 'Clean & Renewable Energy',
                        titleOd: 'ପରିଷ୍କାର ଏବଂ ନବୀକରଣୀୟ ଶକ୍ତି',
                        icon: Leaf,
                        text: 'Promoting renewable energy adoption in AI infrastructure to align digital growth with sustainability and climate goals.',
                        textOd: 'AI ଭିତ୍ତିଭୂମିରେ ନବୀକରଣୀୟ ଶକ୍ତି ଗ୍ରହଣକୁ ପ୍ରୋତ୍ସାହିତ କରିବା।'
                    }
                ],
                stats: [
                    { value: '50%', label: 'Renewable Energy by 2029', labelOd: '୨୦୨୯ ସୁଦ୍ଧା ନବୀକରଣୀୟ ଶକ୍ତି' },
                    { value: '65%', label: 'Renewable Energy by 2036', labelOd: '୨୦୩୬ ସୁଦ୍ଧା ନବୀକରଣୀୟ ଶକ୍ତି' }
                ]
            }
        },
        {
            id: 'policy',
            label: 'POLICY ENVIRONMENT',
            labelOd: 'ନୀତି ପରିବେଶ',
            title: 'Safe & Trusted AI',
            titleOd: 'ସୁରକ୍ଷିତ ଏବଂ ବିଶ୍ୱସ୍ତ AI',
            icon: Scale,
            color: 'orange',
            description: 'A comprehensive, forward-looking policy framework is essential for innovation to thrive while protecting citizens\' rights and ensuring ethical AI use.',
            descriptionOd: 'ନବସୃଜନକୁ ବିକଶିତ ହେବା ପାଇଁ ଏକ ବ୍ୟାପକ ନୀତି ଢାଞ୍ଚା ଅତ୍ୟାବଶ୍ୟକ।',
            content: {
                intro: 'Enabling Safe, Trusted & Innovation-Friendly AI',
                introOd: 'ସୁରକ୍ଷିତ, ବିଶ୍ୱସ୍ତ ଏବଂ ନବସୃଜନ-ଅନୁକୂଳ AI ସକ୍ଷମ କରିବା',
                sub_sections: [
                    {
                        title: 'Ethical Use of AI',
                        titleOd: 'AI ର ନୈତିକ ବ୍ୟବହାର',
                        icon: Scale,
                        text: 'Clear guidelines focusing on fairness, transparency, and accountability to ensure AI serves public interest responsibly.',
                        textOd: 'ନ୍ୟାୟ, ସ୍ୱଚ୍ଛତା ଏବଂ ଦାୟିତ୍ୱବୋଧ ଉପରେ ଧ୍ୟାନ ଦେଇ ସ୍ପଷ୍ଟ ନିର୍ଦ୍ଦେଶାବଳୀ।'
                    },
                    {
                        title: 'Data Governance & Privacy',
                        titleOd: 'ଡାଟା ଶାସନ ଏବଂ ଗୋପନୀୟତା',
                        icon: Database,
                        text: 'Prioritizing strong data governance aligned with national frameworks like the DPDP Act 2023 for secure and responsible data use.',
                        textOd: 'ସୁରକ୍ଷିତ ଡାଟା ବ୍ୟବହାର ପାଇଁ ଶକ୍ତିଶାଳୀ ଡାଟା ଶାସନକୁ ପ୍ରାଥମିକତା ଦେବା।'
                    },
                    {
                        title: 'Cyber Security',
                        titleOd: 'ସାଇବର ସୁରକ୍ଷା',
                        icon: ShieldCheck,
                        text: 'Strengthening AI-powered cyber defences and integrating best practices to protect digital infrastructure against emerging threats.',
                        textOd: 'AI-ଚାଳିତ ସାଇବର ପ୍ରତିରକ୍ଷାକୁ ଶକ୍ତିଶାଳୀ କରିବା।'
                    },
                    {
                        title: 'Ease of Research',
                        titleOd: 'ଗବେଷଣାର ସହଜତା',
                        icon: Lightbulb,
                        text: 'Streamlining IP and legal clearances to encourage experimentation and faster translation of research into applications.',
                        textOd: 'ପରୀକ୍ଷଣକୁ ପ୍ରୋତ୍ସାହିତ କରିବା ପାଇଁ IP ଅନୁମୋଦନକୁ ସୁଗମ କରିବା।'
                    }
                ]
            }
        }
    ];

    const getActivePillar = () => pillars.find(p => p.id === activeTab);

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
                        <Server className="w-4 h-4 mr-2" />
                        {isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars'}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {isOdia ? 'ମୁଖ୍ୟ ଧ୍ୟାନ ' : 'Key Focus '}
                        <span className="text-orange-200">{isOdia ? 'କ୍ଷେତ୍ର' : 'Areas'}</span>
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
                        {isOdia
                            ? 'ନବସୃଜନ, ଅନ୍ତର୍ଭୁକ୍ତି ଏବଂ ସ୍ଥିରତାର ଭବିଷ୍ୟତ ଆଡ଼କୁ ଓଡ଼ିଶା AI ମିଶନକୁ ଚାଳିତ କରୁଥିବା ଚାରିଟି ମୂଳ ସ୍ତମ୍ଭ।'
                            : 'Four foundational pillars driving the Odisha AI Mission towards a future of innovation, inclusion, and sustainability.'}
                    </p>
                </div>
            </div>

            {/* Main Content - Same as Home Page Key Focus Areas */}
            <div className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left Side: Navigation Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                const isActive = activeTab === pillar.id;

                                return (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setActiveTab(pillar.id)}
                                        className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 group relative overflow-hidden ${isActive
                                            ? 'bg-white dark:bg-gray-800 border-orange-500 shadow-xl scale-105 z-10'
                                            : 'bg-white/50 dark:bg-gray-800/50 border-transparent hover:bg-white hover:border-orange-200 dark:hover:border-gray-700'
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-500 to-pink-500"></div>
                                        )}

                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-lg ${isActive ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold text-lg ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                                    {isOdia ? pillar.labelOd : pillar.label}
                                                </h4>
                                                <p className={`text-sm mt-1 ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                                                    {isOdia ? pillar.titleOd : pillar.title}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Side: Content Area */}
                        <div className="lg:col-span-8">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 min-h-[600px] flex flex-col justify-between relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-500" key={activeTab}>

                                <div>
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                            {isOdia ? getActivePillar().content.introOd : getActivePillar().content.intro}
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-4">
                                            {isOdia ? getActivePillar().descriptionOd : getActivePillar().description}
                                        </p>
                                    </div>

                                    {/* Sub Sections Grid */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {getActivePillar().content.sub_sections.map((sub, idx) => (
                                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-5 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors border border-transparent hover:border-orange-100 dark:hover:border-orange-800/30">
                                                <div className="flex items-start mb-3">
                                                    {sub.icon && <sub.icon className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-1 mr-3" />}
                                                    <h4 className="font-bold text-gray-900 dark:text-white">{isOdia ? sub.titleOd : sub.title}</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {isOdia ? sub.textOd : sub.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Feature/Stats */}
                                    {getActivePillar().content.highlight && (
                                        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-6 text-white relative overflow-hidden">
                                            <div className="relative z-10 flex items-start gap-4">
                                                <Globe className="w-8 h-8 mt-1 flex-shrink-0 text-orange-200" />
                                                <div>
                                                    <h5 className="font-bold text-lg mb-1">{isOdia ? getActivePillar().content.highlight.titleOd : getActivePillar().content.highlight.title}</h5>
                                                    <p className="opacity-90">{isOdia ? getActivePillar().content.highlight.textOd : getActivePillar().content.highlight.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {getActivePillar().content.stats && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {getActivePillar().content.stats.map((stat, idx) => (
                                                <div key={idx} className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center border border-orange-100 dark:border-orange-800">
                                                    <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-1">{stat.value}</div>
                                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{isOdia ? stat.labelOd : stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                    <button className="text-orange-600 dark:text-orange-400 font-semibold flex items-center hover:translate-x-1 transition-transform">
                                        {isOdia ? `${getActivePillar().labelOd} ବିଷୟରେ ଅଧିକ ଜାଣନ୍ତୁ` : `Learn more about ${getActivePillar().label}`} <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicPillarsPage;
