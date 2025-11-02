import { cacheLife } from 'next/cache';
import matter from 'gray-matter';

import { BlogPost } from '@/features/blog';

import { BlogPostSchema } from '$/blog/schemas/blog.schema';

import previewContent from './preview.mdx';

const source = String(previewContent);

export default async function BlogPreview() {
    'use cache';
    cacheLife('max');

    const { content, data } = matter(source);

    const metadata = BlogPostSchema.parse(data);

    return <BlogPost content={content} metadata={metadata} />;
}
