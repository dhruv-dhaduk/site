interface ExternalLinkProps {
    href: string;
    imgURL: string;
    label: string;
    borderGradient: string;
    borderGradientHover: string;
}

/** Returns an External link with specified gradient stylings. */
export function ExternalLink({
    href,
    imgURL,
    label,
    borderGradient,
    borderGradientHover,
}: ExternalLinkProps) {
    return (
        <a
            href={href}
            className={`bg-gradient-to-r p-0.5 ${borderGradient} min-w-40 rounded-lg md:min-w-48`}
            target="_blank"
            role="button"
            aria-label={`${label} (opens in a new tab)`}
        >
            <span
                className={`bg-black hover:bg-gradient-to-r ${borderGradientHover} flex items-center justify-center gap-2 rounded-lg p-2 px-6 text-sm text-nowrap md:p-3 md:px-8 md:text-base`}
            >
                <img className="w-4 md:w-5" src={imgURL} alt={label} /> {label}
            </span>
        </a>
    );
}
