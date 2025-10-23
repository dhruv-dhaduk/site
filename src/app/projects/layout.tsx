import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Dhruv Dhaduk',
    description: 'Explore the projects of Dhruv Dhaduk.',
};

export default function ProjectsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className="mx-auto w-full max-w-[80rem]">{children}</div>;
}
