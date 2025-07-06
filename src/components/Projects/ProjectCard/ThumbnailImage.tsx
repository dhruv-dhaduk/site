'use client';

import { useState } from 'react';
import { SmartImage } from '@/components/SmartImage';
import type { ImageData } from '@/types/image';

interface ThumbnailImageProps {
    type: ImageData['type'];
    src: string;
    alt: string;
}

export function ThumbnailImage({ type, src, alt }: ThumbnailImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <SmartImage
                type={type}
                src={src}
                width={800}
                height={450}
                className={`h-full w-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
            />
        </>
    );
}
