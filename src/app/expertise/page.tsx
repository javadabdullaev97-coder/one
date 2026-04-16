"use client";

import Link from "next/link";
import { useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  BookOpen,
  Building2,
  Cpu,
  Factory,
  Film,
  Flame,
  Gem,
  Globe,
  Landmark,
  Medal,
  Sprout,
  Stethoscope,
  Store,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { servicesData } from "@/lib/services";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";

type Category = "all" | "Advisory" | "Operations" | "Growth";
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

/* Custom angular Bitcoin glyph */
function BitcoinSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M7 4 V20" />
      <path d="M7 4 H15 L17 6 V10 L15 12 H7" />
      <path d="M7 12 H16 L18 14 V18 L16 20 H7" />
      <path d="M10 2 V4" />
      <path d="M14 2 V4" />
      <path d="M10 20 V22" />
      <path d="M14 20 V22" />
    </svg>
  );
}

const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Agriculture", icon: Sprout },
  { name: "Banking & Finance", icon: Landmark },
  { name: "Blockchain & Crypto", icon: BitcoinSquare },
  { name: "Commerce & Retail", icon: Store },
  { name: "Construction & Real Estate", icon: Building2 },
  { name: "Education", icon: BookOpen },
  { name: "Energy & Natural Resources", icon: Flame },
  { name: "Healthcare & Pharmaceuticals", icon: Stethoscope },
  { name: "Hospitality & Tourism", icon: BedDouble },
  { name: "Immigration", icon: Globe },
  { name: "IT, Fintech & Telecom", icon: Cpu },
  { name: "Investment & Venture Funds", icon: TrendingUp },
  { name: "Manufacture", icon: Factory },
  { name: "Media & Entertainment", icon: Film },
  { name: "Private Equity & Wealth", icon: Gem },
  { name: "Sports", icon: Medal },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Advisory", value: "Advisory" },
  { label: "Operations", value: "Operations" },
  { label: "Growth", value: "Growth" },
];

const caseStudies = [
  {
    sector: "Energy",
    headline:
      "Tax structuring of a nuclear power plant construction for a Russian enterprise",
    result: "Project budget > $10 billion",
    disciplines: ["Tax", "Finance"],
  },
  {
    sector: "FMCG",
    headline: "M&A of a large Uzbek bottler company",
    result: "Transaction amount ~ $250 million",
    disciplines: ["Tax", "Legal"],
  },
  {
    sector: "Fintech",
    headline:
      "Two major restructuring projects of an international digital bank in its Uzbek subsidiaries",
    result: "Transaction amount ~ $200 million",
    disciplines: ["Tax", "Legal"],
  },
  {
    sector: "Manufacturing",
    headline:
      "M&A and corporate restructuring of a large Uzbek cement producer",
    result: "Transaction amount ~ $20 million",
    disciplines: ["Tax", "Legal", "Finance"],
  },
  {
    sector: "Technology",
    headline:
      "Tax structuring and ad-hoc consulting of a major Russian IT company during market launch in Uzbekistan",
    result: "Investment amount ~ $5 million",
    disciplines: ["Tax", "Legal"],
  },
  {
    sector: "Retail",
    headline: "M&A and structuring for a major local retailer",
    result: "Transaction amount ~ $5 million",
    disciplines: ["Tax", "Legal", "Finance"],
  },
  {
    sector: "Public Sector",
    headline: "Reorganization project of an Uzbek state-owned investment fund",
    result: "Full restructuring advisory",
    disciplines: ["Legal", "Finance"],
  },
  {
    sector: "Pharmaceuticals",
    headline:
      "Advising several international pharmaceutical companies on structuring Uzbek trading activities",
    result: "Regulatory compliance achieved",
    disciplines: ["Tax", "Legal"],
  },
  {
    sector: "Capital Markets",
    headline:
      "Advising a major international management consulting firm on capital market legislation development",
    result: "Legislative framework advisory",
    disciplines: ["Legal", "Finance"],
  },
  {
    sector: "Banking",
    headline:
      "Advising a major international financial institution on banking legislation, derivatives and REPO transactions",
    result: "Regulatory development support",
    disciplines: ["Legal", "Finance"],
  },
  {
    sector: "Islamic Finance",
    headline:
      "Advising a major international consulting firm on integration of Islamic finance tools to Uzbek legislation",
    result: "Legislative integration advisory",
    disciplines: ["Legal", "Finance"],
  },
  {
    sector: "Cross-Industry",
    headline:
      "Advising multiple international companies from various industries on incorporation in Uzbekistan",
    result: "End-to-end market entry",
    disciplines: ["Tax", "Legal", "HR"],
  },
];

const serviceShortNames: Record<string, string> = {
  tax: "Tax",
  legal: "Legal",
  finance: "Finance",
  hr: "HR",
  marketing: "Marketing",
  funding: "Funding",
};

