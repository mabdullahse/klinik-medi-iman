import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Award, Users, Shield } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getLocalePath } from "@/lib/navigation";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: {
      canonical:
        locale === "ms"
          ? "https://klinikimedi.com/tentang-kami"
          : "https://klinikimedi.com/en/tentang-kami",
    },
  };
}

const valueIcons = [Heart, Award, Shield, Users];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { aboutPage } = dict;

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-10 pb-16 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              {aboutPage.hero.label}
            </p>
            <h1 className="heading-xl text-maroon-dark mb-6">
              {aboutPage.hero.title1}{" "}
              <span className="text-gold">{aboutPage.hero.title2}</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-maroon-dark mb-6">
                {aboutPage.story.heading}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{aboutPage.story.p1}</p>
                <p>{aboutPage.story.p2}</p>
                <p>{aboutPage.story.p3}</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <Image
                src="/assets/clinic-front.jpeg"
                alt="Klinik Medi Iman — Klinik di Semenyih"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Profile */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                {aboutPage.doctor.label}
              </p>
              <h2 className="heading-lg text-maroon-dark mb-2">
                {aboutPage.doctor.name}
              </h2>
              <p className="text-gold font-medium text-base mb-5">
                {aboutPage.doctor.title}
              </p>
              <div className="gold-divider mb-6" />

              <div className="space-y-4 text-gray-600 leading-relaxed mb-7">
                <p>{aboutPage.doctor.p1}</p>
                <p>{aboutPage.doctor.p2}</p>
              </div>

              <ul className="space-y-2 mb-8">
                {aboutPage.doctor.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold shrink-0" />
                    <span className="text-gray-700 text-sm">{c}</span>
                  </li>
                ))}
              </ul>

              <Link href={getLocalePath("/temujanji", locale)}>
                <Button variant="default" size="lg">
                  {aboutPage.doctor.cta}
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-72 h-96 rounded-2xl bg-gradient-to-br from-maroon/10 to-gold/10 border-2 border-gold/20 flex flex-col items-center justify-center shadow-xl">
                <div className="w-28 h-28 rounded-full bg-cream-dark border-4 border-gold/30 flex items-center justify-center mb-4 text-5xl">
                  👨‍⚕️
                </div>
                <p className="font-playfair font-bold text-maroon text-lg">Dr. Shahrul Effendi</p>
                <p className="text-gray-400 text-sm mt-1">{aboutPage.doctor.photoPlaceholder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-maroon-dark mb-4">{aboutPage.values.heading}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPage.values.items.map((v, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-cream border border-cream-dark text-center hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-maroon" />
                  </div>
                  <h3 className="font-playfair font-bold text-maroon mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md text-maroon-dark mb-4">{aboutPage.timeline.heading}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto">
            {aboutPage.timeline.milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold">{m.year}</span>
                  </div>
                  {i < aboutPage.timeline.milestones.length - 1 && (
                    <div className="w-0.5 h-8 bg-gold/20 mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-maroon text-cream text-center">
        <div className="container-custom">
          <h2 className="heading-md text-cream mb-4">{aboutPage.cta.heading}</h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            {aboutPage.cta.description}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/601169863974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                {aboutPage.cta.btnWa}
              </Button>
            </a>
            <Link href={getLocalePath("/temujanji", locale)}>
              <Button variant="outline-gold" size="lg">
                {aboutPage.cta.btnAppt}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
