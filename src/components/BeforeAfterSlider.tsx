import {
    ReactCompareSlider,
    ReactCompareSliderImage
} from 'react-compare-slider';

interface Props {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeAlt = 'Before',
    afterAlt = 'After'
}: Props) {
    return (
        <div className="w-full h-full relative rounded-lg overflow-hidden shadow-2xl">
            <ReactCompareSlider
                itemOne={
                    <ReactCompareSliderImage
                        src={beforeImage}
                        alt={beforeAlt}
                        style={{ objectFit: 'cover' }}
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        src={afterImage}
                        alt={afterAlt}
                        style={{ objectFit: 'cover' }}
                    />
                }
                position={50}
                className="h-full"
                style={{
                    ...({ '--rcs-handle-transition': 'none' } as React.CSSProperties)
                }}
            />

            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {beforeAlt}
            </div>
            <div className="absolute top-4 right-4 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {afterAlt}
            </div>
        </div>
    );
}
