/** Site logo and navigation links to different pages/sections. */
export function Header() {
    return (
        <header className="fixed top-4 right-0 left-0 z-10 flex w-full justify-center sm:top-6">
            <div className="w-full max-w-[80rem] px-4 sm:px-9">
                <div className="glassmorphic flex h-14 justify-between rounded-2xl">
                    <a
                        href="#"
                        className="h-full p-2 pl-4 duration-200 hover:scale-105"
                        role="button"
                    >
                        <img
                            src="/logos/header_logo.png"
                            alt="Dhruv"
                            className="h-full"
                        />
                    </a>

                    {/* Navigation links to different pages/sections. */}
                    <nav className="flex items-center gap-2 px-2">
                        <NavLink href="#skills" className="hidden sm:inline">
                            Skills
                        </NavLink>
                        <NavLink href="#projects" className="hidden sm:inline">
                            Projects
                        </NavLink>
                        <NavLink href="#education" className="hidden sm:inline">
                            Education
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

/** Returns an anchor tag with some stylings for Nav Links in Header */
function NavLink({ href, className, children }: NavLinkProps) {
    return (
        <a
            role="button"
            href={href}
            className={`rounded-lg border border-transparent p-2 px-4 text-nowrap duration-300 hover:border-[#ffffffc0] ${className}`}
        >
            {children}
        </a>
    );
}
