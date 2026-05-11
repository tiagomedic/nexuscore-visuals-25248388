import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/sobre", label: { pt: "Sobre", en: "About" } },
  { to: "/solucoes", label: { pt: "Soluções", en: "Solutions" } },
  { to: "/mercados", label: { pt: "Mercados", en: "Markets" } },
  { to: "/parceiros", label: { pt: "Parceiros", en: "Partners" } },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        transparent
          ? "bg-transparent"
          : "bg-deep/90 backdrop-blur-md border-b border-white/5"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" aria-label="Nexcore Brasil — Home" className="shrink-0">
          <Logo variant="light" showTagline />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-white"
              activeProps={{ className: "!text-cyan" }}
            >
              {l.label[lang]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-1 text-[11px] font-medium tracking-widest text-white/60 lg:flex">
            <button
              onClick={() => setLang("en")}
              className={cn("transition-colors hover:text-white", lang === "en" && "text-white")}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLang("pt")}
              className={cn("transition-colors hover:text-white", lang === "pt" && "text-white")}
            >
              PT
            </button>
          </div>

          <Link
            to="/contato"
            className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-all hover:text-cyan lg:inline-block"
          >
            <span className="border-b border-white/40 pb-1 hover:border-cyan">
              {lang === "pt" ? "Fale conosco" : "Get in touch"}
            </span>
          </Link>

          <button
            className="text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "overflow-hidden bg-deep/95 backdrop-blur-md transition-all duration-500 lg:hidden",
          open ? "max-h-[420px] border-b border-white/10" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-3 text-sm uppercase tracking-[0.22em] text-white/80 hover:text-cyan"
            >
              {l.label[lang]}
            </Link>
          ))}
          <Link
            to="/contato"
            className="mt-2 inline-block w-fit rounded-full bg-cyan px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-deep"
          >
            {lang === "pt" ? "Fale conosco" : "Get in touch"}
          </Link>
        </div>
      </div>
    </header>
  );
}
