import type { MDXComponents } from 'next-mdx-remote-client/rsc';

import { Btn } from './Btn';

export const MDXProvidedComponents = {
    MDX_Btn: Btn,
} as const;

export const components: MDXComponents = {
    ...MDXProvidedComponents,
    wrapper: ({ children }: { children: React.ReactNode }) => (
        <div className="font-inter">{children}</div>
    ),
    p: (props) => <p className="my-5 leading-7" {...props} />,
    h1: (props) => <h1 className="my-4 text-3xl font-bold" {...props} />,
    pre: (props) => (
        <pre
            className="border-site-border-1 my-4 rounded-lg border bg-black p-4 text-white"
            {...props}
        />
    ),
};
