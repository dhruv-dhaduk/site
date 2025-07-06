import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
    const authHeader = req.headers.get('authorization');

    if (authHeader !== `Bearer MoreMoro`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
