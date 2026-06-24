import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap, Award, Heart } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";

interface AboutDoctorProps {
  dict: Dictionary["home"]["aboutDoctor"];
  locale: Locale;
}

const valueIcons = [Heart, Award, GraduationCap];

export default function AboutDoctor({ dict, locale }: AboutDoctorProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Placeholder for doctor photo */}
              <div className="w-full h-full bg-gradient-to-br from-maroon/10 to-gold/10 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-cream-dark border-4 border-gold/30 flex items-center justify-center mb-4">
                  <span className="text-5xl">👩‍⚕️</span>
                </div>
                <p className="text-maroon font-playfair font-semibold text-lg">
                  Dr. Shahrul Effendi
                </p>
                <p className="text-gray-500 text-sm">{dict.photoPlaceholder}</p>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-gold/20 pointer-events-none" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-maroon/5 -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gold/10 -z-10 hidden lg:block" />

            {/* Floating experience badge */}
            <div className="absolute bottom-8 -right-4 bg-maroon text-cream rounded-xl px-4 py-3 shadow-xl hidden lg:block">
              <p className="text-2xl font-playfair font-bold text-gold">10+</p>
              <p className="text-xs text-cream/80">{dict.yearsLabel}</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              {dict.label}
            </p>
            <h2 className="heading-lg text-maroon-dark mb-2">
              {dict.name}
            </h2>
            <p className="text-gold font-medium mb-4 text-base">
              {dict.credsLine}
            </p>
            <div className="gold-divider mb-6" />

            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {dict.desc1}
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              {dict.desc2}
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {dict.credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{c}</span>
                </li>
              ))}
            </ul>

            {/* Values mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {dict.values.map((v, index) => {
                const Icon = valueIcons[index % valueIcons.length];
                return (
                  <div key={v.title} className="bg-white rounded-xl p-4 border border-cream-dark text-center">
                    <Icon size={20} className="text-maroon mx-auto mb-2" />
                    <p className="text-maroon font-semibold text-xs mb-1">{v.title}</p>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            <Link href={getLocalePath("/tentang-kami", locale)}>
              <Button variant="default" size="lg">
                {dict.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
