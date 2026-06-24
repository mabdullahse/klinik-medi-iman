import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface ContactMapProps {
  dict: Dictionary["home"]["contactMap"];
}

export default function ContactMap({ dict }: ContactMapProps) {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {dict.label}
          </p>
          <h2 className="heading-md text-maroon-dark mb-4">
            {dict.heading}
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact details */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <div className="flex items-start gap-4 mb-5 pb-5 border-b border-cream-dark">
                <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-maroon" />
                </div>
                <div>
                  <p className="font-semibold text-maroon text-sm mb-1">{dict.addressLabel}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dict.address1}<br />
                    {dict.address2}<br />
                    {dict.address3}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-cream-dark">
                <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-maroon" />
                </div>
                <div>
                  <p className="font-semibold text-maroon text-sm mb-1">{dict.phoneLabel}</p>
                  <a
                    href="tel:01169863974"
                    className="text-gray-600 text-sm hover:text-maroon transition-colors"
                  >
                    011 6986 3974
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-maroon" />
                </div>
                <div>
                  <p className="font-semibold text-maroon text-sm mb-1">{dict.hoursLabel}</p>
                  <p className="text-gray-600 text-sm">{dict.hoursDays}</p>
                  <p className="text-maroon font-semibold text-sm">{dict.hoursTime}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/601169863974"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" className="w-full gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {dict.ctaWa}
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/yXh4jaY3FttJU7Q26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full gap-2">
                  <MapPin size={16} />
                  {dict.ctaMap}
                  <ArrowRight size={14} />
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-cream-dark h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3!2d101.8458!3d2.9372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTYnMTMuOSJOIDEwMcKwNTAnNDQuOSJF!5e0!3m2!1sen!2smy!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={dict.mapTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
