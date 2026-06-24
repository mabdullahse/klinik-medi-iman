import { Star, Quote } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface TestimonialsProps {
  dict: Dictionary["home"]["testimonials"];
}

export default function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="section-padding bg-cream">
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
          <p className="text-gray-500 text-sm">
            {dict.sub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.reviews.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service badge */}
              <span className="inline-block bg-cream text-maroon text-[10px] font-semibold px-2.5 py-1 rounded-full border border-cream-dark mb-4">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-cream-dark pt-4">
                <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-cream text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-3">
            Lihat lebih banyak ulasan kami di Google
          </p>
          <a
            href="https://maps.app.goo.gl/yXh4jaY3FttJU7Q26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-maroon font-semibold text-sm hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {dict.googleLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
