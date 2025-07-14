'use client';

import { useEffect, useState } from 'react';
import { SmartImage } from '@/image/SmartImage';
import type { ImageData } from '@/image/image.types';

interface ThumbnailImageProps {
    type: ImageData['type'];
    src: string;
    alt: string;
}

export function ThumbnailImage({ type, src, alt }: ThumbnailImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <SmartImage
                type={type}
                src={src}
                width={800}
                height={450}
                className={`h-full w-full transition-opacity duration-700 ${isClient && !isLoaded ? 'opacity-0' : 'opacity-100'}`}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
            />
        </>
    );
}
