import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { TextLink } from '../components/ui/TextLink'

export default function NotFoundPage() {
  return (
    <>
      <PageHero eyebrow="Error" title="Page not found" intro="The page you're looking for doesn't exist or may have moved." />
      <section id="not-found">
        <Container style={{ padding: '48px var(--container-pad) 96px' }}>
          <TextLink to="/">Back to home</TextLink>
        </Container>
      </section>
    </>
  )
}
