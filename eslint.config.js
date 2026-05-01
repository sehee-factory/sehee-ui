export default [
  { ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'] },
  {
    files: ['**/*.{js,ts,tsx}'],
    rules: {
      // 1. function declaration 금지
      'func-style': ['error', 'expression'],

      // 2. callback은 무조건 arrow
      'prefer-arrow-callback': ['error'],

      // 3. function 키워드 직접 사용 차단 (강제)
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
  },
];
