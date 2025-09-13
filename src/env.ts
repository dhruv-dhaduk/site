/* eslint-disable no-restricted-properties */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        GITHUB_TOKEN: z.string().min(1),
        GITHUB_WEBHOOK_SECRET: z.string().min(1),
        TELEGRAM_BOT_TOKEN: z.string().min(1),
        TELEGRAM_CHAT_ID: z.string().min(1),
        RESEND_API_KEY: z.string().min(1),
        RESEND_EMAIL_ADDRESS: z.string().min(1).email(),
        PERSONAL_EMAIL_ADDRESS: z.string().min(1).email(),
    },
    runtimeEnv: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        RESEND_EMAIL_ADDRESS: process.env.RESEND_EMAIL_ADDRESS,
        PERSONAL_EMAIL_ADDRESS: process.env.PERSONAL_EMAIL_ADDRESS,
    },
});
