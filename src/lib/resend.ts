import 'server-only';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
    throw new Error('Resend API key is not set.');
}

export const resend = new Resend(RESEND_API_KEY);
