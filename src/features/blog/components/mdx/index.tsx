import type { MDXComponents } from 'next-mdx-remote-client/rsc';
import type React from 'react';

import { intrinsicComponents } from './core/intrinsic';
import { Btn } from './Btn';
import { anchor } from './core/anchor';
import { image } from './core/image';

export const MDXProvidedComponents = {
    MDX_Btn: Btn,
} as const;

export const components: MDXComponents = {
    ...MDXProvidedComponents,
    ...intrinsicComponents,

    // Wrapper ensures consistent fonts, max width and base text color
    wrapper: ({ children }: { children: React.ReactNode }) => (
        <div className="font-inter w-full antialiased">{children}</div>
    ),

    a: anchor,

    img: image,

    /* Inline code */
    code: ({
        children,
        ...props
    }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
        // Inline code styling
        return (
            <code
                className="text-site-fg-1 w-fit rounded bg-black/90 px-1.5 py-0.5 font-mono text-sm"
                {...props}
            >
                {children}
            </code>
        );
    },

    /* Preformatted code blocks */
    pre: (props) => (
        <pre
            className="snippet-scrollbar border-site-border-2 my-4 overflow-x-auto rounded-lg border bg-black/90 p-4 text-sm text-white"
            {...props}
        />
    ),
};
