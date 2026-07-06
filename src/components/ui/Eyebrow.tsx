interface EyebrowProps {
  children: React.ReactNode
  color?: string
  style?: React.CSSProperties
}

export function Eyebrow({ children, color = 'var(--apd-eyebrow)', style = {} }: EyebrowProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '1.3px',
        color,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
