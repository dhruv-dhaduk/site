import { BlogCard } from './BlogCard';

export function BlogList() {
    return (
        <div className="flex flex-col gap-5">
            <BlogCard
                title="Types Over The Wire"
                summary="Achieve end to end type safety between frontend and backend."
                date="October 27, 2025"
                tags={['TypeScript', 'API', 'Frontend', 'Backend']}
            />
            <BlogCard
                title="Understanding Closures in JavaScript"
                summary="A deep dive into closures, their inner workings, and practical applications in JavaScript."
                date="Fabuary 20, 2024"
                tags={['JavaScript', 'Programming']}
            />

            <BlogCard
                title="An Introduction to Neural Networks"
                summary="Covering the basics of neural networks, including architecture and learning algorithms."
                date="January 15, 2024"
                tags={['Machine Learning', 'AI']}
            />

            <BlogCard
                title="Building a RESTful API with Node.js"
                summary="A guide to creating a RESTful API using Node.js and Express."
                date="December 5, 2023"
                tags={[
                    'Web Development',
                    'Node.js',
                    'API',
                    'Express',
                    'Backend',
                    'Programming',
                    'JavaScript',
                    'Tech',
                    'Tutorial',
                    'Guide',
                    'Development',
                ]}
            />
        </div>
    );
}
