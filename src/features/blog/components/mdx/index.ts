import { Btn } from './Btn';

export const MDXComponents = {
    mdx_Btn: Btn,
} as const;

export type MDXComponentsMap = typeof MDXComponents;
