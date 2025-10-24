import { z } from 'zod';

export const GithubWebhookSchema = z.object({
    ref: z.string(),
    commits: z.array(
        z.object({
            added: z.array(z.string()),
            removed: z.array(z.string()),
            modified: z.array(z.string()),
        })
    ),
});

export type GithubWebhookPayload = z.infer<typeof GithubWebhookSchema>;
