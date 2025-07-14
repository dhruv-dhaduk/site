'use client';

import { useEffect } from 'react';
import { ErrorScreen } from '@/components/ErrorScreen';

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    useEffect(() => {
        console.error('An error occurred:', error);
    }, [error]);

    return (
        <div className="flex min-h-dvh items-center justify-center px-4">
            <ErrorScreen message={error.message} />
        </div>
    );
}
