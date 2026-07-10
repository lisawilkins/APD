import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { ServiceCard } from '../components/ui/ServiceCard'
import { CtaBand } from '../components/layout/CtaBand'
import { SERVICES } from '../data/services'

const THEMES = [
  { bg: 'var(--apd-surface-panel)', fg: 'var(--apd-heading)', sub: 'var(--apd-text-muted)', link: 'var(--apd-steel-blue)' },
  { bg: 'var(--apd-ink)', fg: '#fff', sub: 'rgba(255,255,255,0.74)', link: '#fff' },
  { bg: 'var(--apd-steel-blue)', fg: '#fff', sub: 'rgba(255,255,255,0.82)', link: '#fff' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One processor for every kind of product"
        intro="We destroy and recover material across ten categories — leading with destruction, backed by certified documentation."
      />
      <section id="services-index">
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <div className="services-index-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} {...THEMES[i % THEMES.length]} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
