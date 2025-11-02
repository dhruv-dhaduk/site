import { cacheLife, cacheTag } from 'next/cache';
import { Metadata } from 'next';

import { CACHE_TAGS } from '@/cache/cacheTags';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { NotFound } from '@/components/NotFound';
import { BlogPost, fetchBlogPost } from '@/features/blog';
import { blogs } from '@/data/blogs';

// We need at least one default slug to avoid build errors
const PLACEHOLDER_SLUG = '__placeholder__';

export function generateStaticParams() {
    const params = blogs.map((post) => ({ slug: post.slug }));

    if (params.length === 0) {
        return [{ slug: PLACEHOLDER_SLUG }];
    }

    return params;
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const blogPost = blogs.find((post) => post.slug === slug);

    if (blogPost) {
        return {
            title: blogPost.title,
            description: blogPost.summary,
            openGraph: {
                title: blogPost.title,
                description: blogPost.summary,
                url: `https://dhruvdhaduk.tech/blog/${blogPost.slug}`,
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: blogPost.title,
                description: blogPost.summary,
                creator: '@dhruvdhaduk0',
            },
        };
    }

    return {};
}

export default async function BlogPostPage({ params }: Props) {
    'use cache';
    cacheLife('max');

    const { slug } = await params;

    cacheTag(CACHE_TAGS.BLOG_POST(slug));

    if (slug === PLACEHOLDER_SLUG) {
        return <NotFoundUI />;
    }

    console.log('Rendering blog post with slug:', slug);
    const [data, error] = await tryCatchNoLog(fetchBlogPost(slug));

    if (error) {
        return <NotFoundUI />;
    }

    return <BlogPost content={data.content} metadata={data.metadata} />;
}

function NotFoundUI() {
    return (
        <div className="flex min-h-dvh items-center justify-center">
            <NotFound />
        </div>
    );
}
