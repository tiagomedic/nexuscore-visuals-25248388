import { createFileRoute } from "@tanstack/react-router";
import { HeroArc } from "@/components/HeroArc";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { MarketsGrid } from "@/components/MarketsGrid";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

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
  const { t } = useLanguage();
  return (
    <>
      <HeroArc />
      <AboutSection />

      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("solutions.eyebrow")}
            title={<>{t("solutions.title.prefix")} <span className="text-primary/70">{t("solutions.title.highlight")}</span></>}
            description={t("solutions.description")}
          />
          <div className="mt-12">
            <SolutionsTabs />
          </div>
        </div>
      </section>

      <section className="bg-background py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("markets.eyebrow")}
            title={t("markets.title")}
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
