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

    result += `\n💬 *Message:*\n\`\`\`\n${escape(data.message)}\n\`\`\``;

    return result;
}

/**
 * Format a Telegram DM message.
 * @param name - The name of the user
 * @param message - The message to format
 * @returns The formatted message
 */
export function formatTelegramDM(name: string, message: string): string {
    return `
<b>Hi ${name},</b><br></br>
Thanks for reaching out! I just received you message from dhruvdhaduk.tech: <br><br>
<pre>${message}</pre><br>
This is an <i>automated confirmation</i> to let you know it came through. I will get back to you as soon as possible.<br>
`;
}
