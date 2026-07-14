import {
  BeerBottleIcon, RecycleIcon, PackageIcon, TShirtIcon, SneakerIcon,
  CpuIcon, CoinsIcon, CubeIcon, ArchiveIcon, PlantIcon,
  type Icon,
} from '@phosphor-icons/react'
import type { Stat } from '../components/ui/StatsRow'

import heroBuildingImg from '../assets/hero-building.jpg'
import forkliftRealImg from '../assets/forklift-real.png'
import transportFleetImg from '../assets/transport-fleet.jpg'
import warehouseWideImg from '../assets/warehouse-wide.jpg'
import cansBottlesImg from '../assets/pexels-thom-gonzalez-3126166-15772324.jpg'
import baledCardboardImg from '../assets/pexels-alexfu-2967770.jpg'
import metalCansImg from '../assets/pexels-cottonbro-6591428.jpg'
import plasticContainersImg from '../assets/pexels-mike-van-schoonderwalt-1884800-5505699.jpg'
import cardboardTextureImg from '../assets/pexels-darren-patterson-3029210-4592995.jpg'
import baledPlasticImg from '../assets/pexels-gaurav-ranjitkar-2476729-14370990.jpg'
import liquidationPalletsHeroImg from '../assets/mejordi-wid-OeUqfOkgB2I-unsplash.jpg'
import footwearHeroImg from '../assets/sarguninder-singh-dgQlc0Wiwx4-unsplash.jpg'
import electronicWasteHeroImg from '../assets/z-yu-rR8o1kEBmMQ-unsplash.jpg'
import packagingMaterialsHeroImg from '../assets/BundledPlastic.jpg'
import psylliumHeroImg from '../assets/PsylliumTrimmed-PXL_20260608_185514973 copy.jpeg'

export interface Service {
  slug: string
  title: string
  icon: Icon
  /** Category-specific where we have it; falls back to generic warehouse/logistics photography otherwise (see STATUS.md "Data Still Needed"). */
  image: string
  /** Larger photo shown on the right side of the service detail page hero. */
  heroImage: string
  teaser: string
  heroIntro: string
  description: string[]
  stats: Stat[]
}

