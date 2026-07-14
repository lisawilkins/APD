import { StatsRow } from 'apd-ui'

export function DarkStatsBar() {
  return (
    <div style={{ background: 'var(--apd-blue-deep)', padding: '40px 24px' }}>
      <StatsRow
        variant="dark"
        stats={[
          { v: '+80%', l: 'of materials are processed at our warehouses.' },
          { v: '+72%', l: 'of materials received have a downstream second use.' },
          { v: '+23', l: 'years of service in product destruction.' },
          { v: '+180', l: 'loads diverted to approved waste-to-energy facilities.' },
        ]}
      />
    </div>
  )
}

export function LightSustainabilityStats() {
  return (
    <div style={{ background: '#fff', padding: '40px 24px' }}>
      <StatsRow
        variant="light"
        stats={[
          { v: '72%+', l: 'downstream second use' },
          { v: '0%', l: 'product to the public sewer' },
          { v: '26,000', l: 'tons of OCC recycled in 2025' },
          { v: '800+', l: 'tons of metals diverted in 2025' },
        ]}
      />
    </div>
  )
}

export function ServiceDetailStats() {
  return (
    <div style={{ background: 'var(--apd-blue-deep)', padding: '40px 24px' }}>
      <StatsRow
        variant="dark"
        stats={[
          { v: '+80%', l: "of Arizona's beverage destruction market handled by APD" },
          { v: '0%', l: 'product to the public sewer' },
          { v: '+23', l: 'years destroying beverage product' },
        ]}
      />
    </div>
  )
}
