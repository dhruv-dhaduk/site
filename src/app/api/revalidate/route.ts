import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

import {
    findTagsToRevalidate,
    isAuthorizedGithubWebhook,
} from '@/cache/githubWebhook';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';
import { tryCatch } from '@/utils/errors/tryCatch';
import { logInfoToTelegram } from '@/log/logTelegram';

// This route handles GitHub webhook events to revalidate the pages.
export async function POST(req: NextRequest) {
    // Extract the signature from the request headers
    const signature = req.headers.get('x-hub-signature-256');

    // If the signature is missing, return an error response
    if (!signature) {
        return NextResponse.json(
            { error: 'Signature header missing' },
            { status: 400 }
        );
    }

    // Read the raw body of the request to compute the HMAC
    const [rawBody, read_error] = await tryCatch(req.text());
    if (read_error) {
        return NextResponse.json(
            { error: 'Error reading request body' },
            { status: 400 }
        );
    }

    const isAuthorized = isAuthorizedGithubWebhook(signature, rawBody);

    // If the signature is not valid, return an error response
    if (!isAuthorized) {
        return NextResponse.json(
            { error: 'Invalid signature' },
            { status: 401 }
        );
    }

    const [tagsToRevalidate, parse_error] = await tryCatchNoLog(
        findTagsToRevalidate(rawBody)
    );

    if (parse_error) {
        return NextResponse.json(
            { error: parse_error.message || 'Error parsing webhook payload' },
            { status: 400 }
        );
    }

    for (const tag of tagsToRevalidate) {
        revalidateTag(tag, 'max');
    }

    await logInfoToTelegram(
        'GitHub Webhook Revalidation',
        `🔄 Revalidated tags: \n${tagsToRevalidate.join('\n')}`
    );

    return NextResponse.json(
        { message: 'Revalidation successful', revalidated: true },
        { status: 200 }
    );
}
