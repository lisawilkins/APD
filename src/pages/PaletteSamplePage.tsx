import { useState } from 'react'
import {
  CupSoda, PackageX, Recycle, ClipboardList, Hammer,
  BadgeCheck as BadgeCheckIcon, Check, ArrowRight, Image as ImageIcon,
  Quote, Leaf, ShieldCheck, Video, Camera, Eye,
} from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────
type PaletteKey = 'original' | 'eco' | 'desert'
type CssVarMap = Record<string, string>

// ── Palette token overrides ──────────────────────────────────────────────────
const PALETTES: Record<PaletteKey, CssVarMap> = {
  original: {
    '--apd-steel-blue':   '#3B5A85',
    '--apd-olive-green':  '#5A6C3A',
    '--apd-clay-red':     '#B4402E',
    '--apd-blue-mid':     '#748292',
    '--apd-blue-subtle':  '#EDF1F6',
    '--apd-blue-deep':    '#2A3869',
    '--apd-blue-bright':  '#2862A9',
    '--apd-green-mid':    '#B6BFB0',
    '--apd-green-subtle': '#F8F7EF',
    '--apd-green-bright': '#789E47',
    '--apd-green-deep':   '#364427',
    '--apd-red-mid':      '#D39C92',
    '--apd-red-subtle':   '#FAEBE8',
    '--apd-ink':          '#0A0A0A',
    '--apd-body':         '#2B2F24',
    '--apd-heading':      '#2E3822',
    '--apd-text-muted':   '#4A5565',
    '--apd-text-sage':    '#6B7864',
    '--apd-eyebrow':      '#7A8A5F',
    '--apd-border':       '#E5E7EB',
    '--apd-border-strong':'#D4D8CF',
    '--apd-surface-panel':'#F7F8F5',
    '--apd-warm-paper':   '#F8F7EF',
    '--apd-hero-scrim':   'linear-gradient(90deg, rgba(20,24,30,0.92) 0%, rgba(20,24,30,0.6) 48%, rgba(20,24,30,0.2) 100%)',
    '--color-primary-hover': '#324E73',
    '--color-accent-hover':  '#9A3526',
  },
  eco: {
    '--apd-steel-blue':   '#4F8295',
    '--apd-olive-green':  '#6E9568',
    '--apd-clay-red':     '#C98A4A',
    '--apd-blue-mid':     '#8AA0A8',
    '--apd-blue-subtle':  '#EAF2F3',
    '--apd-blue-deep':    '#2F5662',
    '--apd-blue-bright':  '#4F8295',
    '--apd-green-mid':    '#B7CBAE',
    '--apd-green-subtle': '#F1F5EE',
    '--apd-green-bright': '#7FA86B',
    '--apd-green-deep':   '#3A4E33',
    '--apd-red-mid':      '#DBB48C',
    '--apd-red-subtle':   '#F8EFE2',
    '--apd-ink':          '#1C2A28',
    '--apd-body':         '#2C322B',
    '--apd-heading':      '#2B3A2F',
    '--apd-text-muted':   '#4E5C5A',
    '--apd-text-sage':    '#6E7E76',
    '--apd-eyebrow':      '#6E9568',
    '--apd-border':       '#E6ECE6',
    '--apd-border-strong':'#D2DCD1',
    '--apd-surface-panel':'#F2F6F1',
    '--apd-warm-paper':   '#F1F6F0',
    '--apd-hero-scrim':   'linear-gradient(90deg, rgba(33,72,80,0.86) 0%, rgba(45,90,98,0.52) 48%, rgba(79,130,149,0.12) 100%)',
    '--color-primary-hover': '#426F80',
    '--color-accent-hover':  '#B0763B',
  },
  desert: {
    '--apd-steel-blue':   '#15A8A0',
    '--apd-olive-green':  '#0E8B82',
    '--apd-clay-red':     '#ED6B1E',
    '--apd-blue-mid':     '#6FA8A2',
    '--apd-blue-subtle':  '#E6F4F2',
    '--apd-blue-deep':    '#2C1D12',
    '--apd-blue-bright':  '#15A8A0',
    '--apd-green-mid':    '#45CDBF',
    '--apd-green-subtle': '#F4EEE2',
    '--apd-green-bright': '#1FAEA2',
    '--apd-green-deep':   '#0C5F59',
    '--apd-red-mid':      '#E8A77D',
    '--apd-red-subtle':   '#FBEDE2',
    '--apd-ink':          '#1E140C',
    '--apd-body':         '#2E2218',
    '--apd-heading':      '#332415',
    '--apd-text-muted':   '#6A5A48',
    '--apd-text-sage':    '#897662',
    '--apd-eyebrow':      '#BA5E1A',
    '--apd-border':       '#E9DEC9',
    '--apd-border-strong':'#DACAAE',
    '--apd-surface-panel':'#F6EFE0',
    '--apd-warm-paper':   '#F6EEDF',
    '--apd-hero-scrim':   'linear-gradient(90deg, rgba(30,20,12,0.92) 0%, rgba(40,26,16,0.6) 48%, rgba(44,29,18,0.2) 100%)',
    '--color-primary-hover': '#0F8A83',
    '--color-accent-hover':  '#CE571A',
  },
}

