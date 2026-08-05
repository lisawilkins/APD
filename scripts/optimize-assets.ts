/**
 * Compresses the images in src/assets that the app actually imports.
 *
 * Source photography arrives at full stock-library resolution — several files
 * were over 4 MB, and one was 8.6 MB, all of them served at a fraction of that
 * size on screen. Vite hashes and copies them but does not resize or re-encode.
 *
 * Uses macOS `sips` so there is no image-processing dependency to install.
 * Rewrites files in place; originals are recoverable with `git checkout`.
 *
 * Run manually after adding new photography:
 *   node scripts/optimize-assets.ts
 *   node scripts/optimize-assets.ts --dry-run
 */
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { extname, join } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const ASSETS_DIR = join(ROOT, 'src', 'assets')
const SRC_DIR = join(ROOT, 'src')

/** Longest edge, in pixels. The widest full-bleed slot on the site is a hero. */
const MAX_EDGE = 2000
const JPEG_QUALITY = 78
/** Leave small files alone — re-encoding them costs quality for no real saving. */
const MIN_BYTES = 400_000

const RASTER = new Set(['.jpg', '.jpeg', '.png'])
const dryRun = process.argv.includes('--dry-run')

/** Every source file that could reference an asset. */
function collectSourceText(dir: string): string {
  let text = ''
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') text += collectSourceText(path)
    } else if (/\.(tsx?|css)$/.test(entry.name)) {
      text += readFileSync(path, 'utf8')
    }
  }
  return text
}

const sourceText = collectSourceText(SRC_DIR)

const candidates = readdirSync(ASSETS_DIR).filter((name) => {
  if (!RASTER.has(extname(name).toLowerCase())) return false
  // Only touch assets that are imported somewhere — src/assets holds a lot of
  // unused stock photography that never reaches the build.
  if (!sourceText.includes(name)) return false
  return statSync(join(ASSETS_DIR, name)).size >= MIN_BYTES
})

if (candidates.length === 0) {
  console.log('No referenced assets above the size threshold. Nothing to do.')
  process.exit(0)
}

let before = 0
let after = 0

for (const name of candidates) {
  const path = join(ASSETS_DIR, name)
  const sizeBefore = statSync(path).size
  before += sizeBefore

  if (dryRun) {
    console.log(`would optimize ${name} (${(sizeBefore / 1e6).toFixed(2)} MB)`)
    after += sizeBefore
    continue
  }

  // Encode to a temp file first. sips can produce a *larger* file than it
  // started with — already-optimised JPEGs and photographic PNGs both do this —
  // and writing that back would make the site slower, not faster.
  const scratch = mkdtempSync(join(tmpdir(), 'apd-assets-'))
  const tempPath = join(scratch, name)

  try {
    const isJpeg = /\.jpe?g$/i.test(name)
    const args = ['-Z', String(MAX_EDGE)]
    if (isJpeg) args.push('-s', 'format', 'jpeg', '-s', 'formatOptions', String(JPEG_QUALITY))
    args.push(path, '--out', tempPath)

    execFileSync('sips', args, { stdio: 'ignore' })

    const sizeAfter = statSync(tempPath).size
    if (sizeAfter >= sizeBefore) {
      after += sizeBefore
      console.log(`${name}: skipped — re-encoding would grow it`)
      continue
    }

    copyFileSync(tempPath, path)
    after += sizeAfter
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(0)
    console.log(
      `${name}: ${(sizeBefore / 1e6).toFixed(2)} MB -> ${(sizeAfter / 1e6).toFixed(2)} MB (-${saved}%)`,
    )
  } finally {
    rmSync(scratch, { recursive: true, force: true })
  }
}

console.log(
  `\n${candidates.length} files: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB ` +
    `(-${((1 - after / before) * 100).toFixed(0)}%)`,
)
