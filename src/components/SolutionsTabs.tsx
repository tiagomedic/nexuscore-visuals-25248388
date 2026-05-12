import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import prensaCabo from "@/assets/produto-prensa-cabo.jpg";
import prensaCabo2 from "@/assets/produto-prensa-cabo-2.jpg";
import adaptadores from "@/assets/produto-adaptadores.jpg";
import cableCleat from "@/assets/produto-cable-cleat.jpg";
import mctWallmax from "@/assets/produto-mct-wallmax.jpg";
import mctModulo from "@/assets/produto-mct-modulo.jpg";
import mctCircular from "@/assets/produto-mct-circular.jpg";
import selagemBeele from "@/assets/produto-selagem-beele.jpg";
import suportesTubulacao from "@/assets/produto-suportes-tubulacao.jpg";

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
    images: [prensaCabo, cableCleat, adaptadores, prensaCabo2],
  },
  {
    id: "sealing",
    title: "MCT Wallmax",
    intro:
      "Multi Cable Transit (MCT): vedações modulares para cabos e tubos, com proteção contra fogo, estanqueidade de água e gás, e barreira contra parasitas (ratos e insetos).",
    bullets: [
      { label: "Sistema modular", text: "Proteção contra fogo, água, gás e poeira em uma única solução." },
      { label: "Áreas classificadas", text: "Proteções 'Ex' para uso em ambientes industriais e offshore." },
      { label: "Manutenção fácil", text: "Inserção e remoção de cabos sem refazer toda a vedação." },
    ],
    images: [mctWallmax, mctModulo, mctCircular, selagemBeele],
  },
  {
    id: "watertight",
    title: "Selos UGA System-Technik",
    intro:
      "Selos para cabos e tubos lisos ou corrugados em aplicações subterrâneas e enterradas, garantindo estanqueidade total de água e gás.",
    bullets: [
      { label: "Subterrâneo & enterrado", text: "Especificado para passagens em paredes, lajes e dutos." },
      { label: "Estanqueidade total", text: "Vedação confiável de água e gás em condições severas." },
      { label: "Anti-parasitas", text: "Proteção contra ratos e insetos em pontos críticos." },
    ],
    images: [selagemBeele, mctCircular, mctModulo, mctWallmax],
  },
  {
    id: "beele",
    title: "Beele Safety Sealing",
    intro:
      "Soluções flexíveis e modeláveis para selagem de cabos e tubos, com instalação prática independente da geometria da transição. Para construção naval, offshore, indústria e construção civil.",
    bullets: [
      { label: "Instalação flexível", text: "Adapta-se a qualquer área de transição sem moldes complexos." },
      { label: "Antichama & estanque", text: "Proteção contra fogo, água e gás em uma única aplicação." },
      { label: "Anti-parasitas", text: "Barreira eficiente contra ratos e insetos." },
    ],
    images: [selagemBeele, mctCircular, mctWallmax, mctModulo],
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
