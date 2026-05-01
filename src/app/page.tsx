import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const target = `/${routing.defaultLocale}`;

export const metadata: Metadata = {
  title: "Advizen Consulting",
  robots: { index: false, follow: false },
  alternates: { canonical: `https://www.advizenco.com${target}` },
  other: {
    refresh: `0;url=${target}`,
  },
};

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <link rel="canonical" href={`https://www.advizenco.com${target}`} />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target)})`,
          }}
        />
      </body>
    </html>
  );
}
