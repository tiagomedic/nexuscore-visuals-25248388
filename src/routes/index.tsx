import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { HeroArc } from "@/components/HeroArc";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { MarketsGrid } from "@/components/MarketsGrid";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";
import partnerCmp from "@/assets/partner-cmp.png";
import partnerWallmax from "@/assets/partner-wallmax.png";
import partnerCarpenter from "@/assets/partner-carpenter.png";
import partnerBeele from "@/assets/partner-beele.png";
import partnerUga from "@/assets/partner-uga.png";

const homePartners = [
  { name: "CMP", logo: partnerCmp, desktop: "md:col-start-3 md:col-span-2 md:row-start-1" },
  { name: "Wallmax", logo: partnerWallmax, desktop: "md:col-start-1 md:col-span-2 md:row-start-1" },
  { name: "Carpenter & Paterson", logo: partnerCarpenter, desktop: "md:col-start-5 md:col-span-2 md:row-start-1" },
  { name: "Beele Safety Sealing Systems", logo: partnerBeele, desktop: "md:col-start-2 md:col-span-2 md:row-start-2" },
  { name: "UGA Cable and Pipe Entries", logo: partnerUga, desktop: "md:col-start-4 md:col-span-2 md:row-start-2" },
];

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
      { property: "og:url", content: "https://www.nexcorebrasil.com/" },
      { name: "twitter:description", content: "Soluções integradas para infraestrutura crítica no Brasil." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nexcorebrasil.com/" },
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

      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("partnersPage.eyebrow")}
            title={<>{t("partnersPage.title.prefix")} <em className="font-serif-italic text-primary/70">{t("partnersPage.title.italic")}</em></>}
            description={t("partnersPage.description")}
          />
          <div className="mt-8 text-center">
            <Link
              to="/parceiros"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary hover:text-primary/70"
            >
              {t("nav.partners")} →
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-6 md:gap-x-8 md:gap-y-14 lg:gap-x-12">
            {homePartners.map((p) => (
              <div key={p.name} className={`flex items-center justify-center ${p.desktop}`}>
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-24 w-auto object-contain transition-smooth hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
