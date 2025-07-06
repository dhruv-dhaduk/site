import { fetchProjects } from '@/services/projects';
import { ProjectCard } from '@/components/Projects/ProjectCard';

export async function ProjectList() {
    const projects = await fetchProjects();

    console.log(projects);

    return (
        <div className="grid-cols-auto-fit grid gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
