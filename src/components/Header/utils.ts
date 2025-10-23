import type { NavLinkProps } from './NavLink';

/**
 * Constructs navigation links, command, and header visibility based on the current pathname.
 * @param pathname
 * @returns An object containing an array of navigation link props, a command string, and a boolean indicating whether to hide the header.
 */
export function constructNavLinks(pathname: string): {
    navLinks: Array<NavLinkProps>;
    command: string;
    hideHeader: boolean;
} {
    const navLinks: Array<NavLinkProps> = [
        {
            href: '/projects',
            label: 'Projects',
            isActive: pathname === '/projects',
        },
        {
            href: '/blog',
            label: 'Blog',
            isActive: pathname === '/blog',
        },
        {
            href: '/contact',
            label: 'Contact Me',
            isActive: pathname === '/contact',
        },
    ];

    let command = '';
    let hideHeader = false;
    switch (pathname) {
        case '/projects':
            command = 'ls projects';
            break;
        case '/blog':
            command = 'cat blog';
            break;
        case '/contact':
            command = 'ping me';
            break;
        default:
            hideHeader = true;
            break;
    }

    return { navLinks, command, hideHeader };
}
