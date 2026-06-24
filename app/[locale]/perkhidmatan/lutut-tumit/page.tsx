import type { Metadata } from "next";
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
    title: dict.meta.knee.title,
    description: dict.meta.knee.description,
  };
}

export default async function KneeHealPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.kneePage;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center   overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(123,28,46,0.82),rgba(123,28,46,0.82)), url('/assets/heel.jpeg') center/cover no-repeat",
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
          <Link href={getLocalePath("/temujanji", locale)}>
            <Button variant="gold" size="lg">
              {d.hero.cta}
            </Button>
          </Link>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.treatments.heading}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.treatments.items.map((treatment) => (
              <div
                key={treatment.title}
                className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 hover:shadow-md hover:border-gold/30 transition-all text-center"
              >
                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="font-playfair font-bold text-maroon text-lg mb-3">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.conditions.heading}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {d.conditions.items.map((condition) => (
              <span
                key={condition}
                className="inline-block bg-white border border-gold/20 text-maroon font-medium text-sm px-5 py-2.5 rounded-full shadow-sm hover:border-gold/50 hover:shadow-md transition-all"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-maroon text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-playfair text-white mb-4">
            {d.cta.heading}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            {d.cta.description}
          </p>
          <a
            href="https://wa.me/601169863974"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              {d.cta.btn}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
