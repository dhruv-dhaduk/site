import { z } from 'zod';

export const BlogSchema = z.object({
    slug: z.string().trim().nonempty(),
    title: z.string().trim().nonempty(),
    summary: z.string().trim().nonempty(),
    date: z
        .string()
        .trim()
        .nonempty()
        .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: 'Date must be in YYYY-MM-DD format',
        }),
    tags: z.array(z.string().trim().nonempty()),
});

export const BlogListSchema = z.array(BlogSchema);

export type Blog = z.infer<typeof BlogSchema>;

export const BlogPostSchema = z.object({
    title: BlogSchema.shape.title,
    summary: BlogSchema.shape.summary,
    date: BlogSchema.shape.date,
    tags: BlogSchema.shape.tags,
});

export type BlogPostMetadata = z.infer<typeof BlogPostSchema>;
