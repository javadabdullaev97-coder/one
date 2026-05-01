"use client";

import { useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FileText, Users, Calculator, Scale, BarChart2, ShieldCheck, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

/* ── Types ──────────────────────────────────────────────── */

type LangPair = "EN/RU" | "EN/UZ" | "RU/UZ";
type Currency = "USD" | "UZS";

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  languages: LangPair[];
  pages: number;
  updated: string;
  includes: string[];
}

/* ── Constants ──────────────────────────────────────────────── */

const CATEGORIES = ["All", "Company Formation", "Legal", "HR", "Tax", "Compliance", "Finance"] as const;
const LANG_PAIRS: ("All" | LangPair)[] = ["All", "EN/RU", "EN/UZ", "RU/UZ"];
const UZS_RATE = 12750;

const CATEGORY_META: Record<string, { icon: React.ReactNode }> = {
  "Company Formation": { icon: <FileText className="w-3 h-3" /> },
  "Legal":             { icon: <Scale className="w-3 h-3" /> },
  "HR":                { icon: <Users className="w-3 h-3" /> },
  "Tax":               { icon: <Calculator className="w-3 h-3" /> },
  "Compliance":        { icon: <ShieldCheck className="w-3 h-3" /> },
  "Finance":           { icon: <BarChart2 className="w-3 h-3" /> },
};

/* ── Data ────────────────────────────────────────────────────── */

const products: Product[] = [
  {
    id: "llc-formation",
    title: "LLC Formation Pack",
    category: "Company Formation",
    description: "Complete document set for registering an LLC in Uzbekistan — charter, founder decisions, and all registration forms.",
    price: 299,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 24,
    updated: "Mar 2025",
    includes: ["Company charter (bilingual)", "Founder's decision", "Application forms", "Regulatory checklist"],
  },
  {
    id: "jsc-formation",
    title: "JSC Registration Pack",
    category: "Company Formation",
    description: "Full package for joint-stock company formation, including prospectus templates and shareholder documentation.",
    price: 449,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 38,
    updated: "Jan 2025",
    includes: ["JSC charter", "Prospectus template", "Shareholder registry", "Board resolutions"],
  },
  {
    id: "shareholder-agreement",
    title: "Shareholder Agreement",
    category: "Legal",
    description: "Comprehensive SHA covering governance, drag-along/tag-along rights, dividends, and exit provisions under Uzbek law.",
    price: 279,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 32,
    updated: "Apr 2026",
    includes: ["Full SHA template", "Schedules", "Board charter", "Annotation guide"],
  },
  {
    id: "nda-bilateral",
    title: "NDA — Bilateral",
    category: "Legal",
    description: "Mutual non-disclosure agreement adapted for Uzbek law. Covers trade secrets, IP, and sensitive business information.",
    price: 39,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 6,
    updated: "Apr 2026",
    includes: ["Bilateral NDA", "Unilateral variant", "Usage guide"],
  },
  {
    id: "commercial-lease",
    title: "Commercial Lease Agreement",
    category: "Legal",
    description: "Bilingual commercial lease under Uzbek civil law — office, retail, and warehouse. Includes renewal and exit clauses.",
    price: 89,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 14,
    updated: "Dec 2024",
    includes: ["Standard lease", "Short-term variant", "Addendum templates"],
  },
  {
    id: "employment-contract",
    title: "Employment Contract",
    category: "HR",
    description: "Bilingual employment contract compliant with the Uzbekistan Labour Code. Covers fixed-term and open-ended positions.",
    price: 59,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 10,
    updated: "Feb 2026",
    includes: ["Standard contract", "Fixed-term variant", "Probation addendum"],
  },
  {
    id: "hr-policy-manual",
    title: "HR Policy Manual",
    category: "HR",
    description: "End-to-end HR policy framework adapted for Uzbek labour law — hiring, performance, termination, and benefits.",
    price: 199,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 56,
    updated: "Nov 2024",
    includes: ["12 policy modules", "Code of conduct", "Disciplinary procedure", "Leave policy"],
  },
  {
    id: "tax-compliance-starter",
    title: "Tax Compliance Starter Pack",
    category: "Tax",
    description: "Essential tax registration forms, VAT templates, and compliance calendar for businesses operating in Uzbekistan.",
    price: 249,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 28,
    updated: "Mar 2026",
    includes: ["Tax registration forms", "VAT return template", "Compliance calendar", "CIT worksheet"],
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing Documentation",
    category: "Tax",
    description: "Master file and local file templates for transfer pricing compliance under Uzbek tax law and OECD guidelines.",
    price: 399,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 44,
    updated: "Jan 2025",
    includes: ["Master file template", "Local file template", "Benchmarking guide", "Policy statement"],
  },
  {
    id: "work-permit-pack",
    title: "Work Permit Application Pack",
    category: "Compliance",
    description: "Full documentation set for obtaining work permits for foreign nationals employed in Uzbekistan, including renewals.",
    price: 119,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 16,
    updated: "Apr 2026",
    includes: ["Application forms", "Document checklist", "Employer letter templates", "Extension guide"],
  },
  {
    id: "sez-entry-pack",
    title: "SEZ Entry Pack",
    category: "Compliance",
    description: "Full application package for entering a Special Economic Zone — investment plan templates and regulatory overview.",
    price: 449,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 36,
    updated: "Feb 2025",
    includes: ["SEZ application form", "Investment plan template", "Financial projections model", "Regulatory overview"],
  },
  {
    id: "due-diligence-pack",
    title: "Investor Due Diligence Pack",
    category: "Finance",
    description: "Comprehensive DD document request list and data room structure for M&A and investment transactions in Uzbekistan.",
    price: 499,
    languages: ["EN/RU", "EN/UZ", "RU/UZ"],
    pages: 48,
    updated: "Mar 2026",
    includes: ["DD request list", "Data room index", "Red flag checklist", "Legal opinion template"],
  },
];

