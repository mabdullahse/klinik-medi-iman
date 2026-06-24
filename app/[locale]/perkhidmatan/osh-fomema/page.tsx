import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    title: dict.meta.osh.title,
    description: dict.meta.osh.description,
  };
}

export default async function OshFomemaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.oshPage;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center   overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(123,28,46,0.82),rgba(123,28,46,0.82)), url('/assets/vaccination.png') center/cover no-repeat",
          backgroundColor: "#7B1C2E",
        }}
      >
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
            {d.hero.label}
          </span>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="heading-xl text-white font-playfair mb-5">
            {d.hero.heading}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {d.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalePath("/temujanji", locale)}>
              <Button variant="gold" size="lg">
                {d.hero.ctaAppt}
              </Button>
            </Link>
            <a
              href="https://wa.me/601169863974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                {d.hero.ctaCorp}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg font-playfair text-maroon mb-3">
              {d.services.heading}
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {d.services.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.services.items.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center mb-4">
                  <span className="text-maroon font-bold text-sm">✦</span>
                </div>
                <h3 className="font-playfair font-bold text-maroon text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Promo Banner */}
      <section className="py-10 bg-cream">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold/20 max-w-3xl mx-auto">
            <Image
              src="/assets/vaccination-program.jpeg"
              alt="Program Vaksinasi Korporat — Klinik Medi Iman"
              width={807}
              height={275}
              className="w-full h-auto block"
            />
            <a
              href="https://wa.me/601169863974?text=Saya%20ingin%20bertanya%20tentang%20Program%20Vaksinasi%20Korporat%20Klinik%20Medi%20Iman."
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Hubungi kami untuk Program Vaksinasi"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            {locale === "en" ? "Tap to enquire about our corporate vaccination programme" : "Klik untuk pertanyaan program vaksinasi korporat kami"}
          </p>
        </div>
      </section>

      {/* MIOSH Partnership Section */}
      <section className="section-padding bg-maroon text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🏛️</div>
            <h2 className="heading-lg font-playfair text-white mb-4">
              {d.partnership.heading}
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-white/80 leading-relaxed mb-8">
              {d.partnership.description}
            </p>
            <blockquote className="border-l-4 border-gold pl-6 text-left max-w-xl mx-auto">
              <p className="text-gold font-playfair italic text-xl leading-relaxed">
                {d.partnership.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Corporate CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-10 text-center max-w-2xl mx-auto">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.cta.heading}
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-gray-600 leading-relaxed mb-8">
              {d.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/601169863974"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg">
                  {d.cta.btnWa}
                </Button>
              </a>
              <Link href={getLocalePath("/temujanji", locale)}>
                <Button variant="default" size="lg">
                  {d.cta.btnAppt}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
