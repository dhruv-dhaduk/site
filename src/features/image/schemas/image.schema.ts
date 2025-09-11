import { z } from 'zod';

export const ImageSchema = z.object({
    type: z.enum(['html', 'next']),
    url: z.string().trim().nonempty().url(),
});

export type ImageData = z.infer<typeof ImageSchema>;
