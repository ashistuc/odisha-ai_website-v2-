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
    const [language, setLanguage] = useState('en'); // 'en' or 'od' (Odia) - Default is English

    useEffect(() => {
        // Get saved language preference from localStorage
        const savedLanguage = localStorage.getItem('language');

        // If no saved preference exists, set to English and save it
        if (!savedLanguage) {
            setLanguage('en');
            localStorage.setItem('language', 'en');
        } else {
            setLanguage(savedLanguage);
        }
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
