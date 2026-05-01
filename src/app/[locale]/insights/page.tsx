"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
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
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";
import { publications, sortedPublications, type Publication } from "@/lib/publications";

/* ── Helpers ──────────────────────────────────────────── */

function formatDate(dateStr?: string, year?: string): string {
  if (dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  return year ?? "";
}

/* ── Data ────────────────────────────────────────── */

const flagship = {
  tag: "Flagship Publication",
  title: "Doing Business in Uzbekistan",
  subtitle: "The Definitive Guide — 2026 Edition",
  description:
    "A comprehensive resource for international investors and companies entering the Uzbekistan market. Covers regulatory frameworks, tax structures, labour law, market entry strategies, and operational best practices.",
  year: "2026",
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

type FilterTag = "All" | "Advisory" | "Tax" | "HR" | "Legal";

const filters: FilterTag[] = ["All", "Advisory", "Tax", "HR", "Legal"];

const categoryGradients: Record<string, string> = {
  Tax: "from-amber-950/60 via-stone-900/80 to-black",
  Legal: "from-slate-900/80 via-zinc-900/60 to-black",
  HR: "from-rose-950/50 via-stone-900/70 to-black",
  Advisory: "from-emerald-950/50 via-stone-900/70 to-black",
};

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const ITEMS_PER_PAGE = 6;

/* ── Article Card ──────────────────────────────────────────── */

function ArticleCard({ pub }: { pub: Publication }) {
  const gradient = categoryGradients[pub.category] ?? "from-stone-900/70 to-black";
  const t = useTranslations("InsightsPage.publications");

  return (
    <div className="group flex flex-col rounded-xl border border-white/[0.07] overflow-hidden hover:border-white/[0.14] transition-colors duration-300 bg-white/[0.02] cursor-pointer h-full">
      {/* Image area */}
      <div className={cn("relative h-44 overflow-hidden bg-gradient-to-b", gradient)}>
        {pub.image ? (
          <Image
            src={pub.image}
            alt={pub.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="font-serif text-[5rem] leading-none font-light text-white/[0.04] select-none">
              {pub.category.charAt(0)}
            </span>
          </div>
        )}
        {/* Tag badge */}
        <span className="absolute top-4 left-4 inline-block text-[10px] tracking-[0.14em] uppercase text-white/70 border border-white/[0.2] rounded-full px-2.5 py-0.5 bg-black/40 backdrop-blur-sm">
          {pub.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="font-mono text-[10px] text-white/40 mb-2.5 tabular-nums">
          {formatDate(pub.date, pub.year)}
        </p>
        <h3 className="font-serif text-base text-foreground/80 leading-snug mb-2 group-hover:text-foreground transition-colors duration-200 line-clamp-2">
          {pub.title}
        </h3>
        <p className="text-[12px] text-white/40 leading-relaxed line-clamp-2 flex-1">
          {pub.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-[11px] text-primary-light/70 group-hover:text-primary-light transition-colors duration-200">
          {t("readMore")}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────────────────────────────── */

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tHero = useTranslations("InsightsPage.hero");
  const tFlagship = useTranslations("InsightsPage.flagship");
  const tPubs = useTranslations("InsightsPage.publications");
  const tCta = useTranslations("InsightsPage.cta");

  const stats = [
    { value: "16", label: tHero("statPublications") },
    { value: tHero("statAccessValue"), label: tHero("statAccess") },
    { value: "EN / RU", label: tHero("statLanguages") },
    { value: "2026", label: tHero("statLatestEdition") },
  ];

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

  useEffect(() => { setCurrentPage(1); }, [activeFilter, searchQuery]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      {/* ====== HERO ====== */}
      <div className="relative overflow-hidden flex flex-col bg-black" style={{ height: "65vh" }}>
        {/* Background */}
        <div className="absolute inset-0 hero-image-enter">
          <Image
            src="/Hero and CTA images/Insights Hero.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <section className="relative z-10 flex-1 flex items-end pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-luxury text-white/50 mb-3"
            >
              {tHero("eyebrow")}
            </motion.p>
            <TextReveal
              text={tHero("heading")}
              as="h1"
              mode="line"
              className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] max-w-3xl"
              delay={0.2}
            />
            <RevealLine delay={0.5}>
              <p className="text-base text-white/55 max-w-xl mt-4 leading-relaxed">
                {tHero("description")}
              </p>
            </RevealLine>

            {/* Stats row */}
            <RevealLine delay={0.7}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-7 pt-7 border-t border-white/[0.06]">
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
      </div>

      {/* ====== FLAGSHIP PUBLICATION ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="tracking-luxury text-white/50 mb-12">{tFlagship("eyebrow")}</p>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left — content */}
                <div className="p-10 md:p-14 lg:p-16 relative">
                  <span className="absolute top-8 right-8 font-serif text-[8rem] leading-none font-light text-white/[0.03] select-none pointer-events-none">
                    01
                  </span>

                  <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary-light/80 border border-primary-light/20 rounded-full px-3 py-1 mb-8">
                    {tFlagship("tag")}
                  </span>

                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 leading-tight tracking-tight">
                    {flagship.title}
                  </h2>
                  <p className="text-sm text-white/40 mb-8 tracking-wide">
                    {tFlagship("subtitle")}
                  </p>
                  <p className="text-white/55 leading-relaxed mb-10 max-w-md">
                    {tFlagship("description")}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-white/[0.06]">
                    {[
                      { label: tFlagship("year"), value: flagship.year },
                      { label: tFlagship("pages"), value: String(flagship.pages) },
                      { label: tFlagship("languages"), value: flagship.languages },
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
                      {tFlagship("downloadPdf")}
                    </MagneticButton>
                    <MagneticButton variant="outline">
                      <BookOpen className="w-4 h-4" />
                      {tFlagship("readOnline")}
                    </MagneticButton>
                  </div>
                </div>

                {/* Right — cover image with chapter overlay */}
                <div className="relative border-t lg:border-t-0 lg:border-l border-white/[0.06] overflow-hidden min-h-[480px] lg:min-h-0">
                  <Image
                    src="/Articles Image/DBU_cover.webp"
                    fill
                    unoptimized
                    alt="Doing Business in Uzbekistan 2026"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient: top keeps image visible, bottom is dark for chapter legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

                  {/* Chapter list overlaid at bottom */}
                  <div className="absolute bottom-0 inset-x-0 px-8 md:px-12 lg:px-14 pt-6 pb-8">
                    <p className="tracking-luxury text-white/30 mb-3 text-[10px] uppercase">
                      {tFlagship("contents")}
                    </p>
                    <div>
                      {flagship.chapters.map((chapter, i) => (
                        <motion.div
                          key={chapter.num}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.38, delay: i * 0.06, ease: luxuryEase }}
                          className="flex items-center gap-4 py-2.5 border-b border-white/[0.05] last:border-0 group cursor-default"
                        >
                          <span className="font-mono text-[10px] text-primary-light/50 shrink-0 tabular-nums">
                            {chapter.num}
                          </span>
                          <span className="text-[12px] text-white/55 leading-snug group-hover:text-white/85 transition-colors duration-200">
                            {chapter.title}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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
            <div className="mb-8">
              <p className="tracking-luxury text-white/50 mb-4">{tPubs("eyebrow")}</p>
              <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
                {tPubs("heading")}
              </h2>
            </div>

            {/* Filter pills + search bar on same row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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

              {/* Search bar */}
              <div className="relative sm:ml-auto sm:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={tPubs("searchPlaceholder")}
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
            </div>
          </AnimatedSection>

          {/* Article grid */}
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
                    ? tPubs("noResults", { query: searchQuery })
                    : tPubs("noResultsCategory")}
                </p>
                <button
                  onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                  className="mt-4 text-xs text-primary-light/70 hover:text-primary-light underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {tPubs("clearFilters")}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter + searchQuery + currentPage}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              >
                {paginated.map((pub) => (
                  <motion.div
                    key={pub.slug}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: luxuryEase },
                      },
                    }}
                    className="h-full"
                  >
                    {pub.hasRead ? (
                      <Link href={`/insights/${pub.slug}`} className="block h-full">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-12 pt-10 border-t border-white/[0.06]">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-full text-white/30 hover:text-white/65 hover:bg-white/[0.04] disabled:opacity-30 disabled:cursor-default transition-all duration-200 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-9 h-9 rounded-full font-mono text-xs tabular-nums transition-all duration-200 cursor-pointer",
                    currentPage === page
                      ? "bg-white/[0.08] text-white border border-white/[0.15]"
                      : "text-white/35 hover:text-white/65 hover:bg-white/[0.04]",
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-full text-white/30 hover:text-white/65 hover:bg-white/[0.04] disabled:opacity-30 disabled:cursor-default transition-all duration-200 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/50 mb-6">
              {tCta("eyebrow")}
            </p>
            <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
              {tCta("heading")}
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              {tCta("description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton variant="primary" as="a" href="/contact">
                {tCta("primary")}
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="/expertise">
                {tCta("secondary")}
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
