"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, FileText, Users, Calculator, Scale, BarChart2, ShieldCheck, ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

/* ── Types ───────────────────────────────────────────── */

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  languages: string[];
  pages: number;
  popular?: boolean;
  isNew?: boolean;
  includes: string[];
}

/* ── Data ────────────────────────────────────────────── */

const CATEGORIES = ["All", "Company Formation", "Legal", "HR", "Tax", "Compliance", "Finance"] as const;

const CATEGORY_META: Record<string, { icon: React.ReactNode }> = {
  "Company Formation": { icon: <FileText className="w-3 h-3" /> },
  "Legal":             { icon: <Scale className="w-3 h-3" /> },
  "HR":                { icon: <Users className="w-3 h-3" /> },
  "Tax":               { icon: <Calculator className="w-3 h-3" /> },
  "Compliance":        { icon: <ShieldCheck className="w-3 h-3" /> },
  "Finance":           { icon: <BarChart2 className="w-3 h-3" /> },
};

const products: Product[] = [
  {
    id: "llc-formation",
    title: "LLC Formation Pack",
    category: "Company Formation",
    description: "Complete document set for registering an LLC in Uzbekistan — charter, founder decisions, and all registration forms.",
    price: 299,
    languages: ["EN", "RU", "UZ"],
    pages: 24,
    popular: true,
    includes: ["Company charter (bilingual)", "Founder's decision", "Application forms", "Regulatory checklist"],
  },
  {
    id: "jsc-formation",
    title: "JSC Registration Pack",
    category: "Company Formation",
    description: "Full package for joint-stock company formation, including prospectus templates and shareholder documentation.",
    price: 449,
    languages: ["EN", "RU"],
    pages: 38,
    includes: ["JSC charter", "Prospectus template", "Shareholder registry", "Board resolutions"],
  },
  {
    id: "shareholder-agreement",
    title: "Shareholder Agreement",
    category: "Legal",
    description: "Comprehensive SHA covering governance, drag-along/tag-along rights, dividends, and exit provisions under Uzbek law.",
    price: 279,
    languages: ["EN", "RU"],
    pages: 32,
    popular: true,
    includes: ["Full SHA template", "Schedules", "Board charter", "Annotation guide"],
  },
  {
    id: "nda-bilateral",
    title: "NDA — Bilateral",
    category: "Legal",
    description: "Mutual non-disclosure agreement adapted for Uzbek law. Covers trade secrets, IP, and sensitive business information.",
    price: 39,
    languages: ["EN", "RU", "UZ"],
    pages: 6,
    isNew: true,
    includes: ["Bilateral NDA", "Unilateral variant", "Usage guide"],
  },
  {
    id: "commercial-lease",
    title: "Commercial Lease Agreement",
    category: "Legal",
    description: "Bilingual commercial lease under Uzbek civil law — office, retail, and warehouse. Includes renewal and exit clauses.",
    price: 89,
    languages: ["EN", "RU", "UZ"],
    pages: 14,
    includes: ["Standard lease", "Short-term variant", "Addendum templates"],
  },
  {
    id: "employment-contract",
    title: "Employment Contract",
    category: "HR",
    description: "Bilingual employment contract compliant with the Uzbekistan Labour Code. Covers fixed-term and open-ended positions.",
    price: 59,
    languages: ["EN", "RU", "UZ"],
    pages: 10,
    popular: true,
    includes: ["Standard contract", "Fixed-term variant", "Probation addendum"],
  },
  {
    id: "hr-policy-manual",
    title: "HR Policy Manual",
    category: "HR",
    description: "End-to-end HR policy framework adapted for Uzbek labour law — hiring, performance, termination, and benefits.",
    price: 199,
    languages: ["EN", "RU"],
    pages: 56,
    includes: ["12 policy modules", "Code of conduct", "Disciplinary procedure", "Leave policy"],
  },
  {
    id: "tax-compliance-starter",
    title: "Tax Compliance Starter Pack",
    category: "Tax",
    description: "Essential tax registration forms, VAT templates, and compliance calendar for businesses operating in Uzbekistan.",
    price: 249,
    languages: ["EN", "RU", "UZ"],
    pages: 28,
    popular: true,
    includes: ["Tax registration forms", "VAT return template", "Compliance calendar", "CIT worksheet"],
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing Documentation",
    category: "Tax",
    description: "Master file and local file templates for transfer pricing compliance under Uzbek tax law and OECD guidelines.",
    price: 399,
    languages: ["EN", "RU"],
    pages: 44,
    includes: ["Master file template", "Local file template", "Benchmarking guide", "Policy statement"],
  },
  {
    id: "work-permit-pack",
    title: "Work Permit Application Pack",
    category: "Compliance",
    description: "Full documentation set for obtaining work permits for foreign nationals employed in Uzbekistan, including renewals.",
    price: 119,
    languages: ["EN", "RU", "UZ"],
    pages: 16,
    isNew: true,
    includes: ["Application forms", "Document checklist", "Employer letter templates", "Extension guide"],
  },
  {
    id: "sez-entry-pack",
    title: "SEZ Entry Pack",
    category: "Compliance",
    description: "Full application package for entering a Special Economic Zone — investment plan templates and regulatory overview.",
    price: 449,
    languages: ["EN", "RU"],
    pages: 36,
    includes: ["SEZ application form", "Investment plan template", "Financial projections model", "Regulatory overview"],
  },
  {
    id: "due-diligence-pack",
    title: "Investor Due Diligence Pack",
    category: "Finance",
    description: "Comprehensive DD document request list and data room structure for M&A and investment transactions in Uzbekistan.",
    price: 499,
    languages: ["EN", "RU"],
    pages: 48,
    popular: true,
    includes: ["DD request list", "Data room index", "Red flag checklist", "Legal opinion template"],
  },
];

