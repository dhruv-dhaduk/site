import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
}

export function NavLink({ href, label, isActive }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`font-plex relative flex items-center gap-2 hover:text-white ${isActive ? 'text-white' : 'pl-4'}`}
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
