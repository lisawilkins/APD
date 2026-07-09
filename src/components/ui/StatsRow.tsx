export interface Stat {
  v: string
  l: string
}

interface StatsRowProps {
  stats: Stat[]
  /** 'dark' for dark/colored backgrounds (white numbers), 'light' for light backgrounds (brand-olive numbers) */
  variant?: 'dark' | 'light'
  /** Extra left/right padding on the grid itself, on top of the surrounding Container's padding */
  paddingX?: number | string
}

/**
 * Shared big-number stat row used on dark bands (e.g. stats bar) and light
 * sections (e.g. sustainability). Keeps typography, spacing and divider
 * treatment consistent everywhere it's used — only the color theme changes.
 */
export function StatsRow({ stats, variant = 'dark', paddingX = 40 }: StatsRowProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className="stats-grid"
      style={{
        '--stat-divider': isDark ? '#315B88' : 'var(--apd-border)',
        paddingLeft: paddingX,
        paddingRight: paddingX,
      } as React.CSSProperties}
    >
      {stats.map((s) => (
        <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.05, color: isDark ? '#fff' : 'var(--apd-olive-green)' }}>
            {s.v}
          </div>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 18, color: isDark ? '#DDECFC' : 'var(--apd-text-muted)', opacity: isDark ? 0.75 : 1, marginTop: 8, lineHeight: 1.25, letterSpacing: '0.25px' }}>
            {s.l}
          </div>
        </div>
      ))}
    </div>
  )
}
