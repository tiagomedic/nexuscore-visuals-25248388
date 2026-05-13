import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { MarketsGrid } from "@/components/MarketsGrid";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";

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
      { property: "og:url", content: "https://www.nexcorebrasil.com/mercados" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexcorebrasil.com/mercados" }],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow={t("marketsPage.eyebrow")}
            title={t("marketsPage.title")}
            description={t("marketsPage.description")}
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
