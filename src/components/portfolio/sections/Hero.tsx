import { GRADIENTS } from '@/constants/gradients';
import { ExternalLink } from '@/components/ui/ExternalLink';

/** Home Page of the site. Contains title, description, External Links. */
export function Hero() {
    return (
        <div className="relative flex h-full w-full flex-col justify-center p-4">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                <p>{`Hi, I'm`}</p>
                <p
                    className={`bg-gradient-to-r text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${GRADIENTS[0].normal} inline-block bg-clip-text text-transparent`}
                    role="heading"
                >
                    Dhruv Dhaduk
                </p>
                <p className="line-clamp-[20] text-sm md:text-base">
                    {`I'm a frontend developer who enjoys building fast,
                    responsive web apps using React and modern JavaScript
                    frameworks. I focus on creating clean, interactive UIs with
                    a strong emphasis on performance, accessibility, and user
                    experience. I'm passionate about writing modular,
                    maintainable code and constantly exploring new tools and
                    techniques in the frontend ecosystem. Whether it's building
                    intuitive interfaces, optimizing workflows, or refining
                    component architecture, I love solving real problems through
                    code. I'm always learning, experimenting, and pushing my
                    skills forward.`}
                </p>
            </div>

            <div className="absolute bottom-16 flex flex-wrap items-center justify-start gap-2 md:gap-4">
                <ExternalLink
                    href="mailto:dhadukd44@gmail.com"
                    imgURL="/logos/mail.svg"
                    label="Send an email"
                    borderGradient={GRADIENTS[1].normal}
                    borderGradientHover={GRADIENTS[1].hover}
                />
                <ExternalLink
                    href="https://in.linkedin.com/in/dhruvdhaduk"
                    imgURL="/logos/linkedin.svg"
                    label="LinkedIn"
                    borderGradient={GRADIENTS[2].normal}
                    borderGradientHover={GRADIENTS[2].hover}
                />
                <ExternalLink
                    href="https://github.com/dhruv-dhaduk"
                    imgURL="/logos/github.svg"
                    label="GitHub"
                    borderGradient={GRADIENTS[3].normal}
                    borderGradientHover={GRADIENTS[3].hover}
                />
            </div>
        </div>
    );
}
