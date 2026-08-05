import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { TextLink } from '../components/ui/TextLink'
import { SITE } from '../data/site'
import { buildMeta } from '../lib/meta'

export function meta() {
  return buildMeta({
    title: 'Page not found',
    description: 'This page does not exist or has moved. Browse product destruction services from Arizona Product Destruction in Phoenix, AZ.',
    path: '/404',
    noindex: true,
  })
}

export default function NotFoundPage() {
  return (
    <>
      <PageHero eyebrow="Error" title="Page not found" intro="The page you're looking for doesn't exist or may have moved." />
      <section id="not-found">
        <Container style={{ padding: '48px var(--container-pad) 96px' }}>
          {/* Give the visitor somewhere useful to go rather than a single
              home link — a dead end here is a lost lead. */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <TextLink to="/">Back to home</TextLink>
            <TextLink to="/services">Browse all destruction services</TextLink>
            <TextLink to="/proof-of-destruction">Certificate of Destruction</TextLink>
            <TextLink to="/about">About APD</TextLink>
          </div>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 16, color: 'var(--apd-text-muted)', marginTop: 28 }}>
            Looking for a quote? Call{' '}
            <a href={`tel:${SITE.phone}`} style={{ color: 'var(--apd-steel-blue)', fontWeight: 600 }}>
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
