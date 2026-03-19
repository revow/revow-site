"use client";
import { usePathname } from "next/navigation";

export default function LangSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "pt" : "en";
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <a
      href={newPath}
      className="text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition border border-border rounded-full px-3 py-1.5"
    >
      {otherLocale === "en" ? "EN" : "PT"}
    </a>
  );
}
