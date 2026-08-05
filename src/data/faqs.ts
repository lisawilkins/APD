import type { ServiceSlug } from './routes'

/**
 * Question-and-answer content.
 *
 * Answer engines extract self-contained Q&A pairs, so each `answer` opens with
 * a direct response in the first sentence and stays around 40–60 words. The
 * same objects render the on-page `<details>` blocks and generate the FAQPage
 * JSON-LD, so the visible text and the structured data can never disagree —
 * which is also what Google requires for FAQ markup.
 */
export interface Faq {
  question: string
  answer: string
  /**
   * Surfaced in the short teaser set on the homepage. Reserve for the handful
   * of highest-intent questions — the full set lives on /faq.
   */
  featured?: boolean
}

/** The full general set. Rendered on /faq, which owns the FAQPage schema. */
export const GENERAL_FAQS: Faq[] = [
  {
    featured: true,
    question: 'What areas does APD serve?',
    answer:
      "We're based in Arizona and serve customers across the continental U.S. Within Arizona (from Page to Tucson, and Yuma to Flagstaff) we handle logistics with our own dedicated local fleet. Beyond Arizona, we use our trusted shipping partners to service the entire lower 48. For specialty product destruction we have partnered with destruction facilities across the Southwest.",
  },
  {
    question: 'How is direct product destruction different from using a broker?',
    answer:
      'A broker sells your job to whoever will take it, then marks up the price. APD owns the equipment and the warehouses, so your product never changes hands. That means lower cost, one point of contact, and the ability to stand on our floor and watch your own product be destroyed.',
  },
  {
    question: 'What proof of destruction do you provide?',
    answer:
      'Every load closes with a Certificate of Destruction documenting volume, SKU, and disposition. Beyond the certificate, you can request video of the destruction, photographs, or arrange to view the process live at our Phoenix facility. Compliance teams usually pick the format their auditor expects.',
  },
  {
    question: 'Do you destroy recalled products?',
    answer:
      'Yes. Recalled product is a core part of what we handle, along with expired, damaged, faulty, discontinued, and unsellable goods. Recall work is treated as time-sensitive: the priority is getting product off your floor quickly and issuing documentation as soon as the load is processed.',
  },
  {
    question: 'Can I watch my product being destroyed?',
    answer:
      'Yes. Live on-site viewing at our Phoenix warehouse is one of three proof options, alongside video and photographs. This is only possible because we destroy product ourselves rather than subcontracting it — there is no third-party facility standing between you and your load.',
  },
  {
    question: 'What types of products does APD destroy?',
    answer:
      'Beverages, nutritional supplements and psyllium, apparel and textiles, footwear and accessories, electronics, aluminum and metals, liquidation pallets, packaging materials, and general consumer goods. If a product does not fit a named category, it is handled under general consumer goods with the same documentation.',
  },
  {
    question: 'How much does product destruction cost?',
    answer:
      'Cost depends on material type, volume, and how the load arrives, so every job is quoted individually. Because there is no broker taking a margin in the middle, direct destruction is typically cheaper than the same work arranged through an intermediary. We reply to new inquiries within 24 hours.',
  },
  {
    question: 'What happens to product after it is destroyed?',
    answer:
      'Wherever possible it is recovered rather than landfilled. More than 72% of the material we receive has a downstream second use. In 2025 that came to 26,000 tons of cardboard recycled, over 800 tons of metals diverted, and more than 180 loads sent to approved waste-to-energy facilities rather than landfill.',
  },
  {
    featured: true,
    question: 'How much waste does APD divert from landfill?',
    answer:
      'In 2025, APD recycled 26,000 tons of old corrugated cardboard, diverted more than 800 tons of metals, and routed over 180 loads to approved waste-to-energy facilities. Across all materials received, more than 72% has a downstream second use, and zero beverage product enters the public sewer.',
  },
  {
    featured: true,
    question: 'What sort of custom solutions do you offer?',
    answer:
      'We can process almost any product. After seeing it, we test our process on a small shipment, determine whether machinery updates or new equipment are needed, and write an SOP — the basis for an efficient, cost-effective quote. Turnaround can be as little as a week, depending on product complexity.',
  },
  {
    question: 'Is APD certified?',
    answer:
      'APD is an SBA-certified Woman-Owned Small Business and the only company in Arizona holding Coca-Cola destruction certification. We have been operating in product destruction for over 23 years across two Phoenix warehouses.',
  },
]

/** The teaser set on the homepage, linking through to the full list on /faq. */
export const FEATURED_FAQS: Faq[] = GENERAL_FAQS.filter((faq) => faq.featured)

