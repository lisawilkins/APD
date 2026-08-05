import type { QuickFact } from '../../data/services'

interface QuickFactsProps {
  facts: QuickFact[]
  /** Accessible name for the block. */
  label?: string
}

/**
 * Scannable label/value rows shown above the prose on service detail pages.
 *
 * Marked up as a description list so the label–value relationship survives for
 * screen readers and for crawlers. Each value is written as a complete sentence
 * on purpose — self-contained factual statements are what answer engines lift
 * and cite, and a fragment like "cans, bottles, kegs" is not quotable on its own.
 */
export function QuickFacts({ facts, label = 'Key facts' }: QuickFactsProps) {
  if (facts.length === 0) return null

  return (
    <dl className="quick-facts" aria-label={label}>
      {facts.map((fact) => (
        <div key={fact.label} className="quick-fact">
          <dt className="quick-fact-label">{fact.label}</dt>
          <dd className="quick-fact-value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
