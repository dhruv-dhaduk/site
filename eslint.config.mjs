import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
    plugins: {
        import: importPlugin,
    },
    rules: {
        'jsx-a11y/alt-text': [
            'warn',
            {
                elements: ['img'],
                img: ['SmartImage', 'Image']
            }
        ],
        'no-restricted-properties': [
            'error',
            {
                object: 'process',
                property: 'env',
                message: 'Use `env` from `@/env` instead of `process.env`.'
            }
        ],
        'import/no-unresolved': ['error', {
            ignore: ['server-only', 'client-only']
        }],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['@/features/*/*'],
                        message: 'Use `$` alias when importing a specific file from a feature.'
                    },
                    {
                        group: ['../*'],
                        message: 'Use `@` import alias instead of relative imports.'
                    }
                ]
            }
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: '$/**',
                        group: 'internal',
                        position: 'after'
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin', 'external'],
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            }
        ],
    },
}, {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
