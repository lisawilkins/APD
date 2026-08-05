const LIST_FORMATTER = new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' })

/**
 * Joins a list into readable prose: "Phoenix, Mesa and Tempe".
 *
 * Use this instead of hand-rolling `slice(0, -1).join(', ') + ' and ' + last`.
 * That pattern silently produced "Surprise and Tucson and Flagstaff" on the
 * About page, and it breaks differently for one- and two-item lists.
 */
export function formatList(items: readonly string[]): string {
  return LIST_FORMATTER.format(items)
}
