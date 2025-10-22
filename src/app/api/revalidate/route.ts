import crypto from 'crypto';

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

import { env } from '@/env';
import { CACHE_TAGS } from '@/constants/cacheTags';

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
    const rawBody = await req.text();

    // Compute the HMAC using the secret and the raw body
    const hmac = crypto.createHmac('sha256', env.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(rawBody).digest('hex');

    // Compare the computed HMAC with the signature from the header
    const isValid = crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(digest)
    );

    // If the signature is not valid, return an error response
    if (!isValid) {
        return NextResponse.json(
            { error: 'Invalid signature' },
            { status: 401 }
        );
    }

    // If the signature is valid, proceed to revalidate the path
    try {
        revalidateTag(CACHE_TAGS.PROJECTS, 'max');
        revalidateTag(CACHE_TAGS.BLOG.LIST, 'max');

        return NextResponse.json(
            { message: 'Revalidation successful', revalidated: true },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Error revalidating', error },
            { status: 500 }
        );
    }
}
