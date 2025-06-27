import type { Project } from '@/types/project.types';

interface ProjectCardProp {
    project: Project;
}

/**
 * Renders a Project Card from a single Project data provided.
 */
export function ProjectCard({ project }: ProjectCardProp) {
    return (
        <div className="border-gray flex flex-col gap-3 rounded-xl border p-3">
            <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                    src={project.thumbnail}
                    className="h-full w-full"
                    alt={project.title}
                />
                <p className="absolute inset-0 m-auto h-fit w-52 text-center text-3xl font-bold">
                    {project.title}
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
                <p className="text-xl font-bold">{project.title}</p>
                <p className="pb-4 text-sm">{project.description}</p>
                <p className="mt-auto flex gap-2 text-sm font-semibold text-blue-500">
                    {project.techStack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </p>
                <div className="flex gap-2 pt-2">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        aria-label={`${project.title} GitHub Link (opens in a new tab)`}
                        className="border-gray flex items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:border-white"
                    >
                        <img
                            src="/logos/github.svg"
                            alt="GitHub Logo"
                            className="w-5"
                        />
                        <span className="text-sm font-semibold">
                            GitHub Link
                        </span>
                    </a>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            aria-label={`${project.title} Live Link (opens in a new tab)`}
                            className="border-gray flex items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:border-white"
                        >
                            <img
                                src="/logos/link.svg"
                                alt="Link Logo"
                                className="w-5"
                            />
                            <span className="text-sm font-semibold">
                                Live Link
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
