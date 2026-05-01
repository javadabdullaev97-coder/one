"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Section {
  title: string;
  body: string;
}

export default function TermsOfUsePage() {
  const tCommon = useTranslations("Legal.common");
  const t = useTranslations("Legal.terms");
  const sections = t.raw("sections") as Section[];

  return (
    <motion.main
      className="bg-black min-h-screen"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="border-b border-white/[0.06] bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-dark mb-4">
            {tCommon("eyebrow")}
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t("title")}
          </h1>
          <p className="text-sm text-white/40">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-12 text-sm text-white/55 leading-relaxed">
          {t("intro")}
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
              <div className="text-[11px] tracking-[0.2em] uppercase text-primary font-medium pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground mb-4 tracking-wide">
                  {section.title}
                </h2>
                <div className="text-sm text-white/55 leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-xs text-white/25 leading-relaxed">
            {t("footer")}
          </p>
        </div>
      </div>
    </motion.main>
  );
}
