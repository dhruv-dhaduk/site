import { cacheLife, cacheTag } from 'next/cache';

import { CACHE_TAGS } from '@/cache/cacheTags';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { NotFound } from '@/components/NotFound';
import { BlogPost } from '@/features/blog';

import { fetchBlogPost, fetchBlogsList } from '$/blog/services/github.service';

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

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    'use cache';
    cacheLife('max');

    const { slug } = await params;

    cacheTag(CACHE_TAGS.BLOG_POST(slug));

    if (slug === PLACEHOLDER_SLUG) {
        return <NotFoundUI />;
    }

    console.log('Rendering blog post with slug:', slug);
    const [source, error] = await tryCatchNoLog(fetchBlogPost(slug));

    if (error) {
        return <NotFoundUI />;
    }

    return <BlogPost source={source} />;
}

function NotFoundUI() {
    return (
        <div className="flex min-h-dvh items-center justify-center">
            <NotFound />
        </div>
    );
}
