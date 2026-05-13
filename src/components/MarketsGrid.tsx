import { Database, Zap, Droplets, Factory, Cog } from "lucide-react";
import oilGas from "@/assets/mercado-oil-gas.jpg";
import dataCenter from "@/assets/mercado-data-center.jpg";
import industrial from "@/assets/mercado-industrial.jpg";
import energy from "@/assets/mercado-energy.webp";
import epc from "@/assets/mercado-epc.webp";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

const markets: { icon: typeof Database; titleKey: TranslationKey; descKey: TranslationKey; img: string }[] = [
  { icon: Database, titleKey: "markets.dc.title", descKey: "markets.dc.desc", img: dataCenter },
  { icon: Zap, titleKey: "markets.energy.title", descKey: "markets.energy.desc", img: energy },
  { icon: Droplets, titleKey: "markets.og.title", descKey: "markets.og.desc", img: oilGas },
  { icon: Factory, titleKey: "markets.ind.title", descKey: "markets.ind.desc", img: industrial },
  { icon: Cog, titleKey: "markets.epc.title", descKey: "markets.epc.desc", img: epc },
];

export function MarketsGrid() {
  const { t } = useLanguage();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
      {markets.map((m, i) => {
        const Icon = m.icon;
        const wide = i < 2;
        const title = t(m.titleKey);
        return (
          <article
            key={m.titleKey}
            className={`group relative overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-glow ${
              wide ? "lg:col-span-3" : "lg:col-span-2"
            }`}
            style={{ aspectRatio: wide ? "16/9" : "4/5" }}
          >
            <img
              src={m.img}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/10" />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
              <Icon className="mb-4 text-cyan" size={28} strokeWidth={1.5} />
              <h3 className="text-2xl font-medium text-white">{title}</h3>
              <div className="my-3 h-px w-12 bg-cyan/70" />
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                {t(m.descKey)}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
