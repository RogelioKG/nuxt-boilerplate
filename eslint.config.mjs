import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['**/*.{vue,js,mjs,cjs,ts}'],
    ignores: ['.nuxt', '.output', 'node_modules', 'dist'],
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-console': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'space-before-function-paren': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
])
