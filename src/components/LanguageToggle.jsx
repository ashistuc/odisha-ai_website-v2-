import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = ({ inline = false }) => {
    const { language, toggleLanguage, isOdia } = useLanguage();

    if (inline) {
        // Inline version for header
        return (
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800"
                aria-label="Toggle Language"
                title={isOdia ? 'Switch to English' : 'Switch to Odia'}
            >
                <Languages className="w-5 h-5" />
                <span className="font-semibold">
                    {isOdia ? 'English' : 'ଓଡ଼ିଆ'}
                </span>
            </button>
        );
    }

    // Standalone version
    return (
        <div className="relative">
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-orange-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Toggle Language"
            >
                <Languages className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Language</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {isOdia ? 'ଓଡ଼ିଆ' : 'English'}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default LanguageToggle;
