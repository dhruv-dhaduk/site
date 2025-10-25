import { BlogList } from '@/features/blog';

export default function Blog() {
    return (
        <main className="font-plex mx-auto flex w-full max-w-[50rem] flex-col gap-12 px-4 py-10 sm:px-6 sm:py-16">
            <h1 className="font-inter flex items-end gap-4 overflow-visible text-4xl font-bold sm:text-[44px]">
                <span className="text-gradient">Blog</span>
            </h1>
            <BlogList />
        </main>
    );
}
