import { z } from 'zod';

import { ImageSchema } from '@/features/image';

export const ProjectSchema = z.object({
    id: z.string().trim().nonempty(),
    title: z.string().trim().nonempty(),
    description: z.string().trim().nonempty(),
    thumbnail: ImageSchema,
    githubLink: z.string().trim().nonempty().url(),
    liveLink: z.string().trim().nonempty().url().nullable(),
    downloadLink: z.string().trim().nonempty().url().nullable(),
    npmLink: z.string().trim().nonempty().url().nullable(),
    tags: z.array(z.string().trim().nonempty()),
});

export const ProjectListSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;
