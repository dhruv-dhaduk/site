'use client';

// eslint-disable-next-line no-restricted-imports
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import type { AssertEqual } from '@/types/utils.types';

import type { ImageData } from '$/image/schemas/image.schema';

type DefaultImageProps = { type: 'html' } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

type NextImageProps = { type: 'next' } & React.ComponentProps<typeof Image>;

// This type is used to ensure that the SmartImage component can handle both HTML <img> and Next.js Image components.
// It uses a union type to differentiate between the two types of images based on the 'type' property.
type SmartImageProps = DefaultImageProps | NextImageProps;

type ExhaustiveCheck = AssertEqual<ImageData['type'], SmartImageProps['type']>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _exhaustiveCheck: ExhaustiveCheck = true; // Ensure that all types are covered. Will throw an error if a new type is added to ImageData['type'] but not handled in SmartImageProps.

/**
 * SmartImage component that handles both HTML <img> and Next.js Image components.
 * It manages loading state and applies a fade-in effect when the image is loaded.
 * @param props - The properties for the SmartImage component.
 * @returns A rendered image element that can be either an HTML <img> or a Next.js Image component.
 * @example
 * <SmartImage
 *   type="html"
 *   src="https://example.com/image.jpg"
 *   alt="Example Image"
 *   className="my-image"
 *   onLoad={() => console.log('Image loaded')}
 * />
 * <SmartImage
 *   type="next"
 *   src="https://example.com/image.jpg"
 *   alt="Example Image"
 *   className="my-image"
 *   onLoad={() => console.log('Image loaded')}
 * />
 * @see {@link https://nextjs.org/docs/api-reference/next/image | Next.js Image Documentation}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img | MDN Web Docs for HTML <img> Element}
 */
export function SmartImage(props: SmartImageProps) {
    // State to track if the image has loaded and if the component is mounted on the client
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Determine the opacity class based on the loading state
    const imageOpacity = isClient && !isLoaded ? 'opacity-0' : 'opacity-100';

    // Effect to set the component as client-side rendered
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);
    }, []);

    // Render the appropriate image component based on the type prop
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
