import { cacheLife } from 'next/cache';

import { BlogPost } from '@/features/blog';

import previewContent from './preview.mdx';

const content = String(previewContent);

export default async function BlogPreview() {
    'use cache';
    cacheLife('max');

    return <BlogPost source={content} />;
}