/* ── Helpers ──────────────────────────────────────────────── */

function formatPrice(price: number, currency: Currency): { main: string; suffix: string } {
  if (currency === "USD") {
    return { main: `$${price}`, suffix: "" };
  }
  const rounded = Math.round((price * UZS_RATE) / 50000) * 50000;
  return { main: rounded.toLocaleString("en-US"), suffix: "so'm" };
}

/* ── Product card ──────────────────────────────────────────────── */

function ProductCard({ product, index, currency }: { product: Product; index: number; currency: Currency }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = CATEGORY_META[product.category];
  const { main, suffix } = formatPrice(product.price, currency);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
      className="group w-full flex flex-col rounded-xl bg-[#080808] border border-white/[0.10] p-1.5 shadow-xl backdrop-blur-xl cursor-default"
    >
      {/* Header inner card */}
      <div className="bg-[#141414] relative mb-1.5 rounded-[10px] border border-white/[0.07] p-4">
        {/* Glass gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit] pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)" }}
        />

        {/* Plan row: category + date */}
        <div className="relative mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-white/50">
            {meta?.icon}
            <span>{product.category}</span>
          </div>
          <span className="rounded-full border border-white/[0.12] text-white/40 px-2 py-0.5 text-xs font-mono">
            {product.updated}
          </span>
        </div>

        {/* Product title */}
        <p className="relative text-white/55 text-sm mb-3 leading-snug">{product.title}</p>

        {/* Price */}
        <div className="relative mb-1 flex items-end gap-1.5">
          <motion.span
            key={currency}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "font-extrabold tracking-tight text-foreground group-hover:text-white transition-colors duration-200",
              currency === "USD" ? "text-3xl" : "text-xl"
            )}
          >
            {main}
          </motion.span>
          <span className="text-foreground/55 pb-1 text-sm">{suffix}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-3">
        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed">{product.description}</p>

        {/* Separator */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] flex-1 bg-white/[0.08]" />
          <span className="shrink-0 text-[10px] tracking-[0.14em] uppercase text-white/25">Includes</span>
          <span className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Includes list — min-h locks button position regardless of item count */}
        <ul className="space-y-2.5 min-h-[140px]">
          {product.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/45">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/25" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`/contact?ref=${product.id}`}
          className="block w-full rounded-lg bg-primary hover:bg-primary-light py-2.5 text-center text-[11px] tracking-[0.18em] uppercase font-medium text-foreground/90 hover:text-white transition-all duration-200"
        >
          Purchase
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Store filters ──────────────────────────────────────────────── */

