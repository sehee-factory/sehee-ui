import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  { ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'] },
  {
    files: ['**/*.{js,ts,tsx}'],
    rules: {
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error'],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead.',
        },
        {
          selector: 'FunctionExpression',
          message: 'Use arrow functions instead.',
        },
      ],
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
];
