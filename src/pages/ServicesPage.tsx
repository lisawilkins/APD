import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { ServiceCard } from '../components/ui/ServiceCard'
import SchemaScript from '../components/ui/SchemaScript'
import { CtaBand } from '../components/layout/CtaBand'
import { SERVICES } from '../data/services'
import { breadcrumbSchema } from '../lib/schema'
import { buildMeta } from '../lib/meta'

export function meta() {
  return buildMeta({
    title: 'Product Destruction Services',
    description:
      'Ten product destruction and recycling categories handled directly in Phoenix, AZ — beverages, supplements, apparel, electronics, metals, liquidation pallets and more.',
    path: '/services',
  })
}

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
        title="Product Destruction Services in Phoenix, Arizona"
        intro="We destroy and recover material across ten categories — leading with destruction, backed by certified documentation. Every load is handled in our own Phoenix warehouses, never brokered out."
      />
      <section id="services-index" aria-label="All service categories">
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <div className="services-index-grid">
            {SERVICES.map((service, i) => (
              // headingLevel="h2" because there is no intervening h2 on this
              // page — the default h3 would skip a level after the h1.
              <ServiceCard
                key={service.slug}
                service={service}
                headingLevel="h2"
                {...THEMES[i % THEMES.length]}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="services-area" style={{ background: 'var(--apd-surface-panel)' }} aria-labelledby="services-area-heading">
        <Container style={{ padding: '56px var(--container-pad)' }}>
          <h2
            id="services-area-heading"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px, 2.6vw, 28px)', color: 'var(--apd-heading)', margin: '0 0 16px' }}
          >
            Where we collect and destroy
          </h2>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.7, color: 'var(--apd-body)', maxWidth: '72ch', margin: 0 }}>
            We process products from local, state, and national customers. Locally we use our own dedicated
            trucking fleet. Nationally we'll coordinate logistics with trusted shipping partners, expanding our
            reach throughout the lower 48. Chain of custody is documented from start to finish from any
            origination point.
          </p>
        </Container>
      </section>

      <CtaBand />

      <SchemaScript schema={breadcrumbSchema([{ name: 'Services', path: '/services' }])} />
    </>
  )
}
