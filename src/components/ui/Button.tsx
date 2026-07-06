import { useState } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const SIZES: Record<Size, { padding: string; fontSize: number; height: number }> = {
  sm: { padding: '8px 14px',  fontSize: 14, height: 36 },
  md: { padding: '10px 20px', fontSize: 16, height: 44 },
  lg: { padding: '14px 28px', fontSize: 18, height: 54 },
}

const PALETTE: Record<Variant, { bg: string; fg: string; bd: string; hover: string }> = {
  primary:     { bg: 'var(--apd-steel-blue)',  fg: '#fff', bd: 'transparent', hover: 'var(--color-primary-hover)' },
  secondary:   { bg: 'var(--apd-olive-green)', fg: '#fff', bd: 'transparent', hover: '#4A5A30' },
  accent:      { bg: 'var(--apd-clay-red)',     fg: '#fff', bd: 'transparent', hover: 'var(--color-accent-hover)' },
  destructive: { bg: 'var(--apd-clay-red)',     fg: '#fff', bd: 'transparent', hover: 'var(--color-accent-hover)' },
  outline:     { bg: 'transparent', fg: 'var(--apd-steel-blue)', bd: 'var(--apd-steel-blue)', hover: 'rgba(59,90,133,0.10)' },
  ghost:       { bg: 'transparent', fg: 'var(--apd-steel-blue)', bd: 'transparent',           hover: 'rgba(59,90,133,0.10)' },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export function Button({ children, variant = 'primary', size = 'md', disabled = false, style = {}, ...rest }: ButtonProps) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const p = PALETTE[variant]
  const s = SIZES[size]
  const isOutlineish = variant === 'outline' || variant === 'ghost'

  const bg = disabled ? '#E9EAE6' : hover ? p.hover : p.bg
  const fg = disabled ? '#9AA092' : p.fg

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false) }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: s.fontSize,
        lineHeight: 1.5,
        padding: s.padding,
        minHeight: s.height,
        color: fg,
        background: bg,
        border: `1.5px solid ${disabled ? 'transparent' : isOutlineish && !hover ? p.bd : 'transparent'}`,
        borderRadius: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        boxShadow: disabled || isOutlineish ? 'none' : 'var(--shadow-xs)',
        transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
        transition: 'background 150ms ease-out, transform 120ms ease-out, border-color 150ms ease-out',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
