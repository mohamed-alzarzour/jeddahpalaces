// Internationalization utilities

export type Language = 'ar' | 'en';

export const STORAGE_KEY = 'jpns_language';
export const DEFAULT_LANGUAGE: Language = 'ar';

export function getLanguage(): Language {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') {
        return stored;
    }

    return DEFAULT_LANGUAGE;
}

export function setLanguage(lang: Language): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000`; // 1 year
    window.dispatchEvent(new Event('language-change'));
}

export function toggleLanguage(): Language {
    const current = getLanguage();
    const next = current === 'ar' ? 'en' : 'ar';
    setLanguage(next);
    return next;
}

export function getDirection(lang: Language): 'rtl' | 'ltr' {
    return lang === 'ar' ? 'rtl' : 'ltr';
}

export function getLocaleString(
    localeString: { ar?: string; en?: string } | undefined | null,
    lang: Language
): string {
    if (!localeString) return '';
    return localeString[lang] || localeString.en || localeString.ar || '';
}

// Translation dictionary for UI elements
export const translations: Record<Language, Record<string, string>> = {
    ar: {
        home: 'الرئيسية',
        products: 'المنتجات',
        portfolio: 'المعرض',
        services: 'الخدمات',
        about: 'من نحن',
        contact: 'اتصل بنا',
        contactUs: 'اتصل بنا',
        scrollDown: 'مرر للأسفل',
        materialsUsed: 'المواد المستخدمة',
        viewMore: 'عرض المزيد',
        learnMore: 'اعرف المزيد',
        aboutProduct: 'عن المنتج',
        specifications: 'المواصفات',
        relatedProjects: 'المشاريع ذات الصلة',
        noProjects: 'لا توجد مشاريع حالياً',
        noProducts: 'لا توجد منتجات حالياً',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        send: 'إرسال',
        sending: 'جاري الإرسال...',
        successMessage: 'تم إرسال رسالتك بنجاح!',
        errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        required: 'مطلوب',
        invalidEmail: 'البريد الإلكتروني غير صحيح',
        gallery: 'معرض الصور',
        loadMore: 'تحميل المزيد',
        allCategories: 'الكل',
        noPhotos: 'لا توجد صور حالياً',
    },
    en: {
        home: 'Home',
        products: 'Products',
        portfolio: 'Portfolio',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        contactUs: 'Contact Us',
        scrollDown: 'Scroll Down',
        materialsUsed: 'Materials Used',
        viewMore: 'View More',
        learnMore: 'Learn More',
        aboutProduct: 'About Product',
        specifications: 'Specifications',
        relatedProjects: 'Related Projects',
        noProjects: 'No projects available',
        noProducts: 'No products available',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        successMessage: 'Your message has been sent successfully!',
        errorMessage: 'An error occurred. Please try again.',
        required: 'Required',
        invalidEmail: 'Invalid email address',
        gallery: 'Photo Gallery',
        loadMore: 'Load More',
        allCategories: 'All',
        noPhotos: 'No photos available',
    },
};

export function t(key: string, lang: Language): string {
    return translations[lang][key] || key;
}
