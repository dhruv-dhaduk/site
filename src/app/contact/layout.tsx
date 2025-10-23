import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Dhruv Dhaduk',
};

export default function ContactLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className="mx-auto w-full max-w-[80rem]">{children}</div>;
}
