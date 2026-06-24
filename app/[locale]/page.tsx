import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import WelcomeBanner from "@/components/home/WelcomeBanner";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutDoctor from "@/components/home/AboutDoctor";
import MentalHealthHighlight from "@/components/home/MentalHealthHighlight";
import OperationHours from "@/components/home/OperationHours";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import ContactMap from "@/components/home/ContactMap";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: locale === "ms" ? "https://klinikimedi.com" : "https://klinikimedi.com/en",
    },
  };
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const clinicName =
    locale === "en" ? "Klinik Medi Iman" : "Klinik Medi Iman";
  const clinicDescription =
    locale === "en"
      ? "A medical clinic in Semenyih offering general health, mental wellness, OSH, FOMEMA, knee & heel treatment, and weight management services."
      : "Klinik perubatan di Semenyih yang menawarkan perkhidmatan kesihatan am, mental, OSH, FOMEMA, rawatan lutut & tumit, dan pengurusan berat badan.";

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: clinicName,
            alternateName: "Klinik Medi Iman Semenyih",
            description: clinicDescription,
            url: "https://klinikimedi.com",
            telephone: "+601169863974",
            address: {
              "@type": "PostalAddress",
              streetAddress: "No 2-G, Jalan Kiara 2, Pusat Perniagaan Kiara",
              addressLocality: "Semenyih",
              postalCode: "43500",
              addressRegion: "Selangor",
              addressCountry: "MY",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 2.9335,
              longitude: 101.8478,
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
            medicalSpecialty: [
              "General Practice",
              "Occupational Medicine",
              "Mental Health",
            ],
            priceRange: "RM",
            image: "https://klinikimedi.com/assets/clinic-front.jpeg",
            sameAs: [
              "https://www.facebook.com/Mediiman26",
              "https://www.instagram.com/klinikmediiman2",
            ],
          }),
        }}
      />
      <Hero dict={dict.home.hero} locale={locale} />
      <WelcomeBanner locale={locale} />
      <TrustBar dict={dict.home.trustBar} />
      <ServicesGrid dict={dict.home.servicesGrid} locale={locale} />
      <AboutDoctor dict={dict.home.aboutDoctor} locale={locale} />
      <MentalHealthHighlight dict={dict.home.mentalHealth} locale={locale} />
      <OperationHours dict={dict.home.hours} />
      <Testimonials dict={dict.home.testimonials} />
      <Partners dict={dict.home.partners} />
      <ContactMap dict={dict.home.contactMap} />
    </>
  );
}
