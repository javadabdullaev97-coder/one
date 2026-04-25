"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  BookOpen,
  FileText,
  Search,
  X,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";
import { publications, sortedPublications, type Publication } from "@/lib/publications";

/* ── Helpers ────────────────────────────────────── */

function formatDate(dateStr?: string, year?: string): string {
  if (dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  return year ?? "";
}

/* ── Data ──────────────────────────────────────────────── */

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

type FilterTag = "All" | "Advisory" | "Tax" | "HR" | "Legal" | "Market" | "Compliance";

const filters: FilterTag[] = ["All", "Advisory", "Tax", "HR", "Legal", "Market", "Compliance"];

const stats = [
  { value: "10", label: "Publications" },
  { value: "Free", label: "Access" },
  { value: "EN / RU", label: "Languages" },
  { value: "2026", label: "Latest edition" },
];

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Article Card ───────────────────────────────────────── */

function ArticleCard({ pub }: { pub: Publication }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.28, ease: luxuryEase }}
      className="group relative flex flex-col h-full rounded-xl overflow-hidden border border-white/[0.07] hover:border-white/[0.13] transition-colors duration-400 cursor-pointer"
    >
      {/* Top accent line — brightens on hover */}
      <div className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-primary-light/40 transition-all duration-500" />

      <div className="flex flex-col flex-1 p-7 bg-white/[0.015] group-hover:bg-white/[0.03] transition-colors duration-300">
        {/* Meta */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] tracking-[0.16em] uppercase text-primary-light/65 border border-primary-light/15 rounded-full px-2.5 py-0.5 shrink-0">
            {pub.tag}
          </span>
          <span className="font-mono text-[10px] text-white/[0.28] tabular-nums ml-3 shrink-0">
            {formatDate(pub.date, pub.year)}
          </span>
        </div>

        {/* Title — capped at 2 lines */}
        <h3 className="font-serif text-[1.15rem] text-foreground/85 leading-snug line-clamp-2 mb-3 group-hover:text-foreground transition-colors duration-200">
          {pub.title}
        </h3>

        {/* Description — 2 lines */}
        <p className="text-sm text-white/[0.42] leading-relaxed line-clamp-2 flex-1">
          {pub.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.05]">
          <div className="flex items-center gap-3">
            {pub.hasRead && (
              <div className="flex items-center gap-1.5 text-white/[0.32]">
                <BookOpen className="w-3 h-3" />
                <span className="text-[11px] uppercase tracking-[0.13em]">Read</span>
              </div>
            )}
            {pub.hasDownload && (
              <a
                href={`/downloads/${pub.slug}.pdf`}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 flex items-center gap-1.5 text-white/[0.32] hover:text-foreground transition-colors duration-200"
              >
                <Download className="w-3 h-3" />
                <span className="text-[11px] uppercase tracking-[0.13em]">PDF</span>
              </a>
            )}
          </div>
          <span className="flex items-center gap-1 text-[11px] text-white/[0.28] group-hover:text-white/[0.65] transition-colors duration-200">
            <span className="hidden sm:inline tracking-[0.12em] uppercase">Article</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = sortedPublications(publications);
    if (activeFilter !== "All") {
      result = result.filter((p) => p.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q),
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

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
              Insights
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
            <p className="tracking-luxury text-white/50 mb-12">Featured Publication</p>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left — content */}
                <div className="p-10 md:p-14 lg:p-16 relative">
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
                          ease: luxuryEase,
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

          {/* Heading + filter + search */}
          <AnimatedSection className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-6">
              <div>
                <p className="tracking-luxury text-white/50 mb-4">Publications</p>
                <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                  Briefings &amp; guides
                </h2>
              </div>

              {/* Filter pills */}
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

            {/* Search bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword…"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full pl-11 pr-10 py-2.5 text-sm text-white/80 placeholder-white/25 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors duration-150 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Cards */}
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
                  {searchQuery.trim()
                    ? `No results for "${searchQuery}"`
                    : "No publications in this category yet."}
                </p>
                <button
                  onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                  className="mt-4 text-xs text-primary-light/70 hover:text-primary-light underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter + searchQuery}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {filtered.map((pub) => (
                  <motion.div
                    key={pub.slug}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: luxuryEase },
                      },
                    }}
                    className="h-full"
                  >
                    {pub.hasRead ? (
                      <Link href={`/library/${pub.slug}`} className="block h-full">
                        <ArticleCard pub={pub} />
                      </Link>
                    ) : (
                      <ArticleCard pub={pub} />
                    )}
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
