import { type Blog } from '@/features/blog';

export const blogs: Array<Pick<Blog, 'slug' | 'title' | 'summary'>> = [
    {
        slug: 'types-over-the-wire',
        title: 'Types Over The Wire',
        summary: 'Achieve end to end type safety between frontend and backend.',
    },
];
