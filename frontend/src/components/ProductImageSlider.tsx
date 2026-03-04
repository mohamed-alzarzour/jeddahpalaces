import React, { useState, useEffect } from 'react';

interface Props {
    images: string[];
    autoRotate?: boolean;
    interval?: number;
}

export default function ProductImageSlider({ images, autoRotate = false, interval = 3000 }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoRotate || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoRotate, interval, images.length]);

    if (!images.length) return null;

    return (
        <div className="relative w-full h-full">
            {images.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    alt={`Product image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                />
            ))}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <>
                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-primary hover:bg-white hover:scale-110 transition-all duration-300 opacity-100 z-20 shadow-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                        }}
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-primary hover:bg-white hover:scale-110 transition-all duration-300 opacity-100 z-20 shadow-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentIndex((prev) => (prev + 1) % images.length);
                        }}
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white w-3'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentIndex(index);
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
