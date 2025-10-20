/* eslint-disable no-restricted-properties */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        GITHUB_TOKEN: z.string().min(1),
        GITHUB_VAULT_URL: z.string().url(),
        GITHUB_WEBHOOK_SECRET: z.string().min(1),
        TELEGRAM_BOT_TOKEN: z.string().min(1),
        TELEGRAM_CHAT_ID: z.string().min(1),
    },
    runtimeEnv: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GITHUB_VAULT_URL: process.env.GITHUB_VAULT_URL,
        GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    },
});
