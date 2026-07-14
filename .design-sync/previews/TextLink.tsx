import { TextLink } from 'apd-ui'

export function OnLightBackground() {
  return (
    <div style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <TextLink to="/services">Learn more</TextLink>
      <TextLink to="/sustainability">About our environmental commitment</TextLink>
    </div>
  )
}

export function OnDarkBackground() {
  return (
    <div style={{ background: 'var(--apd-ink)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <TextLink to="/proof-of-destruction" color="#fff">About our Certificate of Destruction</TextLink>
    </div>
  )
}