export default function ExpertisePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

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
              Our Expertise
            </motion.p>
            <TextReveal
              text="Integrated services, singular results"
              as="h1"
              mode="line"
              className="heading-luxury text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] max-w-4xl"
              delay={0.2}
            />
            <RevealLine delay={0.5}>
              <p className="text-lg text-white/55 max-w-2xl mt-8 leading-relaxed">
                Six core disciplines. Sixteen industries. One cohesive advisory
                practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            {/* Service quick-links */}
            <RevealLine delay={0.7}>
              <div className="flex flex-wrap gap-2 mt-10">
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/expertise/${s.slug}`}
                    className="text-xs tracking-[0.14em] uppercase text-white/40 border border-white/[0.08] rounded-full px-4 py-1.5 hover:text-white/75 hover:border-white/20 transition-colors duration-200"
                  >
                    {serviceShortNames[s.slug] ?? s.title}
                  </Link>
                ))}
              </div>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* ====== SERVICES ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section heading + filter bar */}
          <AnimatedSection className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="tracking-luxury text-white/50 mb-4">Practice Areas</p>
                <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                  Six disciplines, one team
                </h2>
              </div>

              {/* Animated sliding filter */}
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 w-fit shrink-0">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className="relative px-5 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer"
                  >
                    {activeFilter === f.value && (
                      <motion.div
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-200",
                        activeFilter === f.value
                          ? "text-white"
                          : "text-white/40 hover:text-white/65",
                      )}
                    >
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service cards — individually staggered */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {filtered.map((service) => (
                <motion.div
                  key={service.num}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <Link href={`/expertise/${service.slug}`} className="block group h-full">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.015 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="glow-card h-full"
                    >
                      <div className="glow-card-spinner" />
                      <div className="glow-card-backdrop" />
                      <div className="glow-card-content p-8 md:p-10 flex flex-col h-full">
                        <div className="glow-card-glow" />

                        {/* Header row */}
                        <div className="flex items-center justify-between mb-8">
                          <span className="font-mono text-xs text-white/25 tracking-[0.2em]">
                            {service.num}
                          </span>
                          <span className="text-xs tracking-[0.14em] uppercase text-primary/70 border border-primary/20 rounded-full px-3 py-1">
                            {service.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 tracking-wide group-hover:text-primary-light transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/50 leading-relaxed mb-8 line-clamp-2 text-[15px]">
                          {service.description[0]}
                        </p>

                        {/* Capabilities preview */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {service.capabilities.slice(0, 3).map((cap) => (
                            <span
                              key={cap}
                              className="text-xs text-white/40 border border-white/[0.07] rounded px-2.5 py-1"
                            >
                              {cap}
                            </span>
                          ))}
                          <span className="text-xs text-white/25 border border-white/[0.04] rounded px-2.5 py-1">
                            +{service.capabilities.length - 3} more
                          </span>
                        </div>

                        {/* Explore link */}
                        <div className="mt-auto flex items-center gap-2 text-white/40 group-hover:text-foreground transition-colors duration-300">
                          <span className="text-xs uppercase tracking-[0.15em]">
                            Explore
                          </span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ====== INDUSTRIES (untouched) ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Sector Experience</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              Industries we serve
            </h2>
            <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
              From regulated heavyweights to fast-moving ventures across
              Central Asia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5" role="list">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <motion.button
                  key={ind.name}
                  role="listitem"
                  tabIndex={0}
                  aria-label={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 4) * 0.04 + Math.floor(i / 4) * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glow-card aspect-[5/4] cursor-default"
                >
                  <div className="glow-card-spinner" />
                  <div className="glow-card-backdrop" />
                  <div className="glow-card-content flex flex-col items-center justify-center gap-4 p-5 md:p-6">
                    <div className="glow-card-glow" />
                    <IconComp
                      className="relative w-9 h-9 md:w-10 md:h-10 text-white/60 transition-colors duration-500 glow-card-icon"
                      strokeWidth={1}
                    />
                    <span className="relative text-xs tracking-[0.14em] uppercase text-center leading-tight glow-card-title">
                      {ind.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== TRACK RECORD ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[600px] h-[600px] top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Track Record</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-5">
              Selected engagements
            </h2>
            <p className="text-sm text-white/35 max-w-2xl mx-auto leading-relaxed">
              These projects reflect the collective experience of our leadership
              team across their careers — not all engagements were conducted
              under the Advizen name.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 md:p-8 flex flex-col hover:border-white/[0.12] hover:bg-white/[0.025] transition-colors duration-300"
              >
                {/* Sector tag + index */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs tracking-[0.2em] uppercase text-primary-light/70">
                    {cs.sector}
                  </span>
                  <span className="font-mono text-xs text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-[15px] text-foreground/85 mb-4 leading-snug font-light group-hover:text-foreground transition-colors duration-300">
                  {cs.headline}
                </h3>

                {/* Result */}
                <p className="text-sm text-white/45 mb-6 font-mono">
                  {cs.result}
                </p>

                {/* Disciplines */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {cs.disciplines.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] tracking-[0.12em] uppercase text-white/40 border border-white/[0.07] rounded-full px-2.5 py-0.5"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/50 mb-6">Next Step</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
              Ready to begin?
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Every engagement begins with a conversation. Let us understand
              your business before we propose solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton variant="primary" as="a" href="/contact">
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="/about">
                About the firm
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
