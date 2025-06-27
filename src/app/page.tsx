import { Header } from '@/components/Header';
import { Education } from '@/components/portfolio/sections/Education';
import { Hero } from '@/components/portfolio/sections/Hero';
import { Projects } from '@/components/portfolio/sections/Projects';
import { Skills } from '@/components/portfolio/sections/Skills';

export default function Home() {
    return (
        <div className="m-auto w-full max-w-[80rem]">
            <Header />

            <div className="h-[100dvh] w-full">
                <Hero />
            </div>

            <div
                id="skills"
                className="h-[50dvh] max-h-[30rem] min-h-[15rem] w-full p-4 pt-20"
            >
                <Skills />
            </div>

            <div id="projects" className="p-4 pt-20">
                <Projects />
            </div>

            <div
                id="education"
                className="h-[50dvh] min-h-[15rem] w-full p-4 pt-20"
            >
                <Education />
            </div>
        </div>
    );
}
