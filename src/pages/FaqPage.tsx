import { PageHero } from '../components/ui/PageHero'
import { FaqSection } from '../components/ui/FaqSection'
import SchemaScript from '../components/ui/SchemaScript'
import { CtaBand } from '../components/layout/CtaBand'
import { GENERAL_FAQS } from '../data/faqs'
import { breadcrumbSchema } from '../lib/schema'
import { buildMeta } from '../lib/meta'

export function meta() {
  return buildMeta({
    title: 'Product Destruction FAQ',
    description:
      'Answers on product destruction in Phoenix, AZ — how direct destruction differs from a broker, what proof you receive, what it costs, and what happens to material afterwards.',
    path: '/faq',
  })
}

/**
 * The canonical home for the general question set.
 *
 * The homepage shows four of these as a teaser and deliberately omits the
 * FAQPage schema, so this page is the single structured-data source for them.
 * Service-specific questions stay on their own service pages.
 */
export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Product Destruction Questions, Answered"
        intro="The questions manufacturers, distributors and compliance teams ask us most often — about proof, cost, recalls, and what happens to material after it leaves your floor."
      />

      <FaqSection
        id="faq"
        faqs={GENERAL_FAQS}
        eyebrow="Common questions"
        title="Everything people ask before their first load"
      />

      <CtaBand
        heading="Still have a question?"
        intro="Ask us directly. We contact every lead and reply to new inquiries within 24 hours."
      />

      <SchemaScript schema={breadcrumbSchema([{ name: 'FAQ', path: '/faq' }])} />
    </>
  )
}
