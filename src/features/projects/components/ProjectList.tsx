import { ErrorScreen } from '@/components/ErrorScreen';
import { tryCatchNoLog } from '@/utils/errors/tryCatchNoLog';

import { fetchProjects } from '$/projects/services/github.service';

import { ProjectCard } from './ProjectCard';

export async function ProjectList() {
    const [projects, error] = await tryCatchNoLog(fetchProjects());

    if (error) {
        let errorMessage: string | undefined;
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }
        return <ErrorScreen message={errorMessage} />;
    }

    return (
        <div className="grid-cols-auto-fit flex flex-col gap-8 sm:grid">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