export const SERVICES: Service[] = [
  {
    slug: 'beverages',
    title: 'Beverages',
    icon: BeerBottleIcon,
    image: cansBottlesImg,
    heroImage: cansBottlesImg,
    teaser: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market.",
    heroIntro: 'Cans, bottles and kegs destroyed on-site, on our own equipment, with a zero-product-to-sewer commitment.',
    description: [
      'Beverage destruction is one of our founding lines of business, and we handle it on proprietary equipment built for efficiency and with an eye on maximum packaging recovery. Cans, bottles, and multi-pack packaging are separated, crushed, and processed at our Phoenix warehouse. All liquids recovered are routed directly to downstream second use, or are treated for disposal to meet local regulatory standards.',
      "Every load closes with a Certificate of Destruction documenting volume, SKU, and disposition. We are the only company in Arizona holding Coca-Cola destruction certification.",
    ],
    stats: [
      { v: '724K', l: "gallons processed every year" },
      { v: '0%', l: 'product to the public sewer' },
      { v: '+23', l: 'years destroying beverage product' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
    ],
  },
  {
    slug: 'occ-cardboard',
    title: 'OCC / Cardboard',
    icon: RecycleIcon,
    image: baledCardboardImg,
    heroImage: cardboardTextureImg,
    teaser: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.',
    heroIntro: 'Old corrugated cardboard, shrink wrap, and mixed packaging baled and routed to downstream recyclers at scale.',
    description: [
      'Recovering old corrugated cardboard (OCC) was where Arizona Production Destruction began it\'s journey, providing recovery of cardboard and other packaging materials for the Phoenix area. OCC arrives as intact packaging, loose or already baled. It is then sorted, compacted, and shipped to our recycling partners. Because this material has real resale value, our goal here is recovery rather than destruction — keeping usable fiber out of landfill while still giving you a documented chain of custody.',
      '(REVIEW THIS STATEMENT) We run this alongside our destruction lines so a single pickup can combine both material types, which keeps logistics simple for clients running mixed loads of product and packaging.',
    ],
    stats: [
      { v: '26,000', l: 'tons of OCC recycled in 2025 (placeholder)' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'separate shipments needed for mixed product + packaging loads' },
    ],
  },
  {
    slug: 'liquidation-pallets',
    title: 'Liquidation Pallets',
    icon: PackageIcon,
    image: forkliftRealImg,
    heroImage: liquidationPalletsHeroImg,
    teaser: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.',
    heroIntro: 'Retail returns, overstock, and damaged goods destroyed to spec — no resale, no gray market.',
    description: [
      "Liquidation pallets — retail returns, shelf-pulls, overstock, and damaged goods — carry brand risk if they end up resold through secondary channels. We destroy the product itself, not just the packaging, so there's no path back to a shelf.",
      'Each pallet is logged on arrival, destroyed on our floor, and closed out with photo or video documentation depending on what your compliance team requires.',
    ],
    stats: [
      { v: '+180', l: 'loads diverted to approved waste-to-energy facilities (placeholder)' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '24hr', l: 'reply time on new liquidation inquiries' },
    ],
  },
  {
    slug: 'textiles-apparel',
    title: 'Textiles & Apparel',
    icon: TShirtIcon,
    image: warehouseWideImg,
    heroImage: warehouseWideImg,
    teaser: 'Apparel, footwear samples and branded soft goods destroyed with tags, labels and trims removed from resale.',
    heroIntro: 'Branded apparel and soft goods destroyed so labels and trims never re-enter the resale market.',
    description: [
      "Apparel presents a specific brand-protection problem: garments themselves can be reworked and resold even after being marked as destroyed goods. We shred or cut textiles to a point where the material has no resale value, with particular attention to labels, tags, and branded trim.",
      "This work is well suited to clients managing seasonal overstock, damaged inventory, or samples that can't legally re-enter the market.",
    ],
    stats: [
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'branded product re-entering resale channels (placeholder)' },
      { v: '+23', l: 'years of service in product destruction' },
    ],
  },
  {
    slug: 'footwear-accessories',
    title: 'Footwear & Accessories',
    icon: SneakerIcon,
    image: transportFleetImg,
    heroImage: footwearHeroImg,
    teaser: 'Shoes, bags and accessories destroyed to prevent resale of counterfeit-risk or recalled product.',
    heroIntro: 'Footwear and accessories destroyed to prevent counterfeit-risk or recalled product from reaching resellers.',
    description: [
      'Footwear and accessories are high-value, easily resold goods, which makes proof of destruction especially important to brand owners. We break down soles, uppers, and hardware so the product cannot be reconstructed or passed off as sellable.',
      'This category often overlaps with recall work, where speed and documentation matter as much as the destruction itself.',
    ],
    stats: [
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '24hr', l: 'reply time on new inquiries' },
      { v: '+23', l: 'years of service in product destruction (placeholder)' },
    ],
  },
  {
    slug: 'electronic-waste',
    title: 'Electronic Waste',
    icon: CpuIcon,
    image: heroBuildingImg,
    heroImage: electronicWasteHeroImg,
    teaser: 'Devices and components destroyed with data-bearing materials handled separately from general e-waste recycling.',
    heroIntro: 'Devices, components, and data-bearing hardware destroyed and routed to responsible e-waste recovery.',
    description: [
      'Electronic waste is processed with an eye toward both data security and materials recovery: data-bearing components are handled separately from general electronics, and recoverable metals and materials are routed to downstream partners rather than landfilled.',
      "This is placeholder copy pending final process detail from the operations team — confirm data-destruction protocol language before publishing.",
    ],
    stats: [
      { v: '+800', l: 'tons of metals diverted in 2025 (placeholder)' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'data-bearing product left unaccounted for (placeholder)' },
    ],
  },
  {
    slug: 'aluminum-metals',
    title: 'Aluminum & Metals',
    icon: CoinsIcon,
    image: metalCansImg,
    heroImage: metalCansImg,
    teaser: 'Aluminum, steel and mixed metals separated and diverted to recyclers instead of landfill.',
    heroIntro: 'Aluminum, steel, and mixed metals separated out of destruction loads and diverted to recyclers.',
    description: [
      "Metal recovered from beverage cans, packaging, and general destruction work is one of our clearest sustainability wins: it has a ready downstream market, so keeping it out of landfill is both an environmental and an economic decision.",
      'We separate metals on-site as part of our normal destruction workflow rather than as a separate service, so clients get the recovery benefit without added logistics.',
    ],
    stats: [
      { v: '+800', l: 'tons of metals diverted in 2025 (placeholder)' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'product to the public sewer' },
    ],
  },
  {
    slug: 'general-consumer-goods',
    title: 'General Consumer Goods',
    icon: CubeIcon,
    image: plasticContainersImg,
    heroImage: plasticContainersImg,
    teaser: 'Health, beauty, home goods and mixed consumer product destroyed and documented, regardless of category.',
    heroIntro: 'Health, beauty, home goods, and other mixed consumer product — destroyed and documented regardless of category.',
    description: [
      "Not every product fits neatly into a single category, and that's the point of this service: general consumer goods — health and beauty items, home goods, seasonal product, mixed-category overstock — get the same direct handling and documentation as our named service lines.",
      "If your product doesn't fit the other nine categories, it almost certainly fits here.",
    ],
    stats: [
      { v: '10', l: 'material categories handled under one roof (placeholder)' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '24hr', l: 'reply time on new inquiries' },
    ],
  },
  {
    slug: 'packaging-materials',
    title: 'Packaging Materials',
    icon: ArchiveIcon,
    image: cardboardTextureImg,
    heroImage: packagingMaterialsHeroImg,
    teaser: 'Boxes, shrink wrap, film and mixed packaging recovered alongside the product destruction workflow.',
    heroIntro: 'Boxes, shrink wrap, film, and mixed packaging recovered and diverted as part of a destruction job.',
    description: [
      "Packaging is frequently the largest volume component of a load by weight, even when it's not the material being destroyed. We separate and recover packaging alongside the destruction work itself — mixed film, shrink wrap, corrugated, and rigid plastics — rather than sending it out with general trash.",
      'This runs in parallel with our OCC/cardboard recovery line for clients whose loads combine both.',
    ],
    stats: [
      { v: '26,000', l: 'tons of OCC recycled in 2025 (placeholder)' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0', l: 'separate pickups needed for mixed product + packaging loads' },
    ],
  },
  {
    slug: 'psyllium',
    title: 'Psyllium',
    icon: PlantIcon,
    image: baledPlasticImg,
    heroImage: psylliumHeroImg,
    teaser: 'A niche fiber-supplement material handled with the same destruction and documentation standard as every other category.',
    heroIntro: 'Fiber-supplement product destroyed to the same standard as every other material we handle.',
    description: [
      "Psyllium and related fiber-supplement products present unique handling considerations — fine particulate, packaging variety, and batch/lot tracking requirements common to supplement manufacturers. We destroy it on the same equipment and to the same documentation standard as our other lines.",
      "This is placeholder copy — confirm specific handling detail with the client base that drives this line before publishing.",
    ],
    stats: [
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '+23', l: 'years of service in product destruction (placeholder)' },
      { v: '24hr', l: 'reply time on new inquiries' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
