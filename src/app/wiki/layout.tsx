import type { Metadata } from 'next';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Wiki | Dhruv Dhaduk',
    description:
        'Explore the wiki of Dhruv Dhaduk, where I document my knowledge and insights on various topics.',
};

export default function WikiLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-background mx-auto w-full max-w-[80rem]">
            <Header activePage="wiki" />
            {children}
        </div>
    );
}
