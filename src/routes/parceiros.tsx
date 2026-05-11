import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

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
  { name: "Beele Engineering", focus: "Sealing technologies, fire & watertight" },
  { name: "Roxtec", focus: "Multi cable transit systems" },
  { name: "Anvil International", focus: "Pipe support technology" },
  { name: "MCT Brattberg", focus: "Cable & pipe penetration sealing" },
  { name: "PSA BV", focus: "Industrial sealing components" },
  { name: "Hilti", focus: "Firestop & fastening" },
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div key={p.name} className="group rounded-2xl bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-deep text-2xl font-semibold text-cyan">
                  {p.name.charAt(0)}
                </div>
                <h3 className="mt-6 text-xl font-medium text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.focus}</p>
                <div className="mt-6 h-px w-12 bg-cyan-soft transition-all group-hover:w-24" />
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
