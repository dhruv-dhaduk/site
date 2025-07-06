import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
            <Terminal className="mx-auto h-10 w-10 animate-pulse" />
            <div className="flex items-center justify-center gap-4">
                <h1 className="font-inter text-5xl font-semibold">
                    <span className="bg-gradient-to-b from-[#ffffffff] via-[#ffffffc8] to-[#ffffff4b] bg-clip-text text-transparent">
                        404
                    </span>
                </h1>
                <div className="h-10 w-[1px] bg-[#2f2f2f]"></div>
                <p className="font-plex text-2xl">Not Found</p>
            </div>
            <div className="mt-4">
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
