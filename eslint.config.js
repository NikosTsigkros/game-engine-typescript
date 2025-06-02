// eslint.config.js
import parserTs from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';

/** @type {import("eslint").FlatConfig[]} */
export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: parserTs,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': pluginTs,
            prettier: pluginPrettier,
            import: pluginImport,
        },
        rules: {
            'prettier/prettier': ['error', { endOfLine: 'lf' }],
            indent: ['error', 4],
            quotes: [
                'error',
                'single',
                { avoidEscape: true, allowTemplateLiterals: true },
            ],
            semi: ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'import/order': [
                'error',
                {
                    groups: [
                        ['builtin', 'external', 'type'],
                        'internal',
                        ['parent', 'sibling', 'index'],
                        'object',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },
];
