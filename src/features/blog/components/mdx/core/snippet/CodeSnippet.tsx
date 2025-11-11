import { CopyButton } from './CopyButton';
import { getLanguageLabel, parseLanguageFromClassName } from './utils';

export function CodeSnippet(props: React.HTMLAttributes<HTMLElement>) {
    const { className, children } = props;

    if (typeof children !== 'string') {
        return <code {...props} />;
    }

    const language = parseLanguageFromClassName(className);

    if (!language) {
        return <code {...props} />;
    }

    const languageLabel = getLanguageLabel(language);

    return (
        <div className="border-site-border-2 my-4 rounded-lg border bg-black/90 text-white">
            <div className="border-site-border-2 flex items-center justify-between border-b p-4 py-2">
                <p className="font-bold">{languageLabel}</p>
                <CopyButton codeToCopy={children} />
            </div>
            <div className="snippet-scrollbar overflow-x-auto p-4 text-sm">
                <code className="text-site-fg-1 w-fit bg-black/90 px-1.5 py-0.5 font-mono text-sm">
                    {children}
                </code>
            </div>
        </div>
    );
}