function StoreFilters({
  activeCategory, onCategoryChange,
  activeLanguage, onLanguageChange,
  currency, onCurrencyChange,
}: {
  activeCategory: string; onCategoryChange: (c: string) => void;
  activeLanguage: string; onLanguageChange: (l: string) => void;
  currency: Currency; onCurrencyChange: (c: Currency) => void;
}) {
  return (
    <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-3">

        {/* Row 1: Category */}
        <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit overflow-x-auto scrollbar-none flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="relative shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer outline-none"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className={cn("relative z-10 transition-colors duration-200", activeCategory === cat ? "text-white" : "text-white/40 hover:text-white/65")}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Row 2: Language pairs + Currency */}
        <div className="flex items-center justify-between gap-4">

          {/* Language filter */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit">
            {LANG_PAIRS.map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className="relative shrink-0 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 cursor-pointer outline-none"
              >
                {activeLanguage === lang && (
                  <motion.div
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.10]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={cn("relative z-10 transition-colors duration-200", activeLanguage === lang ? "text-white/85" : "text-white/35 hover:text-white/60")}>
                  {lang}
                </span>
              </button>
            ))}
          </div>

          {/* Currency toggle */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
            {(["USD", "UZS"] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => onCurrencyChange(curr)}
                className="relative px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 cursor-pointer outline-none"
              >
                {currency === curr && (
                  <motion.div
                    layoutId="curr-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.10]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={cn("relative z-10 transition-colors duration-200", currency === curr ? "text-white/85" : "text-white/35 hover:text-white/60")}>
                  {curr}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────────────────────── */

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const langMatch = activeLanguage === "All" || p.languages.includes(activeLanguage as LangPair);
    return catMatch && langMatch;
  });

  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{ height: "65vh" }}
      >
        <div className="absolute inset-0 hero-image-enter">
          <Image
            src="/Hero and CTA images/Store Hero.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <section className="relative z-10 flex-1 flex items-end pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="tracking-luxury text-white/50 mb-3"
            >
              Document Store
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-luxury text-3xl md:text-4xl text-foreground leading-[1.05] max-w-3xl mb-4"
            >
              Ready-to-use documents for doing business in Uzbekistan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed mb-6"
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
      </div>

      {/* ── Filters ── */}
      <StoreFilters
        activeCategory={activeCategory} onCategoryChange={setActiveCategory}
        activeLanguage={activeLanguage} onLanguageChange={setActiveLanguage}
        currency={currency} onCurrencyChange={setCurrency}
      />

      {/* ── Grid ── */}
      <section className="py-14 md:py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeLanguage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8">
                <p className="tracking-luxury text-white/40">
                  {filtered.length} document{filtered.length !== 1 ? "s" : ""}
                  {activeCategory !== "All" && ` in ${activeCategory}`}
                  {activeLanguage !== "All" && ` · ${activeLanguage}`}
                </p>
              </div>
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="text-white/30 text-sm">No documents match this combination.</p>
                  <button
                    onClick={() => { setActiveCategory("All"); setActiveLanguage("All"); }}
                    className="mt-4 text-xs text-primary-light/70 hover:text-primary-light underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} currency={currency} />
                  ))}
                </div>
              )}
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
