import 'server-only';
import axios from 'axios';
import { cacheLife, cacheTag } from 'next/cache';
import { cache } from 'react';
import matter from 'gray-matter';

import { env } from '@/env';
import { tryCatch } from '@/utils/errors/tryCatch';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { safeParse } from '@/utils/errors/safeParse';
import { CACHE_TAGS } from '@/cache/cacheTags';

import { BlogListSchema, type Blog, BlogPostSchema, type BlogPostMetadata } from '$/blog/schemas/blog.schema';

const BLOGS_LIST_URL = `${env.GITHUB_VAULT_URL}/contents/blog/index.json`;

/**
 * Fetch the list of blogs from the GitHub repository.
 * The data is expected to be in JSON format and will be validated against the BlogListSchema.
 * @returns A promise that resolves to an array of Blog objects.
 * @throws Will throw an error if the fetch operation fails or if the data does not match the expected schema.
 */
export async function fetchBlogsList(): Promise<Array<Blog>> {
    'use cache';
    cacheLife('max');
    cacheTag(CACHE_TAGS.BLOG_LIST);

    console.log('Fetching blogs list from GitHub...');
    const [response, fetch_error] = await tryCatch(
        axios.get(BLOGS_LIST_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        })
    );

    if (fetch_error) {
        throw new Error(`HTTP error`);
    }

    const blogsList = await safeParse(BlogListSchema, response.data);

    if (!blogsList.success) {
        throw new Error('Blogs list data validation failed');
    }

    return blogsList.data;
}

/**
 * Fetch a single blog post by its slug from the GitHub repository.
 * This function is not cached. This is expected to be called at cached page.tsx
 * @param slug The slug of the blog post.
 * @returns The content of the blog post.
 */
export const fetchBlogPost = cache(async (slug: string): Promise<{
    content: string;
    metadata: BlogPostMetadata
}> => {
    console.log(`Fetching blog post "${slug}" from GitHub...`);
    const BLOG_POST_URL = `${env.GITHUB_VAULT_URL}/contents/blog/posts/${slug}.mdx`;

    const [response, fetch_error] = await tryCatchNoLog(
        axios.get(BLOG_POST_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        })
    );

    if (fetch_error) {
        throw new Error(`HTTP error`);
    }

    const { data, content } = matter(response.data);

    const {data: metadata} = await safeParse(BlogPostSchema, data);

    if (!metadata) {
        throw new Error("Blog post metadata validation failed"); 
    }

    return {
        content,
        metadata,
    };
});