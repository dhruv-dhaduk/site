import { Tags } from './Tags';

interface BlogCardProps {
    title: string;
    summary: string;
    date: string;
    tags: Array<string>;
}

export function BlogCard({ title, summary, date, tags }: BlogCardProps) {
    return (
        <div className="text-site-fg-2 hover:text-site-fg-1 group flex flex-col gap-1.5">
            <p className="font-inter text-2xl font-bold sm:text-3xl">{title}</p>
            <p className="font-inter text-[15px]">{date}</p>
            <Tags tags={tags} />
            <p className="font-jetbrains text-[12px] sm:text-sm">{summary}</p>
            <div className="bg-site-border-4 mt-5 h-[1px] group-last:hidden"></div>
        </div>
    );
}
