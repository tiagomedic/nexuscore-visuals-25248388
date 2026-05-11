import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — Nexcore Brasil | Cable Transit, Sealing, Pipe Support" },
      {
        name: "description",
        content:
          "Linha completa de soluções técnicas: Electrical Connectivity, Sealing Solutions, Watertight Sealing, Beele Sealing Technologies e Pipe Support.",
      },
      { property: "og:title", content: "Soluções — Nexcore Brasil" },
      { property: "og:description", content: "Excelência técnica para ambientes exigentes." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 -z-10 opacity-40"
             style={{ background: "radial-gradient(ellipse at 70% 50%, oklch(0.42 0.18 235 / 0.5), transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow="Solutions"
            title={<>Technical excellence for <em className="font-serif-italic text-cyan">demanding environments.</em></>}
            description="Da especificação ao comissionamento, garantimos zero-failure outcome para Offshore Platforms, Data Centers e Substations."
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SolutionsTabs />
        </div>
      </section>

      <CTASection />
    </>
  );
}
