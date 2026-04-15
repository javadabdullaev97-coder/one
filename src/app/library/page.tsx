"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  BookOpen,
  FileText,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";

/* ── Data ─────────────────────────────────────────────── */

const flagship = {
  tag: "Flagship Publication",
  title: "Doing Business in Uzbekistan",
  subtitle: "The Definitive Guide — 2024 Edition",
  description:
    "A comprehensive resource for international investors and companies entering the Uzbekistan market. Covers regulatory frameworks, tax structures, labour law, market entry strategies, and operational best practices.",
  year: "2024",
  pages: 148,
  languages: "EN / RU",
  chapters: [
    { num: "01", title: "Market Overview & Economic Landscape" },
    { num: "02", title: "Legal Framework for Foreign Investment" },
    { num: "03", title: "Tax System & Incentive Programs" },
    { num: "04", title: "Labour Law & Employment Regulations" },
    { num: "05", title: "Banking, Finance & Currency Controls" },
    { num: "06", title: "Practical Guide to Company Registration" },
  ],
};

type FilterTag = "All" | "Tax" | "HR" | "Legal" | "Market" | "Compliance";

const publications: {
  tag: string;
  category: FilterTag;
  title: string;
  description: string;
  year: string;
  pages: number;
  hasDownload?: boolean;
  hasRead?: boolean;
}[] = [
  {
    tag: "Tax Briefing",
    category: "Tax",
    title: "Uzbekistan Tax Landscape 2024–2025",
    description:
      "An analysis of recent tax reforms, key changes in legislation, and strategic implications for domestic and foreign-invested entities.",
    year: "2024",
    pages: 24,
    hasRead: true,
  },
  {
    tag: "HR Insight",
    category: "HR",
    title: "Employer of Record in Central Asia",
    description:
      "How foreign companies can hire and manage talent in Uzbekistan without establishing a local legal entity.",
    year: "2024",
    pages: 18,
    hasRead: true,
  },
  {
    tag: "Legal Brief",
    category: "Legal",
    title: "Foreign Investment Protection in Uzbekistan",
    description:
      "An overview of legal guarantees, bilateral treaties, and dispute resolution mechanisms available to foreign investors.",
    year: "2023",
    pages: 20,
    hasRead: true,
    hasDownload: true,
  },
  {
    tag: "Market Report",
    category: "Market",
    title: "Agriculture & Agribusiness Opportunities",
    description:
      "Sector analysis of Uzbekistan's agricultural market, export potential, and investment pathways.",
    year: "2023",
    pages: 32,
    hasRead: true,
  },
  {
    tag: "Compliance Guide",
    category: "Compliance",
    title: "IFRS Adoption in Uzbekistan",
    description:
      "Practical guidance on transitioning from National Accounting Standards to International Financial Reporting Standards.",
    year: "2023",
    pages: 28,
    hasRead: true,
    hasDownload: true,
  },
  {
    tag: "HR Guide",
    category: "HR",
    title: "Payroll & Social Contributions",
    description:
      "A detailed breakdown of payroll taxes, social contributions, and reporting obligations for employers in Uzbekistan.",
    year: "2022",
    pages: 16,
    hasRead: true,
  },
];

const filters: FilterTag[] = ["All", "Tax", "HR", "Legal", "Market", "Compliance"];

const stats = [
  { value: "7", label: "Publications" },
  { value: "Free", label: "Access" },
  { value: "EN / RU", label: "Languages" },
  { value: "2024", label: "Latest edition" },
];

