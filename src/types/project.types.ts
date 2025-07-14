import { z } from 'zod';
import { ProjectSchema } from '@/schema/projects';

export type Project = z.infer<typeof ProjectSchema>;
