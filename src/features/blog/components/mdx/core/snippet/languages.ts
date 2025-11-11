export const snippetLanguages = ['javascript', 'typescript', 'bash'] as const;

export type SnippetLanguage = (typeof snippetLanguages)[number];
