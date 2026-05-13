import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import partnerCmp from "@/assets/partner-cmp.png";
import partnerWallmax from "@/assets/partner-wallmax.png";
import partnerCarpenter from "@/assets/partner-carpenter.png";
import partnerBeele from "@/assets/partner-beele.png";
import partnerUga from "@/assets/partner-uga.png";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Parceiros — Nexcore Brasil | Fabricantes e Tecnologias Globais" },
      {
        name: "description",
        content:
          "Trabalhamos com fabricantes globais reconhecidos para entregar soluções de classe mundial em infraestrutura crítica.",
      },
      { property: "og:title", content: "Parceiros — Nexcore Brasil" },
      { property: "og:description", content: "Tecnologias globais para projetos críticos." },
      { property: "og:url", content: "https://www.nexcorebrasil.com/parceiros" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexcorebrasil.com/parceiros" }],
  }),
  component: PartnersPage,
});

// Mobile order: CMP first, then the rest.
// Desktop layout (chess pattern): top row [Wallmax, CMP, Carpenter], bottom row [Beele, UGA] offset between them.
const partners = [
  { name: "CMP", logo: partnerCmp, desktop: "md:col-start-3 md:col-span-2 md:row-start-1" },
  { name: "Wallmax", logo: partnerWallmax, desktop: "md:col-start-1 md:col-span-2 md:row-start-1" },
  { name: "Carpenter & Paterson", logo: partnerCarpenter, desktop: "md:col-start-5 md:col-span-2 md:row-start-1" },
  { name: "Beele Safety Sealing Systems", logo: partnerBeele, desktop: "md:col-start-2 md:col-span-2 md:row-start-2" },
  { name: "UGA Cable and Pipe Entries", logo: partnerUga, desktop: "md:col-start-4 md:col-span-2 md:row-start-2" },
];

function PartnersPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow={t("partnersPage.eyebrow")}
            title={<>{t("partnersPage.title.prefix")} <em className="font-serif-italic text-cyan">{t("partnersPage.title.italic")}</em></>}
            description={t("partnersPage.description")}
          />
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-10 text-sm font-medium tracking-[0.2em] text-muted-foreground">
            {t("partnersPage.label")}
          </p>
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-6 md:gap-x-8 md:gap-y-14 lg:gap-x-12">
            {partners.map((p) => (
              <div
                key={p.name}
                className={`flex items-center justify-center ${p.desktop}`}
              >
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
