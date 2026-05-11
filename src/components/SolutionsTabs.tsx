import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Soluções de conectividade elétrica para ambientes críticos, desde plataformas offshore até data centers de missão crítica.",
    bullets: [
      { label: "Conectores industriais", text: "Alta performance em ambientes severos." },
      { label: "Sistemas modulares", text: "Flexibilidade na especificação e instalação." },
      { label: "Certificações globais", text: "Atende normas ATEX, IECEx e UL." },
    ],
    images: [
      "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1574170609686-77b9d5b6f5e1?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "sealing",
    title: "Sealing Solutions",
    intro:
      "Multi Cable Transit Solutions desenvolvidas para garantir vedação confiável e segura de cabos e tubulações em ambientes críticos.",
    bullets: [
      { label: "Sistemas modulares", text: "Proteção contra ingresso de poeira, água, fogo e agentes ambientais." },
      { label: "Alto nível de segurança", text: "Ampla gama de soluções adaptáveis a diferentes aplicações." },
      { label: "Praticidade", text: "Facilidade de instalação e manutenção, reduzindo tempo de intervenção." },
    ],
    images: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581092918484-8313ee1b9b4c?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "watertight",
    title: "Watertight Sealing Solutions",
    intro:
      "Soluções de vedação para penetrações estruturais em edifícios, como furos de núcleo, garantindo desempenho watertight e gas-tight.",
    bullets: [
      { label: "Split solutions", text: "Para cabos ou tubulações já instalados, permitindo montagem após a instalação." },
      { label: "Sistema versátil", text: "Veda uma ampla variedade de configurações de cabos e tubos." },
    ],
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "beele",
    title: "Beele Sealing Technologies",
    intro:
      "Seja em construção naval, offshore, instalações industriais ou construção civil, os produtos e sistemas de primeira classe da Beele garantem segurança contra fogo e integridade watertight.",
    bullets: [
      { label: "Cable Transits", text: "Penetrações de cabos com vedação resistente ao fogo." },
      { label: "Pipe Penetrations", text: "Soluções para tubulações sem componentes metálicos ou isolamento mineral." },
      { label: "Gaskets / Insulation / Coating", text: "Eliminação de riscos de corrosão e degradação de desempenho." },
    ],
    images: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "pipe",
    title: "Pipe Support Technology",
    intro: "Linha completa de Pipe Support Solutions para projetos de infraestrutura crítica.",
    bullets: [
      { label: "Spring supports", text: "Snubbers, cold (cryogenic) e hot shoes." },
      { label: "Ancillary equipment", text: "Hastes, conectores, fixações de tubo e de viga." },
      { label: "PTFE", text: "Slide bearings e produtos de isolamento." },
    ],
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
    ],
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
