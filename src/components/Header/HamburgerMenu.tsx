'use client';

import { useState } from 'react';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { HamburgerIcon, CloseIcon } from '@/assets/icons';

interface HamburgerMenuProps {
    children: React.ReactNode;
}

export function HamburgerMenu({ children }: HamburgerMenuProps) {
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
            <PopoverContent className="bg-site-bg mt-2 mr-2 w-fit min-w-36 sm:hidden">
                <div
                    className="flex flex-col gap-2"
                    onClick={() => setOpen(false)}
                >
                    {children}
                </div>
            </PopoverContent>
        </Popover>
    );
}
