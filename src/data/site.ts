/**
 * Canonical business facts — name, address, phone, and the claims we want
 * search and answer engines to attribute to APD.
 *
 * Single source of truth for the footer, CTA band, page metadata and every
 * JSON-LD block. Change a fact here and it propagates everywhere.
 */

export const SITE = {
  name: 'Arizona Product Destruction',
  shortName: 'APD',
  /** No `www.` — canonical host. Netlify redirects the www variant here. */
  url: 'https://azproductdestruction.com',
  /** E.164 for schema and `tel:` links. */
  phone: '+19285545137',
  phoneDisplay: '(928) 554-5137',
  email: 'info@azproductdestruction.com',
  /**
   * City and region only. APD does not publish a street address, so the
   * LocalBusiness schema carries locality-level `PostalAddress` plus
   * `areaServed` rather than a full postal address.
   */
  locality: 'Phoenix',
  region: 'AZ',
  regionName: 'Arizona',
  country: 'US',
  geoDescription: 'Phoenix, AZ',
  tagline: 'Protecting your brand through sustainability.',
  description:
    "Direct product destruction in Phoenix, Arizona. Not a broker — APD destroys recalled, expired, damaged, and discontinued product in its own warehouses and documents every load with a Certificate of Destruction.",
  /** Default social share image (1200×630), served from public/. */
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Arizona Product Destruction facility in Phoenix, Arizona',
} as const

/**
 * How reach is described in visible copy.
 *
 * Deliberately expresses span rather than listing cities: naming metros in body
 * copy reads as a list of places clients come from, which isn't the message.
 * The metro list below still feeds `areaServed` in the LocalBusiness schema, so
 * the local-search signal is kept without putting a city list on the page.
 */
export const REACH = {
  statewide:
    'We serve local customers throughout the Phoenix valley and manufacturers statewide — from Page to Tucson, from Yuma to Flagstaff.',
  national: 'Trusted processing and shipping partners expand our reach throughout the lower 48.',
} as const

/**
 * Metro areas and states APD serves.
 *
 * `metros` is now schema-only — see REACH above for visible copy.
 */
export const SERVICE_AREA = {
  metros: [
    'Phoenix',
    'Mesa',
    'Tempe',
    'Chandler',
    'Scottsdale',
    'Glendale',
    'Gilbert',
    'Peoria',
    'Surprise',
    'Tucson',
    'Flagstaff',
  ],
  counties: ['Maricopa County', 'Pima County', 'Pinal County'],
  states: ['Arizona', 'California', 'Utah', 'Nevada', 'New Mexico', 'Texas'],
} as const

/**
 * Quantified, verifiable claims. These are the sentences answer engines quote,
 * so they live in one place and are reused verbatim in copy and in schema.
 */
export const KEY_FACTS = {
  yearsInBusiness: 23,
  employees: 40,
  warehouses: 2,
  beverageMarketShare: "roughly 80% of Arizona's beverage market",
  cocaColaCertified: 'the only Coca-Cola certified destruction company in Arizona',
  womanOwned: 'SBA-certified Woman-Owned Small Business',
  /**
   * Calendar-year diversion totals, confirmed by APD. Update the year label
   * alongside the number — these also appear in the homepage sustainability
   * band and on the OCC, packaging, e-waste and aluminum service pages.
   */
  diversionYear: 2025,
  occTonsRecycled: '26,000',
  metalTonsDiverted: '800+',
  wasteToEnergyLoads: '+180',
  downstreamSecondUse: '72%',
} as const
