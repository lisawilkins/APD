import { CaretDownIcon } from '@phosphor-icons/react'
import { Container } from './Container'
import { SectionHead } from './SectionHead'
import { TextLink } from './TextLink'
import SchemaScript from './SchemaScript'
import { faqSchema } from '../../lib/schema'
import type { Faq } from '../../data/faqs'

interface FaqSectionProps {
  faqs: Faq[]
  eyebrow?: string
  title?: string
  intro?: string
  /** Section id — pages need unique kebab-case ids per project convention. */
  id?: string
  /**
   * Emit FAQPage JSON-LD alongside the markup. Only one FAQPage block should
   * appear per URL, so leave this off for a second FAQ section on the same page.
   * Also leave it off where a teaser set duplicates questions that another page
   * already owns — /faq is the canonical source for the general questions.
   */
  includeSchema?: boolean
  /** "See all questions" link shown below the list, for teaser sets. */
  moreLink?: { to: string; label: string }
}

/**
 * Question-and-answer block.
 *
 * Uses native `<details>`/`<summary>` rather than a custom accordion: keyboard
 * operable and screen-reader announced with no ARIA wiring, matching the
 * disclosure-pattern preference in AGENTS.md. Answers stay in the DOM when
 * collapsed, so crawlers read them whether or not the panel is open.
 */
export function FaqSection({
  faqs,
  eyebrow = 'FAQ',
  title = 'Common questions',
  intro,
  id = 'faq',
  includeSchema = true,
  moreLink,
}: FaqSectionProps) {
  if (faqs.length === 0) return null

  return (
    <section id={id} style={{ background: 'var(--apd-surface-panel)' }} aria-labelledby={`${id}-heading`}>
      <Container style={{ padding: '72px var(--container-pad)' }}>
        <div id={`${id}-heading`}>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary className="faq-question">
                <span>{faq.question}</span>
                <CaretDownIcon size={18} weight="bold" className="faq-caret" aria-hidden="true" />
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>

        {moreLink && (
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
            <TextLink to={moreLink.to}>{moreLink.label}</TextLink>
          </div>
        )}
      </Container>

      {includeSchema && <SchemaScript schema={faqSchema(faqs)} />}
    </section>
  )
}
