import type { Config } from '@react-router/dev/config'
import { PRERENDER_ROUTES } from './src/data/routes'

export default {
  // The app lives in src/ rather than the default app/ directory.
  appDirectory: 'src',
  // No runtime server — every route below is rendered to static HTML at build
  // time so crawlers that don't execute JavaScript (GPTBot, ClaudeBot,
  // PerplexityBot) still receive the full page content.
  ssr: false,
  prerender: PRERENDER_ROUTES,
} satisfies Config
