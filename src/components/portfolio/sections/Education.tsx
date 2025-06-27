import { EDUCATION } from '@/data/education';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import styles from '@/styles/education.module.css';

export function Education() {
    return (
        <div className="flex h-full w-full flex-col justify-center gap-8">
            <SectionHeading title="Education" />

            <ul className="flex flex-col gap-8 pl-10">
                {EDUCATION.map((edu) => (
                    <li
                        key={edu.course}
                        className={`flex flex-col gap-2 ${styles.li}`}
                    >
                        <span className="text-xl font-bold">{edu.course}</span>
                        <span>
                            {edu.institute}, {edu.city}
                        </span>
                        <span className="text-sm">
                            {edu.from} - {edu.to}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
