import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getLanguage, t } from '../lib/i18n';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const lang = getLanguage();

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: '/', label: t('home', lang) },
        { href: '/products', label: t('products', lang) },
        { href: '/portfolio', label: t('portfolio', lang) },
        { href: '/gallery', label: t('gallery', lang) },
        { href: '/services', label: t('services', lang) },
        { href: '/about', label: t('about', lang) },
        { href: '/contact', label: t('contact', lang) },
    ];

    const MenuContent = () => (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/70 z-[9998] backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleMenu}
            />

            {/* Slide-out Menu */}
            <nav
                className={`fixed top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} h-full w-64 bg-extra-1 dark:bg-primary/95 z-[9999] transform transition-transform duration-300 shadow-2xl ${
                    isOpen ? 'translate-x-0' : lang === 'ar' ? 'translate-x-full' : '-translate-x-full'
                } overflow-y-auto`}
            >
                <div className="flex flex-col gap-8 p-8 pt-24 landscape:gap-4 landscape:pt-20 landscape:pb-8">
                    {/* Menu Header with Logo */}
                    <div className="flex flex-col items-center gap-3 pb-4 border-b border-secondary/10">
                        <img
                            src="/logo.png"
                            alt="Jeddah Palaces Logo"
                            className="w-28 h-28 object-contain"
                        />
                        <div className="flex flex-col items-center text-center">
                            <span className="font-bold text-lg leading-tight">Jeddah Palaces</span>
                            <span className="text-xs text-extra-2 dark:text-secondary/70">
                                {lang === 'ar' ? 'للحجر الطبيعي' : 'Natural Stone'}
                            </span>
                        </div>
                    </div>

                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium hover:text-secondary transition-colors border-b border-secondary/10 pb-2"
                            onClick={toggleMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );

    const MenuButton = () => (
        <button
            onClick={toggleMenu}
            className={`mobile-menu-btn lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[9999] fixed top-5 ${
                lang === 'ar' ? 'left-4' : 'right-4'
            } rounded-lg transition-all duration-300 ${
                isOpen
                    ? 'bg-transparent'
                    : 'bg-extra-1/80 dark:bg-primary/80 backdrop-blur-sm shadow-sm hover:bg-secondary/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
    );

    return (
        <>
            {mounted && createPortal(<MenuButton />, document.body)}
            {mounted && createPortal(<MenuContent />, document.body)}
        </>
    );
}
