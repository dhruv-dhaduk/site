import { Terminal } from 'lucide-react';

import { Link } from '@/components/Link';

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
            <Terminal className="mx-auto h-10 w-10 animate-pulse" />
            <div className="flex items-center justify-center gap-4">
                <h1 className="font-inter text-5xl font-semibold">
                    <span className="text-gradient">404</span>
                </h1>
                <div className="bg-site-bg-5 h-10 w-[1px]"></div>
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
