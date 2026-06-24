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
    title: dict.meta.mentalHealth.title,
    description: dict.meta.mentalHealth.description,
  };
}

export default async function MentalHealthPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.mentalHealthPage;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center  overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(123,28,46,0.82),rgba(123,28,46,0.82)), url('/assets/mental-health-bg.png') center/cover no-repeat",
          backgroundColor: "#7B1C2E",
        }}
      >
        <div className="relative z-10 container-custom text-center pt-10">
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

      {/* Symptoms Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {d.symptoms.label}
            </span>
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.symptoms.heading}
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {d.symptoms.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {d.symptoms.items.map((symptom) => (
              <div
                key={symptom}
                className="bg-white rounded-2xl shadow-sm border border-gold/10 p-5 flex items-start gap-3 hover:border-gold/30 hover:shadow-md transition-all"
              >
                <span className="text-gold mt-0.5 text-lg shrink-0">✦</span>
                <p className="text-gray-700 text-sm leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Card */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-maroon rounded-2xl p-8 md:p-12 text-white shadow-xl border border-gold/20">
            <div className="text-center mb-8">
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
                {d.package.badge}
              </span>
              <h2 className="heading-lg font-playfair text-white mb-2">
                {d.package.heading}
              </h2>
              <p className="text-white/60 italic text-sm mb-6">{d.package.subtitle}</p>
              {/* Price */}
              <div className="inline-block bg-gold/20 border border-gold/40 rounded-2xl px-8 py-4 mb-6">
                <p className="text-gold font-playfair font-bold text-5xl">{d.package.price}</p>
                <p className="text-white/70 text-xs mt-1">{d.package.priceLimit}</p>
              </div>
            </div>

            {/* Includes */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {d.package.includes.map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <span className="text-gold mt-0.5 shrink-0">✦</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                    <p className="text-white/60 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Date label */}
            <p className="text-center text-gold text-sm font-medium mb-6">
              📅 {d.package.dateLabel}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalePath("/temujanji", locale)}>
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  {d.package.ctaBook}
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
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10"
                >
                  {d.package.ctaAsk}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Screening Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.freeScreening.heading}
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-gray-600 leading-relaxed mb-8">
              {d.freeScreening.description}
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {d.freeScreening.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-maroon/5 border border-maroon/20 text-maroon text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/601169863974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg">
                {d.freeScreening.cta}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
