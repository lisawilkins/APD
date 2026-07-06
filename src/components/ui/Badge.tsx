type Tone = 'neutral' | 'blue' | 'green' | 'red' | 'amber'

const TONES: Record<Tone, { soft: [string, string]; solid: [string, string] }> = {
  neutral: { soft: ['#EEF0EC', 'var(--apd-text-muted)'],     solid: ['var(--apd-text-sage)', '#fff'] },
  blue:    { soft: ['var(--apd-blue-subtle)', 'var(--apd-steel-blue)'], solid: ['var(--apd-steel-blue)', '#fff'] },
  green:   { soft: ['var(--apd-green-subtle)', 'var(--apd-olive-green)'], solid: ['var(--apd-olive-green)', '#fff'] },
  red:     { soft: ['var(--apd-red-subtle)', 'var(--apd-clay-red)'],     solid: ['var(--apd-clay-red)', '#fff'] },
  amber:   { soft: ['var(--apd-warning-bg)', 'var(--apd-warning-fg)'],   solid: ['var(--apd-warning-edge)', '#fff'] },
}

interface BadgeProps {
  children: React.ReactNode
  tone?: Tone
  solid?: boolean
  style?: React.CSSProperties
}

export function Badge({ children, tone = 'neutral', solid = false, style = {} }: BadgeProps) {
  const t = TONES[tone]
  const [bg, fg] = solid ? t.solid : t.soft

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.2px',
        lineHeight: 1,
        padding: '5px 10px',
        color: fg,
        background: bg,
        borderRadius: '2px',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
