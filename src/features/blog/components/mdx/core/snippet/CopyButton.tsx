'use client';

import { useRef, useState } from 'react';

import { CopyIcon, TickIcon } from '@/assets/icons';

interface CopyButtonProps {
    codeToCopy: string;
}

export function CopyButton({ codeToCopy }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);
    const timeoutId = useRef<number | null>(null);

    const handleClick = () => {
        if (isCopied) return;

        try {
            navigator.clipboard.writeText(codeToCopy.trim());
        } catch (err: unknown) {
            console.error('Failed to copy code snippet:', err);
            return;
        }

        setIsCopied(true);

        timeoutId.current = window.setTimeout(() => {
            setIsCopied(false);
            timeoutId.current = null;
        }, 2000);
    };

    return (
        <button
            className={`bg-site-bg-2 hover:bg-site-bg-3 flex h-7 w-7 items-center justify-center rounded-md border transition-colors ${
                isCopied
                    ? 'border-green-500 text-green-500'
                    : 'text-site-fg-3 border-site-border-2 cursor-pointer'
            }`}
            aria-label={isCopied ? 'Code copied' : 'Copy code to clipboard'}
            title={isCopied ? 'Code copied' : 'Copy code to clipboard'}
            onClick={handleClick}
        >
            {isCopied ? (
                <TickIcon style={{ width: 18, height: 18 }} />
            ) : (
                <CopyIcon style={{ width: 16, height: 16 }} />
            )}
        </button>
    );
}
