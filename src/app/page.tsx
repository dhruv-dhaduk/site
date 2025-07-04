import Link from 'next/link';

import { LocationIcon } from '@/assets/icons/Location';
import { ProjectsIcon } from '@/assets/icons/Projects';
import { BlogIcon } from '@/assets/icons/Blog';
import { WikiIcon } from '@/assets/icons/Wiki';
import { GitHubIcon } from '@/assets/icons/GitHub';
import { LinkedInIcon } from '@/assets/icons/LinkedIn';
import { EmailIcon } from '@/assets/icons/Email';

export default function Home() {
    return (
        <main className="font-plex flex min-h-dvh items-center justify-center bg-[#07070a] px-6 py-16 text-[#E5E5E5]">
            <div className="mx-auto flex max-w-3xl flex-col gap-12">
                {/* Intro */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#999]">{`Hi I'm`}</p>
                    <h1 className="font-inter flex items-end gap-4 text-5xl font-bold">
                        <span>Dhruv Dhaduk</span>
                        <span className="animate-blink mb-1 hidden h-2 w-6 bg-[#E5E5E5] sm:block" />
                    </h1>
                    <p className="flex items-center gap-1.5 text-[#bbbbbb]">
                        <LocationIcon className="h-5 w-5" />
                        <span>Terminal</span>
                    </p>
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-[#A1A1AA]">
                    I explore systems from inside out — from x64 to TypeScript,
                    from memory to markup.
                    <br />
                    This site is where I document what I learn, build, and
                    think.
                </p>

                {/* Internal Site Links */}
                <div className="flex flex-wrap gap-4">
                    <NavLink
                        href="/projects"
                        label="Projects"
                        icon={<ProjectsIcon className="h-7 w-7" />}
                    />
                    <NavLink
                        href="/blog"
                        label="Blog"
                        icon={<BlogIcon className="h-6 w-6" />}
                    />
                    <NavLink
                        href="/wiki"
                        label="Wiki"
                        icon={<WikiIcon className="h-6 w-6" />}
                    />
                </div>

                {/* External Links */}
                <div className="flex items-start gap-6 border-[#333] text-[#BFBFBF]">
                    <a
                        href="https://github.com/dhruv-dhaduk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile (Opens in new tab)"
                    >
                        <GitHubIcon className="h-8 w-8 hover:text-white" />
                    </a>

                    <a
                        href="https://linkedin.com/in/dhruvdhaduk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile (Opens in new tab)"
                    >
                        <LinkedInIcon className="h-8 w-8 hover:text-[#0a66c2]" />
                    </a>

                    <a
                        href="mailto:dhadukd44@gmail.com"
                        aria-label="Email Dhruv Dhaduk"
                    >
                        <EmailIcon className="h-10 hover:text-[#EA4335]" />
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
            className="flex items-center gap-2 rounded-xl border border-[#202831] bg-[#0b0e11] px-5 py-3 text-[#E0E0E0] transition hover:bg-[#101419]"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}
