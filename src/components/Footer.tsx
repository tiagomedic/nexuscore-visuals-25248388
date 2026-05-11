import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" showTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Soluções integradas de engenharia para infraestrutura crítica:
              Data Centers, Energia, Óleo &amp; Gás e projetos EPC no Brasil e no exterior.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/sobre" className="hover:text-white">Sobre a Nexcore</Link></li>
              <li><Link to="/solucoes" className="hover:text-white">Soluções</Link></li>
              <li><Link to="/mercados" className="hover:text-white">Mercados</Link></li>
              <li><Link to="/parceiros" className="hover:text-white">Parceiros</Link></li>
              <li><Link to="/contato" className="hover:text-white">Fale conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              Soluções
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Electrical Connectivity</li>
              <li>Sealing Solutions</li>
              <li>Watertight Sealing</li>
              <li>Beele Sealing Technologies</li>
              <li>Pipe Support Technology</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-cyan" />
                <a href="mailto:comercial@nexcore.com.br" className="hover:text-white">
                  comercial@nexcore.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 text-cyan" />
                <a href="https://wa.me/5500000000000" className="hover:text-white">
                  +55 (xx) xxxxx-xxxx
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-cyan" />
                <span>Brasil — International Projects</span>
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
          <p>© {new Date().getFullYear()} Nexcore Brasil · Integrated Solutions</p>
          <p>Powering what cannot fail.</p>
        </div>
      </div>
    </footer>
  );
}
