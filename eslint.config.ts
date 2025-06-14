module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended', // if using React
    'prettier', // Must be last
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: [
    'react-refresh', // if using React
    '@typescript-eslint',
  ],
  rules: {
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',
    
    // General rules
    'no-console': 'warn',
    'prefer-const': 'error',
    
    // React rules (if using React)
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}