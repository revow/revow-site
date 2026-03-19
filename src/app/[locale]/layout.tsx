import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { locales, type Locale } from "@/i18n";
import "./globals.css";

const GA_ID = "G-0QD3HWVEJE";
const BASE_URL = "https://revow.ai";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

const descriptions: Record<Locale, string> = {
  en: "AI-powered revenue intelligence that maps your entire revenue cycle, detects invisible leaks, and prescribes actions — customized to your business.",
  pt: "Inteligência de receita com IA que mapeia todo o ciclo de receita, detecta vazamentos invisíveis e prescreve ações — personalizada para o seu negócio.",
  es: "Inteligencia de ingresos con IA que mapea todo tu ciclo de ingresos, detecta fugas invisibles y prescribe acciones — personalizada para tu negocio.",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const description = descriptions[loc] ?? descriptions.en;

  const alternates: Record<string, string> = {};
  for (const l of locales) {
    alternates[l] = `${BASE_URL}/${l}`;
  }

  return {
    title: "Revow — Revenue Operating System",
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternates,
    },
    openGraph: {
      title: "Revow — From Blind Spots to Smart Signals",
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Revow",
      type: "website",
      locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
      images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Revow — Revenue Operating System" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Revow — Revenue Operating System",
      description,
      images: ["/images/og.png"],
    },
    icons: { icon: "/favicon.ico" },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revow",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo_cor_revow.png`,
  description: "AI-powered Revenue Operating System that maps revenue cycles, detects invisible leaks, and prescribes actions.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    email: "mariana@revow.ai",
    contactType: "sales",
    availableLanguage: ["English", "Portuguese", "Spanish"],
  },
  sameAs: [],
  knowsAbout: [
    "Revenue Intelligence",
    "Revenue Operations",
    "AI-powered Analytics",
    "Revenue Cycle Management",
    "Business Intelligence",
    "Revenue Leak Detection",
  ],
  offers: {
    "@type": "Offer",
    name: "Revenue Operating System",
    description: "Custom-built AI platform that monitors, diagnoses, and prescribes actions for your revenue cycle.",
    category: "SaaS",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Revow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Revenue Operating System — three-layer AI platform (Data, Intelligence, Delivery) that monitors revenue cycles, detects leaks via proprietary ontology, and prescribes actions through multi-agent AI copilots.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Custom pricing — contact for demo",
  },
  featureList: [
    "Real-time revenue monitoring with PACE methodology",
    "End-to-end funnel intelligence with trend detection",
    "Smart alert engine with severity classification",
    "AI Revenue Copilot with anti-hallucination safeguards",
    "Proprietary revenue ontology",
    "Circuit Breakers — AI that knows when NOT to act",
    "Multi-channel delivery (Dashboard, WhatsApp, API)",
  ],
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
