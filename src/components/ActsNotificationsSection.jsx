import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Building2, Lock, Gift, GraduationCap, ShoppingCart, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const ActsNotificationsSection = ({ items, limit, showViewAll = true }) => {
  const { isOdia } = useLanguage();

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
    'Act': 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200',
    'Notification': 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200',
    'Govt Order': 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-200',
    'Guideline': 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200'
  };

  // Apply limit if provided
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 hover:bg-indigo-200 mb-4 px-4 py-2">
          <FileText className="w-4 h-4 mr-2" />
          {isOdia ? 'ଆଇନଗତ ଏବଂ ନିୟାମକ ଢାଞ୍ଚା' : 'Legal & Regulatory Framework'}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {isOdia ? 'ଆଇନ, ବିଜ୍ଞପ୍ତି, ' : 'Acts, Notifications, '}<span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">{isOdia ? 'ସରକାରୀ ଆଦେଶ ଏବଂ ନିର୍ଦ୍ଦେଶାବଳୀ' : 'Govt Orders & Guidelines'}</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {isOdia ? 'AI କାର୍ଯ୍ୟକାରିତା ପାଇଁ ନବୀନତମ ଆଇନଗତ ଢାଞ୍ଚା, ନୀତି ବିଜ୍ଞପ୍ତି ଏବଂ ସରକାରୀ ନିର୍ଦ୍ଦେଶନାମା ସହ ଅଦ୍ୟତନ ରହନ୍ତୁ' : 'Stay updated with the latest legal framework, policy notifications, and government directives for AI implementation'}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => {
          const IconComponent = iconMap[item.icon] || FileText;
          const typeColor = typeColorMap[item.type] || typeColorMap['Guideline'];

          return (
            <Card
              key={index}
              className="h-full border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 hover:shadow-xl transition-all duration-300 group bg-white dark:bg-gray-800"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${typeColor} border text-xs font-medium`}>
                    {item.type}
                  </Badge>
                  <div className="bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900 dark:to-blue-900 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                  {isOdia && item.titleOd ? item.titleOd : item.title}
                </CardTitle>
                {item.source && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.source}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {isOdia && item.descriptionOd ? item.descriptionOd : item.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {new Date(item.date).toLocaleDateString('en-IN', {
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
                        className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {isOdia ? 'ବିବରଣୀ' : 'Read More'}
                      </a>
                    )}
                    {item.fileUrl && item.fileUrl !== '#' && (
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 h-7 px-2"
                        >
                          <Download className="w-3 h-3 mr-1" />
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

      {/* View All / Explore More Button */}
      {showViewAll && limit && items.length > limit && (
        <div className="text-center mt-10">
          <Link to="/policy-acts">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8">
              {isOdia ? 'ଅଧିକ ଅନୁସନ୍ଧାନ କରନ୍ତୁ' : 'Explore More'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      )}

      {/* View All Documents Button for full page */}
      {showViewAll && !limit && (
        <div className="text-center mt-10">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
            {isOdia ? 'ସବୁ ଦସ୍ତାବେଜ ଦେଖନ୍ତୁ' : 'View All Documents'}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActsNotificationsSection;
