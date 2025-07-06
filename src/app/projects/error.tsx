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

    return <ErrorScreen message={error.message} />;
}
