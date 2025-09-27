import 'server-only';
import axios from 'axios';
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

import { env } from '@/env';

import { formatFormDataForTelegram, formatTelegramDM } from '$/contact/utils';
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

    const response = await axios.post(url, {
        chat_id: env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'MarkdownV2',
    });

    if (!response.data.ok) {
        console.log(response.data);
        throw new Error('An unexpected error occured.');
    }
}

/**
 * Send a direct message to a Telegram user.
 * @param username - The username of the recipient
 * @param message - The message to send
 */
export async function sendTelegramDM(
    username: string,
    message: string
): Promise<void> {
    const stringSession = new StringSession(env.TELEGRAM_SESSION_TOKEN);

    const client = new TelegramClient(
        stringSession,
        Number(env.TELEGRAM_API_ID),
        env.TELEGRAM_API_HASH,
        {
            connectionRetries: 5,
        }
    );

    await client.connect();

    await client.sendMessage(username, {
        message: formatTelegramDM(message),
        parseMode: 'html',
    });

    await client.disconnect();
}
