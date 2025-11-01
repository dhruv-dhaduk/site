import { MDXRemote } from 'next-mdx-remote-client/rsc';
import matter from 'gray-matter';
import rehypePrettyCode from 'rehype-pretty-code';
import { cacheLife } from 'next/cache';

import { Link } from '@/components/Link';
import { safeParse } from '@/utils/errors/safeParse';

import { BlogPostSchema } from '$/blog/schemas/blog.schema';
import { components } from '$/blog/components/mdx';

import { ErrorComponent } from './ErrorComponent';

interface BlogPostProps {
    source: string;
}

export async function BlogPost({ source }: BlogPostProps) {
    'use cache';
    cacheLife('max');

    const { data, content } = matter(source);

    const { data: metadata } = await safeParse(BlogPostSchema, data);

    if (!metadata) {
        return <ErrorComponent message="Failed to load blog post metadata." />;
    }

    return (
        <main className="font-inter mx-auto flex w-full max-w-200 flex-col gap-12 px-4 pt-6 pb-10 sm:px-6 sm:pb-16">
            <div className="flex flex-col gap-3">
                <Link
                    href="/blog"
                    prefetch="auto"
                    className="text-site-fg-6 hover:text-site-fg-1 mb-3 w-fit"
                >
                    &larr; Back
                </Link>
                <h1 className="flex items-end gap-4 overflow-visible text-4xl font-bold sm:text-[44px]">
                    <span>{metadata.title}</span>
                </h1>
                <p className="text-site-fg-3 text-sm">
                    Posted on{' '}
                    {new Date(metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </div>
            <MDXRemote
                onError={ErrorComponent}
                source={content}
                components={components}
                options={{
                    mdxOptions: {
                        rehypePlugins: [
                            [
                                rehypePrettyCode,
                                {
                                    theme: 'github-dark',
                                    keepBackground: false,
                                },
                            ],
                        ],
                    },
                }}
            />
        </main>
    );
}
