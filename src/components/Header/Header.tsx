'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@/components/Link';

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
        <header className="font-jetbrains bg-site-bg/30 glassmorphic border-site-border-darker sticky top-0 z-10 mx-auto flex h-12 w-full max-w-7xl items-center justify-between border-b px-4 sm:h-14">
            <div className="sm:text-lg">
                <Link href="/" className="hover:text-white" prefetch="auto">
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
