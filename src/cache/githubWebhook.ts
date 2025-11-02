import crypto from 'crypto';

import 'server-only';

import { env } from '@/env';
import { safeParse } from '@/utils/errors/safeParse';

import { CACHE_TAGS, type CacheTag } from './cacheTags';
import { GithubWebhookSchema } from './schema';

/**
 * Checks if the GitHub webhook request is authorized.
 * @param signature The signature from the request headers.
 * @param rawBody The raw body of the request.
 * @returns True if the request is authorized, false otherwise.
 */
export function isAuthorizedGithubWebhook(
    signature: string,
    rawBody: string
): boolean {
    // Compute the HMAC using the secret and the raw body
    const hmac = crypto.createHmac('sha256', env.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(rawBody).digest('hex');

    // Compare the computed HMAC with the signature from the header
    let isValid = false;
    try {
        isValid = crypto.timingSafeEqual(
            Buffer.from(signature),
            Buffer.from(digest)
        );
    } catch (err) {
        console.error('Error during signature comparison:', err);
        return false;
    }
    return isValid;
}

/**
 * Finds the cache tags to revalidate based on the GitHub webhook payload.
 * @param rawBody The raw body of the request.
 * @returns A promise that resolves to an array of cache tags to revalidate.
 */
export async function findTagsToRevalidate(
    rawBody: string
): Promise<Array<CacheTag>> {
    const tagsToRevalidate: Set<CacheTag> = new Set();

    const jsonBody = JSON.parse(rawBody);

    const parsed = await safeParse(GithubWebhookSchema, jsonBody);

    if (!parsed.success) {
        throw new Error('Invalid GitHub webhook payload');
    }

    const payload = parsed.data;

    if (payload.ref !== 'refs/heads/main') {
        throw new Error('Not a push to the main branch');
    }

    for (const commit of payload.commits) {
        for (const file of [
            ...commit.added,
            ...commit.modified,
            ...commit.removed,
        ]) {
            if (file === 'projects/projects.json') {
                tagsToRevalidate.add(CACHE_TAGS.PROJECTS);
            } else if (file === 'blog/index.json') {
                tagsToRevalidate.add(CACHE_TAGS.BLOG_LIST);
            } else if (file.startsWith('blog/posts/')) {
                const filename = file.split('/').pop();
                if (filename && filename.endsWith('.mdx')) {
                    const slug = filename.replace('.mdx', '');
                    if (slug) tagsToRevalidate.add(CACHE_TAGS.BLOG_POST(slug));
                }
            }
        }
    }

    return Array.from(tagsToRevalidate);
}
