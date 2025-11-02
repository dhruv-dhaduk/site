'use client';

import { useEffect, useRef, useState } from 'react';

interface TagsProps {
    tags: Array<string>;
}

export function Tags({ tags }: TagsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [fadeEdges, setFadeEdges] = useState({
        left: false,
        right: true,
    });

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeftOffset = scrollRef.current.scrollLeft;
            const scrollRigthOffset =
                scrollRef.current.scrollWidth -
                scrollRef.current.scrollLeft -
                scrollRef.current.clientWidth;

            setFadeEdges({
                left: scrollLeftOffset > 10,
                right: scrollRigthOffset > 10,
            });
        }
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div
            className={`${fadeEdges.left ? 'fade-edge-left' : ''} ${fadeEdges.right ? 'fade-edge-right' : ''} relative max-w-[25rem]`}
        >
            <div
                ref={scrollRef}
                className="no-scrollbar flex w-full gap-1.5 overflow-x-auto sm:gap-2"
                onScroll={handleScroll}
            >
                {tags.map((tag) => (
                    <span
                        className="font-jetbrains bg-site-bg-4 border-site-border-3 rounded-full border px-2 py-0.5 text-[10px] text-nowrap sm:text-[12px]"
                        key={tag}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
