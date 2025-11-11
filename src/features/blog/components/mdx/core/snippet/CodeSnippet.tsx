import { codeToHtml } from 'shiki';

import { CopyButton } from './CopyButton';
import { parseLanguageFromClassName } from './utils';
import { LanguageLabel } from './LanguageLabel';

export async function CodeSnippet(props: React.HTMLAttributes<HTMLElement>) {
    const { className, children } = props;

    if (typeof children !== 'string') {
        return <code {...props} />;
    }

    const language = parseLanguageFromClassName(className);

    if (!language) {
        return <code {...props} />;
    }

    const highlightedCode = await codeToHtml(children, {
        lang: language,
        theme: 'github-dark',
        structure: 'inline',
    });

    return (
        <div className="border-site-border-2 my-4 overflow-hidden rounded-lg border bg-black/90 text-white">
            <div className="border-site-border-2 flex items-center justify-between border-b p-4 py-2.5">
                <LanguageLabel language={language} />
                <CopyButton codeToCopy={children} />
            </div>
            <div className="snippet-scrollbar overflow-x-auto bg-[#060606] p-4 text-sm">
                <code
                    className="text-site-fg-1 w-fit py-0.5 font-mono text-sm leading-[22px]"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                ></code>
            </div>
        </div>
    );
}
