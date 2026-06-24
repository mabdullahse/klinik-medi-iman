import Link from "next/link";
import {
  Stethoscope,
  Brain,
  Bone,
  Scale,
  HardHat,
  Syringe,
  ArrowRight,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";

interface ServicesGridProps {
  dict: Dictionary["home"]["servicesGrid"];
  locale: Locale;
}

const serviceIcons = [Stethoscope, Brain, Bone, Scale, HardHat, Syringe];

const serviceColors = [
  { color: "bg-maroon/5 group-hover:bg-maroon/10", iconColor: "text-maroon" },
  { color: "bg-gold/5 group-hover:bg-gold/10", iconColor: "text-gold-dark" },
  { color: "bg-blue-50 group-hover:bg-blue-100", iconColor: "text-blue-600" },
  { color: "bg-green-50 group-hover:bg-green-100", iconColor: "text-green-600" },
  { color: "bg-orange-50 group-hover:bg-orange-100", iconColor: "text-orange-600" },
  { color: "bg-purple-50 group-hover:bg-purple-100", iconColor: "text-purple-600" },
];

export default function ServicesGrid({ dict, locale }: ServicesGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {dict.label}
          </p>
          <h2 className="heading-lg text-maroon-dark mb-4">
            {dict.heading}
          </h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            {dict.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const { color, iconColor } = serviceColors[index % serviceColors.length];
            return (
              <Link key={service.href + service.title} href={getLocalePath(service.href, locale)}>
                <div
                  className={`group relative p-6 rounded-2xl border border-cream-dark hover:border-gold/40 hover:shadow-lg transition-all duration-300 cursor-pointer ${color}`}
                >
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-maroon text-cream text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow"
                  >
                    <Icon size={22} className={iconColor} />
                  </div>
                  <h3 className="font-playfair font-bold text-maroon-dark text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{service.titleEn}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-maroon text-sm font-medium group-hover:gap-2 transition-all">
                    {dict.cardCta}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={getLocalePath("/perkhidmatan", locale)}
            className="inline-flex items-center gap-2 text-maroon font-semibold hover:gap-3 transition-all text-sm"
          >
            {dict.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
