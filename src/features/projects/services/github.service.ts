import 'server-only';
import axios from 'axios';
import { cacheLife, cacheTag } from 'next/cache';

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
    'use cache';
    cacheLife('max');
    cacheTag(CACHE_TAGS.PROJECTS);

    const [response, fetch_error] = await tryCatch(
        axios.get(PROJECTS_DATA_URL, {
            headers: {
                Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        })
    );

    if (fetch_error) {
        console.error('Error fetching projects:', fetch_error);
        throw new Error(`HTTP error!`);
    }

    const projects = ProjectListSchema.safeParse(response.data);

    if (!projects.success) {
        console.error('Error validating projects data:', projects.error);
        throw new Error('Projects data validation failed');
    }

    return projects.data;
}
