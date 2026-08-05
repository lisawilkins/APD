interface SchemaScriptProps {
  /** A JSON-LD object, or an array of them, from `src/lib/schema.ts`. */
  schema: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders a JSON-LD block into the page.
 *
 * Placed inside page JSX rather than `<head>` — valid per the JSON-LD spec, and
 * because every route is prerendered the script lands in the static HTML where
 * crawlers actually read it.
 */
export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
