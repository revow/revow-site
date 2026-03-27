import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { getAllSlugs } from "@/data/articles";

const BASE_URL = "https://revow.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}/${l}`])
  );

  const entries: MetadataRoute.Sitemap = [];

  // Home pages
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: alternates },
    });
  }

  // Blog index
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Blog articles
  const slugs = getAllSlugs();
  for (const locale of locales) {
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // E-book — uncomment when ready to launch
  // for (const locale of locales) {
  //   entries.push({
  //     url: `${BASE_URL}/${locale}/ebook`,
  //     lastModified: new Date(),
  //     changeFrequency: "monthly",
  //     priority: 0.9,
  //   });
  // }

  return entries;
}
