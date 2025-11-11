import { Route } from 'next';

import { Link } from '@/components/Link';

/**
 * Custom anchor component for MDX links.
 */
export function anchor({
    href,
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const className = 'text-[#0088ff] underline-offset-4 hover:underline';

    if (typeof href === 'string' && href.startsWith('/')) {
        return (
            <Link
                href={href as Route}
                prefetch="auto"
                className={className}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    );
}
