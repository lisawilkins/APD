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

interface ButtonOwnProps {
  variant?: Variant
  size?: Size
}

/**
 * `as` lets a button that navigates render as a real anchor or a router `Link`
 * instead of a `<button>` with an onClick. Crawlers only follow `<a href>`, and
 * anchors give middle-click, right-click and keyboard behaviour for free.
 */
type ButtonProps<E extends React.ElementType = 'button'> = ButtonOwnProps & {
  as?: E
} & Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps | 'as'>

/** Internal shape after the generic is erased — see the cast in Button below. */
type ResolvedButtonProps = ButtonOwnProps & {
  as?: React.ElementType
  children?: React.ReactNode
  disabled?: boolean
  style?: React.CSSProperties
} & Record<string, unknown>

export function Button<E extends React.ElementType = 'button'>(props: ButtonProps<E>) {
  // Callers are type-checked against ButtonProps<E>. Inside the component the
  // generic can't be resolved, so it is widened once here rather than fighting
  // it at every prop.
  const {
    as,
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    style = {},
    ...rest
  } = props as ResolvedButtonProps

  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const Component = (as ?? 'button') as React.ElementType<Record<string, unknown>>
  const isNativeButton = Component === 'button'

  const p = PALETTE[variant]
  const s = SIZES[size]
  const isOutlineish = variant === 'outline' || variant === 'ghost'

  const bg = disabled ? '#E9EAE6' : hover ? p.hover : p.bg
  const fg = disabled ? '#9AA092' : p.fg

  // Assembled as one object and cast once: TypeScript can't verify individual
  // JSX attributes against a component type that is still generic at this point.
  const componentProps: Record<string, unknown> = {
    // `disabled` is not a valid attribute on an anchor.
    disabled: isNativeButton ? disabled : undefined,
    'aria-disabled': !isNativeButton && disabled ? true : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false) },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
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
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      boxShadow: disabled || isOutlineish ? 'none' : 'var(--shadow-xs)',
      transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'background 150ms ease-out, transform 120ms ease-out, border-color 150ms ease-out',
      ...style,
    },
    ...rest,
  }

  return <Component {...componentProps}>{children}</Component>
}
