import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";

interface MentalHealthHighlightProps {
  dict: Dictionary["home"]["mentalHealth"];
  locale: Locale;
}

export default function MentalHealthHighlight({ dict, locale }: MentalHealthHighlightProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light text-cream overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-gold/30">
              {dict.badge}
            </div>

            <h2 className="heading-lg text-cream mb-3">
              {dict.heading}{" "}
              <span className="text-gold">{dict.highlight}</span>
            </h2>

            <p className="text-cream/70 text-sm italic mb-6">
              {dict.subtitle}
            </p>

            <p className="text-cream/80 leading-relaxed mb-8 text-base">
              {dict.description}
            </p>

            {/* Included */}
            <ul className="space-y-3 mb-8">
              {dict.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Screening tools */}
            <div className="flex flex-wrap gap-3 mb-8">
              {dict.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-white/10 border border-white/20 text-cream/80 text-xs px-3 py-1.5 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Link href={getLocalePath("/perkhidmatan/kesihatan-mental", locale)}>
                <Button variant="gold" size="lg">
                  {dict.ctaBook}
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-cream/70 text-sm">
                <Calendar size={14} className="text-gold" />
                <span>{dict.ctaDate}</span>
              </div>
            </div>

            <p className="text-cream/50 text-xs mt-3">
              {dict.disclaimer}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/assets/mental-health.jpeg"
                alt="Perkhidmatan Kesihatan Mental di Klinik Medi Iman"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 to-transparent" />
            </div>

            {/* Price badge */}
            <div className="absolute -top-5 -right-5 bg-gold text-maroon-dark rounded-2xl px-5 py-4 shadow-2xl text-center hidden md:block">
              <p className="text-xs font-medium mb-0.5">{dict.priceLabel}</p>
              <p className="font-playfair text-3xl font-bold">{dict.price}</p>
              <p className="text-xs opacity-70">{dict.priceSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
