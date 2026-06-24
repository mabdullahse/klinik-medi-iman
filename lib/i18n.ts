import type msDict from "@/locales/ms.json";

export const locales = ["ms", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ms";

export type Dictionary = typeof msDict;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "en") {
    return (await import("@/locales/en.json")) as unknown as Dictionary;
  }
  return (await import("@/locales/ms.json")) as unknown as Dictionary;
}
