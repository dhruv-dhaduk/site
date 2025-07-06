export function ProjectCardLoading() {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-[#1F1F1F] bg-[#030303] p-1">
            <div className="relative aspect-video overflow-hidden rounded-t-lg bg-[#1A1A1A]"></div>
            <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
                <div className="flex flex-col gap-1 pb-4">
                    <div className="h-4 bg-[#1A1A1A]"></div>
                    <div className="h-4 w-2/3 bg-[#1A1A1A]"></div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-4 w-16 rounded-full bg-[#1A1A1A]"
                        ></span>
                    ))}
                </div>
                <div className="font-inter flex items-center justify-between gap-2 pt-2">
                    <div className="h-9 w-36 rounded-md bg-[#1A1A1A]"></div>
                    <div className="h-9 w-12 rounded-md bg-[#1A1A1A]"></div>
                </div>
            </div>
        </div>
    );
}
