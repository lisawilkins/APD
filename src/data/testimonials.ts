export interface Testimonial {
  /** Pull-quote text — required. */
  quote: string
  jobTitle?: string
  firstName?: string
  lastName?: string
  company?: string
}

function nonEmpty(value?: string): string | null {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

/** Display name as "First Name, Last Initial." when name parts are provided. */
export function formatTestimonialName(firstName?: string, lastName?: string): string | null {
  const first = nonEmpty(firstName)
  const last = nonEmpty(lastName)

  if (first && last) {
    return `${first}, ${last.charAt(0).toUpperCase()}.`
  }
  if (first) return first
  if (last) return `${last.charAt(0).toUpperCase()}.`
  return null
}

/** Meta line: Name, Title · Company — omits missing parts and stray punctuation. */
export function formatTestimonialMeta({ firstName, lastName, jobTitle, company }: Testimonial): string | null {
  const name = formatTestimonialName(firstName, lastName)
  const title = nonEmpty(jobTitle)
  const org = nonEmpty(company)

  let attribution: string | null = null

  if (name && title) attribution = `${name}, ${title}`
  else if (name) attribution = name
  else if (title) attribution = title

  if (org) {
    return attribution ? `${attribution} · ${org}` : org
  }

  return attribution
}

/** Up to 9 entries. Add or edit quotes here. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Finding a reliable, trusted partner for recycling and destruction in the Southwest is extremely difficult, fortunately we came across AZPD years ago and haven’t looked back”',
    jobTitle: 'Chief Operations Officer, Managing Partner',
    firstName: 'Brian',
    lastName: 'U.',
    company: 'Duffy Trading Company',
  },
  {
    quote: 'I called Arizona Product Destruction last minute after canceling with another company that dropped the ball, Beth was able to get our products picked up and destroyed the same day!',
    firstName: 'Evelyn',
    lastName: 'Jimenez',
  },
  {
    quote: 'We have been using Arizona Product Destruction for years, they understand our business and value us as a customer.',
    jobTitle: '',
    firstName: 'Debrah',
    lastName: 'Peters',
    company: '',
  },
  {
    quote: 'Partnering with Arizona Product Destruction was a win win, Mark and Beth are able to take care of  any of our recycling and product destruction needs, Highly recommend.',
    jobTitle: '',
    firstName: 'Mark',
    lastName: 'Lao',
    company: '',
  },
  {
    quote: 'This is placeholder copy: After years of using brokers, switching to APD was a no-brainer. Lower cost, faster communication, and proof we could actually verify.',
    jobTitle: 'Warehouse Manager',
    firstName: 'James',
    lastName: 'Torres',
  },
  {
    quote: 'This is placeholder copy: Their zero-sewer commitment for beverage destruction was the deciding factor for us. APD understands what regulators and brand owners both care about.',
    jobTitle: 'Environmental Compliance Officer',
    firstName: 'Emily',
    lastName: 'Park',
    company: 'Southwest Distributor',
  },
]
