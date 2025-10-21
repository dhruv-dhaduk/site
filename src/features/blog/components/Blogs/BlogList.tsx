import { ErrorScreen } from '@/components/ErrorScreen';
import { tryCatch } from '@/utils/tryCatch';

import { fetchBlogsList } from '$/blog/services/github.service';

import { BlogCard } from './BlogCard';

export async function BlogList() {
    const [blogsList, error] = await tryCatch(fetchBlogsList());

    if (error) {
        let errorMessage: string | undefined;
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }
        return <ErrorScreen message={errorMessage} />;
    }

    if (blogsList.length === 0) {
        return (
            <p className="font-inter text-site-fg mt-20 text-center">
                No blogs available.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {blogsList.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
    );
}
