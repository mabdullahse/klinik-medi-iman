import { Users, Award, Clock, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface TrustBarProps {
  dict: Dictionary["home"]["trustBar"];
}

const icons = [Users, Award, Clock, ShieldCheck];

export default function TrustBar({ dict }: TrustBarProps) {
  return (
    <section className="bg-maroon py-12 md:py-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {dict.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-3 group-hover:bg-gold/30 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <p className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-1">
                  {stat.value}
                </p>
                <p className="text-gold text-sm font-semibold mb-0.5">{stat.label}</p>
                <p className="text-cream/60 text-xs">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