// Base DS tokens (non-palette; constant across all themes)
const BASE_VARS: CssVarMap = {
  '--font-display': '"Archivo", system-ui, sans-serif',
  '--font-heading': '"Inter", system-ui, sans-serif',
  '--font-body':    '"Archivo", system-ui, sans-serif',
  '--font-prose':   '"Merriweather", Georgia, serif',
  '--font-ui':      '"Inter", system-ui, sans-serif',
  '--font-logo':    '"Archivo", sans-serif',
  '--container-max': '1200px',
  '--container-pad': '24px',
  '--shadow-xs': '0px 1px 2px -1px rgba(0,0,0,0.1)',
  '--shadow-sm': '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)',
  '--shadow-md': '0px 4px 8px -2px rgba(0,0,0,0.10), 0px 2px 4px -2px rgba(0,0,0,0.06)',
  '--shadow-lg': '0px 12px 24px -6px rgba(0,0,0,0.12), 0px 4px 8px -4px rgba(0,0,0,0.08)',
  '--radius-sm':   '4px',
  '--radius-md':   '8px',
  '--radius-lg':   '10px',
  '--radius-xl':   '16px',
  '--radius-pill': '999px',
  '--apd-surface':     '#FFFFFF',
  '--apd-surface-app': '#F9FAFB',
  '--apd-highlight-bg': '#FEF7DC',
  '--apd-highlight-fg': '#5A6C3A',
  '--apd-info-bg': '#E8EFF7',
  '--apd-info-fg': '#2C4563',
  '--apd-success-bg': '#E8F0E4',
  '--apd-success-fg': '#3A4C28',
  '--apd-warning-bg':   '#FFF4E6',
  '--apd-warning-fg':   '#8F5C1E',
  '--apd-warning-edge': '#D78A2E',
  '--apd-error-bg': '#FAEBE8',
  '--apd-error-fg': '#8A3922',
}

// ── Lucide icon map ──────────────────────────────────────────────────────────
const ICON_MAP = {
  'cup-soda':       CupSoda,
  'package-x':      PackageX,
  'recycle':        Recycle,
  'clipboard-list': ClipboardList,
  'hammer':         Hammer,
  'badge-check':    BadgeCheckIcon,
  'check':          Check,
  'arrow-right':    ArrowRight,
  'image':          ImageIcon,
  'quote':          Quote,
  'leaf':           Leaf,
  'shield-check':   ShieldCheck,
  'video':          Video,
  'camera':         Camera,
  'eye':            Eye,
} as const

type IconName = keyof typeof ICON_MAP

