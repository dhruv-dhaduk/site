import 'server-only';
import { ZodSchema } from 'zod';

import { logErrorToTelegram } from '@/log';

export async function safeParse<T>(schema: ZodSchema<T>, data: unknown) {
    const result = schema.safeParse(data);
    if (!result.success) {
        await logErrorToTelegram(result.error);
    }
    return result;
}
