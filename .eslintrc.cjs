/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Enforces best practices for Vue 3
    '@vue/eslint-config-typescript/recommended', // TypeScript rules
    'plugin:@typescript-eslint/recommended', // Additional TypeScript rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // TypeScript rules that require type checking
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier to show Prettier errors as ESLint errors
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'] // Path to your TypeScript config
  },
  rules: {
    // General Best Practices
    semi: ['error', 'always'], // Ensures semicolons are always added
    'prettier/prettier': [
      'error',
      {
        semi: true // Ensures semicolons are always added in Prettier as well
      }
    ],
    quotes: ['error', 'single'], // Enforce single quotes
    eqeqeq: ['error', 'always'], // Enforce strict equality checks
    curly: ['error', 'all'], // Enforce consistent brace style for all control statements
    'no-eval': 'error', // Disallow the use of eval()
    'no-implied-eval': 'error', // Disallow implied eval() through setTimeout, setInterval, etc.
    'no-console': 'warn', // Warn on console usage
    'no-debugger': 'error', // Disallow debugger statements
    'no-var': 'error', // Disallow var, use let and const instead
    'prefer-const': 'error', // Prefer const over let when variables are not reassigned
    'prefer-arrow-callback': 'error', // Prefer arrow functions as callbacks

    // TypeScript Specific Rules
    '@typescript-eslint/explicit-function-return-type': 'warn', // Enforce explicit return types on functions
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage use of the any type
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Disallow unused variables, but allow unused function arguments if they start with an underscore
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Prefer interfaces over type aliases
    '@typescript-eslint/no-inferrable-types': 'error', // Disallow explicit type declarations for variables that can be inferred
    '@typescript-eslint/strict-boolean-expressions': 'error', // Enforce strict rules for boolean expressions
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Require explicit return and argument types on exported functions and classes

    // Disable specific rule
    '@typescript-eslint/no-unsafe-assignment': 'off', // Disable unsafe assignment of error-typed values

    // Vue Specific Rules
    'vue/no-v-html': 'error', // Disallow use of v-html to prevent XSS attack
    'vue/require-default-prop': 'error', // Require default values for props
    'vue/require-prop-types': 'error', // Enforce prop types
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // Enforce PascalCase for component names
    'vue/no-multiple-template-root': 'off', // Vue 3 allows multiple root nodes in templates
    'vue/no-unused-components': 'warn', // Warn about unused components
    'vue/no-unused-vars': 'warn', // Warn about unused variables in templates
    'vue/html-self-closing': [
      'error',
      {
        // Enforce self-closing style for void elements
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        }
      }
    ],

    // Prettier Integration
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        printWidth: 100
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      },
      rules: {
        // Example: Custom rules specific to .vue files
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'build/', '*.config.js'] // Ignore common directories and config files
};
