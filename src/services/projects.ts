import { ProjectListSchema } from '@/schema/projects';
import type { Project } from '@/types/project';

const PROJECTS_DATA_URL =
    'https://raw.githubusercontent.com/dhruv-dhaduk/vault/refs/heads/main/projects/projects.json';

export async function fetchProjects(): Promise<Array<Project>> {
    console.log('fetchProjects called');
    try {
        const response = await fetch(PROJECTS_DATA_URL, {
            next: { revalidate: false },
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
