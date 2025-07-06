import { ProjectCardLoading } from '@/components/Projects/ProjectCard';

export function ProjectListLoading() {
    return (
        <div className="grid-cols-auto-fit grid animate-pulse gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardLoading key={index} />
            ))}
        </div>
    );
}
