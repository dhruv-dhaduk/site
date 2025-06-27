/**
 * Interface representing a single Project.
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    /** URL of the thumbnail of the project.  */
    thumbnail: string;
    githubLink: string;
    /**
     * Live Deployed link of the project.
     * Can be 'null' because the project might not be a website.
     */
    liveLink: string | null;
    techStack: Array<string>;
}
