import { useState, useEffect } from 'react';
import { getLanguage } from '../lib/i18n';

interface Props {
    mode?: 'full' | 'simple';
    scrollTargets?: string[];
    lang?: 'ar' | 'en';
}

export default function FloatingActionButton({ mode = 'simple', scrollTargets = [], lang = 'ar' }: Props) {
    const [isBottom, setIsBottom] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
    // const lang = getLanguage(); // Removed, using prop instead

    useEffect(() => {
        const handleScroll = () => {
            // Check if near bottom
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            // If we are close to the bottom (within 100px)
            if (windowHeight + scrollTop >= documentHeight - 100) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }

            // Update current target index based on scroll position
            if (mode === 'full' && scrollTargets.length > 0) {
                // Find the "current" project (the last one that has passed the threshold)
                // Threshold is 1/3 down the screen - if a project top passes this, we consider it "active"
                const threshold = windowHeight / 3;
                let currentIndex = -1;

                for (let i = 0; i < scrollTargets.length; i++) {
                    const element = document.getElementById(scrollTargets[i]);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If the element's top is above the threshold (meaning we have scrolled past/into it)
                        if (rect.top <= threshold) {
                            currentIndex = i;
                        } else {
                            // Since projects are ordered, if this one is below threshold, 
                            // subsequent ones are too. We can stop.
                            break;
                        }
                    }
                }

                // The next target is simply current + 1
                // If current is -1 (Hero), next is 0 (Project 1)
                // If current is last index, next is length (Footer)
                setCurrentTargetIndex(currentIndex + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [mode, scrollTargets]);

    const handleClick = () => {
        if (isBottom) {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentTargetIndex(0);
        } else {
            if (mode === 'full' && scrollTargets.length > 0) {
                // Scroll to next target
                if (currentTargetIndex < scrollTargets.length) {
                    const targetId = scrollTargets[currentTargetIndex];
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // Scroll to bottom (footer)
                    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                }
            } else {
                // Simple mode: Scroll down one viewport or to bottom
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} z-40 
        bg-secondary text-white px-6 py-3 rounded-full shadow-xl 
        transition-all duration-300 hover:opacity-100
        hidden lg:flex items-center gap-2 font-bold text-lg
        ${isVisible ? 'translate-y-0' : 'translate-y-24'}
      `}
            style={{ opacity: 0.6 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
        >
            {isBottom ? (
                <span className="flex flex-col items-center -space-y-1">
                    <span className="block animate-[scrollPulse_1.5s_ease-in-out_infinite_0.15s] text-sm">▲</span>
                    <span className="block animate-[scrollPulse_1.5s_ease-in-out_infinite] text-sm">▲</span>
                </span>
            ) : (
                <>
                    {mode === 'full' && (
                        <span>{lang === 'ar' ? 'مشاريعنا المميزة' : 'Our featured projects'}</span>
                    )}
                    <span className="flex flex-col items-center -space-y-1">
                        <span className="block animate-[scrollPulse_1.5s_ease-in-out_infinite] text-sm">▼</span>
                        <span className="block animate-[scrollPulse_1.5s_ease-in-out_infinite_0.15s] text-sm">▼</span>
                    </span>
                </>
            )}

            <style>{`
                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.3; transform: translateY(0); }
                    50% { opacity: 1; transform: translateY(3px); }
                }
            `}</style>
        </button>
    );
}
