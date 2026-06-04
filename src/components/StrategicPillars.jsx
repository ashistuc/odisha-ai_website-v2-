import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Server, GraduationCap, Zap, Scale, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StrategicPillars = () => {
    const { isOdia } = useLanguage();

    const pillars = [
        {
            id: 'infrastructure',
            label: 'INFRASTRUCTURE',
            labelOd: 'ଭିତ୍ତିଭୂମି',
            title: 'Building the Backbone',
            titleOd: 'ମେରୁଦଣ୍ଡ ନିର୍ମାଣ',
            icon: Server,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            description: 'Building digital, compute, and innovation infrastructure for large-scale AI development.',
            descriptionOd: 'ବୃହତ୍-ମାପର AI ବିକାଶ ପାଇଁ ଡିଜିଟାଲ, ଗଣନା ଏବଂ ନବସୃଜନ ଭିତ୍ତିଭୂମି ନିର୍ମାଣ।'
        },
        {
            id: 'skills',
            label: 'SKILLS',
            labelOd: 'ଦକ୍ଷତା',
            title: 'Future-Ready Workforce',
            titleOd: 'ଭବିଷ୍ୟତ-ପ୍ରସ୍ତୁତ କର୍ମଶକ୍ତି',
            icon: GraduationCap,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            description: 'Building a skilled AI workforce across students, researchers, and public servants.',
            descriptionOd: 'ଛାତ୍ର, ଗବେଷକ ଏବଂ ସରକାରୀ କର୍ମଚାରୀଙ୍କ ମଧ୍ୟରେ ଦକ୍ଷ AI କର୍ମଶକ୍ତି ନିର୍ମାଣ।'
        },
        {
            id: 'energy',
            label: 'ENERGY',
            labelOd: 'ଶକ୍ତି',
            title: 'Sustainable AI Growth',
            titleOd: 'ସ୍ଥାୟୀ AI ଅଭିବୃଦ୍ଧି',
            icon: Zap,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            description: 'Integration of clean and sustainable energy with AI infrastructure.',
            descriptionOd: 'AI ଭିତ୍ତିଭୂମି ସହିତ ପରିଷ୍କାର ଏବଂ ସ୍ଥାୟୀ ଶକ୍ତିର ଏକୀକରଣ।'
        },
        {
            id: 'policy',
            label: 'POLICY ENVIRONMENT',
            labelOd: 'ନୀତି',
            title: 'Safe & Trusted AI',
            titleOd: 'ସୁରକ୍ଷିତ ଏବଂ ବିଶ୍ୱସ୍ତ AI',
            icon: Scale,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            description: 'Comprehensive policy framework for ethical and responsible AI use.',
            descriptionOd: 'ନୈତିକ ଏବଂ ଦାୟିତ୍ୱଶୀଳ AI ବ୍ୟବହାର ପାଇଁ ବ୍ୟାପକ ନୀତି ଢାଞ୍ଚା।'
        }
    ];

    return (
        <section id="strategic-pillars-section" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
                        {isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars'}
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        {isOdia ? 'ରଣନୀତିକ ସ୍ତମ୍ଭ' : 'Strategic Pillars'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
                        {isOdia ? 'ନବସୃଜନ, ଅନ୍ତର୍ଭୁକ୍ତି ଏବଂ ସ୍ଥିରତାର ଭବିଷ୍ୟତ ଆଡ଼କୁ ଓଡ଼ିଶା AI ମିଶନକୁ ଚାଳିତ କରୁଥିବା ଚାରୋଟିମୂଳ ସ୍ତମ୍ଭ।' : 'Four foundational pillars driving the Odisha AI Mission towards a future of innovation, inclusion, and sustainability.'}
                    </p>
                </div>

                {/* Four Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.id}
                                className={`${pillar.bgColor} dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-r ${pillar.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Label */}
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    {isOdia ? pillar.labelOd : pillar.label}
                                </h3>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {isOdia ? pillar.titleOd : pillar.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {isOdia ? pillar.descriptionOd : pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Explore More Button */}
                <div className="text-center">
                    <Link to="/strategic-pillars">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg px-8">
                            {isOdia ? 'ଅଧିକ ଜାଣନ୍ତୁ' : 'Explore More'}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
