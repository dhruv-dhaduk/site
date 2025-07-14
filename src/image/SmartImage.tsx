import Image from 'next/image';
import { AssertEqual } from '@/types/utils.types';
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
    switch (props.type) {
        case 'html':
            // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
            return <img {...props} />;
        case 'next':
            // eslint-disable-next-line jsx-a11y/alt-text
            return <Image {...props} />;
        default:
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _exhaustiveCheck: never = props;
            return <></>;
    }
}
