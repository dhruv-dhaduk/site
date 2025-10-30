import { Suspense } from 'react';

import { BlogPost } from '@/features/blog';

import previewContent from './preview.mdx';

const content = String(previewContent);

export default function BlogPreview() {
    return (
        <Suspense>
            <BlogPost source={content} />
        </Suspense>
    );
}
