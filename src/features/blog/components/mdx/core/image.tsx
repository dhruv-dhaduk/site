import { SmartImage } from '@/features/image';

export function image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <SmartImage
            type="html"
            {...props}
            className={`border-site-border-2 mx-auto my-4 max-w-full rounded-md border ${props.className ?? ''}`}
            alt={props.alt ?? ''}
        />
    );
}
