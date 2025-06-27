import { SKILLS } from '@/data/skills';
import marqueeStyles from '@/styles/marquee.module.css';

interface MarqueeSkillsProp {
    direction?: 'forward' | 'reverse';
}

/** Shows the Skills using the Marquee Effect. */
export function MarqueeSkills({ direction = 'forward' }: MarqueeSkillsProp) {
    return (
        <div
            className={`flex w-full overflow-hidden ${direction === 'reverse' ? marqueeStyles['marquee-reverse'] : marqueeStyles.marquee}`}
        >
            <MarqueeHalfList />
            <MarqueeHalfList />
        </div>
    );
}

function MarqueeHalfList() {
    return (
        <div className="flex min-w-full shrink-0 gap-10 px-5">
            {SKILLS.map((skill) => (
                <a
                    href={skill.url}
                    target="_blank"
                    className="h-16 w-16 md:h-20 md:w-20"
                    tabIndex={-1}
                    key={skill.name}
                    aria-label={`${skill.name} (opens in a new tab)`}
                >
                    <img
                        className="h-full w-full object-contain"
                        src={skill.logo}
                        alt={skill.name}
                    />
                </a>
            ))}
        </div>
    );
}
