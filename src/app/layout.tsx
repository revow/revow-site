import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revow — Revenue Operating System",
  description:
    "Inteligência de receita com IA que detecta perdas, prescreve ações e aprende com cada decisão. O primeiro Revenue Operating System do Brasil.",
  keywords: [
    "revenue operations",
    "revenue intelligence",
    "AI agents",
    "receita",
    "RevOS",
  ],
  openGraph: {
    title: "Revow — Revenue Operating System",
    description: "Sua receita está vazando. A Revow encontra e protege.",
    url: "https://revow.ai",
    siteName: "Revow",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
