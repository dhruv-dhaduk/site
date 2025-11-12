'use client';

import { CodeIcon, GitHubIcon } from '@/assets/icons';

interface CodeSandboxLinkProps {
    title?: string;
    githubPath: {
        owner: string;
        repo: string;
        branch: string;
        filePath?: string;
    };
}

/**
 * CodeSandbox link component
 * @param param0    Props object containing githubPath and optional title
 * @returns JSX.Element representing the CodeSandbox link
 */
export function CodeSandboxLink({ githubPath, title }: CodeSandboxLinkProps) {
    const { owner, repo, branch, filePath = '' } = githubPath;
    const CODESANDBOX_URL = `https://codesandbox.io/p/sandbox/github/${owner}/${repo}/tree/${branch}/${filePath}`;
    const GITHUB_URL = `https://github.com/${owner}/${repo}/tree/${branch}/${filePath}`;

    const titleTrimmed = title?.trim();

    return (
        <a
            href={CODESANDBOX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-site-bg hover:bg-site-bg-darker border-site-border-2 my-6 flex items-center justify-between gap-3 rounded-lg border p-3"
        >
            <div className="flex items-center gap-3">
                <CodeIcon style={{ width: 30, height: 30 }} />
                <div className="flex flex-col">
                    <span className="line-clamp-1 font-bold sm:text-lg">
                        {title}
                    </span>
                    <span
                        className={`line-clamp-1 ${titleTrimmed ? 'text-site-fg-4 text-sm' : 'text-base text-white'}`}
                    >
                        Open in CodeSandbox
                    </span>
                </div>
            </div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    window.open(GITHUB_URL, '_blank');
                }}
                title="Open Repository on GitHub"
                className="text-site-fg-2 cursor-alias hover:text-white"
            >
                <GitHubIcon
                    title="Open Repository on GitHub"
                    style={{ width: 24, height: 24 }}
                />
            </button>
        </a>
    );
}
