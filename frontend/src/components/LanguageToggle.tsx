import { useState, useEffect } from 'react';
import { getLanguage, setLanguage, type Language } from '../lib/i18n';

export default function LanguageToggle() {
    const [currentLang, setCurrentLang] = useState<Language>('ar');

    useEffect(() => {
        setCurrentLang(getLanguage());
    }, []);

    const handleToggle = () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);

        // Update HTML attributes
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

        // Reload page to apply changes
        window.location.reload();
    };

    return (
        <button
            onClick={handleToggle}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 text-sm font-medium"
            aria-label={`Switch to ${currentLang === 'ar' ? 'English' : 'Arabic'}`}
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
            </svg>
            <span className="uppercase font-bold">{currentLang === 'ar' ? 'EN' : 'AR'}</span>
        </button>
    );
}
