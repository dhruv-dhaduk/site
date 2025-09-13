import 'server-only';

import { env } from '@/env';

import { formatFormDataForTelegram } from '$/contact/utils';
import { type ContactFormData } from '$/contact/schemas/contact.schema';

/**
 * Logs a message to predefined Telegram chat using the Telegram Bot API.
 * @param data - The contact form data to be sent to Telegram.
 * @throws Will throw an error if the Telegram API request fails.
 */
export async function logMessageToTelegram(
    data: ContactFormData
): Promise<void> {
    const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const text = formatFormDataForTelegram(data);

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'MarkdownV2',
        }),
    });

    const responseJson = await response.json();

    if (!response.ok || !responseJson.ok) {
        console.log(responseJson);
        throw new Error('An unexpected error occured.');
    }
}
