"""Generates COPY-REVIEW.md: every copy string authored by Claude, diffed against main."""
import re, subprocess, difflib

old_src = subprocess.run(['git', 'show', 'main:src/data/services.ts'],
                         capture_output=True, text=True).stdout
new_src = open('src/data/services.ts').read()
faqs_src = open('src/data/faqs.ts').read()
proof_src = open('src/pages/ProofOfDestructionPage.tsx').read()
home_src = open('src/pages/HomePage.tsx').read()
site_src = open('src/data/site.ts').read()

STR = r"'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\""


def unquote(raw):
    raw = raw.strip().rstrip(',').strip()
    parts = re.findall(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"", raw, re.S)
    out = ''.join(a or b for a, b in parts)
    return out.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ').strip()


def service_blocks(src):
    return {m.group(1): m.group(2)
            for m in re.finditer(r"\{\s*\n\s+slug: '([a-z-]+)',(.*?)\n  \},\n", src, re.S)}


def field(block, name):
    m = re.search(rf"\n    {name}:\s*(.*?)(?=\n    [a-zA-Z]+:|\n    \],|\Z)", block, re.S)
    return unquote(m.group(1)) if m else None


def desc_paragraphs(block):
    m = re.search(r"description: \[(.*?)\n    \],", block, re.S)
    if not m:
        return []
    return [unquote(p) for p in re.findall(rf"\n\s+((?:{STR}),?)", m.group(1), re.S)]


def quickfacts(block):
    m = re.search(r"quickFacts: \[(.*?)\n    \],", block, re.S)
    if not m:
        return []
    out = [(unquote(a), unquote(b)) for a, b in
           re.findall(rf"\{{ label: ({STR}), value: ({STR}) \}}", m.group(1), re.S)]
    out += [(f'{n} (shared)', '') for n in re.findall(r"\n\s+([A-Z_]+),", m.group(1))]
    return out


old_b, new_b = service_blocks(old_src), service_blocks(new_src)
L = []
w = L.append

w("# Copy Review — passages written by Claude\n")
w("Everything below was **written by Claude**, not supplied by APD. It was extrapolated "
  "from the short copy that already existed, so it reads plausibly but is **unverified**.\n")
w("Please mark each item **Keep / Edit / Cut**. Anything cut is removed with no side effects — "
  "none of it is load-bearing for the site's structure.\n")
w("Copy that APD supplied originally is *not* listed here; it is untouched except where noted "
  "as EDITED (typo fixes and splits of existing sentences).\n")
w("---\n")

# ── 1. Service descriptions ────────────────────────────────────────────────
w("## 1. Service page body copy\n")
w("Location: `src/data/services.ts` → `description`. These paragraphs sit under "
  '"How we handle …" on each service page.\n')
tot_new = tot_edit = 0
for slug, blk in new_b.items():
    old_paras = [p for p in desc_paragraphs(old_b.get(slug, '')) if p]
    rows = []
    for p in desc_paragraphs(blk):
        if not p:
            continue
        ratio = 0.0
        covered = 0.0
        for o in old_paras:
            # autojunk=False is essential: on strings over 200 chars the default
            # heuristic discards common characters and reports a 2-char longest
            # match for text that is in fact 100% identical.
            sm = difflib.SequenceMatcher(None, o, p, autojunk=False)
            ratio = max(ratio, sm.ratio())
            # I split several of APD's long paragraphs into shorter ones. Whole-string
            # similarity scores those as unrelated, so also measure how much of the new
            # paragraph exists verbatim inside an original — that's APD's writing, not mine.
            m = sm.find_longest_match(0, len(o), 0, len(p))
            covered = max(covered, m.size / max(len(p), 1))
        if ratio > 0.92 or covered > 0.85:
            continue                      # APD copy, unchanged or only re-split
        rows.append(('EDITED' if (ratio > 0.55 or covered > 0.5) else 'NEW', p))
    if not rows:
        continue
    w(f"### `/services/{slug}`\n")
    for kind, text in rows:
        tot_new += kind == 'NEW'
        tot_edit += kind == 'EDITED'
        tag = '**NEW — written by Claude**' if kind == 'NEW' else '*EDITED from APD original*'
        w(f"- [ ] {tag}\n\n  > {text}\n")
w(f"**Subtotal: {tot_new} wholly-new paragraphs, {tot_edit} edited.**\n")
w("---\n")

# ── 2. Quick facts ─────────────────────────────────────────────────────────
w('## 2. "At a glance" fact rows\n')
w("Location: `src/data/services.ts` → `quickFacts`. Shown near the foot of each service page.\n")
w("**All of these are invented.** The *Materials accepted* rows in particular assert what APD "
  "does and does not take — please check each one.\n")
shared = re.findall(rf"const ([A-Z_]+): QuickFact = \{{\s*\n\s+label: ({STR}),\s*\n\s+value:\s*\n?\s*({STR}),?\s*\n\}}", new_src, re.S)
for name, lab, val in shared:
    w(f"- [ ] **Shared across all 10 service pages** — `{name}` · *{unquote(lab)}*\n\n  > {unquote(val)}\n")
