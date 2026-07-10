export function Container({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', ...style }}>
      {children}
    </div>
  )
}
