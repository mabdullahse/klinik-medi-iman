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
    title: dict.meta.weight.title,
    description: dict.meta.weight.description,
  };
}

export default async function WeightManagementPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.weightPage;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-maroon">
        <div className="container-custom text-center">
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

      {/* Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.steps.heading}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.steps.items.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl shadow-sm border border-gold/10 p-6 hover:shadow-md hover:border-gold/30 transition-all relative"
              >
                {/* Step connector line */}
                {index < d.steps.items.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gold/30 z-10" />
                )}
                <div className="w-12 h-12 rounded-full bg-maroon text-white font-playfair font-bold text-lg flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="font-playfair font-bold text-maroon text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg font-playfair text-maroon mb-4">
              {d.benefits.heading}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {d.benefits.items.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 bg-white rounded-xl border border-gold/10 p-4 shadow-sm"
              >
                <span className="text-gold mt-0.5 shrink-0">✦</span>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-maroon text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-playfair text-white mb-8">
            {d.hero.heading}
          </h2>
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
              <Button variant="gold" size="lg">
                {d.cta.btnAppt}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
