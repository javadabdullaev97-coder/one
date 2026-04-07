import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
  description:
    "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
  keywords: [
    "business consulting Uzbekistan",
    "tax consulting Tashkent",
    "legal advisory Central Asia",
    "HR services Uzbekistan",
    "Employer of Record Uzbekistan",
    "accounting services Tashkent",
  ],
  openGraph: {
    title: "Advizen Consulting | Premier Business Advisory",
    description:
      "One-stop business consulting partner in Uzbekistan. Tax, legal, finance, HR, and marketing under one roof.",
    type: "website",
    locale: "en_US",
    siteName: "Advizen Consulting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Advizen Consulting",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, HR, and marketing services.",
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
    "Finance & Accounting",
    "HR Services",
    "Marketing",
    "Funding & Grants",
  ],
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
