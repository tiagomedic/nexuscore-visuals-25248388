import { Database, Zap, Droplets, Factory, Cog } from "lucide-react";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import mctWallmax from "@/assets/produto-mct-wallmax.jpg";
import suportesTubulacao from "@/assets/produto-suportes-tubulacao.jpg";
import selagemBeele from "@/assets/produto-selagem-beele.jpg";
import prensaCabo from "@/assets/produto-prensa-cabo.jpg";
import oilGas from "@/assets/mercado-oil-gas.jpg";
import dataCenter from "@/assets/mercado-data-center.jpg";

const markets = [
  {
    icon: Database,
    title: "Data Centers",
    desc: "Mission-critical facilities requiring maximum uptime and protection.",
    img: dataCenter,
  },
  {
    icon: Zap,
    title: "Energy",
    desc: "Power generation and distribution infrastructure at industrial scale.",
    img: prensaCabo,
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    desc: "Offshore platforms and refineries with zero-tolerance for failure.",
    img: oilGas,
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    desc: "Heavy industry and complex manufacturing environments.",
    img: selagemBeele,
  },
  {
    icon: Cog,
    title: "EPC Projects",
    desc: "Engineering, procurement and construction for critical projects.",
    img: suportesTubulacao,
  },
];

export function MarketsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
      {markets.map((m, i) => {
        const Icon = m.icon;
        const wide = i < 2;
        return (
          <article
            key={m.title}
            className={`group relative overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-glow ${
              wide ? "lg:col-span-3" : "lg:col-span-2"
            }`}
            style={{ aspectRatio: wide ? "16/9" : "4/5" }}
          >
            <img
              src={m.img}
              alt={m.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/10" />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
              <Icon className="mb-4 text-cyan" size={28} strokeWidth={1.5} />
              <h3 className="text-2xl font-medium text-white">{m.title}</h3>
              <div className="my-3 h-px w-12 bg-cyan/70" />
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                {m.desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
