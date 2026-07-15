import { useCallback, useEffect, useMemo, useState } from 'react'
import { CaretLeftIcon, CaretRightIcon, QuotesIcon } from '@phosphor-icons/react'
import { Container } from './Container'
import { TESTIMONIALS, formatTestimonialMeta, type Testimonial } from '../../data/testimonials'

function visibleCountForWidth(width: number): number {
  if (width >= 1024) return 3
  if (width >= 600) return 2
  return 1
}

function chunk<T>(items: T[], size: number): T[][] {
  if (size <= 0 || items.length === 0) return []
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const meta = formatTestimonialMeta(testimonial)

  return (
    <article className="testimonial-card">
      <QuotesIcon size={30} color="var(--apd-clay-red)" weight="fill" className="testimonial-quote-icon" />
      <blockquote style={{ margin: 0 }}>
        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      {meta && <footer className="testimonial-meta">&mdash; {meta}</footer>}
    </article>
  )
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
}

export function TestimonialsCarousel({ testimonials = TESTIMONIALS }: TestimonialsCarouselProps) {
  const items = testimonials.slice(0, 9)
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== 'undefined' ? visibleCountForWidth(window.innerWidth) : 3,
  )
  const [pageIndex, setPageIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)

  const pages = useMemo(() => chunk(items, visibleCount), [items, visibleCount])
  const totalPages = pages.length
  const safePageIndex = totalPages === 0 ? 0 : Math.min(pageIndex, totalPages - 1)

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(visibleCountForWidth(window.innerWidth))
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setPageIndex((current) => (totalPages === 0 ? 0 : Math.min(current, totalPages - 1)))
  }, [totalPages])

  const goToPage = useCallback((next: number | ((current: number) => number)) => {
    setAutoScrollEnabled(false)
    setPageIndex((current) => {
      const resolved = typeof next === 'function' ? next(current) : next
      if (totalPages === 0) return 0
      return ((resolved % totalPages) + totalPages) % totalPages
    })
  }, [totalPages])

  useEffect(() => {
    if (!autoScrollEnabled || prefersReducedMotion || totalPages <= 1) return

    const id = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % totalPages)
    }, 20_000)

    return () => window.clearInterval(id)
  }, [autoScrollEnabled, prefersReducedMotion, totalPages])

  if (items.length === 0) return null

  const showControls = totalPages > 1

  return (
    <section id="testimonial" style={{ background: 'var(--apd-surface-panel)' }} aria-label="Client testimonials">
      <Container style={{ padding: '72px var(--container-pad)' }}>
        <div
          className="testimonials-viewport"
          aria-live={prefersReducedMotion ? 'polite' : 'off'}
        >
          <div
            className={`testimonials-track${prefersReducedMotion ? ' testimonials-track--reduced-motion' : ''}`}
            style={{ transform: `translateX(-${safePageIndex * 100}%)` }}
          >
            {pages.map((pageItems, page) => (
              <div
                key={page}
                className="testimonials-page"
                data-visible-count={visibleCount}
                aria-hidden={page !== safePageIndex}
              >
                {pageItems.map((testimonial, index) => (
                  <TestimonialCard key={`${page}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <nav
            className="testimonials-nav"
            aria-label="Testimonial navigation"
          >
            <button
              type="button"
              className="testimonials-nav-btn"
              aria-label="Previous testimonials"
              onClick={() => goToPage((current) => current - 1)}
            >
              <CaretLeftIcon size={22} weight="bold" aria-hidden="true" />
            </button>
            <span className="testimonials-nav-status" aria-live="polite">
              <span className="sr-only">
                Testimonials page {safePageIndex + 1} of {totalPages}
              </span>
            </span>
            <button
              type="button"
              className="testimonials-nav-btn"
              aria-label="Next testimonials"
              onClick={() => goToPage((current) => current + 1)}
            >
              <CaretRightIcon size={22} weight="bold" aria-hidden="true" />
            </button>
          </nav>
        )}
      </Container>
    </section>
  )
}
