import type { Metadata } from 'next';

import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Blog | Dhruv Dhaduk',
    description:
        'Explore the blog of Dhruv Dhaduk, where I share my thoughts, experiences, and insights on various topics.',
};

export default function BlogLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-auto w-full max-w-[80rem]">
            <Header activePage="blog" />
            {children}
        </div>
    );
}
