import {
  BeerBottleIcon, RecycleIcon, PackageIcon, TShirtIcon, SneakerIcon,
  CpuIcon, CoinsIcon, CubeIcon, ArchiveIcon, PlantIcon,
  type Icon,
} from '@phosphor-icons/react'
import type { Stat } from '../components/ui/StatsRow'
import type { ServiceSlug } from './routes'
import { REACH } from './site'

import heroBuildingImg from '../assets/hero-building.jpg'
// forklift.jpg is the same photograph as forklift-real.png (byte-identical
// originals) but stored as a real JPEG rather than a 2.7 MB PNG — it was being
// shipped in full to render a 128px card thumbnail.
import forkliftRealImg from '../assets/forklift.jpg'
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

/** A single extractable fact, rendered as a definition row and quotable by answer engines. */
export interface QuickFact {
  label: string
  value: string
}

export interface Service {
  /** Must exist in SERVICE_SLUGS in routes.ts — that list drives prerendering and the sitemap. */
  slug: ServiceSlug
  /** Short label for nav, cards and breadcrumbs. */
  title: string
  /** Full page `<h1>` — carries the service and geographic keywords the short title can't. */
  h1: string
  icon: Icon
  /** Category-specific where we have it; falls back to generic warehouse/logistics photography otherwise (see STATUS.md "Data Still Needed"). */
  image: string
  /** Describes the thumbnail on the /services index card. */
  imageAlt: string
  /** Larger photo shown on the right side of the service detail page hero. */
  heroImage: string
  /** Describes the hero photo. Never just the service name. */
  heroImageAlt: string
  teaser: string
  heroIntro: string
  description: string[]
  /** Scannable facts shown above the prose. Answer engines lift these directly. */
  quickFacts: QuickFact[]
  stats: Stat[]
  /** Page title, minus the ` | Arizona Product Destruction` suffix buildMeta appends. */
  metaTitle: string
  /** 150–160 characters, unique per service. */
  metaDescription: string
}

const DOCUMENTATION_FACT: QuickFact = {
  label: 'What you receive',
  value: 'A Certificate of Destruction for every load, plus video, photos, or live on-site viewing on request.',
}

const AREA_FACT: QuickFact = {
  label: 'Service area',
  value: `${REACH.statewide} ${REACH.national}`,
}

