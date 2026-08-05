# Copy Review — passages written by Claude

Everything below was **written by Claude**, not supplied by APD. It was extrapolated from the short copy that already existed, so it reads plausibly but is **unverified**.

Please mark each item **Keep / Edit / Cut**. Anything cut is removed with no side effects — none of it is load-bearing for the site's structure.

Copy that APD supplied originally is *not* listed here; it is untouched except where noted as EDITED (typo fixes and splits of existing sentences).

---

## 1. Service page body copy

Location: `src/data/services.ts` → `description`. These paragraphs sit under "How we handle …" on each service page.

### `/services/beverages`

- [ ] **NEW — written by Claude**

  > The zero-product-to-sewer commitment is the part beverage clients ask about most. Pouring recalled or expired product down a drain is the fastest route to disposal and the one most likely to create a compliance problem later. We separate liquid from container instead, keeping the two waste streams distinct so each can be documented and routed appropriately.

- [ ] **NEW — written by Claude**

  > Because we own the equipment and the warehouses, a beverage load never changes hands. There is no broker in the middle deciding where your product ends up, which is what makes it possible to offer live viewing — you can stand on our floor and watch your own product go through the line.

### `/services/psyllium`

- [ ] **NEW — written by Claude**

  > Fine powdered product is genuinely difficult to destroy well. It travels, it clings to packaging, and it does not separate cleanly on equipment designed for rigid goods. That is the reason we built dedicated machinery for it rather than adapting a general line, and it is why supplement manufacturers who have had product rejected or partially processed elsewhere tend to end up here.

- [ ] **NEW — written by Claude**

  > Batch and lot documentation follows the same standard as our other lines, which matters for supplement clients working under recall or FDA-driven disposal requirements. Every job closes with a Certificate of Destruction.

### `/services/occ-cardboard`

- [ ] *EDITED from APD original*

  > We run this alongside our destruction lines, so a single pickup can combine both material types. For clients running mixed loads of product and packaging, that means one scheduled pickup instead of two vendors and two sets of paperwork.

- [ ] **NEW — written by Claude**

  > Fiber quality drives what a load is worth downstream, so sorting happens on arrival rather than at the far end. Contaminated or wet material is separated out before baling, which keeps the recoverable fraction clean enough to actually be accepted by a mill.

### `/services/liquidation-pallets`

- [ ] **NEW — written by Claude**

  > That distinction matters more than it sounds. A pallet sold to a liquidator is a pallet you no longer control, and branded product that resurfaces on a marketplace months later is indistinguishable to a customer from product you sold deliberately. Destroying the goods outright removes that exposure entirely.

### `/services/textiles-apparel`

- [ ] **NEW — written by Claude**

  > Branded trim is the piece most often underestimated. A garment can be cut apart and still leave a usable label, woven tag, or hardware behind, and those components are exactly what a counterfeiter needs. Handling them as their own stream rather than as part of the general shred is what makes the destruction meaningful rather than cosmetic.

### `/services/footwear-accessories`

- [ ] **NEW — written by Claude**

  > Footwear is built from several materials bonded together, which is what makes it both hard to recycle and easy to counterfeit from parts. Separating soles, uppers and hardware addresses both problems at once: the components become recoverable, and none of them survives intact enough to rebuild a saleable pair.

- [ ] *EDITED from APD original*

  > This category often overlaps with recall work, where speed and documentation matter as much as the destruction itself. When a recall is active, the useful answer is usually how quickly product can come off your floor and how soon you will have paperwork proving it is gone.

### `/services/electronic-waste`

- [ ] **NEW — written by Claude**

  > Separating data-bearing components first is the part that matters for compliance. Drives, boards and storage media follow a different path from housings, cabling and general electronics, so the security-sensitive fraction is never sitting in a mixed pile waiting on a downstream recycler to sort it.

- [ ] **NEW — written by Claude**

  > What is left has real recoverable value — copper, aluminum, steel and board-level material all have established downstream markets. Recovering them is both the environmentally better outcome and the reason e-waste rarely needs to reach a landfill at all.

### `/services/aluminum-metals`

- [ ] **NEW — written by Claude**

  > Aluminum in particular is worth recovering every time. It can be recycled repeatedly without meaningful loss of quality, and the downstream market for it is stable enough that separation always pays for itself rather than being a cost centre absorbed into the job.

