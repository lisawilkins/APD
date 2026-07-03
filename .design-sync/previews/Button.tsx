import { Button } from 'apd-ui'

export function HeroCTAs() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', background: 'var(--apd-ink)', padding: 24 }}>
      <Button variant="primary" size="lg">Get a quote</Button>
      <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>
        Explore services
      </Button>
    </div>
  )
}

export function CTABand() {
  return (
    <div style={{ background: 'var(--apd-olive-green)', padding: 24 }}>
      <Button variant="accent" size="lg">Get a quote</Button>
    </div>
  )
}

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  )
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Get a quote</Button>
      <Button variant="outline" disabled>Explore services</Button>
    </div>
  )
}
