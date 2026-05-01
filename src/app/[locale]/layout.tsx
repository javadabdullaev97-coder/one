import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Josefin_Sans, Raleway, Inter, Inter_Tight, Onest } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";

const localeMetadata: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
    description:
      "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
    ogLocale: "en_US",
  },
  ru: {
    title: "Advizen Consulting | Ведущий бизнес-консультант в Узбекистане",
    description:
      "Advizen Consulting — надёжный партнёр в области налогового, юридического, финансового консалтинга, бухгалтерии и HR в Узбекистане. 8+ лет интегрированной экспертизы в 15+ отраслях Центральной Азии.",
    ogLocale: "ru_RU",
  },
  uz: {
    title: "Advizen Consulting | O'zbekistondagi yetakchi biznes maslahatchi",
    description:
      "Advizen Consulting — O'zbekistonda soliq, huquqiy, moliyaviy konsalting, buxgalteriya va HR sohasidagi ishonchli hamkoringiz. Markaziy Osiyodagi 15+ sohada 8+ yillik integratsiyalashgan tajriba.",
    ogLocale: "uz_UZ",
  },
};

function localePath(path: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

const syne = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-hero",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const m = localeMetadata[safe];
  const canonical = localePath("", safe);
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localePath("", l)]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    icons: { icon: "/Logo-v3.png", apple: "/Logo-v3.png" },
    keywords: [
      "business consulting Uzbekistan",
      "tax consulting Tashkent",
      "legal advisory Central Asia",
      "HR services Uzbekistan",
      "Employer of Record Uzbekistan",
      "accounting services Tashkent",
    ],
    alternates: {
      canonical,
      languages: { ...languages, "x-default": localePath("", routing.defaultLocale) },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: m.ogLocale,
      siteName: "Advizen Consulting",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Advizen Consulting",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, and HR services.",
  url: "https://www.advizenco.com",
  telephone: "+998334884888",
  email: "info@advizenco.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressCountry: "UZ",
  },
  areaServed: {
    "@type": "Place",
    name: "Central Asia",
  },
  serviceType: [
    "Tax Consulting",
    "Legal Advisory",
    "Accounting",
    "HR Services",
    "Funding",
    "Corporate Services",
    "Entity Management",
  ],
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`h-full antialiased ${syne.variable} ${raleway.variable} ${inter.variable} ${interTight.variable} ${onest.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
