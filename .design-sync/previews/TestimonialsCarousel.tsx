import { TestimonialsCarousel } from 'apd-ui'

// Curated real quotes (placeholder entries from the data file are omitted so the
// card shows production-representative content).
const SAMPLE = [
  {
    quote:
      'Finding a reliable, trusted partner for recycling and destruction in the Southwest is extremely difficult, fortunately we came across AZPD years ago and haven’t looked back.',
    jobTitle: 'Chief Operations Officer, Managing Partner',
    firstName: 'Brian',
    lastName: 'U.',
    company: 'Duffy Trading Company',
  },
  {
    quote:
      'I called Arizona Product Destruction last minute after canceling with another company that dropped the ball, Beth was able to get our products picked up and destroyed the same day!',
    firstName: 'Evelyn',
    lastName: 'Jimenez',
  },
  {
    quote:
      'We have been using Arizona Product Destruction for years, they understand our business and value us as a customer.',
    firstName: 'Debrah',
    lastName: 'Peters',
  },
]

export function DefaultTestimonials() {
  return <TestimonialsCarousel testimonials={SAMPLE} />
}
