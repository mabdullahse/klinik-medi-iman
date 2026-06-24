import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLocalePath } from "@/lib/navigation";
import type { Locale } from "@/lib/i18n";

interface WelcomeBannerProps {
  locale: Locale;
}

const content = {
  ms: {
    label: "Selamat Datang",
    heading: "Kami Sedia Melayan Anda",
    sub: "Dari langkah pertama anda masuk, kami memastikan anda berasa selesa, dihormati, dan dirawat dengan sepenuh hati.",
    cta: "Buat Temujanji",
    alt: "Kakitangan klinik menyambut pesakit di Klinik Medi Iman, Semenyih",
  },
  en: {
    label: "Welcome",
    heading: "We Are Ready to Serve You",
    sub: "From the moment you walk in, we ensure you feel comfortable, respected, and cared for with all our heart.",
    cta: "Book Appointment",
    alt: "Clinic staff welcoming patients at Klinik Medi Iman, Semenyih",
  },
};

export default function WelcomeBanner({ locale }: WelcomeBannerProps) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-maroon">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/welcome.png"
          alt={t.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay: right side fades to maroon for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/10 via-maroon/40 to-maroon/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
      </div>

      {/* Content — pinned to the right on desktop, centred on mobile */}
      <div className="relative z-10 container-custom min-h-[420px] md:min-h-[500px] flex items-center justify-end py-16 md:py-20">
        <div className="w-full md:max-w-[480px] text-cream">
          {/* Label */}
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-gold inline-block" />
            {t.label}
          </p>

          {/* Heading */}
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {t.heading}
          </h2>

          {/* Divider */}
          <div className="w-14 h-1 bg-gold rounded-full mb-6" />

          {/* Sub-text */}
          <p className="text-cream/85 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            {t.sub}
          </p>

          {/* CTA */}
          <Link href={getLocalePath("/temujanji", locale)}>
            <Button variant="gold" size="lg" className="shadow-lg">
              {t.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
