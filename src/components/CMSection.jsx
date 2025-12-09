import React from 'react';

const CMSection = () => {
    return (
        <div className="bg-gradient-to-r from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 py-8 border-b-2 border-orange-200 dark:border-orange-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center md:justify-start gap-6">
                    {/* Orange Accent Line */}
                    <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-orange-500 to-orange-600"></div>

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            Shri Mohan Charan Majhi
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                            Hon'ble Chief Minister
                        </p>
                    </div>

                    {/* CM Photo */}
                    <div className="ml-auto">
                        <img
                            src="/odisha-ai_website-v2-/images/Mohan_Charan_Majhi.jpg"
                            alt="Shri Mohan Charan Majhi - Hon'ble Chief Minister"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover border-2 border-orange-200 dark:border-orange-700 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CMSection;
