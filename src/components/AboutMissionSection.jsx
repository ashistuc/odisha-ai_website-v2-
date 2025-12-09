import React from 'react';
import { Badge } from './ui/badge';
import { ArrowRight, Zap, Users, Lightbulb, Lock, Leaf, Sparkles, Target, Eye, Rocket } from 'lucide-react';

const AboutMissionSection = () => {

  const coreObjectives = [
    {
      id: 1,
      title: 'Accelerate AI adoption in priority public sectors',
      icon: Zap,
      description: 'Fast-track implementation of AI solutions across critical government departments to improve service delivery and operational efficiency',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    },
    {
      id: 2,
      title: 'Strengthen AI learning, skilling and awareness',
      icon: Users,
      description: 'Build a comprehensive ecosystem for AI education, training programs, and public awareness to create a skilled workforce',
      color: 'from-orange-600 to-amber-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    },
    {
      id: 3,
      title: 'Encourage local innovation and entrepreneurship',
      icon: Lightbulb,
      description: 'Foster a vibrant startup ecosystem and support local entrepreneurs to develop AI solutions tailored to regional challenges',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    },
    {
      id: 4,
      title: 'Enable responsible, transparent and secure AI deployment',
      icon: Lock,
      description: 'Establish governance frameworks ensuring ethical AI use, data security, and transparent decision-making in government operations',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    },
    {
      id: 5,
      title: "Promote AI solutions rooted in Odisha's languages, culture and development needs",
      icon: Leaf,
      description: 'Develop culturally relevant AI applications that respect local languages, traditions, and address unique developmental challenges of the state',
      color: 'from-orange-600 to-amber-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900'
    }
  ];

  return (
    <section id="about-mission-section" className="py-20 bg-white dark:bg-gray-900 section-transition relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-4 px-4 py-2">
            Our Strategic Direction
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About the <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Mission</span>
          </h2>
        </div>

        {/* VISION Section - Modern Redesign */}
        <div className="mb-24">
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left Side - Vision Badge & Title */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* Vision Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6 w-fit">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Our Vision</span>
                </div>

                {/* Large Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  Leading the
                  <br />
                  <span className="text-white/90">AI Revolution</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  Transforming Odisha through responsible and inclusive artificial intelligence
                </p>

                {/* Decorative Line */}
                <div className="mt-8 w-24 h-1 bg-white/40"></div>
              </div>

              {/* Right Side - Vision Statement */}
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Main Vision Statement */}
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                    To make Odisha a <span className="text-orange-600 dark:text-orange-400">leading state</span> in the responsible use of Artificial Intelligence
                  </p>

                  {/* Three Key Focus Areas */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">Inclusive Growth</span> - Empowering all citizens with AI-driven opportunities
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">Resilient Governance</span> - Building robust and transparent systems
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">Citizen-Centric Services</span> - Delivering accessible public services
                      </p>
                    </div>
                  </div>

                  {/* Bottom Quote */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-base text-gray-600 dark:text-gray-400 italic">
                      "A transformative journey where AI becomes a catalyst for positive change, empowering citizens and creating sustainable opportunities."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Objectives Section - Redesigned */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Side: Creative Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative p-6 border-l-4 border-orange-500 bg-orange-50 dark:bg-gray-800/50 rounded-r-2xl">
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-orange-200 dark:bg-orange-900/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <h3 className="relative text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                  Core <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                    Objectives
                  </span>
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                  Five strategic pillars guiding our AI adoption and implementation efforts to transform Odisha into a global AI hub.
                </p>

                <div className="mt-8 flex items-center space-x-2 text-orange-600 dark:text-orange-400 font-semibold">
                  <span>Our Focus Areas</span>
                  <div className="h-px bg-orange-600 dark:bg-orange-400 flex-grow max-w-[100px]"></div>
                </div>
              </div>
            </div>

            {/* Right Side: Simplified Objectives List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              {coreObjectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div
                    key={objective.id}
                    className="relative bg-white dark:bg-gray-900 rounded-xl p-5 flex items-center border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Decorative Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${objective.color}`}></div>

                    {/* Icon */}
                    <div className={`${objective.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>

                    {/* Title Only */}
                    <h4 className="flex-1 text-base font-bold text-gray-900 dark:text-white leading-tight">
                      {objective.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Strategic Implementation Approach</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Stakeholder Engagement</h4>
                  <p className="text-white/80 text-sm">Building partnerships with government, industry, academia and citizens</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Pilot Projects</h4>
                  <p className="text-white/80 text-sm">Testing solutions in select sectors before large-scale rollout</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <span className="text-lg font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Capacity Building</h4>
                  <p className="text-white/80 text-sm">Continuous upskilling of government personnel and citizens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group text-lg">
            Explore Our Initiatives
            <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
