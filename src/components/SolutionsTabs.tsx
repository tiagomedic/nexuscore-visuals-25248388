import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import prensaCabo from "@/assets/produto-prensa-cabo.jpg";
import prensaCabo2 from "@/assets/produto-prensa-cabo-2.jpg";
import adaptadores from "@/assets/produto-adaptadores.jpg";
import cableCleat from "@/assets/produto-cable-cleat.jpg";
import electricalGland1 from "@/assets/electrical-cable-gland-1.jpg";
import electricalCleat from "@/assets/electrical-cable-cleat.jpg";
import electricalAccessories from "@/assets/electrical-accessories.jpg";
import electricalGland2 from "@/assets/electrical-cable-gland-2.jpg";
import mctWallmax from "@/assets/produto-mct-wallmax.jpg";
import mctModulo from "@/assets/produto-mct-modulo-v2.png";
import mctCircular from "@/assets/produto-mct-circular-v2.png";
import selagemBeele from "@/assets/produto-selagem-beele-v2.png";
import suportesTubulacao from "@/assets/produto-suportes-tubulacao.jpg";
import watertight1 from "@/assets/watertight-1.png";
import watertight2 from "@/assets/watertight-2.png";
import watertight3 from "@/assets/watertight-3.png";
import beele1 from "@/assets/beele-1.png";
import beele2 from "@/assets/beele-2.png";
import beele3 from "@/assets/beele-3.png";
import beele4 from "@/assets/beele-4.png";
import pipe1 from "@/assets/pipe-1.png";
import pipe2 from "@/assets/pipe-2.png";
import pipe3 from "@/assets/pipe-3.png";
import pipe4 from "@/assets/pipe-4.png";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

interface Solution {
  id: string;
  titleKey: TranslationKey;
  introKey: TranslationKey;
  bullets: { labelKey: TranslationKey; textKey: TranslationKey }[];
  images: string[];
}

const solutions: Solution[] = [
  {
    id: "electrical",
    titleKey: "sol.electrical.title",
    introKey: "sol.electrical.intro",
    bullets: [
      { labelKey: "sol.electrical.b1.l", textKey: "sol.electrical.b1.t" },
      { labelKey: "sol.electrical.b2.l", textKey: "sol.electrical.b2.t" },
      { labelKey: "sol.electrical.b3.l", textKey: "sol.electrical.b3.t" },
    ],
    images: [electricalGland1, electricalCleat, electricalAccessories, electricalGland2],
  },
  {
    id: "sealing",
    titleKey: "sol.sealing.title",
    introKey: "sol.sealing.intro",
    bullets: [
      { labelKey: "sol.sealing.b1.l", textKey: "sol.sealing.b1.t" },
      { labelKey: "sol.sealing.b2.l", textKey: "sol.sealing.b2.t" },
      { labelKey: "sol.sealing.b3.l", textKey: "sol.sealing.b3.t" },
    ],
    images: [mctWallmax, mctCircular, mctModulo, selagemBeele],
  },
  {
    id: "watertight",
    titleKey: "sol.watertight.title",
    introKey: "sol.watertight.intro",
    bullets: [
      { labelKey: "sol.watertight.b1.l", textKey: "sol.watertight.b1.t" },
      { labelKey: "sol.watertight.b2.l", textKey: "sol.watertight.b2.t" },
    ],
    images: [watertight1, watertight2, watertight3, watertight3],
  },
  {
    id: "beele",
    titleKey: "sol.beele.title",
    introKey: "sol.beele.intro",
    bullets: [
      { labelKey: "sol.beele.b1.l", textKey: "sol.beele.b1.t" },
      { labelKey: "sol.beele.b2.l", textKey: "sol.beele.b2.t" },
    ],
    images: [beele1, beele2, beele3, beele4],
  },
  {
    id: "pipe",
    titleKey: "sol.pipe.title",
    introKey: "sol.pipe.intro",
    bullets: [
      { labelKey: "sol.pipe.b1.l", textKey: "sol.pipe.b1.t" },
      { labelKey: "sol.pipe.b2.l", textKey: "sol.pipe.b2.t" },
      { labelKey: "sol.pipe.b3.l", textKey: "sol.pipe.b3.t" },
    ],
    images: [pipe1, pipe2, pipe3, pipe4],
  },
];

export function SolutionsTabs() {
  const [active, setActive] = useState(solutions[0].id);
  const sol = solutions.find((s) => s.id === active)!;
  const { t } = useLanguage();
  const title = t(sol.titleKey);

  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {solutions.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-md px-5 py-3 text-sm font-medium transition-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-white text-primary/70 hover:text-primary hover:shadow-soft"
              }`}
            >
              {t(s.titleKey)}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={sol.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="mt-6 grid gap-1 overflow-hidden rounded-2xl bg-card shadow-soft md:grid-cols-2"
        >
          <div className="bg-deep p-8 text-white md:p-12">
            <h3 className="text-3xl font-medium text-cyan md:text-4xl">{title}</h3>
            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-white/75 md:text-base">
              {t(sol.introKey)}
            </p>
            <ul className="mt-10 space-y-5">
              {sol.bullets.map((b) => (
                <li key={b.labelKey}>
                  <p className="text-sm font-semibold text-white">{t(b.labelKey)}</p>
                  <p className="mt-1 text-sm text-white/65">{t(b.textKey)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-secondary p-1">
            {sol.images.map((src, i) => (
              <div key={i} className="overflow-hidden bg-white">
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
