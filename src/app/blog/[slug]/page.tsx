import { cacheLife, cacheTag } from 'next/cache';

import { CACHE_TAGS } from '@/cache/cacheTags';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { NotFound } from '@/components/NotFound';
import { BlogPost } from '@/features/blog';

import { fetchBlogPost, fetchBlogsList } from '$/blog/services/github.service';

export async function generateStaticParams() {
    const blogPosts = await fetchBlogsList();

    return blogPosts.map((post) => ({ slug: post.slug }));
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

    console.log('Rendering blog post with slug:', slug);
    const [source, error] = await tryCatchNoLog(fetchBlogPost(slug));

    if (error) {
        return (
            <div className="flex min-h-dvh items-center justify-center">
                <NotFound />
            </div>
        );
    }

    return <BlogPost source={source} />;
}
