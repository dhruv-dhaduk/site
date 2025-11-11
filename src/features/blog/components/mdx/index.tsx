import type { MDXComponents } from 'next-mdx-remote-client/rsc';

import { intrinsicComponents } from './core/intrinsic';
import { Btn } from './Btn';
import { anchor } from './core/anchor';
import { image } from './core/image';
import { CodeSnippet } from './core/snippet';

export const MDXProvidedComponents = {
    MDX_Btn: Btn,
} as const;

export const components: MDXComponents = {
    ...MDXProvidedComponents,
    ...intrinsicComponents,

    a: anchor,
    img: image,
    code: CodeSnippet,
};
