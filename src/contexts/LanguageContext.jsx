import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // 'en' or 'od' (Odia)

    useEffect(() => {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'od' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    const setLanguagePreference = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                setLanguagePreference,
                isOdia: language === 'od',
                isEnglish: language === 'en'
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
