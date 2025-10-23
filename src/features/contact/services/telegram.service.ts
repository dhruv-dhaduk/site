import 'server-only';
import axios from 'axios';

import { env } from '@/env';
import { tryCatch } from '@/utils/errors/tryCatch';

import { formatFormDataForTelegram } from '$/contact/utils';
import { type ContactFormData } from '$/contact/schemas/contact.schema';

/**
 * Logs a message to predefined Telegram chat using the Telegram Bot API.
 * @param data - The contact form data to be sent to Telegram.
 * @throws Will throw an error if the Telegram API request fails. But only with a friendly error message.
 */
export async function logMessageToTelegram(
    data: ContactFormData
): Promise<void> {
    const url = `https://api.telegram.org/bot${env.TELEGRAM_CONTACT_BOT_TOKEN}/sendMessage`;
    const text = formatFormDataForTelegram(data);

    const [response, error] = await tryCatch(
        axios.post(url, {
            chat_id: env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'MarkdownV2',
        })
    );

    if (error || !response.data.ok) {
        throw new Error('An unexpected error occured.');
    }
}
