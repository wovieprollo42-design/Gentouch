/**
 * Values in the site data that are still awaiting real church information are
 * written as "[Something]". Those must never become live links: a Next.js
 * <Link> would prefetch them and a plain anchor would navigate nowhere.
 */
export function isPlaceholderHref(href: string | undefined | null): boolean {
  return typeof href === 'string' && /^\s*\[[^\]]*\]\s*$/.test(href);
}
