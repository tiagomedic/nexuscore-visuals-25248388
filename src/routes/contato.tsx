import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Nexcore Brasil | Fale com nosso time técnico" },
      {
        name: "description",
        content:
          "Fale com a Nexcore Brasil. Suporte técnico para Data Centers, Energia, Óleo & Gás e projetos EPC. adriano@nexcore.com.br",
      },
      { property: "og:title", content: "Contato — Nexcore Brasil" },
      { property: "og:description", content: "Nossa equipe técnica pronta para apoiar seu projeto." },
    ],
  }),
  component: ContactPage,
});

const WHATS = "5521988506014";

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  const schema = z.object({
    name: z.string().trim().min(2, t("contactPage.err.name")).max(100),
    email: z.string().trim().email(t("contactPage.err.email")).max(255),
    company: z.string().trim().max(120).optional(),
    phone: z.string().trim().max(30).optional(),
    segment: z.string().trim().max(80).optional(),
    message: z.string().trim().min(10, t("contactPage.err.message")).max(2000),
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? t("contactPage.toast.fields"));
      return;
    }
    setSubmitting(true);
    const { name, email, company, phone, segment, message } = parsed.data;
    const text =
      `Hello Nexcore Brasil!%0A%0A` +
      `*Nome:* ${encodeURIComponent(name)}%0A` +
      `*E-mail:* ${encodeURIComponent(email)}%0A` +
      (company ? `*Empresa:* ${encodeURIComponent(company)}%0A` : "") +
      (phone ? `*Telefone:* ${encodeURIComponent(phone)}%0A` : "") +
      (segment ? `*Segmento:* ${encodeURIComponent(segment)}%0A` : "") +
      `%0A*Mensagem:*%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATS}?text=${text}`, "_blank", "noopener");
    toast.success(t("contactPage.toast.success"));
    form.reset();
    setSubmitting(false);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-deep pb-20 pt-40 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at 50% 100%, oklch(0.42 0.18 235 / 0.6), transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow={t("contactPage.eyebrow")}
            title={<>{t("contactPage.title.prefix")} <em className="font-serif-italic text-cyan">{t("contactPage.title.italic")}</em></>}
            description={t("contactPage.description")}
          />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-medium text-primary">{t("contactPage.h2")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("contactPage.sub")}</p>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-cyan">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="font-semibold text-primary">{t("contactPage.email")}</p>
                  <a href="mailto:adriano@nexcorebrasil.com" className="text-muted-foreground hover:text-primary">
                    adriano@nexcorebrasil.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-cyan">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="font-semibold text-primary">{t("contactPage.phone")}</p>
                  <p className="text-muted-foreground">+55 (21) 98850-6014</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle size={16} />
                </span>
                <div>
                  <p className="font-semibold text-primary">{t("contactPage.whatsapp")}</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5521988506014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    {t("contactPage.whatsapp.link")}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-cyan">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="font-semibold text-primary">{t("contactPage.location")}</p>
                  <p className="text-muted-foreground">{t("contactPage.locationValue")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-2xl bg-card p-8 shadow-soft md:p-12">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={t("contactPage.f.name")} name="name" type="text" required />
              <Field label={t("contactPage.f.email")} name="email" type="email" required />
              <Field label={t("contactPage.f.company")} name="company" />
              <Field label={t("contactPage.f.phone")} name="phone" type="tel" />
              <Field label={t("contactPage.f.segment")} name="segment" placeholder={t("contactPage.f.segment.ph")} className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary/70">
                  {t("contactPage.f.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-cyan-soft"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-60"
            >
              <Send size={16} /> {t("contactPage.f.send")}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">{t("contactPage.f.note")}</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-cyan-soft"
      />
    </div>
  );
}
