import Link from 'next/link';
import { UserRoundSearch } from 'lucide-react';

import {
    LocationIcon,
    ProjectsIcon,
    BlogIcon,
    GitHubIcon,
    LinkedInIcon,
    EmailIcon,
} from '@/assets/icons';

export const revalidate = false;

export default function Home() {
    return (
        <main className="font-plex bg-site-bg flex min-h-dvh items-center justify-center px-6 py-16">
            <div className="mx-auto flex max-w-3xl flex-col gap-12">
                {/* Intro */}
                <div className="flex flex-col gap-2">
                    <p className="text-site-fg-6 text-sm">{`Hi I'm`}</p>
                    <h1 className="font-inter flex items-end gap-4 text-4xl font-bold sm:text-5xl">
                        <span className="text-gradient">Dhruv Dhaduk</span>
                        <span className="animate-blink bg-site-fg mb-1 block h-2 w-6 sm:block" />
                    </h1>
                    <p className="text-site-fg-4 flex items-center gap-1.5">
                        <LocationIcon className="h-5 w-5" />
                        <span>Terminal</span>
                    </p>
                </div>

                {/* Description */}
                <p className="text-site-fg-5 leading-relaxed sm:text-lg">
                    I explore systems from inside out — from x64 to TypeScript,
                    from memory to markup.
                    <br />
                    This site is where I document what I learn, build, and
                    think.
                </p>

                {/* Internal Site Links */}
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <NavLink
                        href="/projects"
                        label="Projects"
                        icon={
                            <ProjectsIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                        }
                    />
                    <NavLink
                        href="/blog"
                        label="Blog"
                        icon={<BlogIcon className="h-4 w-4 sm:h-6 sm:w-6" />}
                    />
                    <NavLink
                        href="/contact"
                        label="Contact Me"
                        icon={
                            <UserRoundSearch className="h-4 w-4 sm:h-6 sm:w-6" />
                        }
                    />
                </div>

                {/* External Links */}
                <div className="text-site-fg-3 border-site-border-3 flex items-start gap-6 pl-2">
                    <a
                        href="https://github.com/dhruv-dhaduk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile (Opens in new tab)"
                    >
                        <GitHubIcon className="h-6 w-6 hover:text-white sm:h-8 sm:w-8" />
                    </a>

                    <a
                        href="https://linkedin.com/in/dhruvdhaduk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile (Opens in new tab)"
                    >
                        <LinkedInIcon className="hover:text-brand-linkedin h-6 w-6 sm:h-8 sm:w-8" />
                    </a>

                    <a
                        href="mailto:dhadukd44@gmail.com"
                        aria-label="Email Dhruv Dhaduk"
                    >
                        <EmailIcon className="hover:text-brand-gmail h-8 sm:h-10" />
                    </a>
                </div>
            </div>
        </main>
    );
}

interface NavLinkProps {
    label: string;
    icon: React.ReactNode;
    href: string;
}

function NavLink({ icon, href, label }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="text-site-fg bg-site-bg-1 hover:bg-site-bg-3 border-site-border-1 flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm transition sm:rounded-xl sm:px-5 sm:py-3 sm:text-base"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}
