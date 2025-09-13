import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
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
            ]
        },
    },
];

export default eslintConfig;
