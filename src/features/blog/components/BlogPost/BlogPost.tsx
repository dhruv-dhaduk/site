import { MDXRemote, type MDXComponents } from 'next-mdx-remote-client/rsc';

import { MDXProvidedComponents } from '$/blog/components/mdx';

interface BlogPostProps {
    source: string;
}

const components: MDXComponents = {
    ...MDXProvidedComponents,
    wrapper: ({ children }: { children: React.ReactNode }) => (
        <div className="bg-gray">{children}</div>
    ),
    h1: (props) => <h1 className="my-4 text-3xl font-bold" {...props} />,
    pre: (props) => (
        <pre className="my-4 rounded-lg bg-black p-4 text-white" {...props} />
    ),
};

export function BlogPost({ source }: BlogPostProps) {
    return (
        <div>
            <p>Blog Preview</p>
            <pre>{source}</pre>
            <MDXRemote source={source} components={components} options={{}} />
        </div>
    );
}