function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 1.75 }: {
  name: IconName
  size?: number
  color?: string
  strokeWidth?: number
}) {
  const Comp = ICON_MAP[name]
  return <Comp size={size} color={color} strokeWidth={strokeWidth} style={{ display: 'inline-block', flexShrink: 0 }} />
}

// ── Primitive DS components ──────────────────────────────────────────────────
function Eyebrow({ children, color = 'var(--apd-eyebrow)' }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '1.3px',
      color,
    }}>
      {children}
    </span>
  )
}

function BadgePill({ children, tone = 'neutral', solid = false }: {
  children: React.ReactNode
  tone?: 'neutral' | 'red' | 'green' | 'blue'
  solid?: boolean
}) {
  const tones = {
    neutral: { soft: ['#EEF0EC', 'var(--apd-text-muted)'] as const, solid: ['var(--apd-text-sage)', '#fff'] as const },
    red:     { soft: ['var(--apd-red-subtle)', 'var(--apd-clay-red)'] as const, solid: ['var(--apd-clay-red)', '#fff'] as const },
    green:   { soft: ['var(--apd-green-subtle)', 'var(--apd-olive-green)'] as const, solid: ['var(--apd-olive-green)', '#fff'] as const },
    blue:    { soft: ['var(--apd-blue-subtle)', 'var(--apd-steel-blue)'] as const, solid: ['var(--apd-steel-blue)', '#fff'] as const },
  }
  const t = tones[tone]
  const [bg, fg] = solid ? t.solid : t.soft
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12,
      letterSpacing: '0.2px', lineHeight: 1, padding: '5px 10px',
      color: fg, background: bg, borderRadius: '2px',
    }}>
      {children}
    </span>
  )
}

function Btn({ children, variant = 'primary', size = 'md', style: xStyle = {} }: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
}) {
  const [hovered, setHovered] = useState(false)
  const sizes = {
    sm: { padding: '8px 14px',  fontSize: 14, height: 36 },
    md: { padding: '10px 20px', fontSize: 16, height: 44 },
    lg: { padding: '14px 28px', fontSize: 18, height: 54 },
  }
  const variants = {
    primary:   { bg: 'var(--apd-steel-blue)',  hover: 'var(--color-primary-hover)', fg: '#fff', bd: 'transparent' },
    secondary: { bg: 'var(--apd-olive-green)', hover: 'var(--color-primary-hover)', fg: '#fff', bd: 'transparent' },
    accent:    { bg: 'var(--apd-clay-red)',     hover: 'var(--color-accent-hover)',  fg: '#fff', bd: 'transparent' },
    outline:   { bg: 'transparent', hover: 'var(--apd-blue-subtle)', fg: 'var(--apd-steel-blue)', bd: 'var(--apd-steel-blue)' },
  }
  const s = sizes[size]
  const v = variants[variant]
  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: s.fontSize,
        lineHeight: 1.5, padding: s.padding, minHeight: s.height,
        color: v.fg, background: hovered ? v.hover : v.bg,
        border: `1.5px solid ${v.bd}`,
        borderRadius: 0, cursor: 'pointer', whiteSpace: 'nowrap',
        transition: 'background 150ms ease-out',
        ...xStyle,
      }}
    >
      {children}
    </button>
  )
}

function NavLink({ label, active = false }: { label: string; active?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const on = active || hovered
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600,
        padding: '8px 9px', whiteSpace: 'nowrap', cursor: 'pointer',
        color: on ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
        borderBottom: active ? '2px solid var(--apd-steel-blue)' : hovered ? '2px solid var(--apd-steel-blue)' : '2px solid transparent',
        transition: 'color 150ms ease-out, border-color 150ms ease-out',
      }}
    >
      {label}
    </span>
  )
}

