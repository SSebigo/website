// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      'max-len': ['error', { code: 120, ignoreUrls: true }],
    },
  },
)
