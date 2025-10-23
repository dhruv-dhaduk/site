/* eslint-disable no-restricted-properties */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        ENVIRONMENT: z.enum(['development', 'production']),
        GITHUB_TOKEN: z.string().min(1),
        GITHUB_VAULT_URL: z.string().url(),
        GITHUB_WEBHOOK_SECRET: z.string().min(1),
        TELEGRAM_CONTACT_BOT_TOKEN: z.string().min(1),
        TELEGRAM_LOG_BOT_TOKEN: z.string().min(1),
        TELEGRAM_CHAT_ID: z.string().min(1),
    },
    runtimeEnv: {
        ENVIRONMENT: process.env.ENVIRONMENT,
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GITHUB_VAULT_URL: process.env.GITHUB_VAULT_URL,
        GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,
        TELEGRAM_CONTACT_BOT_TOKEN: process.env.TELEGRAM_CONTACT_BOT_TOKEN,
        TELEGRAM_LOG_BOT_TOKEN: process.env.TELEGRAM_LOG_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    },
});
