import { ContactChannel } from '@/schema/contact';

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

export { getChannelAccountLabel, getChannelAccountPlaceholder };
