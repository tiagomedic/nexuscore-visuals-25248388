import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ShieldCheck, Target, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Nexcore Brasil — Engenharia para Infraestrutura Crítica" },
      {
        name: "description",
        content:
          "Conheça a Nexcore Brasil: integradora técnica especializada em Data Centers, Energia e Óleo & Gás, com atuação no Brasil e em projetos internacionais.",
      },
      { property: "og:title", content: "Sobre a Nexcore Brasil" },
      { property: "og:description", content: "Engenharia para infraestrutura crítica no Brasil e exterior." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Confiabilidade", text: "Atuamos onde falha não é uma opção." },
  { icon: Target, title: "Especificação correta", text: "Apoio técnico do projeto à entrega." },
  { icon: Users, title: "Parceria com integradores", text: "Lado a lado com engenheiros e EPCs." },
  { icon: Globe, title: "Alcance internacional", text: "Brasil e projetos no exterior." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at 30% 50%, oklch(0.42 0.18 235 / 0.5), transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow="About Nexcore Brasil"
            title={<>Construída para ambientes <em className="font-serif-italic text-cyan">críticos.</em></>}
            description="Onde performance, segurança e confiabilidade não são negociáveis."
          />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-3xl font-medium leading-tight text-primary md:text-4xl">
              Mais que distribuição. Engenharia integrada.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                A Nexcore Brasil fornece e integra soluções técnicas para projetos de Data Centers, Energia e
                Óleo &amp; Gás — atuando lado a lado com engenheiros, integradores e EPCs desde a especificação
                inicial até a implementação final.
              </p>
              <p>
                Nosso papel vai além da distribuição: apoiamos a definição correta das soluções, ajudando a reduzir
                riscos, otimizar performance e garantir confiabilidade de longo prazo em cada etapa do projeto.
              </p>
              <p className="text-primary">
                <span className="font-serif-italic text-2xl">"</span>
                We don't sell products. We ensure critical operations never stop.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=75"
              alt="Engenheiro Nexcore Brasil em campo"
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Valores"
            title="O que nos move"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-glow">
                  <Icon className="mb-5 text-cyan-soft" size={30} strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
