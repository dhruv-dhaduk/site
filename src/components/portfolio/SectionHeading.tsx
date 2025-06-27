/** Returns a heading with some styles for page heading */
export function SectionHeading({ title }: { title: string }) {
    return <p className="text-3xl font-bold md:text-4xl">{title}</p>;
}
