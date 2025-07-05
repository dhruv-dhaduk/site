import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default async function Projects() {
    return (
        <main className="font-plex flex flex-col gap-12 bg-[#07070a] px-6 py-16 text-[#E5E5E5]">
            <h1 className="font-inter flex items-end gap-4 overflow-visible text-4xl font-bold sm:text-[44px]">
                <span className="bg-gradient-to-b from-[#ffffffff] via-[#ffffffc8] to-[#ffffff4b] bg-clip-text text-transparent">
                    {`Things I've Built`}
                </span>
            </h1>
            <div className="grid-cols-auto-fit grid gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}
