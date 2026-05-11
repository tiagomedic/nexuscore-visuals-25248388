import { createFileRoute } from "@tanstack/react-router";
import { HeroArc } from "@/components/HeroArc";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { MarketsGrid } from "@/components/MarketsGrid";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexcore Brasil — Powering what cannot fail | Soluções Integradas" },
      {
        name: "description",
        content:
          "Soluções integradas de engenharia para Data Centers, Energia e Óleo & Gás. Especificação, integração e suporte técnico de ponta a ponta.",
      },
      { property: "og:title", content: "Nexcore Brasil — Powering what cannot fail" },
      { property: "og:description", content: "Soluções integradas para infraestrutura crítica no Brasil." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroArc />
      <AboutSection />

      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Solutions"
            title={<>Technical excellence for <span className="text-primary/70">demanding environments</span></>}
            description="Suporte técnico para projetos complexos de infraestrutura crítica. Da especificação ao comissionamento, garantimos zero-failure outcome para Plataformas Offshore, Data Centers e Subestações."
          />
          <div className="mt-12">
            <SolutionsTabs />
          </div>
        </div>
      </section>

      <section className="bg-background py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Markets"
            title="Sectors where operational continuity is essential"
          />
          <div className="mt-12">
            <MarketsGrid />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
