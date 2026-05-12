import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ShaderBackground from "./ui/shader-background";

export function HeroArc() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-deep text-deep-foreground">
      {/* Animated WebGL shader background */}
      <ShaderBackground className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-deep/60" />

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

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-cyan"
        >
          <span className="h-px w-10 bg-cyan/60" />
          Critical Infrastructure Solution
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Powering what
          <br />
          cannot <span className="font-serif-italic text-cyan">fail</span>
        </motion.h1>

        <div className="mt-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-md text-base leading-relaxed text-white/75 lg:ml-auto lg:text-right"
          >
            Integrated solutions for critical infrastructure: <br />
            Data Centers, Energy and Oil &amp; Gas.
          </motion.p>

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
