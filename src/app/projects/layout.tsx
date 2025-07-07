import type { Metadata } from 'next';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Projects | Dhruv Dhaduk',
    description: 'Explore the projects of Dhruv Dhaduk.',
};

export default function ProjectsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-auto w-full max-w-[80rem]">
            <Header activePage="projects" />
            {children}
        </div>
    );
}
