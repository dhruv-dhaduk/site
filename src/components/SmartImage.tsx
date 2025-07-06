import Image from 'next/image';

type DefaultImageProps = { type: 'html' } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

type NextImageProps = { type: 'next' } & React.ComponentProps<typeof Image>;

type SmartImageProps = DefaultImageProps | NextImageProps;

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
