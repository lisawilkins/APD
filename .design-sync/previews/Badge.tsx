import { Badge } from 'apd-ui'

export function NotABroker() {
  return (
    <div style={{ background: 'var(--apd-ink)', padding: 24 }}>
      <Badge tone="red" solid>Not a broker</Badge>
    </div>
  )
}

export function Tones() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="blue">Blue</Badge>
      <Badge tone="green">Green</Badge>
      <Badge tone="red">Red</Badge>
      <Badge tone="amber">Amber</Badge>
    </div>
  )
}

export function Solid() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge tone="neutral" solid>Neutral</Badge>
      <Badge tone="blue" solid>Blue</Badge>
      <Badge tone="green" solid>Green</Badge>
      <Badge tone="red" solid>Red</Badge>
      <Badge tone="amber" solid>Amber</Badge>
    </div>
  )
}
