import { getDictionary, locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict.nav} locale={locale} />
      <main className="pt-[64px] md:pt-[84px]">{children}</main>
      <Footer dict={dict.footer} locale={locale} />
      <WhatsAppButton tooltip={dict.whatsapp.tooltip} />
    </>
  );
}
