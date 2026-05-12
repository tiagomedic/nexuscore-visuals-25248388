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

interface Solution {
  id: string;
  title: string;
  intro: string;
  bullets: { label: string; text: string }[];
  images: string[];
}

const solutions: Solution[] = [
  {
    id: "electrical",
    title: "Electrical Connectivity",
    intro:
      "Solutions for cable connection, fixation, and protection in critical environments.",
    bullets: [
      { label: "Cable Glands", text: "For industrial and hazardous (Ex) areas, with international certifications." },
      { label: "Cable Cleats", text: "Designed and tested in accordance with IEC 61914:2009." },
      { label: "Accessories and Adaptors", text: "Complete range for cable management and infrastructure." },
    ],
    images: [electricalGland1, electricalCleat, electricalAccessories, electricalGland2],
  },
  {
    id: "sealing",
    title: "Sealing Solutions",
    intro:
      "Multi Cable Transit Solutions developed to ensure reliable and secure sealing of cable and pipe penetrations in critical environments.",
    bullets: [
      { label: "Modular systems", text: "Designed to protect against the ingress of dust, water, fire, and other environmental agents." },
      { label: "High level of safety and protection", text: "With a wide range of solutions adaptable to different applications." },
      { label: "Ease and practicality in installation", text: "And maintenance, reducing intervention time and operational costs." },
    ],
    images: [mctWallmax, mctCircular, mctModulo, selagemBeele],
  },
  {
    id: "watertight",
    title: "Watertight Sealing Solutions",
    intro:
      "Sealing solutions for building penetrations, such as core drillings, ensuring watertight and gas-tight performance.",
    bullets: [
      { label: "Split solutions", text: "For cables or pipes already installed, allowing easy assembly even after installation is completed." },
      { label: "Versatile system", text: "That enables sealing of a wide range of cable and pipe configurations." },
    ],
    images: [watertight1, watertight2, watertight3, watertight3],
  },
  {
    id: "beele",
    title: "Beele Sealing Technologies",
    intro:
      "Whether in shipbuilding, offshore, industrial installations, or construction, Beele's first-class products and systems ensure optimum fire safety and watertight integrity.\n\nFrom fire-resistant sealing to gas-, smoke-, and watertight solutions for cable and pipe penetrations, as well as coating and insulation, Beele offers reliable solutions without metal components or mineral insulation — eliminating risks of corrosion in certain environments and preventing performance degradation over time.",
    bullets: [
      { label: "Cable Transits / Pipe Penetrations", text: "Fire-resistant, gas-, smoke- and watertight sealing for cable and pipe penetrations." },
      { label: "Gaskets Insulation / Coating", text: "Reliable coating and insulation without metal components or mineral insulation." },
    ],
    images: [beele1, beele2, beele3, beele4],
  },
  {
    id: "pipe",
    title: "Pipe Supports (Carpenter & Paterson)",
    intro:
      "Linha completa de suportes de tubulação para projetos de infraestrutura crítica: suportes de molas, snubbers hidráulicos e isolamentos térmicos.",
    bullets: [
      { label: "Spring supports", text: "Suportes de carga variável e constante para tubulações dinâmicas." },
      { label: "Snubbers hidráulicos", text: "Amortecedores axiais, transversais e multidirecionais." },
      { label: "Hot Shoes", text: "Suportes com isolamentos térmicos para linhas de alta temperatura." },
    ],
    images: [suportesTubulacao, adaptadores, cableCleat, prensaCabo],
  },
];

export function SolutionsTabs() {
  const [active, setActive] = useState(solutions[0].id);
  const sol = solutions.find((s) => s.id === active)!;

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
              {s.title}
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
            <h3 className="text-3xl font-medium text-cyan md:text-4xl">{sol.title}</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
              {sol.intro}
            </p>
            <ul className="mt-10 space-y-5">
              {sol.bullets.map((b) => (
                <li key={b.label}>
                  <p className="text-sm font-semibold text-white">{b.label}</p>
                  <p className="mt-1 text-sm text-white/65">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-secondary p-1">
            {sol.images.map((src, i) => (
              <div key={i} className="overflow-hidden bg-white">
                <img
                  src={src}
                  alt={`${sol.title} ${i + 1}`}
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
