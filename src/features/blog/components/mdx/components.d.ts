type MDXIntrinsicElements = {
    [K in keyof import('./index').MDXComponentsMap]: import('react').ComponentPropsWithRef<
        import('./index').MDXComponentsMap[K]
    >;
};

declare namespace React {
    declare namespace JSX {
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        interface IntrinsicElements extends MDXIntrinsicElements {}
    }
}
