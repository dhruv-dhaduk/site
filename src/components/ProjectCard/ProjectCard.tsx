import { DownloadIcon } from '@/assets/icons/Download';
import { GitHubIcon } from '@/assets/icons/GitHub';
import { NpmIcon } from '@/assets/icons/Npm';
import { WebsiteIcon } from '@/assets/icons/Website';
import type { Project } from '@/types/project';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-[#1F1F1F] bg-[#030303] p-1">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                    src={project.thumbnail}
                    className="h-full w-full"
                    alt={project.title}
                />
                <p className="font-inter absolute inset-0 m-auto h-fit w-52 text-center text-2xl font-bold text-[#F5F5F5]">
                    <span className="bg-gradient-to-b from-[#ffffffff] via-[#ffffffc8] to-[#ffffff4b] bg-clip-text text-transparent">
                        {project.title}
                    </span>
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-2 pt-0">
                <p className="pb-4 text-sm leading-relaxed text-[#C2C2C2]">
                    {project.description}
                </p>
                <p className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[#333333] bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#999999]"
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
                        className="ml-[3px] flex items-center justify-center gap-2 rounded-md border border-[#2A2A2A] bg-[#101010] px-4 py-2 text-[#E0E0E0] transition-colors duration-200 hover:ml-0 hover:border-l-4 hover:border-[#3A3A3A] hover:border-l-[#9CA3AF] hover:text-white"
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
                                className="ml-[3px] flex items-center justify-center gap-2 rounded-md border border-[#2A2A2A] bg-[#101010] px-4 py-2 text-[#E0E0E0] transition-colors duration-200 hover:ml-0 hover:border-l-4 hover:border-[#3A3A3A] hover:border-l-emerald-500 hover:text-emerald-500"
                            >
                                <WebsiteIcon className="h-5 w-5" />
                            </a>
                        )}
                        {project.npmLink && (
                            <a
                                href={project.npmLink}
                                target="_blank"
                                aria-label={`${project.title} NPM Link (opens in a new tab)`}
                                className="ml-[3px] flex items-center justify-center gap-2 rounded-md border border-[#2A2A2A] bg-[#101010] px-4 py-2 text-[#E0E0E0] transition-colors duration-200 hover:ml-0 hover:border-l-4 hover:border-[#3A3A3A] hover:border-l-[#D40001] hover:text-[#D40001]"
                            >
                                <NpmIcon className="h-5 w-5" />
                            </a>
                        )}
                        {project.downloadLink && (
                            <a
                                href={project.downloadLink}
                                target="_blank"
                                aria-label={`${project.title} Download Link (opens in a new tab)`}
                                className="ml-[3px] flex items-center justify-center gap-2 rounded-md border border-[#2A2A2A] bg-[#101010] px-4 py-2 text-[#E0E0E0] transition-colors duration-200 hover:ml-0 hover:border-l-4 hover:border-[#3A3A3A] hover:border-l-[#6ca8d3] hover:text-[#6ca8d3]"
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
