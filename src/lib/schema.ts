import { KEY_FACTS, SERVICE_AREA, SITE } from '../data/site'
import { SERVICES, type Service } from '../data/services'

/**
 * JSON-LD builders. Every block is derived from `src/data/site.ts` and
 * `src/data/services.ts` so the structured data can never contradict the copy
 * on the page.
 *
 * The business gets a stable `@id` so other blocks can reference it by node
 * rather than repeating the whole business description.
 */

export const ORGANIZATION_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`

/**
 * The business itself.
 *
 * Note: `address` is locality-level only because APD does not publish a street
 * address. That is valid schema and helps entity recognition, but it does make
 * the page ineligible for Google's LocalBusiness rich result, which requires a
 * full postal address.
 */
export function localBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    // Metros and counties appear here but deliberately not in visible copy —
    // this keeps the local-search signal without putting a city list on the
    // page (see REACH in src/data/site.ts).
    areaServed: [
      ...SERVICE_AREA.states.map((name) => ({ '@type': 'State', name })),
      ...SERVICE_AREA.counties.map((name) => ({ '@type': 'AdministrativeArea', name })),
      ...SERVICE_AREA.metros.map((name) => ({ '@type': 'City', name })),
    ],
    knowsAbout: [
      'product destruction',
      'certificate of destruction',
      'recalled product disposal',
      'beverage destruction',
      'secure product disposal',
      'brand protection',
      'landfill diversion',
    ],
    slogan: SITE.tagline,
    foundingDate: String(new Date().getFullYear() - KEY_FACTS.yearsInBusiness),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: KEY_FACTS.employees,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Product destruction services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE.url}/services/${service.slug}#service`,
          name: service.h1,
          url: `${SITE.url}/services/${service.slug}`,
        },
      })),
    },
  }
}

/** Site-level node, referenced by the homepage. */
export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
  }
}

/** One per service detail page. */
export function serviceSchema(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/services/${service.slug}#service`,
    name: service.h1,
    serviceType: service.title,
    description: service.metaDescription,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_AREA.states.map((name) => ({ '@type': 'State', name })),
    audience: {
      '@type': 'BusinessAudience',
      name: 'Manufacturers, distributors, and retailers',
    },
  }
}

export interface Crumb {
  name: string
  path: string
}

/** Breadcrumbs for every page except the homepage. */
export function breadcrumbSchema(crumbs: Crumb[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  }
}

/** Question/answer pairs, sourced from the same data the page renders. */
export function faqSchema(
  faqs: readonly { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