/**
 * Service-specific questions, keyed by slug.
 *
 * NOT CURRENTLY RENDERED. These were removed from the `/services/:slug` pages
 * at the client's request. The content is kept here rather than deleted — it is
 * still accurate and could be folded into `/faq` as per-service groups, or
 * restored to the service pages later. Delete it if neither is planned.
 */
export const SERVICE_FAQS: Record<ServiceSlug, Faq[]> = {
  beverages: [
    {
      question: 'What does a zero-product-to-sewer commitment mean?',
      answer:
        'It means no recalled or expired beverage is poured down a drain. We separate liquid from container so the two waste streams stay distinct, then route recovered liquid to downstream second use or permitted treatment. Pouring product to sewer is fast but creates compliance exposure later.',
    },
    {
      question: 'Do you destroy kegs and multi-pack packaging?',
      answer:
        'Yes. Aluminum cans, glass and plastic bottles, kegs, and multi-pack packaging are all handled on our beverage line. Containers are separated from liquid, crushed, and routed into packaging and metals recovery rather than going out as general waste.',
    },
    {
      question: 'Are you certified for Coca-Cola product destruction?',
      answer:
        'Yes. APD is the only company in Arizona holding Coca-Cola destruction certification. We process roughly 80% of Arizona’s beverage market and handle about 724,000 gallons per year across our Phoenix warehouses.',
    },
  ],
  psyllium: [
    {
      question: 'Why does psyllium need specialised equipment?',
      answer:
        'Fine powdered product travels, clings to packaging, and does not separate cleanly on equipment built for rigid goods. We built dedicated machinery for it rather than adapting a general line, which is why supplement manufacturers who have had product rejected or partially processed elsewhere often come to us.',
    },
    {
      question: 'Can you handle batch and lot documentation?',
      answer:
        'Yes. Batch and lot tracking follows the same standard as our other lines, which matters for supplement clients working under recall or FDA-driven disposal requirements. Every job closes with a Certificate of Destruction recording volume, SKU, and disposition.',
    },
    {
      question: 'Is destroyed psyllium landfilled?',
      answer:
        'No. Every unit is downstreamed into a new secondary use rather than sent to landfill. The repurposing method is proprietary, developed over years of working with this material, but the outcome is that product destined for destruction gets a genuinely new life.',
    },
  ],
  'occ-cardboard': [
    {
      question: 'Do you accept loose cardboard or does it need to be baled?',
      answer:
        'Both. OCC arrives as intact packaging, loose, or already baled. We sort it on arrival, remove contaminated or wet material, then compact and bale it before shipping to recycling partners. Sorting on arrival is what keeps the recoverable fraction clean enough for a mill to accept.',
    },
    {
      question: 'Can cardboard recovery be combined with a destruction pickup?',
      answer:
        'Yes. The OCC line runs alongside our destruction lines, so a single pickup can carry both product and packaging. For clients running mixed loads that means one scheduled collection instead of two vendors and two sets of paperwork.',
    },
    {
      question: 'What packaging materials do you take besides cardboard?',
      answer:
        'Shrink wrap, stretch film, mixed paper packaging, and rigid plastic packaging alongside corrugated cardboard. Material that is contaminated or wet is separated out before baling so it does not degrade the value of the rest of the load.',
    },
  ],
  'liquidation-pallets': [
    {
      question: 'Do you destroy the product or just the packaging?',
      answer:
        'The product itself. Destroying only packaging leaves goods that can be repackaged and resold. We break down the product so there is no path back to a shelf, which is the entire point for brands worried about returns resurfacing on a marketplace months later.',
    },
    {
      question: 'Can usable liquidation product be donated instead?',
      answer:
        'Yes, with your approval. Where product is still usable and you authorise it, we can redirect it to community donation rather than destroying it. That keeps goods out of landfill while still removing them from your resale channel.',
    },
    {
      question: 'What documentation comes with a liquidation load?',
      answer:
        'Each pallet is logged on arrival and closed out with a Certificate of Destruction. Photo or video documentation is added depending on what your compliance team requires, and live viewing at our Phoenix facility is available on request.',
    },
  ],
  'textiles-apparel': [
    {
      question: 'How do you stop branded apparel from being resold?',
      answer:
        'Fabric is shredded past the point of resale value, and labels, tags and branded trim are handled as a separate stream. Trim is the piece most often underestimated — a garment can be cut apart and still leave a usable label behind, which is exactly what a counterfeiter needs.',
    },
    {
      question: 'Is shredded textile material landfilled?',
      answer:
        'No. We partner with fabric and textile destruction specialists in the Southwest who share our zero-landfill goal, and coordinate downstream solutions for the shredded material rather than disposing of it.',
    },
    {
      question: 'Can unsold inventory be resold instead of destroyed?',
      answer:
        'Yes. For clients who prefer it, we offer solutions for redirecting unsold but usable inventory to secondary markets or resale platforms. Destruction is the right answer for samples and recalled goods; overstock sometimes has a better option.',
    },
  ],
  'footwear-accessories': [
    {
      question: 'How is footwear destroyed so it cannot be rebuilt?',
      answer:
        'Soles, uppers and hardware are separated and broken down individually. Footwear is several materials bonded together, which makes it both hard to recycle and easy to counterfeit from parts — separating components solves both problems, since none survives intact enough to rebuild a saleable pair.',
    },
    {
      question: 'Do you handle recalled footwear on short notice?',
      answer:
        'Yes. Footwear work frequently overlaps with recalls, where speed and documentation matter as much as the destruction itself. The practical questions are how fast product can come off your floor and how soon you have paperwork proving it is gone — both are treated as priorities.',
    },
    {
      question: 'What happens to the recovered materials?',
      answer:
        'We partner with a specialist in footwear destruction and materials reclamation to recover the maximum amount of reusable material from soles, uppers and hardware, rather than sending the load to landfill.',
    },
  ],
  'electronic-waste': [
    {
      question: 'How are data-bearing components handled?',
      answer:
        'Separately, and first. Drives, boards and storage media follow a different path from housings, cabling and general electronics, so the security-sensitive fraction is never sitting in a mixed pile waiting on a downstream recycler to sort it.',
    },
    {
      question: 'What electronics do you accept?',
      answer:
        'Consumer and commercial devices, circuit boards, cabling, housings, components, and data-bearing hardware. Material is routed to specialists in electronics and metals recovery so copper, aluminum, steel and board-level material are reclaimed rather than landfilled.',
    },
    {
      question: 'Can recovered e-waste be traced back to our brand?',
      answer:
        'No. Material is processed so recovered components cannot be traced back to a sellable, brand-identifiable product. Brand protection is handled as part of the destruction process rather than left to the downstream recycler.',
    },
  ],
  'aluminum-metals': [
    {
      question: 'Is metal recovery charged as a separate service?',
      answer:
        'No. Metals are separated on-site as part of the normal destruction workflow rather than as a separate scheduled service, so there is nothing extra to quote or arrange. If your load contains metal, it comes out of the waste stream by default.',
    },
    {
      question: 'Which metals do you recover?',
      answer:
        'Aluminum, steel and mixed metals, including metal recovered from beverage cans, packaging, and general destruction loads. Aluminum in particular can be recycled repeatedly without meaningful loss of quality, so separating it always pays for itself.',
    },
    {
      question: 'Why does metal recovery matter for sustainability reporting?',
      answer:
        'Metals have a stable downstream market, so diverting them is one of the clearest and most measurable landfill-diversion wins in a destruction load. More than 72% of material we receive overall has a downstream second use.',
    },
  ],
  'general-consumer-goods': [
    {
      question: 'What if my product does not fit a named category?',
      answer:
        'It fits here. General consumer goods covers health and beauty items, cosmetics, home goods, small appliances, seasonal product and mixed-category overstock, all handled with the same documentation as our named service lines.',
    },
    {
      question: 'Do mixed pallets need to be sorted before pickup?',
      answer:
        'No. Mixed loads are normal rather than an exception. A pallet combining cosmetics, small appliances and packaged home goods can arrive as-is — separation happens on our floor as part of processing.',
    },
    {
      question: 'How do I check whether you can take my product?',
      answer:
        'Send a photo of the pallet and we will confirm how it would be handled before anything ships. We reply to new inquiries within 24 hours.',
    },
  ],
  'packaging-materials': [
    {
      question: 'Why separate packaging instead of throwing it out?',
      answer:
        'Packaging is usually the heaviest fraction of a destruction load, which makes it the single biggest missed diversion opportunity. Film and rigid plastics both have downstream homes if they are separated cleanly and kept dry — a sorting problem rather than a technical one.',
    },
    {
      question: 'What packaging materials do you recover?',
      answer:
        'Mixed film, shrink wrap, stretch wrap, corrugated, rigid plastics, and packaging separated out of destruction loads. Recovery runs in parallel with our OCC and cardboard line, so mixed product-and-packaging loads move on a single pickup.',
    },
    {
      question: 'Does packaging recovery help our landfill diversion numbers?',
      answer:
        'Usually more than anything else in the load. Because packaging is the heaviest fraction of what arrives, recovering it is where a diversion metric typically moves most.',
    },
  ],
}
