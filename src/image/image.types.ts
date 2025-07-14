import { z } from 'zod';
import { ImageSchema } from './imageSchema';

export type ImageData = z.infer<typeof ImageSchema>;
