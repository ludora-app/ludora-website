import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  plugins: ['perfectionist'],
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
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
];

export default eslintConfig;
