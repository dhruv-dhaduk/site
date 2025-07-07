'use client';

import { useState } from 'react';
import { HamburgerIcon } from '@/assets/icons/Hamburger';
import { CloseIcon } from '@/assets/icons/Close';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { NavLink } from './NavLink';
import type { ActivePage } from './types';

interface HamburgerMenuProps {
    activePage: ActivePage;
}

export function HamburgerMenu({ activePage }: HamburgerMenuProps) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                >
                    {open ? (
                        <CloseIcon className="h-7 w-7 text-white" />
                    ) : (
                        <HamburgerIcon className="h-7 w-7 text-white" />
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent className="bg-background mt-2 mr-2 w-fit min-w-36 text-white sm:hidden">
                <div className="flex flex-col gap-2">
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
                        href="/contact"
                        label="Contact Me"
                        isActive={activePage === 'contact'}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}
