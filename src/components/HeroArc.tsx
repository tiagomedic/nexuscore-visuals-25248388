import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const ShaderBackground = lazy(() => import("./ui/shader-background"));

gsap.registerPlugin(ScrollTrigger);

export function HeroArc() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-parallax]", {
        yPercent: -25,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate flex min-h-screen items-end overflow-hidden bg-deep text-deep-foreground">
      {/* Animated WebGL shader background (desktop only, lazy) */}
      <Suspense fallback={null}>
        <ShaderBackground className="absolute inset-0 -z-20 h-full w-full opacity-40" />
      </Suspense>
      <div className="absolute inset-0 -z-10 bg-deep/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/40 via-deep/60 to-deep" />

      {/* Decorative arc */}
      <svg
        viewBox="0 0 1600 800"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-50"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="arcG" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 750 Q 800 -100 1650 750"
          fill="none"
          stroke="url(#arcG)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </svg>

      <div data-hero-parallax className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.32em] text-cyan"
        >
          {t("hero.eyebrow")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2.prefix")} <span className="font-serif-italic text-cyan">{t("hero.title.line2.italic")}</span>
        </motion.h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:mt-16 sm:gap-10 lg:flex-row lg:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-md text-base leading-relaxed text-white/75 lg:ml-auto lg:text-right"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.a
            href="mailto:comercial@nexcore.com"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-deep shadow-glow transition-all hover:-translate-y-0.5"
          >
            {t("hero.cta")}
          </motion.a>

          <motion.a
            href="#about-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            aria-label="Scroll down"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-cyan hover:text-cyan"
          >
            <ArrowDown size={18} className="animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
