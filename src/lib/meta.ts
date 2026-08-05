import { SITE } from '../data/site'

export interface PageMetaOptions {
  /** Page topic. Gets ` | Arizona Product Destruction` appended unless `exactTitle`. */
  title: string
  /** Unique, 150–160 characters. Never reuse across pages. */
  description: string
  /** Route path with a leading slash, e.g. `/services/beverages`. */
  path: string
  /** Absolute or root-relative share image. Defaults to the sitewide OG image. */
  image?: string
  imageAlt?: string
  /** Use `title` verbatim instead of appending the brand suffix. */
  exactTitle?: boolean
  /** Keep the page out of search indexes (internal tools, the 404 document). */
  noindex?: boolean
}

/**
 * Builds the full meta descriptor list for a route.
 *
 * React Router replaces parent meta with child meta rather than merging, so
 * every route exports a complete set — this helper is what keeps them
 * consistent. Returns title, description, canonical, Open Graph and Twitter
 * tags in one go.
 */
export function buildMeta({
  title,
  description,
  path,
  image = SITE.ogImage,
  imageAlt = SITE.ogImageAlt,
  exactTitle = false,
  noindex = false,
}: PageMetaOptions) {
  const canonical = `${SITE.url}${path === '/' ? '/' : path}`
  const fullTitle = exactTitle ? title : `${title} | ${SITE.name}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE.url}${image}`

  const tags: Record<string, unknown>[] = [
    { title: fullTitle },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: canonical },

    { property: 'og:site_name', content: SITE.name },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: absoluteImage },
    { property: 'og:image:alt', content: imageAlt },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: absoluteImage },
    { name: 'twitter:image:alt', content: imageAlt },
  ]

  if (noindex) {
    tags.push({ name: 'robots', content: 'noindex, nofollow' })
  }

  return tags
}
