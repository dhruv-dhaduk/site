import Link from 'next/link';

interface HeaderProps {
    activePage: 'projects' | 'blog' | 'wiki';
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
        <header className="font-jetbrains bg-background sticky top-0 flex h-14 w-full items-center justify-between border-b border-[#1a1a1a] px-4 text-[#E5E5E5]">
            <div className="text-lg">
                <Link href="/" className="hover:text-white">
                    ~/dhruv ❯{' '}
                </Link>
                <span>{command}</span>
                <span className="animate-blink ml-2 inline-block h-1 w-3.5 bg-[#E5E5E5]" />
            </div>
            <div className="hidden gap-4 text-lg sm:flex">
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
        </header>
    );
}

interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`relative flex items-center gap-2 hover:text-white ${isActive ? 'text-white' : ''}`}
        >
            {isActive && (
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
            )}
            <span>{label}</span>
        </Link>
    );
}
