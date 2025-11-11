'use client';

import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

interface CopyButtonProps {
    codeToCopy: string;
}

export function CopyButton({ codeToCopy }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);
    const timeoutId = useRef<number | null>(null);

    const handleClick = () => {
        try {
            navigator.clipboard.writeText(codeToCopy);
        } catch (err: unknown) {
            console.error('Failed to copy code snippet:', err);
            return;
        }

        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        setIsCopied(true);

        timeoutId.current = window.setTimeout(() => {
            setIsCopied(false);
            timeoutId.current = null;
        }, 2000);
    };

    return (
        <Button variant="secondary" onClick={handleClick}>
            {isCopied ? 'Copied' : 'Copy'}
        </Button>
    );
}
