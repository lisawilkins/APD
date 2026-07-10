import { Container } from './Container'
import { Eyebrow } from './Eyebrow'

interface PageHeroProps {
  eyebrow?: string
  title: string
  intro?: string
  background?: string
}

export function PageHero({ eyebrow, title, intro, background = 'var(--apd-steel-blue)' }: PageHeroProps) {
  return (
    <section style={{ background }} aria-labelledby="page-hero-heading">
      <Container style={{ padding: '96px var(--container-pad) 64px' }}>
        <div style={{ maxWidth: 680 }}>
          {eyebrow && <Eyebrow color="rgba(255,255,255,0.75)">{eyebrow}</Eyebrow>}
          <h1
            id="page-hero-heading"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.8vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.5px', color: '#fff', margin: '12px 0 0' }}
          >
            {title}
          </h1>
          {intro && (
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: '16px 0 0', maxWidth: 560 }}>
              {intro}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
