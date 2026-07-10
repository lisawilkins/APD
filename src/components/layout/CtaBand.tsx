import { CheckIcon } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { ContactForm } from '../ui/ContactForm'

const DEFAULT_BULLETS = [
  'Direct contact — no broker in the middle',
  'Reply within 24 hours',
  'Proof of destruction included',
]

interface CtaBandProps {
  heading?: string
  intro?: string
  bullets?: string[]
}

export function CtaBand({
  heading = 'Ready to destroy it right?',
  intro = "Talk to APD directly. We contact every lead and reply to new inquiries within 24 hours.",
  bullets = DEFAULT_BULLETS,
}: CtaBandProps) {
  return (
    <section id="cta-band" style={{ background: 'var(--apd-olive-green)' }} aria-labelledby="cta-heading">
      <Container style={{ padding: '72px var(--container-pad)' }}>
        <div className="cta-form-grid">

          {/* Left — headline + contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 id="cta-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 40px)', color: '#fff', margin: 0, lineHeight: 1.1 }}>
              {heading}
            </h2>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 18, color: 'rgba(255,255,255,0.9)', margin: '16px 0 0', maxWidth: 400 }}>
              {intro}
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bullets.map((t) => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <CheckIcon size={17} color="rgba(255,255,255,0.7)" weight="bold" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: 'var(--font-prose)', fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: '28px 0 0' }}>
              South Phoenix, AZ · info@azproductdestruction.com
            </p>
          </div>

          {/* Right — contact form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  )
}
