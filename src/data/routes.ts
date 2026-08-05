/**
 * Route manifest — the single source of truth for which URLs exist.
 *
 * Consumed by `react-router.config.ts` (prerender list) and
 * `scripts/generate-sitemap.ts`. Both run in a plain Node context, so this file
 * must stay import-free — pulling in `services.ts` would drag in image and icon
 * imports that only Vite can resolve.
 *
 * `services.ts` types its `slug` field as `ServiceSlug`, so adding a service
 * without adding its slug here is a compile error.
 */

export const SERVICE_SLUGS = [
  'beverages',
  'psyllium',
  'occ-cardboard',
  'liquidation-pallets',
  'textiles-apparel',
  'footwear-accessories',
  'electronic-waste',
  'aluminum-metals',
  'general-consumer-goods',
  'packaging-materials',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

/** Static routes that belong in the sitemap, in rough priority order. */
export const STATIC_ROUTES = [
  '/',
  '/services',
  '/proof-of-destruction',
  '/faq',
  '/about',
] as const

/** Every URL a search or answer engine should index. */
export const INDEXABLE_ROUTES: string[] = [
  ...STATIC_ROUTES,
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
]

/**
 * Prerendered so they return real HTML, but kept out of the sitemap and marked
 * `noindex`: `/palette-sample` is an internal design tool that duplicates the
 * homepage, and `/404` exists only as Netlify's static 404 document.
 */
export const NOINDEX_ROUTES: string[] = ['/palette-sample', '/404']

/** Full prerender list handed to React Router at build time. */
export const PRERENDER_ROUTES: string[] = [...INDEXABLE_ROUTES, ...NOINDEX_ROUTES]
