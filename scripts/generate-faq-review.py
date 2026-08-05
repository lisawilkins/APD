"""Writes FAQ-REVIEW.txt — every FAQ question and answer, for client review.

Plain text with no markdown, so it pastes cleanly into a review document.
Answers are left unwrapped on a single line so they reflow when pasted rather
than carrying hard line breaks into Word or Google Docs.

    python3 scripts/generate-faq-review.py
"""
import re
from datetime import date

STR = r"'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\""

faqs_src = open('src/data/faqs.ts').read()
services_src = open('src/data/services.ts').read()
proof_src = open('src/pages/ProofOfDestructionPage.tsx').read()


def unquote(raw):
    parts = re.findall(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"", raw, re.S)
    return ''.join(a or b for a, b in parts).replace("\\'", "'").replace('\\"', '"').strip()


def pairs(segment):
    """(question, answer, is_featured) in source order."""
    out = []
    for m in re.finditer(
        rf"(featured: true,\s*\n\s+)?question: ({STR}),\s*\n\s+answer:\s*\n?\s+({STR}),",
        segment, re.S,
    ):
        out.append((unquote(m.group(2)), unquote(m.group(3)), bool(m.group(1))))
    return out


titles = dict(re.findall(rf"slug: '([a-z-]+)',\s*\n\s+title: ({STR}),", services_src))
titles = {k: unquote(v) for k, v in titles.items()}

general = pairs(faqs_src.split('GENERAL_FAQS', 1)[1].split('FEATURED_FAQS')[0])
service_seg = faqs_src.split('SERVICE_FAQS', 1)[1]
proof = pairs(proof_src.split('PROOF_FAQS', 1)[1]) if 'PROOF_FAQS' in proof_src else []

L = []
w = L.append
rule = '=' * 74


def block(n, q, a, note=''):
    w(f"{n}. {q}{f'  [{note}]' if note else ''}")
    w("")
    w(a)
    w("")


w("ARIZONA PRODUCT DESTRUCTION - FAQ COPY FOR REVIEW")
w(f"Generated {date.today().isoformat()}")
w("")
w("Every question and answer below was DRAFTED, NOT SUPPLIED BY APD. They were")
w("written from the existing short site copy, so they read plausibly but are")
w("unverified and need checking.")
w("")

w(rule)
w(f"SECTION 1 - GENERAL FAQ  ({len(general)} questions)")
w("Live on the website at /faq. Four also appear on the homepage.")
w(rule)
w("")
for i, (q, a, feat) in enumerate(general, 1):
    block(i, q, a, 'also shown on the homepage' if feat else '')

w(rule)
w(f"SECTION 2 - CERTIFICATE OF DESTRUCTION PAGE  ({len(proof)} questions)")
w("Live on the website at /proof-of-destruction.")
w(rule)
w("")
for i, (q, a, _) in enumerate(proof, 1):
    block(i, q, a)

svc_blocks = re.findall(r"\n  '?([a-z-]+)'?: \[(.*?)\n  \],", service_seg, re.S)
total_svc = sum(len(pairs(b)) for _, b in svc_blocks)

w(rule)
w(f"SECTION 3 - SERVICE QUESTIONS  ({total_svc} questions)")
w("NOT CURRENTLY ON THE WEBSITE. These were removed from the service pages.")
w("Review only if you want them published - either back on the service pages")
w("or added to the main FAQ page. Otherwise mark this whole section Cut.")
w(rule)
w("")
n = 0
for slug, body in svc_blocks:
    rows = pairs(body)
    if not rows:
        continue
    w(f"--- {titles.get(slug, slug).upper()} (/services/{slug}) ---")
    w("")
    for q, a, _ in rows:
        n += 1
        block(n, q, a)

w(rule)
w("SUMMARY")
w(rule)
w("")
w(f"  Section 1 - General FAQ, live                 {len(general):>3} questions")
w(f"  Section 2 - Certificate page, live            {len(proof):>3} questions")
w(f"  Section 3 - Service questions, NOT published  {total_svc:>3} questions")
w(f"  {'TOTAL':<45}{len(general) + len(proof) + total_svc:>3} questions")
w("")

open('FAQ-REVIEW.txt', 'w').write('\n'.join(L) + '\n')
print(f"FAQ-REVIEW.txt written - {len(general)} general, {len(proof)} proof, "
      f"{total_svc} service = {len(general) + len(proof) + total_svc} Q&As")
