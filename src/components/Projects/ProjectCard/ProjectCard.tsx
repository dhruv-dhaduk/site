import { ThumbnailImage } from './ThumbnailImage';
import { DownloadIcon } from '@/assets/icons/Download';
import { GitHubIcon } from '@/assets/icons/GitHub';
import { NpmIcon } from '@/assets/icons/Npm';
import { WebsiteIcon } from '@/assets/icons/Website';
import type { Project } from '@/types/project.types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-site-bg-darker border-site-border flex flex-col gap-3 rounded-lg border p-1">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <ThumbnailImage
                    type={project.thumbnail.type}
                    src={project.thumbnail.url}
                    alt={project.title}
                />
                <p className="font-inter absolute inset-0 m-auto h-fit w-52 text-center text-2xl font-bold">
                    <span className="text-gradient">{project.title}</span>
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
                <p className="text-site-fg-2 pb-4 text-sm leading-relaxed">
                    {project.description}
                </p>
                <p className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-site-fg-6 bg-site-bg-4 border-site-border-3 rounded-full border px-2 py-0.5 text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </p>
                <div className="font-inter flex items-center justify-between gap-2 pt-2">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        aria-label={`${project.title} GitHub Link (opens in a new tab)`}
                        className="text-site-fg-1 bg-site-bg-2 border-site-border-2 hover:border-site-border-4 ml-[3px] flex items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200 hover:ml-0 hover:border-l-4 hover:border-l-white hover:text-white"
                    >
                        <GitHubIcon className="h-5 w-5" />
                        <span className="text-sm font-semibold">
                            GitHub Link
                        </span>
                    </a>

                    <div className="flex flex-wrap gap-2">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                aria-label={`${project.title} Live Link (opens in a new tab)`}
                                className="text-site-fg-1 hover:border-l-decorate-live hover:text-decorate-live bg-site-bg-2 border-site-border-2 hover:border-site-border-4 ml-[3px] flex items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200 hover:ml-0 hover:border-l-4"
                            >
                                <WebsiteIcon className="h-5 w-5" />
                            </a>
                        )}
                        {project.npmLink && (
                            <a
                                href={project.npmLink}
                                target="_blank"
                                aria-label={`${project.title} NPM Link (opens in a new tab)`}
                                className="text-site-fg-1 hover:border-l-brand-npm hover:text-brand-npm bg-site-bg-2 border-site-border-2 hover:border-site-border-4 ml-[3px] flex items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200 hover:ml-0 hover:border-l-4"
                            >
                                <NpmIcon className="h-5 w-5" />
                            </a>
                        )}
                        {project.downloadLink && (
                            <a
                                href={project.downloadLink}
                                target="_blank"
                                aria-label={`${project.title} Download Link (opens in a new tab)`}
                                className="text-site-fg-1 hover:border-l-decorate-download hover:text-decorate-download bg-site-bg-2 border-site-border-2 hover:border-site-border-4 ml-[3px] flex items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200 hover:ml-0 hover:border-l-4"
                            >
                                <DownloadIcon className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
