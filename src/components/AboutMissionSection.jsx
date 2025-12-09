import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { ArrowRight, Zap, Users, Lightbulb, Lock, Leaf, Sparkles, Target, Eye, Rocket } from 'lucide-react';

const AboutMissionSection = () => {

  const [activeObjective, setActiveObjective] = useState(null);

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

        {/* VISION Section - New Creative Design */}
        <div className="mb-24">
          {/* Vision Container with 3D Effect */}
          <div className="relative">
            {/* Animated Background Orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Main Vision Card */}
            <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-orange-900/20 dark:via-gray-900 dark:to-amber-900/20 rounded-3xl border-2 border-orange-200 dark:border-orange-800 overflow-hidden shadow-2xl">
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500"></div>

              <div className="p-8 md:p-12 lg:p-16">
                {/* Vision Badge with Icon */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg">
                      <Eye className="w-6 h-6" />
                      <span>OUR VISION</span>
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Vision Statement - Large and Impactful */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                    To make Odisha a{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        leading state
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 dark:bg-orange-800/50 -z-0"></span>
                    </span>
                    {' '}in the responsible use of Artificial Intelligence for{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        inclusive growth
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 dark:bg-orange-800/50 -z-0"></span>
                    </span>
                    ,{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        resilient governance
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 dark:bg-orange-800/50 -z-0"></span>
                    </span>
                    , and{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        citizen-centric public services
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 dark:bg-orange-800/50 -z-0"></span>
                    </span>
                    .
                  </h3>
                </div>

                {/* Vision Pillars - 3 Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-100 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Inclusive Growth</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Empowering all citizens with AI-driven opportunities for economic and social advancement
                      </p>
                    </div>
                  </div>

                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-100 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Resilient Governance</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Building robust, transparent, and efficient government systems powered by AI
                      </p>
                    </div>
                  </div>

                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-100 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Citizen-Centric Services</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Delivering accessible, efficient, and personalized public services to every citizen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vision Description */}
                <div className="mt-10 text-center">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                    This vision encompasses a{' '}
                    <span className="font-semibold text-orange-600 dark:text-orange-400">transformative journey</span>
                    {' '}where AI becomes a catalyst for positive change, empowering citizens, strengthening institutions, and creating sustainable economic opportunities across all sections of society.
                  </p>
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

            {/* Right Side: Interactive Objectives List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              {coreObjectives.map((objective, index) => {
                const IconComponent = objective.icon;
                const isActive = activeObjective === objective.id;
                return (
                  <div
                    key={objective.id}
                    onMouseEnter={() => setActiveObjective(objective.id)}
                    onMouseLeave={() => setActiveObjective(null)}
                    className={`group relative bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col transition-all duration-300 border-2 overflow-hidden cursor-pointer ${isActive
                        ? 'border-orange-400 dark:border-orange-600 shadow-xl -translate-y-1'
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg hover:-translate-y-1'
                      }`}
                  >
                    {/* Decorative Hover Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${objective.color} transition-all duration-300`}></div>

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className={`${objective.iconBg} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${isActive ? 'scale-110' : ''
                        }`}>
                        <IconComponent className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Title */}
                        <h4 className={`text-lg font-bold mb-2 transition-colors leading-tight ${isActive
                            ? 'text-orange-600 dark:text-orange-400'
                            : 'text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400'
                          }`}>
                          {objective.title}
                        </h4>

                        {/* Description - Shows on hover */}
                        <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
                            {objective.description}
                          </p>
                        </div>
                      </div>

                      {/* Interaction Arrow */}
                      <div className={`transition-all duration-300 flex-shrink-0 ${isActive
                          ? 'opacity-100 translate-x-0 text-orange-500'
                          : 'opacity-0 -translate-x-4 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange-500'
                        }`}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
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
