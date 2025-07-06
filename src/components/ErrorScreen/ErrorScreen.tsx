import Link from 'next/link';
import { Terminal } from 'lucide-react';

interface ErrorScreenProps {
    message?: string;
}

export function ErrorScreen({ message }: ErrorScreenProps) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <div className="mb-2 text-red-500">
                <Terminal className="mx-auto h-10 w-10 animate-pulse" />
            </div>
            <h1 className="font-inter animate-pulse text-lg font-semibold text-red-500 sm:text-xl">
                Something went wrong
            </h1>
            <div className="mt-6 max-w-md rounded-lg border border-red-600 bg-red-500/10 p-4 font-mono text-white">
                <p className="text-sm">
                    {message?.trim() || 'An unexpected error occured.'}
                </p>
            </div>

            <div className="mt-6">
                <Link
                    href="/"
                    className="font-jetbrains rounded border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                    cd $HOME
                </Link>
            </div>
        </div>
    );
}
