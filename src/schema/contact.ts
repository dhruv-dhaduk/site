import { z } from 'zod';

export enum ContactChannel {
    NONE = 'none',
    EMAIL = 'email',
    TELEGRAM = 'telegram',
    TEAMS = 'teams',
    SLACK = 'slack',
    DISCORD = 'discord',
}

// Specific validations for each channel account
const emailAccountSchema = z.string().trim().email('Invalid email address');
const telegramAccountSchema = z
    .string()
    .trim()
    .regex(/^@[a-zA-Z0-9_]{5,}$/, 'Invalid Telegram handle');
const teamsAccountSchema = z.string().trim().min(3, 'Invalid Teams account');
const slackAccountSchema = z
    .string()
    .trim()
    .regex(/^@[a-zA-Z0-9_]+$/, 'Invalid Slack username');
const discordAccountSchema = z
    .string()
    .trim()
    .regex(/^.{3,32}#[0-9]{4}$/, 'Invalid Discord tag');

// Base schema for message
const messageSchema = z
    .string()
    .trim()
    .nonempty('Message is required')
    .max(500);

// Discriminated union on `channel`
export const ContactSchema = z.discriminatedUnion('channel', [
    z.object({
        channel: z.literal(ContactChannel.NONE),
        name: z.string().trim().optional(), // optional for "none"
        // channelAccount: z.never(), // disallow channelAccount
        message: messageSchema,
    }),
    z.object({
        channel: z.literal(ContactChannel.EMAIL),
        name: z.string().trim().nonempty('Name is required'),
        channelAccount: emailAccountSchema,
        message: messageSchema,
    }),
    z.object({
        channel: z.literal(ContactChannel.TELEGRAM),
        name: z.string().trim().nonempty('Name is required'),
        channelAccount: telegramAccountSchema,
        message: messageSchema,
    }),
    z.object({
        channel: z.literal(ContactChannel.TEAMS),
        name: z.string().trim().nonempty('Name is required'),
        channelAccount: teamsAccountSchema,
        message: messageSchema,
    }),
    z.object({
        channel: z.literal(ContactChannel.SLACK),
        name: z.string().trim().nonempty('Name is required'),
        channelAccount: slackAccountSchema,
        message: messageSchema,
    }),
    z.object({
        channel: z.literal(ContactChannel.DISCORD),
        name: z.string().trim().nonempty('Name is required'),
        channelAccount: discordAccountSchema,
        message: messageSchema,
    }),
]);

export type ContactFormData = z.infer<typeof ContactSchema>;
