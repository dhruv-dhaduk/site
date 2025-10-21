import 'server-only';
import axios from 'axios';

import { env } from '@/env';
import { tryCatch } from '@/utils/tryCatch';
import { CACHE_TAGS } from '@/constants/cacheTags';

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
    const [response, fetch_error] = await tryCatch(
        fetch(PROJECTS_DATA_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
            next: {
                tags: [CACHE_TAGS.PROJECTS],
            },
        })
    );

    if (fetch_error || !response.ok) {
        console.error('Error fetching projects:', fetch_error);
        throw new Error(`HTTP error! status: ${response?.status}`);
    }

    const [data, parse_error] = await tryCatch(response.json());

    if (parse_error) {
        console.error('Error parsing JSON:', parse_error);
        throw new Error('Failed to parse JSON response');
    }

    const projects = ProjectListSchema.safeParse(data);

    if (!projects.success) {
        console.error('Error validating projects data:', projects.error);
        throw new Error('Projects data validation failed');
    }

    return projects.data;
}
