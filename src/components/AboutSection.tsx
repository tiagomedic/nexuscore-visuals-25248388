import aboutEngenheiro from "@/assets/about-engenheiro.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>({ selector: "[data-reveal]", y: 50 });
  return (
    <section ref={ref} id="about-preview" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-cyan-soft">
          <span className="h-px w-10 bg-primary/40" />
          About Nexcore Brasil
        </div>
        <h2 data-reveal className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-6xl">
          Built for critical environments, <span className="text-primary/70">Nexcore Brasil</span> operates
          where performance, safety, and reliability are <em className="font-serif-italic">non-negotiable.</em>
        </h2>

        <div data-reveal className="mt-12">
          <p className="max-w-5xl text-base leading-relaxed text-muted-foreground md:text-lg mx-0 my-0">
            Fornecemos e integramos soluções técnicas para projetos de Data Centers, Energia e Óleo &amp; Gás —
            atuando lado a lado com engenheiros e integradores desde a especificação inicial até a implementação final.
            Nosso papel vai além da distribuição: apoiamos a definição correta das soluções, ajudando a reduzir riscos,
            otimizar performance e garantir confiabilidade de longo prazo em cada etapa do projeto.
          </p>
        </div>

        <div data-reveal className="mt-16 overflow-hidden rounded-2xl shadow-soft">
          <img
            src={aboutEngenheiro}
            alt="Engenheiro Nexcore Brasil em planta industrial"
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
