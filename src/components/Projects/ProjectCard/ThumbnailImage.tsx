'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ThumbnailImageProps {
    src: string;
    alt: string;
}

export function ThumbnailImage({ src, alt }: ThumbnailImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <Image
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
