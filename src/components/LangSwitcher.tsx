"use client";
import { usePathname } from "next/navigation";
import { locales } from "../i18n";

const labels: Record<string, string> = { en: "EN", pt: "PT", es: "ES" };

export default function LangSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => {
        const newPath = pathname.replace(`/${locale}`, `/${loc}`);
        const isActive = loc === locale;
        return (
          <a
            key={loc}
            href={newPath}
            className={`text-xs font-semibold uppercase tracking-wider transition px-2.5 py-1.5 rounded-full ${
              isActive
                ? "bg-accent text-white"
                : "text-text-muted hover:text-accent border border-border"
            }`}
          >
            {labels[loc]}
          </a>
        );
      })}
    </div>
  );
}
