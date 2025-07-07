import type { Metadata } from 'next';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Contact | Dhruv Dhaduk',
};

export default function ContactLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-background mx-auto w-full max-w-[80rem]">
            <Header activePage="contact" />
            {children}
        </div>
    );
}
