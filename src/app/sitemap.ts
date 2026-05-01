import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { publications } from "@/lib/publications";

export const dynamic = "force-static";

const SITE_URL = "https://www.advizenco.com";

const STATIC_PATHS = [
  "",
  "/expertise",
  "/insights",
  "/store",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
  "/terms-of-sale",
];

function localizedUrl(path: string, locale: string): string {
  const localePart = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${localePart}${path}`;
}

function alternates(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedUrl(path, locale)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(path, locale),
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1.0 : 0.7,
      alternates: { languages: alternates(path) },
    })),
  );

  const articleSlugs = publications.filter((p) => p.hasRead).map((p) => p.slug);
  const articleEntries: MetadataRoute.Sitemap = articleSlugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(`/insights/${slug}`, locale),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: alternates(`/insights/${slug}`) },
    })),
  );

  return [...staticEntries, ...articleEntries];
}