export const SERVICES: Service[] = [
  {
    slug: 'beverages',
    title: 'Beverages',
    h1: 'Beverage Destruction Services in Phoenix, Arizona',
    icon: BeerBottleIcon,
    image: cansBottlesImg,
    imageAlt: 'Aluminum cans and glass bottles staged for beverage destruction',
    heroImage: cansBottlesImg,
    heroImageAlt: 'Cans and bottles awaiting processing on APD’s beverage destruction line',
    teaser: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market.",
    heroIntro: 'Cans, bottles and kegs destroyed on-site, on our own equipment, with a zero-product-to-sewer commitment.',
    description: [
      'Beverage destruction is one of our founding lines of business, and we handle it on proprietary equipment built for efficiency and with an eye on maximum packaging recovery. Cans, bottles, and multi-pack packaging are separated, crushed, and processed at our Phoenix warehouse. All liquids recovered are routed directly to downstream second use, or are treated for disposal to meet local regulatory standards.',
      'The zero-product-to-sewer commitment is the part beverage clients ask about most. Pouring recalled or expired product down a drain is the fastest route to disposal and the one most likely to create a compliance problem later. We separate liquid from container instead, keeping the two waste streams distinct so each can be documented and routed appropriately.',
      'Because we own the equipment and the warehouses, a beverage load never changes hands. There is no broker in the middle deciding where your product ends up, which is what makes it possible to offer live viewing — you can stand on our floor and watch your own product go through the line.',
      'Every load closes with a Certificate of Destruction documenting volume, SKU, and disposition. We are the only company in Arizona holding Coca-Cola destruction certification.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Aluminum cans, glass and plastic bottles, kegs, multi-pack packaging, and full pallets of expired or recalled beverage.' },
      { label: 'How it works', value: 'Liquid is separated from container on proprietary equipment, then containers are crushed and routed to packaging recovery.' },
      { label: 'Liquid handling', value: 'Recovered liquid goes to downstream second use or permitted treatment. Zero product enters the public sewer.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '724K', l: 'gallons processed every year' },
      { v: '0%', l: 'product to the public sewer' },
      { v: '+23', l: 'years destroying beverage product' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
    ],
    metaTitle: 'Beverage Destruction in Phoenix, AZ',
    metaDescription:
      'Beverage destruction in Phoenix, AZ. Cans, bottles and kegs destroyed on our own equipment with zero product to sewer, plus a Certificate of Destruction on every load.',
  },
  {
    slug: 'psyllium',
    title: 'Psyllium',
    h1: 'Psyllium & Supplement Destruction in Phoenix, Arizona',
    icon: PlantIcon,
    image: baledPlasticImg,
    imageAlt: 'Baled supplement packaging material ready for downstream processing',
    heroImage: psylliumHeroImg,
    heroImageAlt: 'Psyllium product being processed on APD’s purpose-built destruction machinery',
    teaser: 'A cornerstone material for APD, destroyed on proprietary machinery and downstreamed into an entirely new secondary use.',
    heroIntro: 'Fiber-supplement product destroyed on machinery built specifically for it, then given a new life through proprietary repurposing.',
    description: [
      "Psyllium and beverage destruction are the cornerstones of APD's services, and psyllium in particular gets handled with an eye toward what comes next: fine particulate, packaging variety, and batch/lot tracking requirements common to supplement manufacturers all shape how it's processed. We destroy it on proprietary machinery built specifically for this product, engineered to handle its particular characteristics in a way general-purpose equipment can't.",
      'Fine powdered product is genuinely difficult to destroy well. It travels, it clings to packaging, and it does not separate cleanly on equipment designed for rigid goods. That is the reason we built dedicated machinery for it rather than adapting a general line, and it is why supplement manufacturers who have had product rejected or partially processed elsewhere tend to end up here.',
      'From there, every unit is downstreamed into a new, secondary use rather than landfilled. Our repurposing methods are proprietary as well, developed over years of working with this material, but the result is that psyllium destined for destruction gets a genuinely new life instead of ending up in a landfill.',
      'Batch and lot documentation follows the same standard as our other lines, which matters for supplement clients working under recall or FDA-driven disposal requirements. Every job closes with a Certificate of Destruction.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Psyllium husk and powder, fiber supplements, capsules, tubs, sachets, and mixed supplement packaging.' },
      { label: 'How it works', value: 'Destroyed on machinery built specifically for fine powdered product, then routed into a proprietary secondary use.' },
      { label: 'Landfill diversion', value: 'Product is repurposed into a new downstream use rather than sent to landfill.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '+23', l: 'years of service in product destruction' },
      { v: '24hr', l: 'reply time on new inquiries' },
    ],
    metaTitle: 'Psyllium & Supplement Destruction, AZ',
    metaDescription:
      'Psyllium and supplement destruction in Phoenix, AZ. Powdered product destroyed on purpose-built machinery, repurposed downstream, and documented load by load.',
  },
  {
    slug: 'occ-cardboard',
    title: 'OCC / Cardboard',
    h1: 'OCC & Cardboard Recycling in Phoenix, Arizona',
    icon: RecycleIcon,
    image: baledCardboardImg,
    imageAlt: 'Baled corrugated cardboard stacked for recycling',
    heroImage: cardboardTextureImg,
    heroImageAlt: 'Corrugated cardboard sorted and compacted at APD’s Phoenix warehouse',
    teaser: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.',
    heroIntro: 'Old corrugated cardboard, shrink wrap, and mixed packaging baled and routed to downstream recyclers at scale.',
    description: [
      'Recovering old corrugated cardboard (OCC) was where Arizona Product Destruction began its journey, providing recovery of cardboard and other packaging materials for the Phoenix area. OCC arrives as intact packaging, loose or already baled. It is then sorted, compacted, and shipped to our recycling partners. Because this material has real resale value, our goal here is recovery rather than destruction — keeping usable fiber out of landfill while still giving you a documented chain of custody.',
      'We run this alongside our destruction lines, so a single pickup can combine both material types. For clients running mixed loads of product and packaging, that means one scheduled pickup instead of two vendors and two sets of paperwork.',
      'Fiber quality drives what a load is worth downstream, so sorting happens on arrival rather than at the far end. Contaminated or wet material is separated out before baling, which keeps the recoverable fraction clean enough to actually be accepted by a mill.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Corrugated cardboard loose or pre-baled, shrink wrap, stretch film, mixed paper packaging, and rigid plastic packaging.' },
      { label: 'How it works', value: 'Sorted on arrival, contaminants removed, compacted and baled, then shipped to downstream recycling partners.' },
      { label: 'Combined loads', value: 'Runs alongside our destruction lines, so product and packaging can move on a single pickup.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '26,000', l: 'tons of OCC recycled in 2025' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '+23', l: 'years of service in product destruction' },
      { v: '0%', l: 'separate shipments needed for mixed product + packaging loads' },
    ],
    metaTitle: 'OCC & Cardboard Recycling, Phoenix',
    metaDescription:
      'Corrugated cardboard and packaging recovery in Phoenix, AZ. Loose or baled OCC, shrink wrap and film sorted, baled and routed to recyclers with documented chain of custody.',
  },
  {
    slug: 'liquidation-pallets',
    title: 'Liquidation Pallets',
    h1: 'Liquidation Pallet Destruction in Phoenix, Arizona',
    icon: PackageIcon,
    image: forkliftRealImg,
    imageAlt: 'Forklift moving a pallet of liquidation goods inside the warehouse',
    heroImageAlt: 'Pallets of retail returns and overstock staged for destruction',
    heroImage: liquidationPalletsHeroImg,
    teaser: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.',
    heroIntro: 'Retail returns, overstock, and damaged goods destroyed to spec — no resale, no gray market.',
    description: [
      "Liquidation pallets include retail returns, failed shipments, shelf-pulls, overstock, and damaged goods. These products carry brand risk if they end up resold through secondary channels. We destroy the product itself, not just the packaging, so there's no path back to a shelf.",
      'That distinction matters more than it sounds. A pallet sold to a liquidator is a pallet you no longer control, and branded product that resurfaces on a marketplace months later is indistinguishable to a customer from product you sold deliberately. Destroying the goods outright removes that exposure entirely.',
      'Each pallet is logged on arrival, destroyed on our floor, and closed out with photo or video documentation depending on what your compliance team requires. Alternatively, with approval of our customers, we can often find second uses for these products through community donations and keep them out of landfill.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Retail returns, shelf-pulls, overstock, failed shipments, damaged goods, and mixed-category pallets.' },
      { label: 'How it works', value: 'Each pallet is logged on arrival and the product itself is destroyed — not just the packaging — so it cannot re-enter resale.' },
      { label: 'Donation option', value: 'With client approval, usable product can be redirected to community donation instead of destruction.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '+180', l: 'loads diverted to approved waste-to-energy facilities' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '24hr', l: 'reply time on new liquidation inquiries' },
    ],
    metaTitle: 'Liquidation Pallet Destruction, AZ',
    metaDescription:
      'Liquidation pallet destruction in Phoenix, AZ. Retail returns, overstock and damaged goods destroyed to spec so branded product never re-enters the gray market.',
  },
  {
    slug: 'textiles-apparel',
    title: 'Textiles & Apparel',
    h1: 'Textile & Apparel Destruction in Phoenix, Arizona',
    icon: TShirtIcon,
    image: warehouseWideImg,
    imageAlt: 'Wide view of APD’s Phoenix warehouse floor where apparel loads are processed',
    heroImage: warehouseWideImg,
    heroImageAlt: 'Branded apparel and soft goods staged for textile destruction',
    teaser: 'Apparel, footwear samples and branded soft goods destroyed with tags, labels and trims removed from resale.',
    heroIntro: 'Branded apparel and soft goods destroyed so labels and trims never re-enter the resale market.',
    description: [
      'Apparel presents a specific brand-protection problem: garments themselves can be reworked and resold even after being marked as destroyed goods. We partner with trusted fabric and textile destruction companies located in the Southwest. Those companies share our goal of zero landfill use. After shredding fabrics to a point where the material has no resale value — with particular attention to labels, tags, and branded trim — we coordinate alternative downstream solutions.',
      'Branded trim is the piece most often underestimated. A garment can be cut apart and still leave a usable label, woven tag, or hardware behind, and those components are exactly what a counterfeiter needs. Handling them as their own stream rather than as part of the general shred is what makes the destruction meaningful rather than cosmetic.',
      'Additionally we offer solutions for those customers who prefer to redirect unsold, usable inventory to secondary markets or resale platforms.',
      "Our process is well suited to clients managing seasonal overstock, damaged inventory, or samples that can't legally re-enter the market.",
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Branded apparel, seasonal overstock, damaged inventory, pre-production samples, fabric rolls, and branded soft goods.' },
      { label: 'How it works', value: 'Fabric is shredded past resale value, with labels, tags and branded trim handled as a separate stream.' },
      { label: 'Landfill diversion', value: 'Shredded material is routed to downstream partners who share our zero-landfill goal.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'branded product re-entering resale channels' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '+23', l: 'years of service in product destruction' },
    ],
    metaTitle: 'Textile & Apparel Destruction, AZ',
    metaDescription:
      'Apparel and textile destruction in Phoenix, AZ. Branded garments shredded past resale value with labels, tags and trim handled separately. Zero-landfill downstream partners.',
  },
  {
    slug: 'footwear-accessories',
    title: 'Footwear & Accessories',
    h1: 'Footwear & Accessory Destruction in Phoenix, Arizona',
    icon: SneakerIcon,
    image: transportFleetImg,
    imageAlt: 'APD trucking fleet used for footwear and accessory pickups',
    heroImage: footwearHeroImg,
    heroImageAlt: 'Footwear staged for destruction and materials reclamation',
    teaser: 'Shoes, bags and accessories destroyed to prevent resale of counterfeit-risk or recalled product.',
    heroIntro: 'Footwear and accessories destroyed to prevent counterfeit-risk or recalled product from reaching resellers.',
    description: [
      'Footwear and accessories are high-value, easily resold goods, which makes proof of destruction especially important to brand owners. For this category, APD partners with a specialist in footwear destruction and materials reclamation, breaking down soles, uppers, and hardware to recover the maximum amount of reusable material while ensuring the product cannot be reconstructed or passed off as sellable.',
      'Footwear is built from several materials bonded together, which is what makes it both hard to recycle and easy to counterfeit from parts. Separating soles, uppers and hardware addresses both problems at once: the components become recoverable, and none of them survives intact enough to rebuild a saleable pair.',
      'This category often overlaps with recall work, where speed and documentation matter as much as the destruction itself. When a recall is active, the useful answer is usually how quickly product can come off your floor and how soon you will have paperwork proving it is gone.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Shoes, boots, handbags, belts, branded accessories, hardware, and counterfeit-risk or recalled footwear.' },
      { label: 'How it works', value: 'Soles, uppers and hardware are separated and broken down so the product cannot be reconstructed or resold.' },
      { label: 'Recall support', value: 'Handled as time-sensitive work, with documentation issued as soon as the load is processed.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '24hr', l: 'reply time on new inquiries' },
      { v: '+23', l: 'years of service in product destruction' },
    ],
    metaTitle: 'Footwear & Accessory Destruction, AZ',
    metaDescription:
      'Footwear and accessory destruction in Phoenix, AZ. Soles, uppers and hardware separated so recalled or counterfeit-risk product cannot be rebuilt or resold.',
  },
  {
    slug: 'electronic-waste',
    title: 'Electronic Waste',
    h1: 'Electronic Waste Destruction in Phoenix, Arizona',
    icon: CpuIcon,
    image: heroBuildingImg,
    imageAlt: 'APD facility exterior in Phoenix, Arizona',
    heroImage: electronicWasteHeroImg,
    heroImageAlt: 'Electronic devices and components sorted for data-secure destruction',
    teaser: 'Devices and components destroyed with data-bearing materials handled separately from general e-waste recycling.',
    heroIntro: 'Devices, components, and data-bearing hardware destroyed and routed to responsible e-waste recovery.',
    description: [
      'Electronic waste is processed with an eye toward both data security and materials recovery. Data-bearing components are handled separately from general electronics, and APD works with specialists in electronics materials recovery to reclaim every viable metal and reusable resource, rather than routing product to a landfill. Every step is handled with brand protection in mind, so recovered materials can never be traced back to a sellable, brand-identifiable product.',
      'Separating data-bearing components first is the part that matters for compliance. Drives, boards and storage media follow a different path from housings, cabling and general electronics, so the security-sensitive fraction is never sitting in a mixed pile waiting on a downstream recycler to sort it.',
      'What is left has real recoverable value — copper, aluminum, steel and board-level material all have established downstream markets. Recovering them is both the environmentally better outcome and the reason e-waste rarely needs to reach a landfill at all.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Consumer and commercial devices, circuit boards, cabling, housings, components, and data-bearing hardware.' },
      { label: 'How it works', value: 'Data-bearing components are separated and handled first, then remaining material goes to specialist metals and electronics recovery.' },
      { label: 'Brand protection', value: 'Recovered material is processed so it cannot be traced back to a sellable, brand-identifiable product.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '+800', l: 'tons of metals diverted in 2025' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '0%', l: 'data-bearing product left unaccounted for' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
    ],
    metaTitle: 'E-Waste Destruction in Phoenix, AZ',
    metaDescription:
      'Electronic waste destruction in Phoenix, AZ. Data-bearing components handled separately from general e-waste, with metals and materials recovered rather than landfilled.',
  },
  {
    slug: 'aluminum-metals',
    title: 'Aluminum & Metals',
    h1: 'Aluminum & Metal Recycling in Phoenix, Arizona',
    icon: CoinsIcon,
    image: metalCansImg,
    imageAlt: 'Crushed aluminum cans separated for metal recovery',
    heroImage: metalCansImg,
    heroImageAlt: 'Aluminum recovered from destruction loads and sorted for recycling',
    teaser: 'Aluminum, steel and mixed metals separated and diverted to recyclers instead of landfill.',
    heroIntro: 'Aluminum, steel, and mixed metals separated out of destruction loads and diverted to recyclers.',
    description: [
      'Metal recovered from beverage cans, packaging, and general destruction work is one of our clearest sustainability wins. It has a ready downstream market, so keeping it out of the landfill is both an environmental and an economic decision. We separate metals on-site as part of our normal destruction workflow rather than as a separate service, so clients get the recovery benefit without added logistics or cost.',
      'Aluminum in particular is worth recovering every time. It can be recycled repeatedly without meaningful loss of quality, and the downstream market for it is stable enough that separation always pays for itself rather than being a cost centre absorbed into the job.',
      'Because separation happens as part of the destruction workflow, there is nothing extra to schedule or quote. If your load contains metal, it comes out of the waste stream by default.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Aluminum cans and packaging, steel, mixed metals, and metal recovered from beverage and general destruction loads.' },
      { label: 'How it works', value: 'Metals are separated on-site during the normal destruction workflow, not as a separate scheduled service.' },
      { label: 'Cost', value: 'No added logistics or line-item cost — recovery is part of how loads are processed.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '+800', l: 'tons of metals diverted in 2025' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '0%', l: 'product to the public sewer' },
    ],
    metaTitle: 'Aluminum & Metal Recycling, Phoenix',
    metaDescription:
      'Aluminum and metal recovery in Phoenix, AZ. Metals separated on-site during destruction and diverted to recyclers instead of landfill, at no added logistics cost.',
  },
  {
    slug: 'general-consumer-goods',
    title: 'General Consumer Goods',
    h1: 'Consumer Goods Destruction in Phoenix, Arizona',
    icon: CubeIcon,
    image: plasticContainersImg,
    imageAlt: 'Mixed consumer goods and plastic containers staged for destruction',
    heroImage: plasticContainersImg,
    heroImageAlt: 'Health, beauty and home goods sorted for documented destruction',
    teaser: 'Health, beauty, home goods and mixed consumer product destroyed and documented, regardless of category.',
    heroIntro: 'Health, beauty, home goods, and other mixed consumer product, destroyed and documented regardless of category.',
    description: [
      "Not every product fits neatly into a single category, and that's the point of this service: general consumer goods — health and beauty items, home goods, seasonal product, mixed-category overstock — get the same direct handling and documentation as our named service lines.",
      'Mixed loads are normal here rather than an exception. A pallet that combines cosmetics, small appliances and packaged home goods does not need to be sorted by category before it reaches us; separation happens on our floor as part of processing.',
      "If your product doesn't fit the other nine categories, it almost certainly fits here. When in doubt, send a photo of the pallet and we'll tell you how it would be handled.",
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Health and beauty products, cosmetics, home goods, small appliances, seasonal product, and mixed-category overstock.' },
      { label: 'How it works', value: 'Mixed loads are separated on our floor during processing — no need to sort by category before pickup.' },
      { label: 'Not sure it fits?', value: 'Send a photo of the pallet and we will confirm how it would be handled before anything ships.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '10+', l: 'material categories handled under one roof' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '24hr', l: 'reply time on new inquiries' },
    ],
    metaTitle: 'Consumer Goods Destruction, Phoenix',
    metaDescription:
      'Consumer goods destruction in Phoenix, AZ. Health and beauty, home goods and mixed-category overstock destroyed and documented with the same rigor as every named line.',
  },
  {
    slug: 'packaging-materials',
    title: 'Packaging Materials',
    h1: 'Packaging Materials Recovery in Phoenix, Arizona',
    icon: ArchiveIcon,
    image: cardboardTextureImg,
    imageAlt: 'Mixed packaging materials including film and corrugated stock',
    heroImage: packagingMaterialsHeroImg,
    heroImageAlt: 'Bundled plastic film and packaging separated for downstream recovery',
    teaser: 'Film, shrink wrap, corrugated and rigid plastics separated out of destruction loads and recovered rather than trashed.',
    heroIntro: 'Mixed packaging separated and recovered alongside the destruction work itself, instead of going out with general trash.',
    description: [
      "Packaging is frequently the largest volume component of a load by weight, even when it's not the material being destroyed — arriving from beverage loads, liquidation pallets, and general destruction work alike. We separate and recover packaging alongside the destruction work itself: mixed film, shrink wrap, corrugated, and rigid plastics, rather than sending it out with general trash. This runs in parallel with our OCC/cardboard recovery line for clients whose loads combine both.",
      'Treating packaging as waste is the default almost everywhere, and it is the single biggest missed diversion opportunity in a typical destruction load. Film and rigid plastics both have downstream homes if they are separated cleanly and kept dry, which is a sorting problem rather than a technical one.',
      'For clients tracking landfill diversion as a sustainability metric, packaging recovery is usually where the number moves most, because it is the heaviest fraction of what arrives.',
    ],
    quickFacts: [
      { label: 'Materials accepted', value: 'Mixed film, shrink wrap, stretch wrap, corrugated, rigid plastics, and packaging separated out of destruction loads.' },
      { label: 'How it works', value: 'Packaging is separated during processing and routed to recovery rather than leaving with general trash.' },
      { label: 'Combined loads', value: 'Runs in parallel with the OCC/cardboard line, so mixed product-and-packaging loads move on one pickup.' },
      DOCUMENTATION_FACT,
      AREA_FACT,
    ],
    stats: [
      { v: '26,000', l: 'tons of OCC recycled in 2025' },
      { v: '+72%', l: 'of materials received have a downstream second use' },
      { v: '100%', l: 'loads closed with a Certificate of Destruction' },
      { v: '0', l: 'separate pickups needed for mixed product + packaging loads' },
    ],
    metaTitle: 'Packaging Materials Recovery, AZ',
    metaDescription:
      'Packaging recovery in Phoenix, AZ. Film, shrink wrap, corrugated and rigid plastics separated during destruction and routed to recycling instead of landfill.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
