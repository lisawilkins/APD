import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { CtaBand } from '../components/layout/CtaBand'

const DESCRIPTION = [
  "Every destruction job completed by Arizona Product Destruction is backed by a Certificate of Destruction — a formal record confirming what was destroyed, when, how, and under whose oversight. For manufacturers, this document isn't paperwork for its own sake: it's proof your brand's obligations were met, whether that's satisfying a recall requirement, closing out an insurance claim, meeting regulatory or auditor demands, or simply confirming that product no longer exists to reach a market it shouldn't.",
  "Each certificate details the product type and quantity, date and method of destruction, and, where applicable, batch or lot numbers for traceability. It's paired with supporting documentation, video, photos, or live witness confirmation, so the certificate isn't just a claim but a verifiable record. Because APD performs destruction in-house rather than through a broker, every certificate reflects work our own team completed directly, with no intermediary between your product and its documented end.",
]

export default function ProofOfDestructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Certificate of Destruction"
        intro="Every job closes with a Certificate of Destruction, a formal record of what was destroyed, when, how, and under whose oversight, backed by video, photo, or live witness confirmation."
      />
      <section id="certificate-description">
        <Container style={{ padding: '64px var(--container-pad)' }}>
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
      <CtaBand />
    </>
  )
}
