export function AboutSection() {
  return (
    <section id="about-preview" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-cyan-soft">
          <span className="h-px w-10 bg-primary/40" />
          About Nexcore Brasil
        </div>
        <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-6xl">
          Built for critical environments, <span className="text-primary/70">Nexcore Brasil</span> operates
          where performance, safety, and reliability are <em className="font-serif-italic">non-negotiable.</em>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Fornecemos e integramos soluções técnicas para projetos de Data Centers, Energia e Óleo &amp; Gás —
            atuando lado a lado com engenheiros e integradores desde a especificação inicial até a implementação final.
            Nosso papel vai além da distribuição: apoiamos a definição correta das soluções, ajudando a reduzir riscos,
            otimizar performance e garantir confiabilidade de longo prazo em cada etapa do projeto.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=75"
            alt="Engenheiro Nexcore Brasil em planta industrial"
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
