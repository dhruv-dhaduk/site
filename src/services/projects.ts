import { ProjectListSchema } from '@/schema/projects';
import type { Project } from '@/types/project';

const PROJECTS_DATA_URL =
    'https://api.github.com/repos/dhruv-dhaduk/vault/contents/projects/projects.json';

export async function fetchProjects(): Promise<Array<Project>> {
    try {
        const response = await fetch(PROJECTS_DATA_URL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const projects = ProjectListSchema.parse(data);
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}
