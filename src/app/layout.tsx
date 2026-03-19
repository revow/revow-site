import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revow — Revenue Operating System",
  description: "AI-powered revenue intelligence that maps your entire revenue cycle, detects invisible leaks, and prescribes actions — customized to your business.",
  keywords: ["revenue operations", "revenue intelligence", "AI agents", "RevOS", "revenue leakage", "revenue protection"],
  openGraph: {
    title: "Revow — From Blind Spots to Smart Signals",
    description: "AI-powered revenue intelligence that maps your entire revenue cycle, detects invisible leaks, and prescribes actions.",
    url: "https://revow.ai",
    siteName: "Revow",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
