import React, { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/dist/ScrollTrigger';
const ScrollTrigger = ScrollTriggerPlugin;

// Register ScrollTrigger
interface Props {
    children: ReactNode;
    className?: string;
    float?: number;
}

export default function ScrollFloat({ children, className = '', float = 50 }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Register ScrollTrigger only on client side
        gsap.registerPlugin(ScrollTrigger);

        const element = elementRef.current;
        if (!element) return;

        // Create the animation
        const anim = gsap.to(element, {
            y: -float, // Move up by 'float' amount
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom', // Start when top of element hits bottom of viewport
                end: 'bottom top',   // End when bottom of element hits top of viewport
                scrub: true,         // Link animation progress to scroll position
            },
        });

        // Cleanup
        return () => {
            anim.kill();
        };
    }, [float]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}
