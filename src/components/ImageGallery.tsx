import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import type { SanityImage } from '../lib/types';
import { urlFor } from '../lib/sanity';

interface Props {
    images: SanityImage[];
    title: string;
}

export default function ImageGallery({ images, title }: Props) {
    const [index, setIndex] = useState(-1);

    // Convert Sanity images to Lightbox format
    const slides = images.map((image) => ({
        src: urlFor(image).width(1920).quality(90).url(),
        alt: title,
        width: 1920,
        height: 1080, // Aspect ratio will be handled by object-fit
        srcSet: [
            { src: urlFor(image).width(320).height(180).url(), width: 320, height: 180 },
            { src: urlFor(image).width(640).height(360).url(), width: 640, height: 360 },
            { src: urlFor(image).width(1200).height(675).url(), width: 1200, height: 675 },
            { src: urlFor(image).width(1920).height(1080).url(), width: 1920, height: 1080 },
        ],
    }));

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="group relative aspect-square overflow-hidden rounded-xl cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={urlFor(image).width(800).height(800).url()}
                            alt={`${title} - ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Zoom]}
                animation={{ fade: 300 }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleClickMaxStops: 2,
                    doubleClickDelay: 300,
                    keyboardMoveDistance: 50,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true,
                }}
            />
        </>
    );
}
