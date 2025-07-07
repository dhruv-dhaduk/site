export function ProjectCardLoading() {
    return (
        <div className="bg-site-bg-darker border-site-border flex flex-col gap-3 rounded-lg border p-1">
            <div className="bg-site-bg-4 relative aspect-video overflow-hidden rounded-t-lg"></div>
            <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
                <div className="flex flex-col gap-1 pb-4">
                    <div className="bg-site-bg-4 h-4"></div>
                    <div className="bg-site-bg-4 h-4 w-2/3"></div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span
                            key={index}
                            className="bg-site-bg-4 h-4 w-16 rounded-full"
                        ></span>
                    ))}
                </div>
                <div className="font-inter flex items-center justify-between gap-2 pt-2">
                    <div className="bg-site-bg-4 h-9 w-36 rounded-md"></div>
                    <div className="bg-site-bg-4 h-9 w-12 rounded-md"></div>
                </div>
            </div>
        </div>
    );
}
