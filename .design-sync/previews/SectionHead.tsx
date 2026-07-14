import { SectionHead } from 'apd-ui'

export function CenteredWithIntro() {
  return (
    <div style={{ background: '#fff', padding: 24 }}>
      <SectionHead
        align="center"
        eyebrow="Sustainability"
        title="Destroyed, not just dumped"
        intro="Where we can, we recover materials and find downstream second-uses — keeping product out of landfill and giving you a cleaner story to tell."
      />
    </div>
  )
}

export function LeftAligned() {
  return (
    <div style={{ background: '#fff', padding: 24 }}>
      <SectionHead
        eyebrow="Services"
        title="One processor for every kind of product"
        intro="We destroy and recover material across +10 categories — leading with destruction, backed by certified documentation."
      />
    </div>
  )
}

export function TitleOnly() {
  return (
    <div style={{ background: '#fff', padding: 24 }}>
      <SectionHead title="Why APD" />
    </div>
  )
}
