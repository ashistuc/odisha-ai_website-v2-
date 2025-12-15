import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { isOdia } = useLanguage();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-2">
          <HelpCircle className="w-4 h-4 mr-2" />
          {isOdia ? 'ପ୍ରାୟଶଃ ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ' : 'Frequently Asked Questions'}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {isOdia ? 'ପ୍ରଶ୍ନ ଅଛି? ଆମ ପାଖରେ ' : 'Got Questions? We\'ve Got '}<span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">{isOdia ? 'ଉତ୍ତର ଅଛି' : 'Answers'}</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {isOdia ? 'ଓଡ଼ିଶାର AI ମିଶନ ବିଷୟରେ ଆପଣଙ୍କୁ ଜାଣିବାକୁ ଲାଗୁଥିବା ସବୁକିଛି ଏବଂ ଆପଣ କିପରି ଏହାର ଏକ ଅଂଶ ହୋଇପାରିବେ' : 'Everything you need to know about Odisha\'s AI Mission and how you can be a part of it'}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className={`border-2 transition-all duration-300 cursor-pointer ${openIndex === index
              ? 'border-orange-400 shadow-lg'
              : 'border-gray-200 hover:border-orange-200 hover:shadow-md'
              }`}
            onClick={() => toggleFAQ(index)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                  {isOdia ? (faq.questionOd || faq.question) : faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {isOdia ? (faq.answerOd || faq.answer) : faq.answer}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">{isOdia ? 'ଏପର୍ଯ୍ୟନ୍ତ ପ୍ରଶ୍ନ ଅଛି?' : 'Still have questions?'}</p>
        <a
          href="mailto:aiteam.ocac@odisha.gov.in"
          className="text-orange-600 hover:text-orange-700 font-semibold underline"
        >
          {isOdia ? 'ଆମ ସମର୍ଥନ ଦଳ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' : 'Contact our support team'}
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
