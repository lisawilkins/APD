import { useParams, Navigate } from 'react-router-dom'
import type { Route } from './+types/ServiceDetailPage'
import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { StatsRow } from '../components/ui/StatsRow'
import { QuickFacts } from '../components/ui/QuickFacts'
import SchemaScript from '../components/ui/SchemaScript'
import { CtaBand } from '../components/layout/CtaBand'
import { getServiceBySlug } from '../data/services'
import { breadcrumbSchema, serviceSchema } from '../lib/schema'
import { buildMeta } from '../lib/meta'

export function meta({ params }: Route.MetaArgs) {
  const service = params.slug ? getServiceBySlug(params.slug) : undefined
  if (!service) {
    return buildMeta({
      title: 'Service not found',
      description: 'This service page could not be found. Browse all ten product destruction categories handled directly by APD in Phoenix, Arizona.',
      path: '/services',
      noindex: true,
    })
  }
  return buildMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

const sectionHeadingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(24px, 3vw, 32px)',
  lineHeight: 1.15,
  letterSpacing: '-0.5px',
  color: 'var(--apd-heading)',
  margin: '0 0 24px',
} as const

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.h1}
        intro={service.heroIntro}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
      />

      <section id="service-description" aria-labelledby="service-description-heading">
        <Container style={{ padding: '64px var(--container-pad) 48px' }}>
          <h2 id="service-description-heading" style={sectionHeadingStyle}>
            How we handle {service.title.toLowerCase()}
          </h2>
          {service.description.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-prose)',
                fontSize: 17,
                lineHeight: 1.7,
                color: 'var(--apd-body)',
                maxWidth: 760,
                margin: i === 0 ? 0 : '16px 0 0',
              }}
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section
        id="service-stats"
        style={{ borderTop: '1px solid var(--apd-border)' }}
        aria-labelledby="service-stats-heading"
      >
        <Container style={{ padding: '48px var(--container-pad)' }}>
          <h2 id="service-stats-heading" style={{ ...sectionHeadingStyle, marginBottom: 32 }}>
            {service.title} by the numbers
          </h2>
          <StatsRow stats={service.stats} variant="light" />
        </Container>
      </section>

      {/* Sits below the stats: this block exists to make the page's facts easy
          for search and answer engines to extract, not to lead the page. */}
      <section
        id="service-quick-facts"
        style={{ borderTop: '1px solid var(--apd-border)' }}
        aria-labelledby="service-quick-facts-heading"
      >
        <Container style={{ padding: '48px var(--container-pad) 64px' }}>
          <h2 id="service-quick-facts-heading" style={sectionHeadingStyle}>
            {service.title} destruction at a glance
          </h2>
          <QuickFacts facts={service.quickFacts} label={`${service.title} key facts`} />
        </Container>
      </section>

      <CtaBand />

      <SchemaScript
        schema={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  )
}
