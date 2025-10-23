'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLink } from './NavLink';
import { HamburgerMenu } from './HamburgerMenu';
import { constructNavLinks } from './utils';

export function Header() {
    const pathname = usePathname();

    const { navLinks, command, hideHeader } = constructNavLinks(pathname);

    if (hideHeader) {
        return null;
    }

    const navLinksJSX = navLinks.map((navLinkProps) => (
        <NavLink key={navLinkProps.href} {...navLinkProps} />
    ));

    return (
        <header className="font-jetbrains bg-site-bg/30 glassmorphic border-site-border-darker sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b px-4 sm:h-14">
            <div className="sm:text-lg">
                <Link href="/" className="hover:text-white">
                    ~/dhruv ❯{' '}
                </Link>
                <span>{command}</span>
                <span className="animate-blink bg-site-fg ml-2 inline-block h-1 w-3.5" />
            </div>
            <div className="hidden gap-3 text-lg sm:flex">{navLinksJSX}</div>
            <div className="flex items-center sm:hidden">
                <HamburgerMenu>{navLinksJSX}</HamburgerMenu>
            </div>
        </header>
    );
}
