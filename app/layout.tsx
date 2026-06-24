import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { headers } from "next/headers";
import "@/app/globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikimedi.com"),
  title: {
    default: "Klinik Medi Iman | Doktor Perempuan | Semenyih, Selangor",
    template: "%s | Klinik Medi Iman",
  },
  description:
    "Klinik Medi Iman di Semenyih — rawatan berkualiti penuh keprihatinan. Kesihatan am, mental, lutut & tumit, berat badan, OSH & FOMEMA. Buka 9PG–9MLM setiap hari.",
  authors: [{ name: "Klinik Medi Iman" }],
  creator: "Klinik Medi Iman",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://klinikimedi.com",
    siteName: "Klinik Medi Iman",
    title: "Klinik Medi Iman | Doktor Perempuan | Semenyih, Selangor",
    description:
      "Perkhidmatan kesihatan komprehensif di Semenyih — kesihatan am, mental, lutut & tumit, berat badan, OSH & FOMEMA.",
    images: [{ url: "/assets/clinic-front.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Medi Iman | Semenyih",
    description: "Rawatan berkualiti dengan penuh keprihatinan di Semenyih, Selangor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "ms";

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-gray-900 antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