function TextLink({ children, color = 'var(--apd-steel-blue)' }: { children: React.ReactNode; color?: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        color, fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600,
        cursor: 'pointer',
        borderBottom: `1.5px solid ${hovered ? color : 'transparent'}`,
        paddingBottom: 2,
        transition: 'border-color 150ms ease-out',
      }}
    >
      <span>{children}</span>
      <span style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 150ms ease-out', display: 'inline-flex' }}>
        <Icon name="arrow-right" size={15} color={color} strokeWidth={2} />
      </span>
    </span>
  )
}

function FooterLink({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#fff' : 'rgba(255,255,255,0.8)',
        fontSize: 14, fontFamily: 'var(--font-prose)',
        cursor: 'pointer',
        transition: 'color 150ms ease-out',
      }}
    >
      {children}
    </span>
  )
}

function Container({ children, style: xStyle = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', ...xStyle }}>
      {children}
    </div>
  )
}

function SectionHead({ eyebrow, title, intro, align = 'left' }: {
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

function Photo({ label, tone = 'steel', style: xStyle = {}, src, scrim = false }: {
  label: string; tone?: 'steel' | 'blue' | 'olive' | 'slate' | 'sand' | 'paper'
  style?: React.CSSProperties; src?: string; scrim?: boolean
}) {
  const tones = {
    steel: { bg: '#26344A', fg: 'rgba(255,255,255,0.7)' },
    blue:  { bg: 'var(--apd-blue-deep)', fg: 'rgba(255,255,255,0.7)' },
    olive: { bg: '#3C4A2A', fg: 'rgba(255,255,255,0.72)' },
    slate: { bg: '#2B2F36', fg: 'rgba(255,255,255,0.66)' },
    sand:  { bg: '#C9C3B4', fg: 'rgba(40,44,34,0.6)' },
    paper: { bg: '#D8D9D2', fg: 'rgba(40,44,34,0.55)' },
  }
  const t = tones[tone]
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 180, overflow: 'hidden', background: t.bg, display: 'flex', alignItems: 'flex-end', ...xStyle }}>
      {src && (
        <img src={src} alt={label} style={{ position: 'absolute', inset: 0 as unknown as number, width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
      {!src && (
        <div style={{ position: 'absolute', inset: 0 as unknown as number, backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 22px)' }} />
      )}
      {src && scrim && (
        <div style={{ position: 'absolute', inset: 0 as unknown as number, background: t.bg, opacity: 0.4 }} />
      )}
      {!src && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', color: t.fg, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.4px' }}>
          <Icon name="image" size={15} color={t.fg} strokeWidth={2} />
          <span>{label}</span>
        </div>
      )}
    </div>
  )
}

// ── Content data ─────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: 'cup-soda' as IconName,   title: 'Beverage Destruction',  desc: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market." },
  { icon: 'package-x' as IconName,  title: 'Liquidation Pallets',   desc: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.' },
  { icon: 'recycle' as IconName,    title: 'OCC & Packaging',       desc: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.' },
]

const MATERIALS = ['Beverages', 'OCC / Cardboard', 'Liquidation Pallets', 'Textiles & Apparel', 'Footwear & Accessories', 'Electronic Waste', 'Aluminum & Metals', 'General Consumer Goods', 'Packaging Materials', 'Psyllium']

// ── Page sections ─────────────────────────────────────────────────────────────
function SampleHeader() {
  const navLinks = ['Home', 'About', 'Services', 'Cert of Destruction', 'Sustainability', 'Giving Back']
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid var(--apd-border)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--container-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img src="/palette-sample/logo-apd.svg" alt="Arizona Product Destruction" style={{ height: 40, width: 'auto', display: 'block' }} />
          <span style={{ display: 'inline-block', paddingLeft: 28, borderLeft: '1px solid var(--apd-border)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500, color: 'var(--apd-text-sage)', letterSpacing: '0.2px', maxWidth: 220, lineHeight: 1.3 }}>
            Protecting your brand<br />through sustainability
          </span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navLinks.map((label, i) => (
            <NavLink key={label} label={label} active={i === 0} />
          ))}
          <div style={{ marginLeft: 14 }}>
            <Btn variant="primary" size="sm">Request a quote</Btn>
          </div>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section style={{ position: 'relative' }}>
      <div style={{ height: 520, position: 'relative' }}>
        <Photo label="South Phoenix warehouse — destruction floor" tone="slate" />
        <img
          src="/palette-sample/hero-building.jpg"
          alt=""
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'right center', opacity: 0.5,
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.7) 70%, #000 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.7) 70%, #000 100%)',
          } as React.CSSProperties}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--apd-hero-scrim, linear-gradient(90deg, rgba(20,24,30,0.92) 0%, rgba(20,24,30,0.6) 48%, rgba(20,24,30,0.2) 100%))',
        }} />
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: 620 }}>
            <BadgePill tone="red" solid>Not a broker</BadgePill>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5.4vw, 60px)', lineHeight: 1.02, letterSpacing: '-1px', color: '#fff', margin: '16px 0 0' }}>
              Protecting your brand<br />through sustainability.
            </h1>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '18px 0 0', maxWidth: 500 }}>
              We're a full service product destruction and waste management company based in Phoenix, AZ. Direct contact, lower cost &amp; verifiable proof.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <Btn variant="primary" size="lg">Get a quote</Btn>
              <Btn variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>Explore services</Btn>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

