import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';

import { blogs } from '@/data/blogs';

export const runtime = 'edge';

const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blogPost = blogs.find((post) => post.slug === slug);

    if (!blogPost) return notFound();

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    background: 'linear-gradient(135deg, #000000, #303030)',
                    color: 'white',
                    padding: '60px',
                    fontSize: 60,
                }}
            >
                <div style={{ fontWeight: 700 }}>{blogPost.title}</div>
                <div style={{ fontSize: 28, marginTop: 20, opacity: 0.8 }}>
                    {blogPost.summary}
                </div>
                <div
                    style={{
                        fontSize: 20,
                        marginTop: 20,
                        opacity: 0.7,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <span style={{ opacity: 0.7 }}>By </span>
                    <span style={{ fontWeight: 600 }}>Dhruv Dhaduk</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
