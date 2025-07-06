export const revalidate = false;

export default function Blog() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center">
            <h1 className="font-inter mb-4 text-4xl font-bold">Blog</h1>
            <p className="font-plex text-lg text-gray-600">
                This page is under construction.
            </p>
            <p className="font-plex text-lg text-gray-600">
                Stay tuned for updates!
            </p>
        </div>
    );
}
