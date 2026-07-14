import { ServiceCard } from 'apd-ui'
import { BeerBottleIcon, RecycleIcon, PackageIcon } from '@phosphor-icons/react'
import cansBottlesImg from './assets/beverages.jpg'
import baledCardboardImg from './assets/occ-cardboard.jpg'
import forkliftRealImg from './assets/liquidation-pallets.jpg'

const beverages = {
  slug: 'beverages',
  title: 'Beverages',
  icon: BeerBottleIcon,
  image: cansBottlesImg,
  heroImage: cansBottlesImg,
  teaser: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market.",
  heroIntro: '',
  description: [],
  stats: [],
}

export function LightPanel() {
  return (
    <div style={{ maxWidth: 420 }}>
      <ServiceCard service={beverages} />
    </div>
  )
}

export function DarkPanel() {
  return (
    <div style={{ maxWidth: 420 }}>
      <ServiceCard
        service={{
          slug: 'occ-cardboard',
          title: 'OCC / Cardboard',
          icon: RecycleIcon,
          image: baledCardboardImg,
          heroImage: baledCardboardImg,
          teaser: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.',
          heroIntro: '',
          description: [],
          stats: [],
        }}
        bg="var(--apd-ink)"
        fg="#fff"
        sub="rgba(255,255,255,0.74)"
        link="#fff"
      />
    </div>
  )
}

export function SteelBluePanel() {
  return (
    <div style={{ maxWidth: 420 }}>
      <ServiceCard
        service={{
          slug: 'liquidation-pallets',
          title: 'Liquidation Pallets',
          icon: PackageIcon,
          image: forkliftRealImg,
          heroImage: forkliftRealImg,
          teaser: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.',
          heroIntro: '',
          description: [],
          stats: [],
        }}
        bg="var(--apd-steel-blue)"
        fg="#fff"
        sub="rgba(255,255,255,0.82)"
        link="#fff"
      />
    </div>
  )
}
