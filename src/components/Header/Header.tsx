import Link from 'next/link';
import { NavLink } from './NavLink';
import { HamburgerMenu } from './HamburgerMenu';
import type { ActivePage } from './types';

interface HeaderProps {
    activePage: ActivePage;
}

export function Header({ activePage }: HeaderProps) {
    let command = '';
    switch (activePage) {
        case 'projects':
            command = 'ls projects';
            break;
        case 'blog':
            command = 'cat blog';
            break;
        case 'wiki':
            command = 'man wiki';
            break;
    }

    return (
        <header className="font-jetbrains glassmorphic sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b border-[#1a1a1a] px-4 text-[#E5E5E5] sm:h-14">
            <div className="sm:text-lg">
                <Link href="/" className="hover:text-white">
                    ~/dhruv ❯{' '}
                </Link>
                <span>{command}</span>
                <span className="animate-blink ml-2 inline-block h-1 w-3.5 bg-[#E5E5E5]" />
            </div>
            <div className="hidden gap-3 text-lg sm:flex">
                <NavLink
                    href="/projects"
                    label="Projects"
                    isActive={activePage === 'projects'}
                />
                <NavLink
                    href="/blog"
                    label="Blog"
                    isActive={activePage === 'blog'}
                />
                <NavLink
                    href="/wiki"
                    label="Wiki"
                    isActive={activePage === 'wiki'}
                />
            </div>
            <div className="flex items-center sm:hidden">
                <HamburgerMenu activePage={activePage} />
            </div>
        </header>
    );
}
