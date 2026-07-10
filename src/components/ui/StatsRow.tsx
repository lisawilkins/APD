import { useEffect, useMemo, useRef, useState } from 'react'

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

const STAGGER_MS = 300
const COUNT_UP_MS = 1000

interface ParsedStat {
  prefix: string
  suffix: string
  target: number
  hasComma: boolean
}

/** Splits a stat string like "+80%" or "26,000" into its numeric target plus surrounding text. */
function parseStatValue(value: string): ParsedStat | null {
  const match = value.match(/^([^\d]*)([\d,]+)([^\d]*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  return { prefix, suffix, hasComma: digits.includes(','), target: parseInt(digits.replace(/,/g, ''), 10) }
}

function formatStatValue(n: number, { prefix, suffix, hasComma }: ParsedStat) {
  return `${prefix}${hasComma ? n.toLocaleString('en-US') : String(n)}${suffix}`
}

function AnimatedStatValue({ value, delay, isDark }: { value: string; delay: number; isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const parsed = useMemo(() => parseStatValue(value), [value])
  const [display, setDisplay] = useState(() => (parsed ? formatStatValue(0, parsed) : value))

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout>
    let rafId: number
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (prefersReducedMotion) {
          setDisplay(value)
          return
        }

        timeoutId = setTimeout(() => {
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / COUNT_UP_MS, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(formatStatValue(Math.round(parsed.target * eased), parsed))
            if (progress < 1) rafId = requestAnimationFrame(tick)
          }
          rafId = requestAnimationFrame(tick)
        }, delay)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
      cancelAnimationFrame(rafId)
    }
  }, [value, delay, parsed])

  return (
    <div
      ref={ref}
      style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.05, color: isDark ? '#fff' : 'var(--apd-olive-green)' }}
    >
      {display}
    </div>
  )
}

/**
 * Shared big-number stat row used on dark bands (e.g. stats bar) and light
 * sections (e.g. sustainability). Keeps typography, spacing and divider
 * treatment consistent everywhere it's used — only the color theme changes.
 *
 * Each number counts up from 0 the first time it scrolls into view, with
 * each subsequent item in the row starting 300ms after the previous one.
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
      {stats.map((s, i) => (
        <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <AnimatedStatValue value={s.v} delay={i * STAGGER_MS} isDark={isDark} />
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 18, color: isDark ? '#DDECFC' : 'var(--apd-text-muted)', opacity: isDark ? 0.75 : 1, marginTop: 8, lineHeight: 1.25, letterSpacing: '0.25px' }}>
            {s.l}
          </div>
        </div>
      ))}
    </div>
  )
}
