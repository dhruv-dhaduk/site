import 'server-only';

import { env } from '@/env';
import { resend } from '@/lib/resend';

import { ContactEmailTemplate } from '$/contact/components/ContactEmailTemplate';

/**
 * Starts a new email conversation.
 * @param name - The name of the person contacting.
 * @param email - The email address of the person contacting.
 * @param message - The message content.
 * @throws Will throw an error if the email sending fails.
 */
export async function startEmailConversation(
    name: string,
    email: string,
    message: string
): Promise<void> {
    const response = await resend.emails.send({
        from: `${name} <${env.RESEND_EMAIL_ADDRESS}>`,
        to: [env.PERSONAL_EMAIL_ADDRESS],
        cc: email,
        replyTo: email,
        subject: `Contact Dhruv Dhaduk | ${name} <${email}>`,
        react: ContactEmailTemplate({ name, email, message }),
    });

    if (response.error) {
        throw new Error(response.error.message);
    }
}
