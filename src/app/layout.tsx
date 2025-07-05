import type { Metadata } from 'next';
import { JetBrains_Mono, IBM_Plex_Mono, Inter } from 'next/font/google';
import { ProgressBarProvider } from '@/components//ProgressBarProvider';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains',
});

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
    description:
        'Personal website of Dhruv Dhaduk. Includes projects, blog and wiki.',
    icons: {
        icon: '/logos/favicon.png',
    },
    openGraph: {
        title: 'Dhruv Dhaduk',
        description:
            'Personal website of Dhruv Dhaduk. Includes projects, blog and wiki.',
        url: 'https://dhruvdhaduk.tech',
        siteName: 'Dhruv Dhaduk',
        images: [
            {
                url: '/images/cover_image.png',
                width: 1200,
                height: 630,
                alt: 'Dhruv Dhaduk – Personal Site',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dhruv Dhaduk',
        description:
            'Personal website of Dhruv Dhaduk. Includes projects, blog and wiki.',
        images: ['/images/cover_image.png'],
        creator: '@dhruvdhaduk0',
    },
    keywords: [
        'Dhruv Dhaduk',
        'Full Stack Developer',
        'x64 Assembly',
        'React',
        'TypeScript',
        'Personal Wiki',
        'Tech Blog',
        'System Programming',
        'Open Source',
    ],
    authors: [{ name: 'Dhruv Dhaduk', url: 'https://dhruvdhaduk.tech' }],
    creator: 'Dhruv Dhaduk',
    publisher: 'Dhruv Dhaduk',
    robots: {
        index: true,
        follow: true,
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
    alternates: {
        canonical: 'https://dhruvdhaduk.tech',
        languages: {
            'en-US': '/en',
        },
    },
    metadataBase: new URL('https://dhruvdhaduk.tech'),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`dark ${jetBrainsMono.variable} ${ibmPlexMono.variable} ${inter.variable} antialiased`}
            >
                <ProgressBarProvider>{children}</ProgressBarProvider>
            </body>
        </html>
    );
}
