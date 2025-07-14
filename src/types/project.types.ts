import type { z } from 'zod';
import type { ProjectSchema } from '@/schema/projects';

export type Project = z.infer<typeof ProjectSchema>;
