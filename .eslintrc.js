// NOTE: how to apply eslint on intellij https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000225170-ESLint-and-ts-Typescript-files
module.exports = {
  plugins: ['@typescript-eslint', 'babel'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    semi: 'off',
    'babel/semi': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
  },
  extends: [
    '@nuxtjs',
  ]
}
