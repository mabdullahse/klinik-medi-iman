import type { Locale } from "./i18n";

/** Prepend /en for English, keep bare path for BM */
export function getLocalePath(path: string, locale: Locale): string {
  if (locale === "ms") return path;
  return `/en${path === "/" ? "" : path}`;
}
