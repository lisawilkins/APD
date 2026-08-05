import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { FaqSection } from '../components/ui/FaqSection'
import SchemaScript from '../components/ui/SchemaScript'
import { CtaBand } from '../components/layout/CtaBand'
import { breadcrumbSchema } from '../lib/schema'
import { buildMeta } from '../lib/meta'
import type { Faq } from '../data/faqs'

export function meta() {
  return buildMeta({
    title: 'Certificate of Destruction',
    description:
      'Every APD job closes with a Certificate of Destruction recording what was destroyed, when and how — backed by video, photos, or live viewing at our Phoenix warehouse.',
    path: '/proof-of-destruction',
  })
}

const DESCRIPTION = [
  "Every destruction job completed by Arizona Product Destruction is backed by a Certificate of Destruction — a formal record confirming what was destroyed, when, how, and under whose oversight. For manufacturers, this document isn't paperwork for its own sake: it's proof your brand's obligations were met, whether that's satisfying a recall requirement, closing out an insurance claim, meeting regulatory or auditor demands, or simply confirming that product no longer exists to reach a market it shouldn't.",
  "Each certificate details the product type and quantity, date and method of destruction, and, where applicable, batch or lot numbers for traceability. It's paired with supporting documentation, video, photos, or live witness confirmation, so the certificate isn't just a claim but a verifiable record. Because APD performs destruction in-house rather than through a broker, every certificate reflects work our own team completed directly, with no intermediary between your product and its documented end.",
]

const PROOF_FAQS: Faq[] = [
  {
    question: 'What is a Certificate of Destruction?',
    answer:
      'A formal record confirming what was destroyed, when, how, and under whose oversight. It documents product type and quantity, date and method of destruction, disposition, and batch or lot numbers where traceability is required. APD issues one for every load.',
  },
  {
    question: 'Is a Certificate of Destruction legally binding?',
    answer:
      'It is a formal business record rather than a legal instrument, but it is the document auditors, insurers and regulators typically ask for. Because APD destroys product in-house, every certificate reflects work our own team completed — there is no intermediary attesting to something they did not do.',
  },
  {
    question: 'How soon do I receive documentation?',
    answer:
      'Documentation is issued once the load has been processed. For recall work, where speed matters most, getting product off your floor and paperwork back to you quickly is treated as the priority rather than a follow-up task.',
  },
  {
    question: 'Can our auditor witness the destruction?',
    answer:
      'Yes. Live on-site viewing at our Phoenix warehouse is available on request, and is often what compliance teams choose when an auditor or brand representative needs to confirm destruction firsthand.',
  },
  {
    question: 'Do you provide batch and lot traceability?',
    answer:
      'Yes, where applicable. Batch and lot numbers are recorded on the certificate, which matters most for supplement, beverage and pharmaceutical-adjacent clients working under recall or regulatory disposal requirements.',
  },
]

const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(24px, 3vw, 32px)',
  lineHeight: 1.15,
  letterSpacing: '-0.5px',
  color: 'var(--apd-heading)',
  margin: '0 0 24px',
} as const

export default function ProofOfDestructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Certificate of Destruction"
        intro="Every job closes with a Certificate of Destruction, a formal record of what was destroyed, when, how, and under whose oversight, backed by video, photo, or live witness confirmation."
      />

      <section id="certificate-description" aria-labelledby="certificate-description-heading">
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <h2 id="certificate-description-heading" style={headingStyle}>
            What the certificate covers
          </h2>
          {DESCRIPTION.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-prose)',
                fontSize: 17,
                lineHeight: 1.7,
                color: 'var(--apd-body)',
                maxWidth: 760,
                margin: i === 0 ? 0 : '16px 0 0',
              }}
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <FaqSection
        id="proof-faq"
        faqs={PROOF_FAQS}
        eyebrow="FAQ"
        title="Proof of destruction questions"
      />

      <CtaBand />

      <SchemaScript
        schema={breadcrumbSchema([{ name: 'Certificate of Destruction', path: '/proof-of-destruction' }])}
      />
    </>
  )
}
