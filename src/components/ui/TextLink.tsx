import { Link } from 'react-router-dom'

export function TextLink({ children, to, color = 'var(--apd-steel-blue)' }: { children: React.ReactNode; to: string; color?: string }) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color,
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        borderBottom: '1.5px solid transparent',
        paddingBottom: 2,
        transition: 'border-color 150ms ease-out',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = color }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent' }}
    >
      {children} →
    </Link>
  )
}
