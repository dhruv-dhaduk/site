import { MDXRemote, type MDXComponents } from 'next-mdx-remote-client/rsc';

import { MDXProvidedComponents } from '$/blog/components/mdx';

import previewContent from './preview.mdx';

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

const content = String(previewContent);

export default function BlogPreview() {
    return (
        <div>
            <p>Blog Preview</p>
            <pre>{content}</pre>
            <MDXRemote source={content} components={components} options={{}} />
        </div>
    );
}
