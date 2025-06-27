import type { Project } from '@/types/project.types';
import { getRandomGradientImage } from '@/utils/getRandomGradientImage';

/** Data for Projects section. */
export const PROJECTS: Array<Project> = [
    {
        id: crypto.randomUUID(),
        title: 'Tic-Tac-Toe for Terminal',
        description:
            "This is a Tic-Tac-Toe game designed to be played directly in your terminal. It's built using the React showcasing how it can be utilized for this.",
        thumbnail: getRandomGradientImage(),
        githubLink: 'https://github.com/dhruvdhaduk-simform/tic-tac-toe-term',
        liveLink: null,
        techStack: ['TypeScript', 'React'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Spawn React App',
        description:
            'spawn-react-app is an opinionated CLI tool to instantly scaffold modern React projects with best practices and performance-first defaults.',
        thumbnail: getRandomGradientImage(),
        githubLink: 'https://github.com/dhruvdhaduk-simform/spawn-react-app',
        liveLink: 'https://www.npmjs.com/package/spawn-react-app',
        techStack: ['TypeScript', 'NodeJS', 'EJS'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Image Magnifier',
        description:
            'This is a chrome extension which enables users the ability to magnify any image on any page. Users can magnify images by just hovering over them.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/img-magnifier-extension/tree/dev',
        liveLink: null,
        techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Live Stream Demo',
        description:
            "This is a demo about how live streaming works using ffmpeg and HLS. It generates a live stream out of user's webcam and serves it over HLS.",
        thumbnail: getRandomGradientImage(),
        githubLink: 'https://github.com/dhruvdhaduk-simform/live-stream-demo',
        liveLink: null,
        techStack: ['HTML', 'CSS', 'JavaScript', 'FFmpeg'],
    },
    {
        id: crypto.randomUUID(),
        title: 'X Skeleton UI',
        description:
            'This is a project that clones the skeleton UI of the Feed page of X (formerly Twitter). It contains Header, Navbar, Sidebar, Messages and Fedd sections.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/x-skeleton-ui/tree/dev',
        liveLink: 'https://x-skeleton-ui.netlify.app/',
        techStack: ['HTML', 'CSS'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Fair Share',
        description:
            'Fair Share is a TypeScript-powered expense tracker that automatically splits group costs and tracks who owes what, with data saved in localStorage.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/fair-share/tree/dev',
        liveLink: 'https://fair-shaare.vercel.app/',
        techStack: ['HTML', 'CSS', 'TypeScript'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Component Library',
        description:
            'This is the component library built by me. It contains various useful components. The package is easy to use, tree shakable with easy to browse components.',
        thumbnail: getRandomGradientImage(),
        githubLink: 'https://github.com/dhruvdhaduk-simform/componentlib',
        liveLink: 'https://componentlib-nine.vercel.app/',
        techStack: ['TypeScript', 'React', 'Storybook'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Recipe Diary',
        description:
            "RecipeDiary is your personal hub for discovering, saving, and sharing delicious recipes. It's your go-to space to explore home-cooked goodness with ease.",
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/recipe-diary/tree/dev',
        liveLink: 'https://recipe-diary-site.vercel.app/',
        techStack: ['TypeScript', 'React', 'TailwindCSS'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Scientific Calculator',
        description:
            'This is a web-based Scientific Calculator built using vanilla JavaScript. It supports basic arithmatic operations, advanced mathematical functions, calculations.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/scientific-calc/tree/dev',
        liveLink: 'https://scific-calc.netlify.app/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: crypto.randomUUID(),
        title: 'User Management',
        description:
            'This is a simple user management application designed to handle basic CRUD (Create, Read, Update, Delete) operations for user records.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/user-management-ts/tree/dev',
        liveLink: 'https://user-management-ts.netlify.app/',
        techStack: ['HTML', 'CSS', 'TypeScript'],
    },
    {
        id: crypto.randomUUID(),
        title: 'NFT marketplace leaderboard',
        description:
            'A simple HTML & CSS clone of an NFT marketplace leaderboard. This project was part of the first practical assignment given to us, focusing on replicating the UI.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/nft-practical/tree/dev',
        liveLink: 'https://nft-practical.netlify.app/',
        techStack: ['HTML', 'CSS'],
    },
    {
        id: crypto.randomUUID(),
        title: 'Flipkart Skeleton UI',
        description:
            'This is a frontend project that clones the skeleton UI of the Home page of Flipkart using HTML, CSS (Bootstrap) with responsive design.',
        thumbnail: getRandomGradientImage(),
        githubLink:
            'https://github.com/dhruvdhaduk-simform/flipkart-skeleton-ui/tree/dev',
        liveLink: 'https://flip-kart-skeleton-ui.netlify.app/',
        techStack: ['HTML', 'CSS', 'Bootstrap'],
    },
] as const;