function StatementSection() {
  return (
    <section style={{ padding: '84px var(--container-pad)', textAlign: 'center', background: 'var(--apd-surface)' }}>
      <p style={{ margin: '0 auto', maxWidth: 760, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.9vw, 32px)', lineHeight: 1.32, letterSpacing: '-0.4px', color: 'var(--apd-heading)' } as React.CSSProperties}>
        From beverages to supplements to home goods — when product must be destroyed securely, APD is your destruction solution.
      </p>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { v: '~80%',    l: "of Arizona's beverage destruction market" },
    { v: '72%+',    l: 'downstream second use, not landfill' },
    { v: '40',      l: 'employees across 2 warehouses' },
    { v: '20+ yrs', l: 'of service from our core team' },
  ]
  const certs = [
    { icon: 'badge-check' as IconName, t: 'Coca-Cola Certified — the only certified destruction company for Coca-Cola in Arizona' },
    { icon: 'shield-check' as IconName, t: 'SBA Certified Woman-Owned Business' },
  ]
  return (
    <section style={{ background: 'var(--apd-blue-deep)' }}>
      <Container style={{ padding: '48px var(--container-pad)' }}>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.5px', color: '#fff' }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, color: 'rgba(255,255,255,0.72)', marginTop: 8, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
        <Container style={{ padding: '18px var(--container-pad)' }}>
          <div className="certs-row">
            {certs.map((c) => (
              <div key={c.t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name={c.icon} size={18} color="var(--apd-green-mid)" strokeWidth={2} />
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.86)' }}>{c.t}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

function WhyAPD() {
  const bullets = [
    'No middlemen — you work directly with APD',
    'A single point of contact for all your waste needs',
    'Integrity, confidentiality, efficiency',
  ]
  return (
    <section className="why-grid">
      <div style={{ background: 'var(--apd-steel-blue)', color: '#fff', padding: '72px clamp(28px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow color="rgba(255,255,255,0.7)">Why APD</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.5px', color: '#fff', margin: '12px 0 0' }}>
          We do it ourselves.<br />That's the whole point.
        </h2>
        <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: '16px 0 0', maxWidth: 460 }}>
          Most destruction companies are brokers — they take your product and hand it to someone else, adding markup and removing visibility. We destroy it in our own Phoenix warehouses. Direct contact, lower cost, verifiable proof.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
          {bullets.map((t) => (
            <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="check" size={20} color="var(--apd-green-mid)" strokeWidth={2.5} />
              <span style={{ fontFamily: 'var(--font-prose)', fontSize: 16, lineHeight: 1.5, color: '#fff' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ minHeight: 460 }}>
        <Photo label="Baled product, ready for processing" tone="steel" src="/palette-sample/baled-cardboard.jpg" />
      </div>
    </section>
  )
}

function ServicesSection() {
  const cols = [
    { ...SERVICES[0], bg: 'var(--apd-surface-panel)', fg: 'var(--apd-heading)', sub: 'var(--apd-text-muted)', link: 'var(--apd-steel-blue)' },
    { ...SERVICES[1], bg: 'var(--apd-ink)',            fg: '#fff',               sub: 'rgba(255,255,255,0.74)', link: '#fff' },
    { ...SERVICES[2], bg: 'var(--apd-steel-blue)',     fg: '#fff',               sub: 'rgba(255,255,255,0.82)', link: '#fff' },
  ]
  return (
    <section>
      <Container style={{ padding: '72px var(--container-pad) 36px' }}>
        <SectionHead
          align="center"
          eyebrow="Services"
          title="One processor for every kind of product"
          intro="We destroy and recover material across ten categories — leading with destruction, backed by certified documentation."
        />
      </Container>
      <div className="services-grid">
        {cols.map((s) => (
          <div key={s.title} style={{ background: s.bg, color: s.fg, padding: '48px clamp(24px, 3vw, 40px)', minHeight: 280, display: 'flex', flexDirection: 'column' }}>
            <Icon name={s.icon} size={26} color={s.fg} strokeWidth={1.75} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: s.fg, margin: '18px 0 10px' }}>{s.title}</h3>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 15, lineHeight: 1.6, color: s.sub, margin: 0, flex: 1 }}>{s.desc}</p>
            <div style={{ marginTop: 20 }}>
              <TextLink color={s.link}>Learn more</TextLink>
            </div>
          </div>
        ))}
      </div>
      <Container style={{ padding: '36px var(--container-pad) 8px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {MATERIALS.map((m) => (
            <span key={m} style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: 'var(--apd-body)', border: '1px solid var(--apd-border-strong)', padding: '8px 14px' }}>
              {m}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

function PhotoStrip() {
  return (
    <section className="photo-mosaic-grid" style={{ marginTop: 36 }}>
      <Photo label="Intake & sorting"      tone="olive" src="/palette-sample/warehouse-wide.jpg" scrim />
      <Photo label="Forklift loading dock" tone="sand"  src="/palette-sample/forklift.jpg"        scrim />
      <Photo label="Secure transport fleet" tone="slate" src="/palette-sample/transport-fleet.jpg" scrim />
    </section>
  )
}

function CertSection() {
  const proofOpts = [
    { icon: 'video'  as IconName, t: 'Video proof' },
    { icon: 'camera' as IconName, t: 'Photo documentation' },
    { icon: 'eye'    as IconName, t: 'Live in-person viewing' },
  ]
  return (
    <section style={{ background: 'var(--apd-ink)', color: '#fff' }}>
      <Container style={{ padding: '64px var(--container-pad)' }}>
        <div className="cert-grid">
          <div>
            <Eyebrow color="var(--apd-green-mid)">Certificate of Destruction</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 34px)', color: '#fff', margin: '12px 0 0', lineHeight: 1.12 }}>
              Proof you can show your stakeholders
            </h2>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', margin: '14px 0 0', maxWidth: 460 }}>
              Every job closes with a certified record that your product was destroyed — customizable with your SKU numbers, batch numbers and the fields your team requires.
            </p>
            <div style={{ marginTop: 22 }}>
              <TextLink color="#fff">About our Certificate of Destruction</TextLink>
            </div>
          </div>
          <div className="proof-grid" style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.14)' }}>
            {proofOpts.map((p) => (
              <div key={p.t} style={{ background: 'var(--apd-ink)', padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Icon name={p.icon} size={48} color="var(--apd-green-mid)" />
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: '#fff', marginTop: 12, lineHeight: 1.35 }}>{p.t}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function SustainabilitySection() {
  const stats = [
    { v: '72%+',        l: 'downstream second use' },
    { v: '0%',          l: 'product to the public sewer' },
    { v: '26,000 tons', l: 'OCC recycled in 2025' },
    { v: '800+ tons',   l: 'metals diverted in 2025' },
  ]
  return (
    <section>
      <Container style={{ padding: '72px var(--container-pad) 40px' }}>
        <SectionHead
          align="center"
          eyebrow="Sustainability"
          title="Destroyed, not just dumped"
          intro="Where we can, we recover materials and find downstream second-uses — keeping product out of landfill and giving you a cleaner story to tell."
        />
        <div className="sustainability-grid">
          {stats.map((s) => (
            <div key={s.l} style={{ padding: '28px clamp(18px, 2.2vw, 28px)', background: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, color: 'var(--apd-olive-green)' }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--apd-text-muted)', marginTop: 8, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--apd-text-sage)', textAlign: 'center', marginTop: 16 }}>
          193 tons of shrink wrap recovered · 180+ loads to waste-to-energy · hundreds of tons of food-grade product to animal-feed programs.
        </p>
      </Container>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section style={{ background: 'var(--apd-surface-panel)' }}>
      <Container style={{ padding: '72px var(--container-pad)', textAlign: 'center' }}>
        <Icon name="quote" size={30} color="var(--apd-clay-red)" />
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 30px)', lineHeight: 1.34, letterSpacing: '-0.3px', color: 'var(--apd-heading)', margin: '20px auto 0', maxWidth: 760 }}>
          "Placeholder testimonial — a client pull-quote about working with APD directly will go here once final copy is approved."
        </p>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--apd-text-muted)', marginTop: 20 }}>
          — Client name, Title · Company <span style={{ color: 'var(--apd-text-sage)', fontWeight: 500 }}>(placeholder)</span>
        </div>
      </Container>
    </section>
  )
}

function CTABand() {
  return (
    <section style={{ background: 'var(--apd-olive-green)' }}>
      <Container style={{ padding: '60px var(--container-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', color: '#fff', margin: 0, lineHeight: 1.1 }}>
            Ready to destroy it right?
          </h2>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 18, color: 'rgba(255,255,255,0.9)', margin: '12px 0 0', maxWidth: 540 }}>
            Talk to APD directly. We contact every lead — and reply to new inquiries within 24 hours.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'rgba(255,255,255,0.82)', margin: '14px 0 0' }}>
            South Phoenix, AZ <span style={{ opacity: 0.6 }}>(address TBD)</span> · info@azproductdestruction.com <span style={{ opacity: 0.6 }}>(TBD)</span>
          </p>
        </div>
        <Btn variant="accent" size="lg">Get a quote</Btn>
      </Container>
    </section>
  )
}

function SampleFooter() {
  function FooterCol({ title, items }: { title: string; items: string[] }) {
    return (
      <div>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.3px', color: 'var(--apd-green-mid)', marginBottom: 14 }}>
          {title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it) => (
            <FooterLink key={it}>{it}</FooterLink>
          ))}
        </div>
      </div>
    )
  }
  return (
    <footer style={{ background: 'var(--apd-blue-deep)', color: '#fff' }}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '22px var(--container-pad)', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Icon name="leaf" size={20} color="var(--apd-green-mid)" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff' }}>
            Protecting your brand through sustainability.
          </span>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px var(--container-pad) 28px' }}>
        <div className="footer-grid">
          <div>
            <div style={{ background: '#fff', display: 'inline-block', padding: '10px 12px' }}>
              <img src="/palette-sample/logo-apd.svg" alt="Arizona Product Destruction" style={{ height: 38, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', maxWidth: 280, marginTop: 18 }}>
              Light-industrial product destruction in Phoenix, AZ. We don't broker it out — we destroy your product ourselves, and prove it.
            </p>
          </div>
          <FooterCol title="Services" items={['Beverages', 'OCC / Cardboard', 'Liquidation Pallets', 'Aluminum & Metals', 'Packaging Materials']} />
          <FooterCol title="Company" items={['About APD', 'Certificate of Destruction', 'Sustainability', 'Giving Back']} />
          <FooterCol title="Contact" items={['South Phoenix, AZ (address TBD)', 'Serving AZ · CA · UT · NV · NM · TX + lower-48', 'info@azproductdestruction.com (TBD)']} />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 40, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-ui)' }}>
          <span>© 2026 Arizona Product Destruction. All rights reserved.</span>
          <span>SBA-Certified Woman-Owned Business · 20+ years</span>
        </div>
      </div>
    </footer>
  )
}

// ── Palette switcher (fixed bottom chrome) ────────────────────────────────────
const PALETTE_OPTIONS: { key: PaletteKey; name: string; swatches: [string, string, string] }[] = [
  { key: 'original', name: 'Industrial Earth', swatches: ['#3B5A85', '#5A6C3A', '#B4402E'] },
  { key: 'eco',      name: 'Soft Eco',         swatches: ['#4F8295', '#6E9568', '#C98A4A'] },
  { key: 'desert',   name: 'Sonoran Desert',   swatches: ['#15A8A0', '#ED6B1E', '#2C1D12'] },
]

function PaletteSwitcher({ current, onChange }: { current: PaletteKey; onChange: (k: PaletteKey) => void }) {
  return (
    <div
      role="group"
      aria-label="Color palette options"
      style={{
        position: 'fixed', left: '50%', bottom: 22, transform: 'translateX(-50%)',
        zIndex: 9999, display: 'flex', alignItems: 'stretch',
        background: '#ffffff', border: '1px solid #D4D8CF',
        boxShadow: '0 8px 30px rgba(10,12,10,0.16), 0 2px 8px rgba(10,12,10,0.10)',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px 18px', borderRight: '1px solid #E5E7EB', background: '#F7F8F5' }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#7A8A5F' }}>Palette</span>
        <span style={{ fontSize: 11, color: '#6B7864', marginTop: 2, whiteSpace: 'nowrap' }}>Pick an option to preview</span>
      </div>
      <div style={{ display: 'flex' }}>
        {PALETTE_OPTIONS.map((opt, i) => {
          const active = current === opt.key
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange(opt.key)}
              style={{
                appearance: 'none',
                border: 0,
                borderRight: i < PALETTE_OPTIONS.length - 1 ? '1px solid #E5E7EB' : 0,
                background: active ? '#EDF1F6' : '#fff',
                cursor: 'pointer',
                padding: '9px 16px 8px',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6,
                fontFamily: 'inherit',
                transition: 'background 150ms ease-out',
              }}
            >
              <span style={{ display: 'flex', gap: 3 }}>
                {opt.swatches.map((s) => (
                  <span key={s} style={{ width: 16, height: 16, display: 'block', background: s }} />
                ))}
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: active ? '#2A3869' : '#2B2F24', letterSpacing: '-0.1px' }}>
                {opt.name}
              </span>
              <span style={{ height: 3, width: '100%', marginTop: 1, background: active ? '#3B5A85' : 'transparent' }} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Page export ───────────────────────────────────────────────────────────────
export default function PaletteSamplePage() {
  const [palette, setPalette] = useState<PaletteKey>('original')

  const vars = { ...BASE_VARS, ...PALETTES[palette] } as React.CSSProperties

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--apd-surface)',
      color: 'var(--apd-body)',
      fontFamily: 'var(--font-body)',
      WebkitFontSmoothing: 'antialiased',
      paddingBottom: 100,
      ...vars,
    }}>
      <SampleHeader />
      <main>
        <HeroSection />
        <StatementSection />
        <StatsBar />
        <WhyAPD />
        <ServicesSection />
        <PhotoStrip />
        <CertSection />
        <SustainabilitySection />
        <TestimonialSection />
        <CTABand />
      </main>
      <SampleFooter />
      <PaletteSwitcher current={palette} onChange={setPalette} />
    </div>
  )
}
