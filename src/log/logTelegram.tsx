import 'server-only';
import axios from 'axios';

import { env } from '@/env';

import { serializeError } from './utils';

const TELEGRAM_SEND_DOCUMENT_URL = `https://api.telegram.org/bot${env.TELEGRAM_LOG_BOT_TOKEN}/sendDocument`;

export async function logErrorToTelegram(error: unknown): Promise<void> {
    if (env.ENVIRONMENT !== 'production') {
        console.error('Error that would be logged to Telegram:', error);
        return;
    }

    try {
        const errorSerialized = serializeError(error);
        let errorMessage = 'Error Log from Server';
        if (error instanceof Error && error.message) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }

        const form = new FormData();
        form.append('chat_id', env.TELEGRAM_CHAT_ID);
        form.append('caption', `🚨 ${errorMessage}`);
        form.append(
            'document',
            new Blob([errorSerialized], { type: 'text/plain' }),
            'error.txt'
        );

        await axios.post(TELEGRAM_SEND_DOCUMENT_URL, form);
    } catch (err) {
        console.error('Failed to log error to Telegram:', err);
        console.error('Original error:', error);
    }
}
