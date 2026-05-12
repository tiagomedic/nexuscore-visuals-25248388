import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import partnerCmp from "@/assets/partner-cmp.png";
import partnerWallmax from "@/assets/partner-wallmax.png";
import partnerCarpenter from "@/assets/partner-carpenter.png";
import partnerBeele from "@/assets/partner-beele.png";
import partnerUga from "@/assets/partner-uga.png";

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
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "CMP", logo: partnerCmp },
  { name: "Wallmax", logo: partnerWallmax },
  { name: "Carpenter & Paterson", logo: partnerCarpenter },
  { name: "Beele Safety Sealing Systems", logo: partnerBeele },
  { name: "UGA Cable and Pipe Entries", logo: partnerUga },
];

function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow="Partners"
            title={<>Tecnologias globais. <em className="font-serif-italic text-cyan">Entrega local.</em></>}
            description="Representamos e integramos fabricantes reconhecidos mundialmente em projetos de infraestrutura crítica."
          />
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-24 w-auto object-contain opacity-70 grayscale transition-smooth hover:opacity-100"
                />
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
            * Lista representativa. A composição da carteira de parceiros pode variar conforme o escopo do projeto.
            Entre em contato para informações específicas de fornecimento.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
