/**
 * Writes sitemap.xml into the built output.
 *
 * Runs as the last step of `npm run build`, after `react-router build` has
 * populated build/client. Reads the same route manifest that drives the
 * prerender list, so the sitemap and the deployed pages cannot drift apart.
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { INDEXABLE_ROUTES } from '../src/data/routes.ts'

const SITE_URL = 'https://azproductdestruction.com'
const OUT_DIR = join(import.meta.dirname, '..', 'build', 'client')

/** Homepage first, then section indexes, then service detail pages. */
function priorityFor(path: string): string {
  if (path === '/') return '1.0'
  if (path === '/services') return '0.9'
  if (path.startsWith('/services/')) return '0.8'
  return '0.7'
}

const lastmod = new Date().toISOString().slice(0, 10)

const urls = INDEXABLE_ROUTES.map((path) => {
  const loc = `${SITE_URL}${path === '/' ? '/' : path}`
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <priority>${priorityFor(path)}</priority>`,
    '  </url>',
  ].join('\n')
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(OUT_DIR, 'sitemap.xml'), xml, 'utf8')
console.log(`sitemap.xml written with ${INDEXABLE_ROUTES.length} URLs`)
