import 'server-only';
import axios from 'axios';

import { env } from '@/env';

import {
    ProjectListSchema,
    type Project,
} from '$/projects/schemas/project.schema';

const PROJECTS_DATA_URL = `${env.GITHUB_VAULT_URL}/contents/projects/projects.json`;

/**
 * Fetches the list of projects from the GitHub repository.
 * The data is expected to be in JSON format and will be validated against the ProjectListSchema.
 * @returns A promise that resolves to an array of Project objects.
 * @throws Will throw an error  if the fetch operation fails or if the data does not match the expected schema.
 */
export async function fetchProjects(): Promise<Array<Project>> {
    try {
        // Fetch the projects data from the GitHub repository
        const response = await axios.get(PROJECTS_DATA_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        });

        // Validate the fetched data against the ProjectListSchema and return it
        return ProjectListSchema.parse(response.data);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}
