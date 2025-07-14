'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { AssertEqual } from '@/types/utils.types';
import type { ImageData } from './image.types';

type DefaultImageProps = { type: 'html' } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

type NextImageProps = { type: 'next' } & React.ComponentProps<typeof Image>;

type SmartImageProps = DefaultImageProps | NextImageProps;

type ExhaustiveCheck = AssertEqual<ImageData['type'], SmartImageProps['type']>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _exhaustiveCheck: ExhaustiveCheck = true; // Ensure that all types are covered. Will throw an error if a new type is added to ImageData['type'] but not handled in SmartImageProps.

export function SmartImage(props: SmartImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const imageOpacity = isClient && !isLoaded ? 'opacity-0' : 'opacity-100';

    useEffect(() => {
        setIsClient(true);
    }, []);

    switch (props.type) {
        case 'html': {
            const { className, onLoad, ...rest } = props;
            return (
                // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
                <img
                    {...rest}
                    className={cn(
                        className,
                        imageOpacity,
                        'transition-opacity duration-700'
                    )}
                    onLoad={(e) => {
                        setIsLoaded(true);
                        if (onLoad) {
                            return onLoad(e);
                        }
                    }}
                />
            );
        }
        case 'next': {
            const { className, onLoad, ...rest } = props;
            return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                    {...rest}
                    className={cn(
                        className,
                        imageOpacity,
                        'transition-opacity duration-700'
                    )}
                    onLoad={(e) => {
                        setIsLoaded(true);
                        if (onLoad) {
                            return onLoad(e);
                        }
                    }}
                />
            );
        }
        default:
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _exhaustiveCheck: never = props;
            return <></>;
    }
}
