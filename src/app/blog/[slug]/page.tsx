export const revalidate = false;

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center">
            <h1 className="font-inter mb-4 text-4xl font-bold">Blog Post</h1>
            <p className="font-plex text-lg text-gray-600">/blog/{slug}</p>
            <p className="font-plex text-lg text-gray-600">
                This page is under construction.
            </p>
            <p className="font-plex text-lg text-gray-600">
                Stay tuned for updates!
            </p>
        </div>
    );
}
