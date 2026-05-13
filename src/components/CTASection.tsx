import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function CTASection() {
  const ref = useScrollReveal<HTMLElement>({ selector: "[data-reveal]", y: 40, stagger: 0.2 });
  const { t } = useLanguage();
  return (
    <section ref={ref} className="relative overflow-hidden bg-cta py-28 text-white">
      <svg
        viewBox="0 0 1600 600"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ctaArc" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M -100 600 Q 800 -200 1700 600" fill="none" stroke="url(#ctaArc)" strokeWidth="2" />
      </svg>
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p data-reveal className="text-3xl font-light leading-snug md:text-5xl">
          {t("cta.line1.prefix")} <span className="font-serif-italic text-cyan">{t("cta.line1.italic")}</span>{t("cta.line1.suffix")}
          <br />
          {t("cta.line2")}
        </p>
        <a
          data-reveal
          href="mailto:adriano@nexcorebrasil.com"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary shadow-glow transition-all hover:-translate-y-0.5"
        >
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
}
