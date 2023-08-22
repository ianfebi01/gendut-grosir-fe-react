module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 'key-spacing': ['error', { align: 'colon' }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    // 'jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-console': 'error',
    // 'max-len': ['warn', { code: 80 }],
  },
}
