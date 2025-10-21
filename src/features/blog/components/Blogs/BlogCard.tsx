import Link from 'next/link';
import type { Route } from 'next';

import type { Blog } from '$/blog/schemas/blog.schema';

import { Tags } from './Tags';

interface BlogCardProps {
    blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${blog.slug}` as Route}
            className="text-site-fg-2 hover:text-site-fg-1 group flex flex-col gap-1.5"
        >
            <p className="font-inter text-2xl font-bold sm:text-3xl">
                {blog.title}
            </p>
            <p className="font-inter text-[15px]">
                {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
            <Tags tags={blog.tags} />
            <p className="font-jetbrains text-[12px] sm:text-sm">
                {blog.summary}
            </p>
            <div className="bg-site-border-4 mt-5 h-[1px] group-last:hidden"></div>
        </Link>
    );
}
