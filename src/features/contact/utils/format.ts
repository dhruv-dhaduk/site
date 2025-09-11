import {
    ContactChannel,
    type ContactFormData,
} from '$/contact/schemas/contact.schema';

/**
 * Format the contact form data into a MarkdownV2 string for Telegram.
 * @param data - Contact form data
 * @returns Formatted string in MarkdownV2 for Telegram
 */
export function formatFormDataForTelegram(data: ContactFormData): string {
    // Escape MarkdownV2 reserved chars
    const escape = (text: string) =>
        text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');

    const name = data.name.trim();

    let title = `📩 *New Contact Submission*\n\n`;

    if (data.channel === ContactChannel.NONE) {
        if (name) {
            title = `📩 *New Message*\n\n`;
        } else {
            title = `📩 *New Anonymous Message*\n`;
        }
    } else {
        title = `📩 *New Conversation Started*\n\n`;
    }

    let result = title;

    if (name) result += `👤 *Name:* ${escape(name)}\n`;

    if (data.channel !== ContactChannel.NONE) {
        result += `📡 *Channel:* ${escape(data.channel)}\n`;
        result += `🔗 *Account:* ${escape(data.channelAccount)}\n`;
    }

    result += `\n💬 *Message:*\n${escape(data.message)}`;

    return result;
}
