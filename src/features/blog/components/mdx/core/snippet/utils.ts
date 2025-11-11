import type { SnippetLanguage } from './languages';

/**
 * Parses the language from a className string.
 * @param className The className string to parse.
 * @returns The parsed SnippetLanguage or null if not found.
 * e.g., 'language-javascript' => 'javascript'
 */
export function parseLanguageFromClassName(
    className: string | undefined
): SnippetLanguage | null {
    if (!className) {
        return null;
    }

    switch (className) {
        case 'language-javascript':
            return 'javascript';
        case 'language-typescript':
            return 'typescript';
        case 'language-bash':
            return 'bash';
        default:
            return null;
    }
}

/**
 * Returns a human-readable label for a given SnippetLanguage.
 * @param language The SnippetLanguage to get the label for.
 * @returns The human-readable label for the language.
 */
export function getLanguageLabel(language: SnippetLanguage): string {
    switch (language) {
        case 'javascript':
            return 'JavaScript';
        case 'typescript':
            return 'TypeScript';
        case 'bash':
            return 'Bash';
        default:
            const _exhaustiveCheck: never = language;
            return _exhaustiveCheck;
    }
}
