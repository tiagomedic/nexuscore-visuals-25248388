import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageProvider";

function NotFoundComponent() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-deep px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-light text-cyan">404</h1>
        <h2 className="mt-4 text-xl font-medium">{t("nf.title")}</h2>
        <p className="mt-2 text-sm text-white/65">{t("nf.body")}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-medium text-deep transition-colors hover:bg-white"
        >
          {t("nf.back")}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-primary">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nexcore Brasil — Soluções Integradas para Infraestrutura Crítica" },
      {
        name: "description",
        content:
          "Nexcore Brasil fornece e integra soluções técnicas de engenharia para Data Centers, Energia e Óleo & Gás. Powering what cannot fail.",
      },
      { name: "author", content: "Nexcore Brasil" },
      { name: "keywords", content: "Nexcore Brasil, infraestrutura crítica, data center, energia, óleo e gás, EPC, vedação industrial, sealing solutions, pipe support, multi cable transit, Beele, soluções integradas" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { name: "geo.region", content: "BR" },
      { name: "geo.placename", content: "Brasil" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Nexcore Brasil" },
      { property: "og:title", content: "Nexcore Brasil — Powering what cannot fail" },
      { property: "og:description", content: "Soluções integradas para Data Centers, Energia e Óleo & Gás." },
      { property: "og:url", content: "https://www.nexcorebrasil.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexcore Brasil — Powering what cannot fail" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%226%22%20fill%3D%22%230B1B2A%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2256%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20font-family%3D%22Inter%2Csans-serif%22%20font-weight%3D%22700%22%20font-size%3D%2216%22%20fill%3D%22%2300C2D1%22%3EN%3C%2Ftext%3E%3C%2Fsvg%3E" },
      { rel: "canonical", href: "https://www.nexcorebrasil.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nexcore Brasil",
          alternateName: "Nexcore Integrated Solutions",
          url: "https://www.nexcorebrasil.com",
          email: "comercial@nexcorebrasil.com",
          slogan: "Powering what cannot fail",
          description:
            "Soluções integradas de engenharia para infraestrutura crítica: Data Centers, Energia e Óleo & Gás.",
          areaServed: { "@type": "Country", name: "Brasil" },
          knowsAbout: [
            "Data Centers",
            "Energy",
            "Oil & Gas",
            "EPC Projects",
            "Industrial Infrastructure",
            "Cable Transit Systems",
            "Pipe Support",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SmoothScroll />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster richColors position="top-right" />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
