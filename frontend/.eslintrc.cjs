// ESLint configuration for a React project

module.exports = {
  // Specify that this configuration is intended for a browser environment and ECMAScript 2020
  root: true,
  env: { browser: true, es2020: true },

  // Extend ESLint configurations, including recommended configurations for React and React Hooks
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  // Ignore specific patterns or directories (dist and .eslintrc.cjs in this case)
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Specify parser options, ECMAScript version, and module source type
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  // Settings for React, including the version being used
  settings: { react: { version: '18.2' } },

  // Plugins used in the configuration, including 'react-refresh'
  plugins: ['react-refresh'],

  // Rules configuration, customizing linting rules
  rules: {
    // Specify a custom rule from 'react-refresh' plugin
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
