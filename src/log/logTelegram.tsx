import 'server-only';
import axios from 'axios';

import { env } from '@/env';

import { serializeError } from './utils';

const TELEGRAM_SEND_DOCUMENT_URL = `https://api.telegram.org/bot${env.TELEGRAM_LOG_BOT_TOKEN}/sendDocument`;
const TELEGRAM_SEND_MESSAGE_URL = `https://api.telegram.org/bot${env.TELEGRAM_LOG_BOT_TOKEN}/sendMessage`;

/**
 * Logs an error to Telegram.
 * @param error The error to log.
 * @returns A promise that resolves when the logging is complete.
 */
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

/**
 * Logs an informational message to Telegram.
 * @param title The title of the message.
 * @param description The description of the message.
 * @returns A promise that resolves when the logging is complete.
 */
export async function logInfoToTelegram(
    title: string,
    description: string
): Promise<void> {
    if (env.ENVIRONMENT !== 'production') {
        console.log('Info that would be logged to Telegram:', {
            title,
            description,
        });
        return;
    }

    // escape markdownv2 reserved chars
    const escape = (text: string) =>
        text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');

    try {
        let text = `ℹ️ *${escape(title)}*\n\n`;
        text += `${escape(description)}`;

        await axios.post(TELEGRAM_SEND_MESSAGE_URL, {
            chat_id: env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'MarkdownV2',
        });
    } catch (err) {
        console.error('Failed to log info to Telegram:', err);
        console.error('Original info:', { title, description });
    }
}
