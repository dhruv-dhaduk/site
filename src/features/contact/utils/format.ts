import { type ContactFormData } from '$/contact/schemas/contact.schema';

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

    const title = `📩 *New Message*\n\n`;

    let result = title;

    result += `👤 *Name:* ${escape(name)}\n`;

    result += `📡 *Email :* ${escape(data.email)}\n`;

    result += `\n💬 *Message:*\n\`\`\`\n${escape(data.message)}\n\`\`\``;

    return result;
}