/* ── Page ─────────────────────────────────────────────── */

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

  const filtered =
    activeFilter === "All"
      ? publications
      : publications.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ====== HERO ====== */}
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-luxury text-white/50 mb-6"
            >
              The Library
            </motion.p>
            <TextReveal
              text="Knowledge that empowers decisions"
              as="h1"
              mode="line"
              className="heading-luxury text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] max-w-3xl"
              delay={0.2}
            />
            <RevealLine delay={0.5}>
              <p className="text-lg text-white/55 max-w-xl mt-8 leading-relaxed">
                Guides, briefings, and market intelligence from our practice —
                rigorous, practical, and freely available.
              </p>
            </RevealLine>

            {/* Stats row */}
            <RevealLine delay={0.7}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 pt-10 border-t border-white/[0.06]">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="font-serif text-xl text-foreground font-light tabular-nums">
                      {s.value}
                    </span>
                    <span className="text-xs tracking-[0.16em] uppercase text-white/40">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* ====== FLAGSHIP PUBLICATION ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            {/* Section label */}
            <p className="tracking-luxury text-white/50 mb-12">Featured Publication</p>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left — content */}
                <div className="p-10 md:p-14 lg:p-16 relative">
                  {/* Watermark */}
                  <span className="absolute top-8 right-8 font-serif text-[8rem] leading-none font-light text-white/[0.03] select-none pointer-events-none">
                    01
                  </span>

                  <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary-light/80 border border-primary-light/20 rounded-full px-3 py-1 mb-8">
                    {flagship.tag}
                  </span>

                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight tracking-tight">
                    {flagship.title}
                  </h2>
                  <p className="text-sm text-white/40 mb-8 tracking-wide">
                    {flagship.subtitle}
                  </p>
                  <p className="text-white/55 leading-relaxed mb-10 max-w-md">
                    {flagship.description}
                  </p>

                  {/* Metadata row */}
                  <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-white/[0.06]">
                    {[
                      { label: "Year", value: flagship.year },
                      { label: "Pages", value: String(flagship.pages) },
                      { label: "Languages", value: flagship.languages },
                    ].map((m) => (
                      <div key={m.label}>
                        <p className="text-xs tracking-[0.16em] uppercase text-white/30 mb-1">
                          {m.label}
                        </p>
                        <p className="font-mono text-sm text-foreground/80">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <MagneticButton variant="primary">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </MagneticButton>
                    <MagneticButton variant="outline">
                      <BookOpen className="w-4 h-4" />
                      Read online
                    </MagneticButton>
                  </div>
                </div>

                {/* Right — chapter list */}
                <div className="border-t lg:border-t-0 lg:border-l border-white/[0.06] p-10 md:p-14 lg:p-16 bg-white/[0.01]">
                  <p className="tracking-luxury text-white/40 mb-8 text-xs uppercase">
                    Contents
                  </p>
                  <div className="space-y-0">
                    {flagship.chapters.map((chapter, i) => (
                      <motion.div
                        key={chapter.num}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.07,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex items-start gap-5 py-5 border-b border-white/[0.05] group cursor-default"
                      >
                        <span className="font-mono text-xs text-primary-light/60 mt-0.5 shrink-0">
                          {chapter.num}
                        </span>
                        <span className="text-sm text-white/60 leading-snug group-hover:text-white/90 transition-colors duration-200">
                          {chapter.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== PUBLICATIONS ====== */}
      <section className="py-24 md:py-32 bg-black border-t border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading + filter */}
          <AnimatedSection className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="tracking-luxury text-white/50 mb-4">Publications</p>
                <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                  Briefings &amp; guides
                </h2>
              </div>

              {/* Sliding filter */}
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit shrink-0 flex-wrap">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer"
                  >
                    {activeFilter === f && (
                      <motion.div
                        layoutId="lib-filter-pill"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-200",
                        activeFilter === f
                          ? "text-white"
                          : "text-white/40 hover:text-white/65",
                      )}
                    >
                      {f}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Cards — individually staggered */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-24"
              >
                <FileText className="w-10 h-10 text-white/20 mx-auto mb-4" />
                <p className="text-white/40 text-sm">
                  No publications in this category yet.
                </p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 text-xs text-primary-light/70 hover:text-primary-light underline underline-offset-4 transition-colors cursor-pointer"
                >
                  View all publications
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              >
                {filtered.map((pub) => (
                  <motion.div
                    key={pub.title}
                    variants={{
                      hidden: { opacity: 0, y: 28 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.015 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="glow-card h-full cursor-pointer"
                    >
                      <div className="glow-card-spinner" />
                      <div className="glow-card-backdrop" />
                      <div className="glow-card-content p-8 flex flex-col h-full">
                        <div className="glow-card-glow" />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs tracking-[0.14em] uppercase text-primary-light/70 border border-primary-light/20 rounded-full px-3 py-1">
                            {pub.tag}
                          </span>
                          <span className="font-mono text-xs text-white/30">
                            {pub.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-xl text-foreground mb-4 leading-snug tracking-wide group-hover:text-primary-light transition-colors duration-300 line-clamp-2">
                          {pub.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-white/50 leading-relaxed mb-8 line-clamp-3 flex-1">
                          {pub.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-auto pt-6 border-t border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {pub.hasRead && (
                              <div className="flex items-center gap-2 text-white/40 hover:text-foreground transition-colors duration-200 group/rd">
                                <BookOpen className="w-3.5 h-3.5 group-hover/rd:text-primary-light transition-colors duration-200" />
                                <span className="text-xs uppercase tracking-[0.15em]">
                                  Read
                                </span>
                              </div>
                            )}
                            {pub.hasDownload && (
                              <div className="flex items-center gap-2 text-white/40 hover:text-foreground transition-colors duration-200 group/dl">
                                <Download className="w-3.5 h-3.5 group-hover/dl:text-primary-light transition-colors duration-200" />
                                <span className="text-xs uppercase tracking-[0.15em]">
                                  PDF
                                </span>
                              </div>
                            )}
                          </div>
                          <span className="font-mono text-xs text-white/25">
                            {pub.pages}p
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/50 mb-6">
              Bespoke Intelligence
            </p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
              Need tailored analysis?
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Our advisory team produces bespoke reports, market studies, and
              regulatory briefings. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton variant="primary" as="a" href="/contact">
                Commission a report
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="/expertise">
                Our practice areas
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
