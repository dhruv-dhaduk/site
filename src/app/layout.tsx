import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
// import { Header } from '@/components/Header';

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//     variable: '--font-geist-mono',
//     subsets: ['latin'],
// });

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-plex',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Dhruv Dhaduk',
    icons: '/logos/favicon.png',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`dark ${ibmPlexMono.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
