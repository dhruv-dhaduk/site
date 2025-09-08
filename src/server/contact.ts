'use server';

import { resend } from '@/lib/resend';
import {
    ContactChannel,
    ContactSchema,
    type ContactFormData,
} from '@/schema/contact';
import { formatFormDataForTelegram } from '@/utils/contactForm';

import { ContactConfirmation } from '@/components/Contact/ContactEmailTemplate';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const RESEND_EMAIL_ADDRESS = process.env.RESEND_EMAIL_ADDRESS;
const PERSONAL_EMAIL_ADDRESS = process.env.PERSONAL_EMAIL_ADDRESS;

/**
 * Processes the contact form data by validating it and sending it to a Telegram chat.
 * @param data - The contact form data to be processed.
 * @throws Will throw an error if the environment variables are not set, if the data is invalid, or if the Telegram API request fails.
 */
export async function processContactForm(data: ContactFormData) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        throw new Error('Internal Server Error.');
    }

    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
        throw new Error('The data you submitted is invalid.');
    }

    const parsedData = parsed.data;

    const text = formatFormDataForTelegram(parsedData);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'MarkdownV2',
        }),
    });

    const responseJson = await response.json();

    if (!response.ok || !responseJson.ok) {
        console.log(responseJson);
        throw new Error('An unexpected error occured.');
    }

    if (parsedData.channel === ContactChannel.EMAIL) {
        if (!RESEND_EMAIL_ADDRESS || !PERSONAL_EMAIL_ADDRESS) {
            throw new Error('Internal Server Error.');
        }

        const response = await resend.emails.send({
            from: `${parsedData.name} <${RESEND_EMAIL_ADDRESS}>`,
            to: [PERSONAL_EMAIL_ADDRESS],
            cc: parsedData.channelAccount,
            replyTo: parsedData.channelAccount,
            subject: `Contact Dhruv Dhaduk | ${parsedData.name} <${parsedData.channelAccount}>`,
            react: ContactConfirmation({
                name: parsedData.name,
                message: parsedData.message,
                email: parsedData.channelAccount,
            }),
        });

        if (response.error) {
            throw new Error(response.error.message);
        }

        return {
            message: 'Done. Check your email for confirmation.',
        };
    }

    return {
        message: 'Message sent successfully.',
    };
}
