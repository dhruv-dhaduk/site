import type { MDXComponents } from 'next-mdx-remote-client/rsc';
import type React from 'react';

import { Link } from '@/components/Link';
import { SmartImage } from '@/features/image';

import { Btn } from './Btn';

export const MDXProvidedComponents = {
    MDX_Btn: Btn,
} as const;

export const components: MDXComponents = {
    ...MDXProvidedComponents,

    // Wrapper ensures consistent fonts, max width and base text color
    wrapper: ({ children }: { children: React.ReactNode }) => (
        <div className="font-inter w-full antialiased">{children}</div>
    ),

    /* Headings */
    h1: (props) => (
        <h1
            className="my-6 text-4xl font-bold tracking-tight sm:text-[44px]"
            {...props}
        />
    ),

    h2: (props) => <h2 className="my-5 text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="my-4 text-2xl font-bold" {...props} />,
    h4: (props) => <h4 className="my-3 text-xl font-bold" {...props} />,

    /* Paragraphs */
    p: (props) => <p className="my-5 leading-7" {...props} />,

    /* Links: use internal Link for internal routes, plain anchor for external */
    a: ({ href, children, ...props }) => {
        const anchorProps =
            props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        if (typeof href === 'string' && href.startsWith('/')) {
            return (
                <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    href={href as any}
                    prefetch="auto"
                    className="text-site-fg-1 hover:text-site-fg-0 italic underline underline-offset-4 hover:no-underline"
                    {...anchorProps}
                >
                    {children}
                </Link>
            );
        }
        return (
            <a
                href={href}
                className="text-site-fg-1 hover:text-site-fg-0 italic underline underline-offset-4 hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
                {...anchorProps}
            >
                {children}
            </a>
        );
    },

    /* Lists */
    ul: (props) => (
        <ul
            className={`my-4 ml-6 list-disc [&_ol]:my-0 [&_ul]:my-0 ${
                props.className || ''
            }`}
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className={`my-4 ml-6 list-decimal [&_ol]:my-0 [&_ul]:my-0 ${
                props.className || ''
            }`}
            {...props}
        />
    ),

    li: (props) => <li className="my-1 leading-6" {...props} />,

    /* Blockquote */
    blockquote: (props) => (
        <blockquote
            className="border-site-border-4 border-l-site-fg bg-site-bg-2 text-site-fg my-6 rounded-lg border border-l-[6px] p-4 italic"
            {...props}
        />
    ),

    /* Inline code */
    code: ({
        children,
        ...props
    }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
        // Inline code styling
        return (
            <code
                className="text-site-fg-1 rounded bg-black/90 px-1.5 py-0.5 font-mono text-sm"
                {...props}
            >
                {children}
            </code>
        );
    },

    /* Preformatted code blocks */
    pre: (props) => (
        <pre
            className="border-site-border-2 my-4 overflow-x-auto rounded-lg border bg-black/90 p-4 text-sm text-white"
            {...props}
        />
    ),

    /* Images - use SmartImage for better performance and LCP */
    img: (props) => {
        const imgProps = props as React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
        >;
        return (
            <SmartImage
                type="html"
                {...imgProps}
                className={`border-site-border-2 mx-auto my-4 max-w-full rounded-md border ${imgProps.className ?? ''}`}
                alt={imgProps.alt ?? ''}
            />
        );
    },

    /* Horizontal rule */
    hr: (props) => <hr className="border-site-border-2 my-6" {...props} />,

    /* Text formatters */
    strong: (props) => (
        <strong className="text-site-fg-1 font-semibold" {...props} />
    ),
    em: (props) => <em className="text-site-fg-2 italic" {...props} />,
    del: (props) => <del className="opacity-70" {...props} />,
};
