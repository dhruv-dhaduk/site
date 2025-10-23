import 'server-only';

import { logErrorToTelegram } from '@/log';

import type { Result } from './types';

/**
 * Tries to execute a promise, logs any error to Telegram, and returns a tuple indicating success or failure.
 * @param promise The promise to execute.
 * @returns A tuple where the first element is the result or null, and the second element is the error or null.
 */
export async function tryCatch<T, E = Error>(
    promise: Promise<T>
): Promise<Result<T, E>> {
    try {
        const data = await promise;
        return [data, null];
    } catch (error) {
        await logErrorToTelegram(error);
        return [null, error as E];
    }
}