- [ ] **NEW — written by Claude**

  > Because separation happens as part of the destruction workflow, there is nothing extra to schedule or quote. If your load contains metal, it comes out of the waste stream by default.

### `/services/general-consumer-goods`

- [ ] **NEW — written by Claude**

  > Mixed loads are normal here rather than an exception. A pallet that combines cosmetics, small appliances and packaged home goods does not need to be sorted by category before it reaches us; separation happens on our floor as part of processing.

- [ ] *EDITED from APD original*

  > If your product doesn't fit the other nine categories, it almost certainly fits here. When in doubt, send a photo of the pallet and we'll tell you how it would be handled.

### `/services/packaging-materials`

- [ ] **NEW — written by Claude**

  > Treating packaging as waste is the default almost everywhere, and it is the single biggest missed diversion opportunity in a typical destruction load. Film and rigid plastics both have downstream homes if they are separated cleanly and kept dry, which is a sorting problem rather than a technical one.

- [ ] **NEW — written by Claude**

  > For clients tracking landfill diversion as a sustainability metric, packaging recovery is usually where the number moves most, because it is the heaviest fraction of what arrives.

**Subtotal: 15 wholly-new paragraphs, 3 edited.**

---

## 2. "At a glance" fact rows

Location: `src/data/services.ts` → `quickFacts`. Shown near the foot of each service page.

**All of these are invented.** The *Materials accepted* rows in particular assert what APD does and does not take — please check each one.

- [ ] **Shared across all 10 service pages** — `DOCUMENTATION_FACT` · *What you receive*

  > A Certificate of Destruction for every load, plus video, photos, or live on-site viewing on request.

### `/services/beverages`

- [ ] *Materials accepted*

  > Aluminum cans, glass and plastic bottles, kegs, multi-pack packaging, and full pallets of expired or recalled beverage.

- [ ] *How it works*

  > Liquid is separated from container on proprietary equipment, then containers are crushed and routed to packaging recovery.

- [ ] *Liquid handling*

  > Recovered liquid goes to downstream second use or permitted treatment. Zero product enters the public sewer.

### `/services/psyllium`

- [ ] *Materials accepted*

  > Psyllium husk and powder, fiber supplements, capsules, tubs, sachets, and mixed supplement packaging.

- [ ] *How it works*

  > Destroyed on machinery built specifically for fine powdered product, then routed into a proprietary secondary use.

- [ ] *Landfill diversion*

  > Product is repurposed into a new downstream use rather than sent to landfill.

### `/services/occ-cardboard`

- [ ] *Materials accepted*

  > Corrugated cardboard loose or pre-baled, shrink wrap, stretch film, mixed paper packaging, and rigid plastic packaging.

- [ ] *How it works*

  > Sorted on arrival, contaminants removed, compacted and baled, then shipped to downstream recycling partners.

- [ ] *Combined loads*

  > Runs alongside our destruction lines, so product and packaging can move on a single pickup.

### `/services/liquidation-pallets`

- [ ] *Materials accepted*

  > Retail returns, shelf-pulls, overstock, failed shipments, damaged goods, and mixed-category pallets.

- [ ] *How it works*

  > Each pallet is logged on arrival and the product itself is destroyed — not just the packaging — so it cannot re-enter resale.

- [ ] *Donation option*

  > With client approval, usable product can be redirected to community donation instead of destruction.

### `/services/textiles-apparel`

- [ ] *Materials accepted*

  > Branded apparel, seasonal overstock, damaged inventory, pre-production samples, fabric rolls, and branded soft goods.

- [ ] *How it works*

  > Fabric is shredded past resale value, with labels, tags and branded trim handled as a separate stream.

- [ ] *Landfill diversion*

  > Shredded material is routed to downstream partners who share our zero-landfill goal.

### `/services/footwear-accessories`

- [ ] *Materials accepted*

  > Shoes, boots, handbags, belts, branded accessories, hardware, and counterfeit-risk or recalled footwear.

- [ ] *How it works*

  > Soles, uppers and hardware are separated and broken down so the product cannot be reconstructed or resold.

