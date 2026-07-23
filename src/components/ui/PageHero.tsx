import { Container } from './Container'
import { Eyebrow } from './Eyebrow'

interface PageHeroProps {
  eyebrow?: string
  title: string
  intro?: string
  background?: string
  image?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, intro, background = 'var(--apd-steel-blue)', image, imageAlt = '' }: PageHeroProps) {
  const content = (
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
  )

  // No image → solid-color hero (Services index, 404).
  if (!image) {
    return (
      <section style={{ background }} aria-labelledby="page-hero-heading">
        <Container style={{ padding: '96px var(--container-pad) 64px' }}>
          {content}
        </Container>
      </section>
    )
  }

  // With image → full-bleed photo with a scrim, text overlaid (matches home hero).
  return (
    <section style={{ position: 'relative' }} aria-labelledby="page-hero-heading">
      <div className="page-hero-media" style={{ position: 'relative' }}>
        <img
          src={image}
          alt={imageAlt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Scrim — keeps the copy readable over any photo */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,24,30,0.92) 0%, rgba(20,24,30,0.72) 48%, rgba(20,24,30,0.55) 100%)' }} />
        <Container
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          {content}
        </Container>
      </div>
    </section>
  )
}
