import { fetchProjects } from '$/projects/services/github.service';
import { ErrorScreen } from '@/components/ErrorScreen';

import { ProjectCard } from './ProjectCard';

export async function ProjectList() {
    try {
        const projects = await fetchProjects();

        return (
            <div className="grid-cols-auto-fit grid gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        );
    } catch (err) {
        let errorMessage: string | undefined;
        if (err instanceof Error) {
            errorMessage = err.message;
        } else if (typeof err === 'string') {
            errorMessage = err;
        }
        return <ErrorScreen message={errorMessage} />;
    }
}