- [ ] *Recall support*

  > Handled as time-sensitive work, with documentation issued as soon as the load is processed.

### `/services/electronic-waste`

- [ ] *Materials accepted*

  > Consumer and commercial devices, circuit boards, cabling, housings, components, and data-bearing hardware.

- [ ] *How it works*

  > Data-bearing components are separated and handled first, then remaining material goes to specialist metals and electronics recovery.

- [ ] *Brand protection*

  > Recovered material is processed so it cannot be traced back to a sellable, brand-identifiable product.

### `/services/aluminum-metals`

- [ ] *Materials accepted*

  > Aluminum cans and packaging, steel, mixed metals, and metal recovered from beverage and general destruction loads.

- [ ] *How it works*

  > Metals are separated on-site during the normal destruction workflow, not as a separate scheduled service.

- [ ] *Cost*

  > No added logistics or line-item cost — recovery is part of how loads are processed.

### `/services/general-consumer-goods`

- [ ] *Materials accepted*

  > Health and beauty products, cosmetics, home goods, small appliances, seasonal product, and mixed-category overstock.

- [ ] *How it works*

  > Mixed loads are separated on our floor during processing — no need to sort by category before pickup.

- [ ] *Not sure it fits?*

  > Send a photo of the pallet and we will confirm how it would be handled before anything ships.

### `/services/packaging-materials`

- [ ] *Materials accepted*

  > Mixed film, shrink wrap, stretch wrap, corrugated, rigid plastics, and packaging separated out of destruction loads.

- [ ] *How it works*

  > Packaging is separated during processing and routed to recovery rather than leaving with general trash.

- [ ] *Combined loads*

  > Runs in parallel with the OCC/cardboard line, so mixed product-and-packaging loads move on one pickup.

**Subtotal: 31 fact rows.**

---

## 3. FAQ answers — `/faq`

Location: `src/data/faqs.ts` → `GENERAL_FAQS`. Ten questions on the FAQ page; four also appear on the homepage.

**All questions and answers are written by Claude.** The cost and service-area answers are the ones most likely to be wrong.

- [ ] **What areas does APD serve?**

  > We're based in Arizona and serve customers across the continental U.S. Within Arizona (from Page to Tucson, and Yuma to Flagstaff) we handle logistics with our own dedicated local fleet. Beyond Arizona, we use our trusted shipping partners to service the entire lower 48. For specialty product destruction we have partnered with destruction facilities across the Southwest.

- [ ] **How is direct product destruction different from using a broker?**

  > A broker sells your job to whoever will take it, then marks up the price. APD owns the equipment and the warehouses, so your product never changes hands. That means lower cost, one point of contact, and the ability to stand on our floor and watch your own product be destroyed.

- [ ] **What proof of destruction do you provide?**

  > Every load closes with a Certificate of Destruction documenting volume, SKU, and disposition. Beyond the certificate, you can request video of the destruction, photographs, or arrange to view the process live at our Phoenix facility. Compliance teams usually pick the format their auditor expects.

- [ ] **Do you destroy recalled products?**

  > Yes. Recalled product is a core part of what we handle, along with expired, damaged, faulty, discontinued, and unsellable goods. Recall work is treated as time-sensitive: the priority is getting product off your floor quickly and issuing documentation as soon as the load is processed.

- [ ] **Can I watch my product being destroyed?**

  > Yes. Live on-site viewing at our Phoenix warehouse is one of three proof options, alongside video and photographs. This is only possible because we destroy product ourselves rather than subcontracting it — there is no third-party facility standing between you and your load.

- [ ] **What types of products does APD destroy?**

  > Beverages, nutritional supplements and psyllium, apparel and textiles, footwear and accessories, electronics, aluminum and metals, liquidation pallets, packaging materials, and general consumer goods. If a product does not fit a named category, it is handled under general consumer goods with the same documentation.

- [ ] **How much does product destruction cost?**

  > Cost depends on material type, volume, and how the load arrives, so every job is quoted individually. Because there is no broker taking a margin in the middle, direct destruction is typically cheaper than the same work arranged through an intermediary. We reply to new inquiries within 24 hours.

