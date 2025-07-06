import crypto from 'crypto';

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
    const signature = req.headers.get('x-hub-signature-256');

    if (!signature) {
        return NextResponse.json(
            { error: 'Signature header missing' },
            { status: 400 }
        );
    }

    const rawBody = await req.text();

    const hmac = crypto.createHmac('sha256', 'MoreMoro');
    const digest = 'sha256=' + hmac.update(rawBody).digest('hex');

    const isValid = crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(digest)
    );

    if (!isValid) {
        return NextResponse.json(
            { error: 'Invalid signature' },
            { status: 401 }
        );
    }

    try {
        revalidatePath('/');
        revalidatePath('/projects');
        revalidatePath('/blog');
        revalidatePath('/wiki');

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
