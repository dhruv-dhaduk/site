import 'server-only';
import axios from 'axios';

import { env } from '@/env';
import { tryCatch } from '@/utils/tryCatch';

import { BlogListSchema, type Blog } from '$/blog/schemas/blog.schema';

const BLOGS_LIST_URL = `${env.GITHUB_VAULT_URL}/contents/blog/index.json`;

/**
 * Fetch the list of blogs from the GitHub repository.
 * The data is expected to be in JSON format and will be validated against the BlogListSchema.
 * @returns A promise that resolves to an array of Blog objects.
 * @throws Will throw an error if the fetch operation fails or if the data does not match the expected schema.
 */
export async function fetchBlogsList(): Promise<Array<Blog>> {
    const [response, fetch_error] = await tryCatch(
        axios.get(BLOGS_LIST_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        })
    );

    if (fetch_error) {
        console.error('Error fetching blogs list:', fetch_error);
        throw new Error(`HTTP error`);
    }

    const blogsList = BlogListSchema.safeParse(response.data);

    if (!blogsList.success) {
        console.error('Error validating blogs list data:', blogsList.error);
        throw new Error('Blogs list data validation failed');
    }

    return blogsList.data;
}