/* ── Product card ────────────────────────────────────── */

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = CATEGORY_META[product.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl p-2 shadow-xl backdrop-blur-sm cursor-default"
    >
      {/* ── Header inner card ── */}
      <div className="relative bg-[#111111] border border-white/[0.07] rounded-[14px] p-5 mb-2 overflow-hidden">
        {/* Glass gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit] pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 40%, rgba(0,0,0,0) 100%)" }}
        />
        {/* Decorative index watermark */}
        <span className="absolute bottom-3 right-5 font-serif text-[5.5rem] leading-none font-light text-white/[0.035] select-none pointer-events-none tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category + status badges */}
        <div className="flex items-center justify-between mb-7">
          <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-foreground/55 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 rounded-full">
            {meta?.icon}
            {product.category}
          </span>
          <div className="flex items-center gap-2">
            {product.popular && (
              <span className="text-[9px] tracking-[0.15em] uppercase text-primary/80 border border-primary/25 bg-primary/[0.06] px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}
            {product.isNew && (
              <span className="text-[9px] tracking-[0.15em] uppercase text-emerald-400/80 border border-emerald-400/25 bg-emerald-400/[0.06] px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-foreground leading-snug tracking-wide mb-5 group-hover:text-white transition-colors duration-200">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-end gap-1.5">
          <span className="font-serif text-base text-white/35 leading-none pb-1">$</span>
          <span className="font-serif text-[2.5rem] text-foreground font-light tabular-nums leading-none tracking-tight">
            {product.price}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-3 pb-3 pt-2">
        <p className="text-[13px] text-white/45 leading-relaxed flex-1 mb-5">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex gap-1">
            {product.languages.map((l) => (
              <span key={l} className="text-[9px] text-white/30 border border-white/[0.07] px-1.5 py-0.5 rounded font-mono tracking-wider">
                {l}
              </span>
            ))}
          </div>
          <Link
            href={`/contact?ref=${product.id}`}
            className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-foreground/85 hover:text-foreground bg-white/[0.04] hover:bg-primary/[0.18] border border-white/[0.10] hover:border-primary/45 px-4 py-2 rounded-lg transition-all duration-200"
          >
            Purchase
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Category filter ─────────────────────────────────── */

function CategoryFilter({ active, onChange }: { active: string; onChange: (c: string) => void }) {
  return (
    <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit overflow-x-auto scrollbar-none flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className="relative shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer outline-none"
            >
              {active === cat && (
                <motion.div
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 transition-colors duration-200",
                  active === cat ? "text-white" : "text-white/40 hover:text-white/65"
                )}
              >
                {cat}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────── */

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      <AuroraBackground>
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="tracking-luxury text-white/50 mb-5"
            >
              Document Store
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-luxury text-4xl md:text-6xl text-foreground leading-[1.05] max-w-3xl mb-6"
            >
              Ready-to-use documents for doing business in Uzbekistan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              Professionally drafted legal, tax, HR, and compliance templates — built for Uzbekistan's regulatory framework, available in English, Russian, and Uzbek.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Instant download
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                EN / RU / UZ
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Updated for 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Lawyer-reviewed
              </div>
            </motion.div>
          </div>
        </section>
      </AuroraBackground>

      {/* ── Category filter ── */}
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* ── Full grid ── */}
      <section className="py-14 md:py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeCategory !== "All" && (
                <div className="mb-8">
                  <p className="tracking-luxury text-white/40">
                    {filtered.length} document{filtered.length !== 1 ? "s" : ""} in {activeCategory}
                  </p>
                </div>
              )}
              {activeCategory === "All" && (
                <div className="mb-8">
                  <p className="tracking-luxury text-white/40">All documents</p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-20 md:py-28 bg-black border-t border-white/[0.06] relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="tracking-luxury text-white/40 mb-4">Need something custom?</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-5">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed mb-10">
              Our team drafts bespoke documents tailored to your specific transaction, structure, or jurisdiction.
            </p>
            <MagneticButton variant="primary" as="a" href="/contact">
              Talk to our team
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
