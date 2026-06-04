import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = ({ inline = false }) => {
    const { language, toggleLanguage, isOdia } = useLanguage();

    if (inline) {
        // Inline segmented control version for header
        return (
            <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-lg p-1 gap-1 border border-white/10">
                <button
                    onClick={() => isOdia && toggleLanguage()}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${!isOdia
                            ? 'bg-white text-orange-700 shadow-sm scale-105'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    aria-label="Switch to English"
                >
                    English
                </button>
                <button
                    onClick={() => !isOdia && toggleLanguage()}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${isOdia
                            ? 'bg-white text-orange-700 shadow-sm scale-105'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    aria-label="Switch to Odia"
                >
                    ଓଡ଼ିଆ
                </button>
            </div>
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
