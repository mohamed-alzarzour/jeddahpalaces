import React, { useRef, useEffect, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    float?: number;
}

export default function ScrollFloat({ children, className = '', float = 50 }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate progress: 0 when element enters bottom, 1 when it exits top
                const progress = Math.max(0, Math.min(1,
                    (windowHeight - rect.top) / (windowHeight + rect.height)
                ));

                // Move element up by `float * progress` pixels
                element.style.transform = `translateY(${-float * progress}px)`;
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [float]);

    return (
        <div ref={elementRef} className={className} style={{ willChange: 'transform' }}>
            {children}
        </div>
    );
}
