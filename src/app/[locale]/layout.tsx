import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { locales } from "@/i18n";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revow — Revenue Operating System",
  description: "AI-powered revenue intelligence that maps your entire revenue cycle, detects invisible leaks, and prescribes actions — customized to your business.",
  openGraph: {
    title: "Revow — From Blind Spots to Smart Signals",
    description: "AI-powered revenue intelligence that maps your entire revenue cycle, detects invisible leaks, and prescribes actions.",
    url: "https://revow.ai",
    siteName: "Revow",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
