import { ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface PartnersProps {
  dict: Dictionary["home"]["partners"];
}

export default function Partners({ dict }: PartnersProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {dict.label}
          </p>
          <h2 className="heading-md text-maroon-dark mb-4">
            {dict.heading}
          </h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            {dict.description}
          </p>
        </div>

        {/* Partners */}
        <div className="grid md:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto">
          {dict.partners.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-2xl border-2 border-cream-dark hover:border-gold/40 bg-cream hover:bg-white transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3">{p.logo}</div>
              <h3 className="font-playfair font-bold text-maroon text-xl mb-1">{p.name}</h3>
              <p className="text-gray-400 text-xs mb-3">{p.fullName}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-cream rounded-2xl p-8 border border-cream-dark text-center mb-12">
          <p className="font-playfair text-maroon text-lg md:text-xl italic mb-2">
            {dict.quote}
          </p>
          <p className="text-gray-400 text-sm">{dict.quoteAuthor}</p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dict.certifications.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-cream-dark"
            >
              <ShieldCheck size={18} className="text-gold shrink-0 mt-0.5" />
              <span className="text-gray-700 text-xs leading-relaxed">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
