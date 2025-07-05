export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    githubLink: string;
    liveLink: string | null;
    downloadLink: string | null;
    npmLink: string | null;
    tags: Array<string>;
}
