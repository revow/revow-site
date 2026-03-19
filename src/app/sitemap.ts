import type { MetadataRoute } from "next";
import { locales } from "@/i18n";

const BASE_URL = "https://revow.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}/${l}`])
  );

  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: { languages: alternates },
  }));
}