n_qf = len(shared)
for slug, blk in new_b.items():
    rows = [(l, v) for l, v in quickfacts(blk) if v]
    if not rows:
        continue
    w(f"### `/services/{slug}`\n")
    for lab, val in rows:
        n_qf += 1
        w(f"- [ ] *{lab}*\n\n  > {val}\n")
w(f"**Subtotal: {n_qf} fact rows.**\n")
w("---\n")

# ── 3. FAQs ────────────────────────────────────────────────────────────────
def faq_pairs(src, start_marker, end_marker=None):
    seg = src.split(start_marker, 1)[1]
    if end_marker:
        seg = seg.split(end_marker, 1)[0]
    return [(unquote(q), unquote(a)) for q, a in
            re.findall(rf"question: ({STR}),\s*\n\s+answer:\s*\n?\s+({STR}),", seg, re.S)]

gen = faq_pairs(faqs_src, 'export const GENERAL_FAQS', 'export const FEATURED_FAQS')
w("## 3. FAQ answers — `/faq`\n")
w("Location: `src/data/faqs.ts` → `GENERAL_FAQS`. Ten questions on the FAQ page; four also "
  "appear on the homepage.\n")
w("**All questions and answers are written by Claude.** The cost and service-area answers are "
  "the ones most likely to be wrong.\n")
for q, a in gen:
    w(f"- [ ] **{q}**\n\n  > {a}\n")
w(f"**Subtotal: {len(gen)} Q&As.**\n")
w("---\n")

svc = faq_pairs(faqs_src, 'export const SERVICE_FAQS')
w("## 4. FAQ answers — per service (NOT CURRENTLY ON THE SITE)\n")
w("Location: `src/data/faqs.ts` → `SERVICE_FAQS`. Removed from the service pages at your "
  "request; retained in the codebase only. Review only if you want them restored or folded "
  "into `/faq` — otherwise mark the whole section **Cut**.\n")
for q, a in svc:
    w(f"- [ ] **{q}**\n\n  > {a}\n")
w(f"**Subtotal: {len(svc)} Q&As, currently unpublished.**\n")
w("---\n")

# ── 5. Proof page ──────────────────────────────────────────────────────────
w("## 5. Certificate of Destruction page\n")
w("Location: `src/pages/ProofOfDestructionPage.tsx`. The two original APD paragraphs are "
  "unchanged and not listed. Everything below was added.\n")
w('### "Three ways to prove destruction" rows\n')
for lab, val in re.findall(rf"\n    label: ({STR}),\s*\n\s+value:\s*\n?\s*({STR}),", proof_src, re.S):
    w(f"- [ ] *{unquote(lab)}*\n\n  > {unquote(val)}\n")
w("### FAQ\n")
for q, a in faq_pairs(proof_src, 'const PROOF_FAQS'):
    w(f"- [ ] **{q}**\n\n  > {a}\n")
w("---\n")

# ── 6. Homepage ────────────────────────────────────────────────────────────
w("## 6. Homepage\n")
w('### Broker vs. direct comparison table (`src/pages/HomePage.tsx`)\n')
w("Entirely invented — it characterises how competitors operate, so it carries the most "
  "reputational risk of anything on this list.\n")
for asp, br, apd in re.findall(rf"aspect: ({STR}),\s*\n\s+broker: ({STR}),\s*\n\s+apd: ({STR}),", home_src, re.S):
    w(f"- [ ] **{unquote(asp)}** — Broker: *{unquote(br)}* · APD: *{unquote(apd)}*\n")
w("### Hero heading line\n")
w("- [ ] Added above the existing tagline, inside the same `<h1>`:\n\n  > Product destruction in Phoenix, Arizona\n")
w("---\n")

# ── 7. Site-wide constants ─────────────────────────────────────────────────
w("## 7. Site-wide statements\n")
w("Location: `src/data/site.ts`. Each of these appears in several places at once.\n")
# `tagline` is APD's own line from the original site — not mine, so not listed.
for name, val in re.findall(rf"\n  (statewide|national|description):\s*\n?\s*({STR}),", site_src, re.S):
    w(f"- [ ] `{name}`\n\n  > {unquote(val)}\n")
w("---\n")

# ── 8. Lower risk ──────────────────────────────────────────────────────────
w("## 8. Lower-risk items (listed for completeness)\n")
w("These describe rather than assert, and are unlikely to need APD's sign-off — but they are "
  "still Claude's words.\n")
w("| Item | Count | Where |\n|---|---|---|\n")
w(f"| Page titles (`metaTitle`) | 10 | Browser tab + search result heading |\n")
w(f"| Search descriptions (`metaDescription`) | 15 | Google result snippet only, not on the page |\n")
w(f"| Service page `<h1>` headings | 10 | e.g. \"Beverage Destruction Services in Phoenix, Arizona\" |\n")
w(f"| Image alt text | 22 | Screen readers + image search |\n")
w(f"| Section headings | ~12 | e.g. \"How we handle beverages\", \"Beverages by the numbers\" |\n")
w(f"| `public/llms.txt` | whole file | Summary served to AI crawlers |\n")

open('COPY-REVIEW.md', 'w').write('\n'.join(L) + '\n')
print(f"COPY-REVIEW.md written — {tot_new} new paras, {tot_edit} edited, {n_qf} facts, "
      f"{len(gen)} general FAQs, {len(svc)} service FAQs")
