import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { PROJECTS } from '@/data/projects';

export function Projects() {
    return (
        <div className="flex w-full flex-col justify-center gap-8">
            <SectionHeading title="Projects" />

            <div className="grid-cols-auto-fit grid gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}
