// Cache tags used for revalidation
// Use either string constants or functions to generate dynamic tags
// Use "as const" for function tags to ensure literal types
export const CACHE_TAGS = {
    PROJECTS: 'projects',
    BLOG_LIST: 'blog-list',
    BLOG_POST: (slug: string) => `blog-post-${slug}` as const,
} as const;

// Type representing all possible cache tags
export type CacheTag =
    (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS] extends infer T
        ? T extends (...args: never[]) => infer R
            ? R
            : T
        : never;
