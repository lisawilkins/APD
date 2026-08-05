import type { Service } from '../../data/services'
import { TextLink } from './TextLink'

interface ServiceCardProps {
  service: Service
  bg?: string
  fg?: string
  sub?: string
  link?: string
  /**
   * Heading level for the card title. Defaults to `h3` because the homepage
   * renders these inside an `<h2>` section. The /services index has no
   * intervening h2, so it passes `h2` to avoid an h1 → h3 level skip.
   */
  headingLevel?: 'h2' | 'h3'
}

export function ServiceCard({
  service,
  bg = 'var(--apd-surface-panel)',
  fg = 'var(--apd-heading)',
  sub = 'var(--apd-text-muted)',
  link = 'var(--apd-steel-blue)',
  headingLevel: Heading = 'h3',
}: ServiceCardProps) {
  const Icon = service.icon
  return (
    <div style={{ background: bg, color: fg, padding: 'clamp(28px, 3.4vw, 40px)', minHeight: 280, display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 32px)' }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Icon size={26} color={fg} />
        <Heading style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: fg, margin: '18px 0 10px' }}>{service.title}</Heading>
        <p style={{ fontFamily: 'var(--font-prose)', fontSize: 15, lineHeight: 1.6, color: sub, margin: 0 }}>{service.teaser}</p>
        <div style={{ marginTop: 20 }}>
          <TextLink to={`/services/${service.slug}`} color={link}>Learn more</TextLink>
        </div>
      </div>
      <div style={{ flexShrink: 0, width: 'clamp(88px, 12vw, 128px)', height: 'clamp(88px, 12vw, 128px)', overflow: 'hidden' }}>
        {/* Descriptive alt rather than aria-hidden: these thumbnails illustrate
            the service being described, so they carry meaning for screen
            readers and for image search. */}
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          width={128}
          height={128}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </div>
  )
}
