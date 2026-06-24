import type { Metadata } from "next";
import { Phone, Clock, MapPin, MessageSquare } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import AppointmentForm from "@/components/temujanji/AppointmentForm";

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
    title: dict.meta.appointment.title,
    description: dict.meta.appointment.description,
  };
}

export default async function AppointmentPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.appointmentPage;

  return (
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
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            {d.hero.description}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AppointmentForm dict={d.form} waMessage={d.waMessage} />
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick WhatsApp */}
              <div className="p-6 rounded-2xl bg-maroon text-cream">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare size={20} className="text-gold" />
                  <h3 className="font-playfair font-bold text-base">
                    {d.sidebar.waHeading}
                  </h3>
                </div>
                <p className="text-cream/70 text-sm mb-4">{d.sidebar.waDesc}</p>
                <a
                  href="https://wa.me/601169863974?text=Assalamualaikum,%20saya%20ingin%20buat%20temujanji%20di%20Klinik%20Medi%20Iman."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE58] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {d.sidebar.waBtn}
                </a>
              </div>

              {/* Contact info */}
              <div className="p-6 rounded-2xl bg-cream border border-cream-dark space-y-4">
                <h3 className="font-playfair font-bold text-maroon">
                  {d.sidebar.infoHeading}
                </h3>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-maroon shrink-0" />
                  <a
                    href="tel:01169863974"
                    className="text-sm text-gray-700 hover:text-maroon transition-colors"
                  >
                    011 6986 3974
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-maroon shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    No 2-G, Jalan Kiara 2, Pusat Perniagaan Kiara, 43500 Semenyih
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={15} className="text-maroon shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">Isnin – Ahad</p>
                    <p className="text-sm font-semibold text-maroon">
                      9:00 PG – 9:00 MLM
                    </p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="p-5 rounded-xl bg-gold/10 border border-gold/20">
                <p className="text-maroon font-semibold text-sm mb-2">
                  {d.sidebar.notesHeading}
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {d.sidebar.notes.map((note) => (
                    <li key={note}>• {note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
