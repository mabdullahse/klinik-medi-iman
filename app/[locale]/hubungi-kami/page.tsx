import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";
import type { Locale } from "@/lib/i18n";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: "ms" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Klinik Medi Iman",
  description:
    "Klinik perubatan am di Semenyih menawarkan perkhidmatan kesihatan komprehensif termasuk kesihatan am, mental, lutut & tumit, berat badan, OSH dan FOMEMA.",
  url: "https://klinikimediiman.com",
  telephone: "+601169863974",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 2-G, Jalan Kiara 2, Pusat Perniagaan Kiara",
    addressLocality: "Semenyih",
    addressRegion: "Selangor",
    postalCode: "43500",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 2.9372,
    longitude: 101.8458,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/klinikmediiman2",
    "https://www.facebook.com/Mediiman26",
  ],
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.contactPage;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-cream min-h-screen">
        {/* Hero */}
        <section className="pt-10 pb-14 bg-cream">
          <div className="container-custom text-center">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {d.hero.label}
            </span>
            <h1 className="heading-xl font-playfair text-maroon mb-5">
              {d.hero.heading}
            </h1>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-gray-600 max-w-xl mx-auto">{d.hero.description}</p>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8 mb-14">
              {/* Phone / WhatsApp Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 text-center hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-maroon" />
                </div>
                <h3 className="font-playfair font-bold text-maroon mb-2">
                  {d.phoneCard.heading}
                </h3>
                <a
                  href="tel:01169863974"
                  className="text-gray-600 font-medium text-lg hover:text-maroon transition-colors block mb-3"
                >
                  011 6986 3974
                </a>
                <a
                  href="https://wa.me/601169863974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-xl"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {d.phoneCard.waLabel}
                </a>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 text-center hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-maroon" />
                </div>
                <h3 className="font-playfair font-bold text-maroon mb-2">
                  {d.addressCard.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  No 2-G, Jalan Kiara 2,
                  <br />
                  Pusat Perniagaan Kiara,
                  <br />
                  43500 Semenyih, Selangor
                </p>
                <a
                  href="https://maps.app.goo.gl/yXh4jaY3FttJU7Q26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-maroon font-medium text-sm hover:text-gold transition-colors"
                >
                  <MapPin size={14} />
                  {d.addressCard.cta}
                </a>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 text-center hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                  <Instagram size={24} className="text-maroon" />
                </div>
                <h3 className="font-playfair font-bold text-maroon mb-2">
                  {d.socialCard.heading}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{d.socialCard.desc}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.instagram.com/klinikmediiman2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-medium px-3 py-2 rounded-lg"
                  >
                    <Instagram size={13} /> {d.socialCard.igLabel}
                  </a>
                  <a
                    href="https://www.facebook.com/Mediiman26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-medium px-3 py-2 rounded-lg"
                  >
                    <Facebook size={13} /> {d.socialCard.fbLabel}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="mb-14">
              <h2 className="heading-md font-playfair text-maroon mb-6">
                {d.hoursHeading}
              </h2>
              <div className="space-y-3 max-w-2xl">
                {d.schedule.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between p-4 rounded-xl bg-cream border border-cream-dark"
                  >
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{row.day}</p>
                      <p className="text-xs text-gray-400">{row.rest}</p>
                    </div>
                    <span className="font-playfair font-semibold text-maroon text-sm">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3 max-w-2xl">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                <div>
                  <p className="text-green-700 font-semibold text-sm">{d.openLabel}</p>
                  <p className="text-green-600 text-xs">{d.openSub}</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cream-dark w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3!2d101.8458!3d2.9372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTYnMTMuOSJOIDEwMsKwNTAnNDQuOSJF!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Klinik Medi Iman Semenyih"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 bg-maroon text-cream text-center">
          <div className="container-custom">
            <h2 className="heading-md font-playfair text-cream mb-4">{d.cta.heading}</h2>
            <p className="text-cream/70 mb-7 max-w-xl mx-auto">{d.cta.description}</p>
            <Link href={getLocalePath("/temujanji", locale)}>
              <Button variant="gold" size="lg">
                {d.cta.btn}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
