import { Eyebrow } from 'apd-ui'

export function SectionLabel() {
  return (
    <div style={{ padding: 24 }}>
      <Eyebrow>Services</Eyebrow>
    </div>
  )
}

export function OnDark() {
  return (
    <div style={{ background: 'var(--apd-steel-blue)', padding: 24 }}>
      <Eyebrow color="rgba(255,255,255,0.7)">Why APD</Eyebrow>
    </div>
  )
}

export function OnInk() {
  return (
    <div style={{ background: 'var(--apd-ink)', padding: 24 }}>
      <Eyebrow color="var(--apd-green-mid)">Certificate of Destruction</Eyebrow>
    </div>
  )
}
