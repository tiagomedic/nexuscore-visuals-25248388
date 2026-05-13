import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" showTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              {t("footer.nav")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/sobre" className="hover:text-white">{t("footer.nav.about")}</Link></li>
              <li><Link to="/solucoes" className="hover:text-white">{t("footer.nav.solutions")}</Link></li>
              <li><Link to="/mercados" className="hover:text-white">{t("footer.nav.markets")}</Link></li>
              <li><Link to="/parceiros" className="hover:text-white">{t("footer.nav.partners")}</Link></li>
              <li><a href="mailto:comercial@nexcorebrasil.com" className="hover:text-white">{t("footer.nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              {t("footer.solutions")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>{t("sol.electrical.title")}</li>
              <li>{t("sol.sealing.title")}</li>
              <li>{t("sol.watertight.title")}</li>
              <li>{t("sol.beele.title")}</li>
              <li>{t("sol.pipe.title")}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              {t("footer.contact")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-cyan" />
                <a href="mailto:comercial@nexcorebrasil.com" className="hover:text-white">
                  comercial@nexcorebrasil.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-cyan" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Big watermark */}
        <div className="mt-16 select-none overflow-hidden">
          <div className="-mb-6 whitespace-nowrap text-center font-semibold tracking-tighter text-white/[0.04]"
               style={{ fontSize: "clamp(80px, 18vw, 260px)", lineHeight: 1 }}>
            Nexcore Brasil
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nexcore Brasil · {t("footer.copyright")}</p>
          <p>{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
}
