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
        // RESEND_API_KEY: z.string().min(1),
        // RESEND_EMAIL_ADDRESS: z.string().min(1).email(),
        // PERSONAL_EMAIL_ADDRESS: z.string().min(1).email(),
        // TELEGRAM_API_ID: z.string().min(1),
        // TELEGRAM_API_HASH: z.string().min(1),
        // TELEGRAM_SESSION_TOKEN: z.string().min(1),
    },
    runtimeEnv: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GITHUB_VAULT_URL: process.env.GITHUB_VAULT_URL,
        GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
        // RESEND_API_KEY: process.env.RESEND_API_KEY,
        // RESEND_EMAIL_ADDRESS: process.env.RESEND_EMAIL_ADDRESS,
        // PERSONAL_EMAIL_ADDRESS: process.env.PERSONAL_EMAIL_ADDRESS,
        // TELEGRAM_API_ID: process.env.TELEGRAM_API_ID,
        // TELEGRAM_API_HASH: process.env.TELEGRAM_API_HASH,
        // TELEGRAM_SESSION_TOKEN: process.env.TELEGRAM_SESSION_TOKEN,
    },
});
