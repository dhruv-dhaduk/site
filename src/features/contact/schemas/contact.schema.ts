import { z } from 'zod';

export const ContactSchema = z.object({
    name: z.string().trim().nonempty('Name is required'),
    email: z.string().trim().email('Invalid email address'),
    message: z.string().trim().nonempty('Message is required').max(500),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