- [ ] **What happens to product after it is destroyed?**

  > Wherever possible it is recovered rather than landfilled. More than 72% of the material we receive has a downstream second use. In 2025 that came to 26,000 tons of cardboard recycled, over 800 tons of metals diverted, and more than 180 loads sent to approved waste-to-energy facilities rather than landfill.

- [ ] **How much waste does APD divert from landfill?**

  > In 2025, APD recycled 26,000 tons of old corrugated cardboard, diverted more than 800 tons of metals, and routed over 180 loads to approved waste-to-energy facilities. Across all materials received, more than 72% has a downstream second use, and zero beverage product enters the public sewer.

- [ ] **What sort of custom solutions do you offer?**

  > We can process almost any product. After seeing it, we test our process on a small shipment, determine whether machinery updates or new equipment are needed, and write an SOP — the basis for an efficient, cost-effective quote. Turnaround can be as little as a week, depending on product complexity.

- [ ] **Is APD certified?**

  > APD is an SBA-certified Woman-Owned Small Business and the only company in Arizona holding Coca-Cola destruction certification. We have been operating in product destruction for over 23 years across two Phoenix warehouses.

**Subtotal: 11 Q&As.**

---

## 4. FAQ answers — per service (NOT CURRENTLY ON THE SITE)

Location: `src/data/faqs.ts` → `SERVICE_FAQS`. Removed from the service pages at your request; retained in the codebase only. Review only if you want them restored or folded into `/faq` — otherwise mark the whole section **Cut**.

- [ ] **What does a zero-product-to-sewer commitment mean?**

  > It means no recalled or expired beverage is poured down a drain. We separate liquid from container so the two waste streams stay distinct, then route recovered liquid to downstream second use or permitted treatment. Pouring product to sewer is fast but creates compliance exposure later.

- [ ] **Do you destroy kegs and multi-pack packaging?**

  > Yes. Aluminum cans, glass and plastic bottles, kegs, and multi-pack packaging are all handled on our beverage line. Containers are separated from liquid, crushed, and routed into packaging and metals recovery rather than going out as general waste.

- [ ] **Are you certified for Coca-Cola product destruction?**

  > Yes. APD is the only company in Arizona holding Coca-Cola destruction certification. We process roughly 80% of Arizona’s beverage market and handle about 724,000 gallons per year across our Phoenix warehouses.

- [ ] **Why does psyllium need specialised equipment?**

  > Fine powdered product travels, clings to packaging, and does not separate cleanly on equipment built for rigid goods. We built dedicated machinery for it rather than adapting a general line, which is why supplement manufacturers who have had product rejected or partially processed elsewhere often come to us.

- [ ] **Can you handle batch and lot documentation?**

  > Yes. Batch and lot tracking follows the same standard as our other lines, which matters for supplement clients working under recall or FDA-driven disposal requirements. Every job closes with a Certificate of Destruction recording volume, SKU, and disposition.

- [ ] **Is destroyed psyllium landfilled?**

  > No. Every unit is downstreamed into a new secondary use rather than sent to landfill. The repurposing method is proprietary, developed over years of working with this material, but the outcome is that product destined for destruction gets a genuinely new life.

- [ ] **Do you accept loose cardboard or does it need to be baled?**

  > Both. OCC arrives as intact packaging, loose, or already baled. We sort it on arrival, remove contaminated or wet material, then compact and bale it before shipping to recycling partners. Sorting on arrival is what keeps the recoverable fraction clean enough for a mill to accept.

- [ ] **Can cardboard recovery be combined with a destruction pickup?**

  > Yes. The OCC line runs alongside our destruction lines, so a single pickup can carry both product and packaging. For clients running mixed loads that means one scheduled collection instead of two vendors and two sets of paperwork.

- [ ] **What packaging materials do you take besides cardboard?**

  > Shrink wrap, stretch film, mixed paper packaging, and rigid plastic packaging alongside corrugated cardboard. Material that is contaminated or wet is separated out before baling so it does not degrade the value of the rest of the load.

- [ ] **Do you destroy the product or just the packaging?**

  > The product itself. Destroying only packaging leaves goods that can be repackaged and resold. We break down the product so there is no path back to a shelf, which is the entire point for brands worried about returns resurfacing on a marketplace months later.

