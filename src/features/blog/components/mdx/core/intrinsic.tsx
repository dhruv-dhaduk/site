import type { MDXComponents } from 'next-mdx-remote-client/rsc';

export const intrinsicComponents: MDXComponents = {
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

    /* Horizontal rule */
    hr: (props) => <hr className="border-site-border-2 my-6" {...props} />,

    /* Text formatters */
    strong: (props) => (
        <strong className="text-site-fg-1 font-semibold" {...props} />
    ),
    em: (props) => <em className="text-site-fg-2 italic" {...props} />,
    del: (props) => <del className="opacity-70" {...props} />,
};
