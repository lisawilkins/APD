import { useParams, Navigate } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { StatsRow } from '../components/ui/StatsRow'
import { CtaBand } from '../components/layout/CtaBand'
import { getServiceBySlug } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        intro={service.heroIntro}
        image={service.heroImage}
        imageAlt={service.title}
      />
      <section id="service-description">
        <Container style={{ padding: '64px var(--container-pad) 40px' }}>
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
      <section id="service-stats" style={{ background: 'var(--apd-blue-deep)' }} aria-label={`${service.title} statistics`}>
        <Container style={{ padding: '48px var(--container-pad)' }}>
          <StatsRow stats={service.stats} variant="dark" />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
