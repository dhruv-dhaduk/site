import { ContactChannel, type ContactFormData } from '@/schema/contact';

function getChannelAccountLabel(channel: ContactChannel.NONE): void;
function getChannelAccountLabel(
    channel: Exclude<ContactChannel, ContactChannel.NONE>
): string;
function getChannelAccountLabel(channel: ContactChannel): string | void;
function getChannelAccountLabel(channel: ContactChannel): string | void {
    switch (channel) {
        case ContactChannel.NONE:
            return;
        case ContactChannel.EMAIL:
            return 'Email Address';
        case ContactChannel.TELEGRAM:
            return 'Telegram Username';
        case ContactChannel.TEAMS:
            return 'MS Teams ID';
        case ContactChannel.SLACK:
            return 'Slack Username';
        case ContactChannel.DISCORD:
            return 'Discord Tag';
        default:
            const _exhaustiveCheck: never = channel;
            return _exhaustiveCheck;
    }
}

function getChannelAccountPlaceholder(channel: ContactChannel.NONE): void;
function getChannelAccountPlaceholder(
    channel: Exclude<ContactChannel, ContactChannel.NONE>
): string;
function getChannelAccountPlaceholder(channel: ContactChannel): string | void;
function getChannelAccountPlaceholder(channel: ContactChannel): string | void {
    switch (channel) {
        case ContactChannel.NONE:
            return;
        case ContactChannel.EMAIL:
            return 'Enter your email address';
        case ContactChannel.TELEGRAM:
            return 'Enter your Telegram handle (e.g., @username)';
        case ContactChannel.TEAMS:
            return 'Enter your MS Teams ID';
        case ContactChannel.SLACK:
            return 'Enter your Slack username (e.g., @username)';
        case ContactChannel.DISCORD:
            return 'Enter your Discord tag (e.g., username#1234)';
        default:
            const _exhaustiveCheck: never = channel;
            return _exhaustiveCheck;
    }
}

function getSubmitButtonLabel({
    channel,
    name,
    isNameTouched,
    isNameDirty,
    isMessageTouched,
    isMessageDirty,
}: {
    channel: ContactChannel;
    name?: string;
    isNameTouched?: boolean;
    isNameDirty?: boolean;
    isMessageTouched?: boolean;
    isMessageDirty?: boolean;
}): string {
    if (channel === ContactChannel.NONE) {
        if (
            isNameTouched ||
            isNameDirty ||
            isMessageTouched ||
            isMessageDirty
        ) {
            if (name) {
                return 'Send Message';
            } else {
                return 'Send Anonymous Message';
            }
        } else {
            return 'Submit';
        }
    } else {
        return 'Start a Conversation';
    }
}

function formatFormDataForTelegram(data: ContactFormData): string {
    // Escape MarkdownV2 reserved chars
    const escape = (text: string) =>
        text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');

    const name = data.name.trim();

    let title = `📩 *New Contact Submission*\n\n`;

    if (data.channel === ContactChannel.NONE) {
        if (name) {
            title = `📩 *New Message*\n\n`;
        } else {
            title = `📩 *New Anonymous Message*\n\n`;
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

export {
    getChannelAccountLabel,
    getChannelAccountPlaceholder,
    getSubmitButtonLabel,
    formatFormDataForTelegram,
};
