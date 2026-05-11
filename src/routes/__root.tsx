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
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deep px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-light text-cyan">404</h1>
        <h2 className="mt-4 text-xl font-medium">Página não encontrada</h2>
        <p className="mt-2 text-sm text-white/65">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-medium text-deep transition-colors hover:bg-white"
        >
          Voltar ao início
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
          email: "comercial@nexcore.com.br",
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
    <html lang="pt-BR">
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
