import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Stethoscope, Brain, Bone, Scale, HardHat, Syringe } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: {
      canonical:
        locale === "ms"
          ? "https://klinikimedi.com/perkhidmatan"
          : "https://klinikimedi.com/en/perkhidmatan",
    },
  };
}

const serviceIcons = [Stethoscope, Brain, Bone, Scale, HardHat, Syringe];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { servicesPage } = dict;

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-10 pb-16 bg-cream">
        <div className="container-custom text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {servicesPage.hero.label}
          </p>
          <h1 className="heading-xl text-maroon-dark mb-5">
            {servicesPage.hero.heading}
          </h1>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            {servicesPage.hero.description}
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {servicesPage.services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <div
                key={service.href + service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-lg aspect-video ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} di Klinik Medi Iman Semenyih`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/30 to-transparent" />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-maroon" />
                  </div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{service.titleEn}</p>
                  <h2 className="heading-md text-maroon-dark mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-cream text-maroon text-xs font-medium px-3 py-1.5 rounded-full border border-cream-dark"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={getLocalePath(service.href, locale)}
                    className="inline-flex items-center gap-2 text-maroon font-semibold hover:gap-3 transition-all text-sm"
                  >
                    Ketahui Lebih Lanjut <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-14 bg-maroon text-cream text-center">
        <div className="container-custom">
          <h2 className="heading-md text-cream mb-4">{servicesPage.cta.heading}</h2>
          <p className="text-cream/70 mb-7 max-w-xl mx-auto">
            {servicesPage.cta.description}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/601169863974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                {servicesPage.cta.btnWa}
              </Button>
            </a>
            <Link href={getLocalePath("/temujanji", locale)}>
              <Button variant="outline-gold" size="lg">
                {servicesPage.cta.btnAppt}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
