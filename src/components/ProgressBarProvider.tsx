'use client';

// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ProgressProvider } from '@bprogress/next/app';

export function ProgressBarProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ProgressProvider
            height="2px"
            color="#FFFFFFCC"
            options={{ showSpinner: false }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
}
