import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Dhruv Dhaduk',
};

export default function ContactLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return children;
}
