import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { getLocalePath } from "@/lib/navigation";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  dict: Dictionary["footer"];
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-maroon-dark text-cream/80">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={getLocalePath("/", locale)} className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/40">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Logo Klinik Medi Iman"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-playfair font-bold text-cream text-base leading-tight">
                  Klinik Medi Iman
                </p>
                <p className="text-xs text-gold tracking-wide">Care with Compassion</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-cream/70 mb-5">
              {dict.brandDesc}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/klinikmediiman2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Klinik Medi Iman"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/Mediiman26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Klinik Medi Iman"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/601169863974"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Klinik Medi Iman"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-cream font-semibold text-base mb-4">
              {dict.servicesHeading}
            </h3>
            <ul className="space-y-2">
              {dict.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={getLocalePath(s.href, locale)}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-cream font-semibold text-base mb-4">
              {dict.quickLinksHeading}
            </h3>
            <ul className="space-y-2">
              {dict.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={getLocalePath(l.href, locale)}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-cream font-semibold text-base mb-4">
              {dict.contactHeading}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-cream/70 leading-relaxed">
                  {dict.address}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:01169863974"
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  {dict.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <div className="text-sm text-cream/70">
                  <p>{dict.hoursDays}</p>
                  <p className="text-gold font-medium">{dict.hoursTime}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {dict.copyright}</p>
          <p>{dict.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
