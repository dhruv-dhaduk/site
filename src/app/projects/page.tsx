import {
    ProjectListLoading,
    ProjectList,
} from '@/components/Projects/ProjectList';
import { Suspense } from 'react';

export const revalidate = false;

export default async function Projects() {
    return (
        <main className="font-plex flex flex-col gap-12 px-6 py-16">
            <h1 className="font-inter flex items-end gap-4 overflow-visible text-4xl font-bold sm:text-[44px]">
                <span className="text-gradient">{`Things I've Built`}</span>
            </h1>
            <Suspense fallback={<ProjectListLoading />}>
                <ProjectList />
            </Suspense>
        </main>
    );
}
