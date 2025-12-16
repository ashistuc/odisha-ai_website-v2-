import React from 'react';
import { AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6">
                            <AlertTriangle className="w-10 h-10 text-orange-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                            Disclaimer
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Important information regarding the content and external links on our portal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="max-w-4xl mx-auto">

                    {/* Disclaimer Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="prose prose-orange max-w-none text-gray-600 space-y-6 leading-relaxed">
                                <p className="text-lg font-medium text-gray-800">
                                    This website is brought to you by the Electronics & Information Technology Department.
                                </p>
                                <p>
                                    While surfing through this site you will come across directories and links to Government and Private Organizations. The contents of these sites are not to be construed as a responsibility of or endorsement by the Electronics & Information Technology Department and are owned by the respective organizations which may be contacted for any further information or suggestion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Source Link */}
                    <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500 border-t border-gray-200 mt-12 mb-8">
                        <a href="https://it.odisha.gov.in/en/disclaimer-39" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                            Source: it.odisha.gov.in <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
