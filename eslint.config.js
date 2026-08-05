import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // `build` is the React Router output; `.react-router` holds generated route
  // types. Neither is hand-written, and both trip rules that don't apply.
  globalIgnores(['dist', 'build', '.react-router']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Route modules in framework mode must export these alongside the
      // component — it's the framework's contract, not a fast-refresh mistake.
      'react-refresh/only-export-components': [
        'warn',
        {
          allowExportNames: [
            'meta',
            'links',
            'headers',
            'loader',
            'action',
            'clientLoader',
            'clientAction',
            'ErrorBoundary',
            'HydrateFallback',
            'Layout',
          ],
        },
      ],
    },
  },
])
