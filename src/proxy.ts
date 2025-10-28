import { NextRequest, NextResponse } from 'next/server';

import { env } from './env';

export function proxy(req: NextRequest) {
    const { searchParams } = req.nextUrl;

    const secret = searchParams.get('secret');

    if (env.ADMIN_SECRET !== secret) {
        return new NextResponse('Unauthorized', { status: 401 });
    }
}

export const config = {
    matcher: ['/blog/preview'],
};
