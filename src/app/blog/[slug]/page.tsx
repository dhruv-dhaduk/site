import { cacheLife, cacheTag } from 'next/cache';
import { Metadata } from 'next';

import { CACHE_TAGS } from '@/cache/cacheTags';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { NotFound } from '@/components/NotFound';
import { BlogPost, fetchBlogPost, fetchBlogsList } from '@/features/blog';

// We need at least one default slug to avoid build errors
const PLACEHOLDER_SLUG = '__placeholder__';

export async function generateStaticParams() {
    const blogPosts = await fetchBlogsList();

    const params = blogPosts.map((post) => ({ slug: post.slug }));

    if (params.length === 0) {
        return [{ slug: PLACEHOLDER_SLUG }];
    }

    return params;
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    "use cache";
    cacheLife('max');

    const { slug } = await params;

    cacheTag(CACHE_TAGS.BLOG_POST(slug));

    console.log('Generating metadata for blog post with slug:', slug);

    if (slug === PLACEHOLDER_SLUG) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    const [data, error] = await tryCatchNoLog(fetchBlogPost(slug));

    if (error) {
        return {};
    }

    const { metadata } = data;

    return {
        title: metadata.title,
        description: metadata.summary,
    }
}

export default async function BlogPostPage({
    params,
}: Props) {
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
