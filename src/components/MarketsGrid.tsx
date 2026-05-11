import { Database, Zap, Droplets, Factory, Cog } from "lucide-react";

const markets = [
  {
    icon: Database,
    title: "Data Centers",
    desc: "Mission-critical facilities requiring maximum uptime and protection.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70",
  },
  {
    icon: Zap,
    title: "Energy",
    desc: "Power generation and distribution infrastructure at industrial scale.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    desc: "Offshore platforms and refineries with zero-tolerance for failure.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=70",
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    desc: "Heavy industry and complex manufacturing environments.",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=70",
  },
  {
    icon: Cog,
    title: "EPC Projects",
    desc: "Engineering, procurement and construction for critical projects.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70",
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
