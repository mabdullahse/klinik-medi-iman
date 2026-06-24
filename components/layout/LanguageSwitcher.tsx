"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

function getAlternatePath(pathname: string, targetLocale: "ms" | "en"): string {
  const hasEnPrefix = pathname.startsWith("/en");

  if (targetLocale === "en") {
    // BM → EN: prepend /en (strip any existing /en first to be safe)
    const bare = hasEnPrefix ? pathname.slice(3) || "/" : pathname;
    return `/en${bare === "/" ? "" : bare}`;
  } else {
    // EN → BM: strip /en prefix
    if (hasEnPrefix) {
      const bare = pathname.slice(3);
      return bare === "" ? "/" : bare;
    }
    return pathname;
  }
}

function getCurrentLocale(pathname: string): "ms" | "en" {
  return pathname.startsWith("/en") ? "en" : "ms";
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = getCurrentLocale(pathname);

  return (
    <div className="flex items-center gap-1 text-sm">
      <Globe size={14} className="text-muted-foreground shrink-0" />
      <Link
        href={getAlternatePath(pathname, "ms")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors",
          activeLocale === "ms"
            ? "text-maroon font-semibold"
            : "text-muted-foreground hover:text-maroon"
        )}
        aria-label="Bahasa Malaysia"
      >
        BM
      </Link>
      <span className="text-muted-foreground/50 select-none">|</span>
      <Link
        href={getAlternatePath(pathname, "en")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors",
          activeLocale === "en"
            ? "text-maroon font-semibold"
            : "text-muted-foreground hover:text-maroon"
        )}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  );
}
