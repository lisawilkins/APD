import { Eyebrow } from './Eyebrow'

export function SectionHead({ eyebrow, title, intro, align = 'left' }: {
  eyebrow?: string; title: string; intro?: string; align?: 'left' | 'center'
}) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.6vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.5px', color: 'var(--apd-heading)', margin: '12px 0 0' }}>
        {title}
      </h2>
      {intro && (
        <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'var(--apd-text-muted)', margin: align === 'center' ? '16px auto 0' : '16px 0 0', maxWidth: 600 }}>
          {intro}
        </p>
      )}
    </div>
  )
}
