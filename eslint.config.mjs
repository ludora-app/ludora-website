import { FlatCompat } from '@eslint/eslintrc';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  plugins: ['perfectionist'],
});

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...compat.config({
    extends: ['prettier'],

    ignorePatterns: [
      'src/components/chill-ui/email-template/EmailTemplate.tsx',
      'src/components/chill-ui/email-template/Team-emailTemplate.tsx',
    ],

    plugins: ['perfectionist'],

    rules: {
      // Perfectionist
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-interfaces': 'error',
      'perfectionist/sort-objects': ['error', { type: 'alphabetical' }],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': 'error',
    },
  }),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