- [ ] **Can usable liquidation product be donated instead?**

  > Yes, with your approval. Where product is still usable and you authorise it, we can redirect it to community donation rather than destroying it. That keeps goods out of landfill while still removing them from your resale channel.

- [ ] **What documentation comes with a liquidation load?**

  > Each pallet is logged on arrival and closed out with a Certificate of Destruction. Photo or video documentation is added depending on what your compliance team requires, and live viewing at our Phoenix facility is available on request.

- [ ] **How do you stop branded apparel from being resold?**

  > Fabric is shredded past the point of resale value, and labels, tags and branded trim are handled as a separate stream. Trim is the piece most often underestimated — a garment can be cut apart and still leave a usable label behind, which is exactly what a counterfeiter needs.

- [ ] **Is shredded textile material landfilled?**

  > No. We partner with fabric and textile destruction specialists in the Southwest who share our zero-landfill goal, and coordinate downstream solutions for the shredded material rather than disposing of it.

- [ ] **Can unsold inventory be resold instead of destroyed?**

  > Yes. For clients who prefer it, we offer solutions for redirecting unsold but usable inventory to secondary markets or resale platforms. Destruction is the right answer for samples and recalled goods; overstock sometimes has a better option.

- [ ] **How is footwear destroyed so it cannot be rebuilt?**

  > Soles, uppers and hardware are separated and broken down individually. Footwear is several materials bonded together, which makes it both hard to recycle and easy to counterfeit from parts — separating components solves both problems, since none survives intact enough to rebuild a saleable pair.

- [ ] **Do you handle recalled footwear on short notice?**

  > Yes. Footwear work frequently overlaps with recalls, where speed and documentation matter as much as the destruction itself. The practical questions are how fast product can come off your floor and how soon you have paperwork proving it is gone — both are treated as priorities.

- [ ] **What happens to the recovered materials?**

  > We partner with a specialist in footwear destruction and materials reclamation to recover the maximum amount of reusable material from soles, uppers and hardware, rather than sending the load to landfill.

- [ ] **How are data-bearing components handled?**

  > Separately, and first. Drives, boards and storage media follow a different path from housings, cabling and general electronics, so the security-sensitive fraction is never sitting in a mixed pile waiting on a downstream recycler to sort it.

- [ ] **What electronics do you accept?**

  > Consumer and commercial devices, circuit boards, cabling, housings, components, and data-bearing hardware. Material is routed to specialists in electronics and metals recovery so copper, aluminum, steel and board-level material are reclaimed rather than landfilled.

- [ ] **Can recovered e-waste be traced back to our brand?**

  > No. Material is processed so recovered components cannot be traced back to a sellable, brand-identifiable product. Brand protection is handled as part of the destruction process rather than left to the downstream recycler.

- [ ] **Is metal recovery charged as a separate service?**

  > No. Metals are separated on-site as part of the normal destruction workflow rather than as a separate scheduled service, so there is nothing extra to quote or arrange. If your load contains metal, it comes out of the waste stream by default.

- [ ] **Which metals do you recover?**

  > Aluminum, steel and mixed metals, including metal recovered from beverage cans, packaging, and general destruction loads. Aluminum in particular can be recycled repeatedly without meaningful loss of quality, so separating it always pays for itself.

- [ ] **Why does metal recovery matter for sustainability reporting?**

  > Metals have a stable downstream market, so diverting them is one of the clearest and most measurable landfill-diversion wins in a destruction load. More than 72% of material we receive overall has a downstream second use.

- [ ] **What if my product does not fit a named category?**

  > It fits here. General consumer goods covers health and beauty items, cosmetics, home goods, small appliances, seasonal product and mixed-category overstock, all handled with the same documentation as our named service lines.

- [ ] **Do mixed pallets need to be sorted before pickup?**

  > No. Mixed loads are normal rather than an exception. A pallet combining cosmetics, small appliances and packaged home goods can arrive as-is — separation happens on our floor as part of processing.

- [ ] **How do I check whether you can take my product?**

  > Send a photo of the pallet and we will confirm how it would be handled before anything ships. We reply to new inquiries within 24 hours.

- [ ] **Why separate packaging instead of throwing it out?**

  > Packaging is usually the heaviest fraction of a destruction load, which makes it the single biggest missed diversion opportunity. Film and rigid plastics both have downstream homes if they are separated cleanly and kept dry — a sorting problem rather than a technical one.

