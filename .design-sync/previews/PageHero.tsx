import { PageHero } from 'apd-ui'
import cansBottlesImg from './assets/beverages.jpg'

export function ServicesIndexHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="One processor for every kind of product"
      intro="We destroy and recover material across ten categories — leading with destruction, backed by certified documentation."
    />
  )
}

export function ServiceDetailHeroWithImage() {
  return (
    <PageHero
      eyebrow="Services"
      title="Beverages"
      intro="Cans, bottles and kegs destroyed on-site, on our own equipment, with a zero-product-to-sewer commitment."
      image={cansBottlesImg}
      imageAlt="Beverages"
    />
  )
}

export function ErrorPageHero() {
  return (
    <PageHero
      eyebrow="Error"
      title="Page not found"
      intro="The page you're looking for doesn't exist or may have moved."
    />
  )
}
