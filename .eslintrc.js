module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir : __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: [
      '.eslintrc.js',
      'scripts',
    ],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/naming-convention': 'error',
      '@typescript-eslint/unbound-method': 'error',
      '@typescript-eslint/prefer-for-of': 'error',

      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'one-var': ['error', 'never'],

      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: '"for (... in ...)" is not allowed',
        },
        {
          selector: 'ExportDefaultDeclaration',
          message: '"export default ..." is not allowed',
        },
        {
          selector: 'TsExportAssignment',
          message: '"export = ..." is not allowed',
        },
        {
          selector: 'ExportNamedDeclaration[specifiers.length>0]:not([source])',
          message: '"export { ... }" is not allowed except when re-exporting',
        },
      ],
    },
  };