- [ ] **What packaging materials do you recover?**

  > Mixed film, shrink wrap, stretch wrap, corrugated, rigid plastics, and packaging separated out of destruction loads. Recovery runs in parallel with our OCC and cardboard line, so mixed product-and-packaging loads move on a single pickup.

- [ ] **Does packaging recovery help our landfill diversion numbers?**

  > Usually more than anything else in the load. Because packaging is the heaviest fraction of what arrives, recovering it is where a diversion metric typically moves most.

**Subtotal: 30 Q&As, currently unpublished.**

---

## 5. Certificate of Destruction page

Location: `src/pages/ProofOfDestructionPage.tsx`. The two original APD paragraphs are unchanged and not listed. Everything below was added.

### "Three ways to prove destruction" rows

### FAQ

- [ ] **What is a Certificate of Destruction?**

  > A formal record confirming what was destroyed, when, how, and under whose oversight. It documents product type and quantity, date and method of destruction, disposition, and batch or lot numbers where traceability is required. APD issues one for every load.

- [ ] **Is a Certificate of Destruction legally binding?**

  > It is a formal business record rather than a legal instrument, but it is the document auditors, insurers and regulators typically ask for. Because APD destroys product in-house, every certificate reflects work our own team completed — there is no intermediary attesting to something they did not do.

- [ ] **How soon do I receive documentation?**

  > Documentation is issued once the load has been processed. For recall work, where speed matters most, getting product off your floor and paperwork back to you quickly is treated as the priority rather than a follow-up task.

- [ ] **Can our auditor witness the destruction?**

  > Yes. Live on-site viewing at our Phoenix warehouse is available on request, and is often what compliance teams choose when an auditor or brand representative needs to confirm destruction firsthand.

- [ ] **Do you provide batch and lot traceability?**

  > Yes, where applicable. Batch and lot numbers are recorded on the certificate, which matters most for supplement, beverage and pharmaceutical-adjacent clients working under recall or regulatory disposal requirements.

---

## 6. Homepage

### Broker vs. direct comparison table (`src/pages/HomePage.tsx`)

Entirely invented — it characterises how competitors operate, so it carries the most reputational risk of anything on this list.

- [ ] **Who handles your product** — Broker: *Sold on to a third-party facility you never see* · APD: *APD staff, in our own two Phoenix warehouses*

- [ ] **Cost** — Broker: *The facility's price plus the broker's markup* · APD: *Direct pricing with no margin in the middle*

- [ ] **Point of contact** — Broker: *A salesperson relaying messages to the actual processor* · APD: *One contact who can answer for the work itself*

- [ ] **Documentation** — Broker: *Passed along second-hand from the processor* · APD: *Certificate of Destruction issued for work we performed*

### Hero heading line

- [ ] Added above the existing tagline, inside the same `<h1>`:

  > Product destruction in Phoenix, Arizona

---

## 7. Site-wide statements

Location: `src/data/site.ts`. Each of these appears in several places at once.

- [ ] `description`

  > Direct product destruction in Phoenix, Arizona. Not a broker — APD destroys recalled, expired, damaged, and discontinued product in its own warehouses and documents every load with a Certificate of Destruction.

- [ ] `statewide`

  > We serve local customers throughout the Phoenix valley and manufacturers statewide — from Page to Tucson, from Yuma to Flagstaff.

- [ ] `national`

  > Trusted processing and shipping partners expand our reach throughout the lower 48.

---

## 8. Lower-risk items (listed for completeness)

These describe rather than assert, and are unlikely to need APD's sign-off — but they are still Claude's words.

| Item | Count | Where |
|---|---|---|

| Page titles (`metaTitle`) | 10 | Browser tab + search result heading |

| Search descriptions (`metaDescription`) | 15 | Google result snippet only, not on the page |

| Service page `<h1>` headings | 10 | e.g. "Beverage Destruction Services in Phoenix, Arizona" |

| Image alt text | 22 | Screen readers + image search |

| Section headings | ~12 | e.g. "How we handle beverages", "Beverages by the numbers" |

| `public/llms.txt` | whole file | Summary served to AI crawlers |

