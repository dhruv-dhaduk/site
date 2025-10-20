'use server';

import { logMessageToTelegram } from '$/contact/services/telegram.service';
import {
    ContactSchema,
    type ContactFormData,
} from '$/contact/schemas/contact.schema';

/**
 * Processes the contact form data by validating it and sending it to a Telegram chat.
 * @param data - The contact form data to be processed.
 * @throws Will throw an error if the environment variables are not set, if the data is invalid, or if the Telegram API request fails.
 */
export async function processContactForm(
    data: ContactFormData
): Promise<{ message: string }> {
    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
        throw new Error('The data you submitted is invalid.');
    }

    const parsedData = parsed.data;

    await logMessageToTelegram(parsedData);

    return {
        message: 'Message sent successfully.',
    };
}
