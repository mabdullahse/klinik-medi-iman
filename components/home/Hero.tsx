import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Phone, MapPin, Star } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";

interface HeroProps {
  dict: Dictionary["home"]["hero"];
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-24 md:pt-28 -mt-[64px] md:-mt-[84px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-maroon/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cream-dark/50 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
        {/* Left: Content */}
        <div className="animate-fade-up">
          <Badge variant="gold" className="mb-6 text-xs px-4 py-1.5 font-medium tracking-wide">
            {dict.badge}
          </Badge>

          <h1 className="heading-xl text-maroon-dark mb-6 leading-[1.15]">
            {dict.title}{" "}
            <span className="text-gold relative inline-block">
              {dict.highlight}
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gold/40 rounded-full" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
            {dict.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/601169863974?text=Assalamualaikum,%20saya%20ingin%20buat%20temujanji%20di%20Klinik%20Medi%20Iman."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {dict.ctaWhatsapp}
              </Button>
            </a>
            <Link href={getLocalePath("/temujanji", locale)}>
              <Button variant="outline" size="lg" className="gap-2">
                {dict.ctaAppointment}
              </Button>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="font-medium">{dict.trustRating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-maroon" />
              <a href="tel:01169863974" className="hover:text-maroon transition-colors font-medium">
                011 6986 3974
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-maroon" />
              <span>{dict.trustLocation}</span>
            </div>
          </div>
        </div>

        {/* Right: Image + Video Placeholder */}
        <div className="relative">
          {/* Main clinic image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/clinic-front.jpeg"
              alt="Klinik Medi Iman — Klinik di Semenyih, Selangor"
              width={640}
              height={480}
              className="w-full h-[420px] md:h-[520px] object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/30 to-transparent" />
          </div>

          {/* Video play button placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://wa.me/601169863974"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-gold hover:scale-110 transition-all duration-300"
              aria-label={dict.videoLabel}
            >
              <Play size={22} className="text-maroon ml-1 group-hover:text-white transition-colors" fill="currentColor" />
            </a>
          </div>

          {/* Floating card: Open Hours */}
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 border border-cream-dark hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-lg">●</span>
              </div>
              <div>
                <p className="font-semibold text-maroon text-sm">{dict.openLabel}</p>
                <p className="text-xs text-gray-500">{dict.openSub}</p>
              </div>
            </div>
          </div>

          {/* Floating badge: Doctor */}
          <div className="absolute -top-4 -right-4 bg-maroon text-cream rounded-xl shadow-xl p-3 hidden md:block">
            <p className="text-xs font-medium leading-tight">{dict.doctorBadge1}</p>
            <p className="text-xs text-gold font-semibold">{dict.doctorBadge2}</p>
            <p className="text-xs text-cream/70">{dict.doctorBadge3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
