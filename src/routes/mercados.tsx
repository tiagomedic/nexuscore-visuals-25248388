import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { MarketsGrid } from "@/components/MarketsGrid";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/mercados")({
  head: () => ({
    meta: [
      { title: "Mercados — Nexcore Brasil | Data Centers, Energia, Óleo & Gás" },
      {
        name: "description",
        content:
          "Setores onde a continuidade operacional é essencial: Data Centers, Energia, Óleo & Gás, Infraestrutura Industrial e Projetos EPC.",
      },
      { property: "og:title", content: "Mercados — Nexcore Brasil" },
      { property: "og:description", content: "Setores onde a continuidade operacional é essencial." },
    ],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow="Markets"
            title="Setores onde a continuidade operacional é essencial"
            description="Atuamos onde a infraestrutura precisa operar 24/7, com tolerância zero a falhas."
          />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MarketsGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
