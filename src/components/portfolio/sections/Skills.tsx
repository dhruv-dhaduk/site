import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { MarqueeSkills } from '@/components/portfolio/MarqueeSkills';

export function Skills() {
    return (
        <div className="flex h-full w-full flex-col justify-center gap-8">
            <SectionHeading title="Skills" />

            <MarqueeSkills />
            <MarqueeSkills direction="reverse" />
        </div>
    );
}
