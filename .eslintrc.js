/* eslint-disable */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    "webextensions": true
  },
  'extends': 'eslint:recommended',
  'ignorePatterns': ['webpack.*', 'dist/', 'babel.*'],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': ['unused-imports', 'jest'],
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
    ]
  },
  // This lints typescript files differently than js files.
  'overrides': [{
    'files': ["**/*.ts"],
    'extends': [
      'eslint:recommended', "plugin:@typescript-eslint/recommended"
    ],
    'parser': '@typescript-eslint/parser',
    'plugins': ['@typescript-eslint', 'unused-imports', 'jest'],
    'rules': {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // Good in theory, but seems to disables implict function return types
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  }]
}
