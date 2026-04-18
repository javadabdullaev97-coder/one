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

function BitcoinSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}
      strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <path d="M7 4 V20" /><path d="M7 4 H15 L17 6 V10 L15 12 H7" />
      <path d="M7 12 H16 L18 14 V18 L16 20 H7" />
      <path d="M10 2 V4" /><path d="M14 2 V4" />
      <path d="M10 20 V22" /><path d="M14 20 V22" />
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

const allEngagements = [
  { sector: "Energy",         metric: "$10B+",       metricLabel: "Project budget",        headline: "Tax, accounting, and customs structuring of a nuclear power plant construction for a Russian enterprise",                                           disciplines: ["Tax", "Finance"] },
  { sector: "Energy",         metric: "$2B+",        metricLabel: "Structured investment",  headline: "Tax & legal due diligence, holdings structuring, and transfer pricing documentation for all operations of a Chinese energy group of companies in Uzbekistan", disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "FMCG",          metric: "$250M",        metricLabel: "Transaction",           headline: "M&A of a large Uzbek bottler company",                                                                                                              disciplines: ["Tax", "Legal"] },
  { sector: "Fintech",       metric: "$200M",        metricLabel: "Transaction",           headline: "Two major restructuring projects of an international digital bank in its Uzbek subsidiaries",                                                        disciplines: ["Tax", "Legal"] },
  { sector: "Manufacturing", metric: "$20M",         metricLabel: "Transaction",           headline: "M&A and corporate restructuring of a large Uzbek cement producer",                                                                                  disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Technology",    metric: "$5M",          metricLabel: "Investment",            headline: "Tax structuring and ad-hoc consulting of a major Russian IT company during its market launch in Uzbekistan",                                        disciplines: ["Tax", "Legal"] },
  { sector: "Retail",        metric: "$5M",          metricLabel: "Transaction",           headline: "M&A and structuring for a major local retailer",                                                                                                     disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Fintech",metric: "~$1M",        metricLabel: "Seed round",            headline: "Tax and legal advisory for the seed investment phase structuring of an Uzbek-based fintech startup operating on Islamic finance principles",          disciplines: ["Tax", "Legal"] },
  { sector: "Public Sector", metric: "1",            metricLabel: "State fund",            headline: "Reorganization and structuring of an Uzbek state-owned investment fund",                                                                             disciplines: ["Legal", "Tax"] },
  { sector: "Capital Markets",metric: "Policy",      metricLabel: "Built from scratch",    headline: "Served as local tax, legal, and finance consultants for international firms hired by the government to develop capital market legislation",            disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Banking",       metric: "Policy",       metricLabel: "Built from scratch",    headline: "Served as local consultants for international firms advising the government on banking legislation, including derivatives and REPO frameworks",        disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Finance",metric: "Policy",      metricLabel: "Built from scratch",    headline: "Served as local consultants for an international firm advising the government on integrating Islamic finance instruments into Uzbek legislation",      disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Pharma",        metric: "5+",           metricLabel: "Companies",             headline: "Establishing, structuring, payroll consulting, and ongoing compliance advisory for international pharmaceutical companies in Uzbekistan",             disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Cross-Industry",metric: "80+",          metricLabel: "Entities incorporated", headline: "End-to-end incorporation and registration advisory for both local and international companies across multiple industries",                            disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Due Diligence", metric: "30+",          metricLabel: "Tax & Legal DDs",       headline: "Tax and legal due diligence across renewable energy, mining, oil & gas, FMCG, and manufacturing sectors",                                            disciplines: ["Tax", "Legal"] },
];

const heroStats = [
  { value: "6", label: "Disciplines" },
  { value: "16", label: "Industries" },
  { value: "8+", label: "Years" },
  { value: "$10B+", label: "Deals advised" },
];

const serviceShortNames: Record<string, string> = {
  tax: "Tax", legal: "Legal", finance: "Finance",
  hr: "HR", marketing: "Marketing", funding: "Funding",
};

const categoryColor: Record<string, string> = {
  Advisory: "text-amber-400/60",
  Operations: "text-sky-400/60",
  Growth: "text-emerald-400/60",
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
          {/* Big watermark */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.025 }}
            transition={{ duration: 2.5, delay: 0.6 }}
            className="absolute top-8 right-0 md:right-8 font-serif text-[18rem] md:text-[26rem] leading-none text-foreground select-none pointer-events-none"
          >
            06
          </motion.span>

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
              <p className="text-lg text-white/50 max-w-2xl mt-8 leading-relaxed">
                Six core disciplines. Sixteen industries. One cohesive advisory
                practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            {/* Stats */}
            <RevealLine delay={0.65}>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-5 mt-12 pt-10 border-t border-white/[0.06]">
                {heroStats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2.5">
                    <span className="font-serif text-2xl md:text-3xl text-foreground font-light tabular-nums">
                      {s.value}
                    </span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-white/35">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealLine>

            {/* Quick-links */}
            <RevealLine delay={0.8}>
              <div className="flex flex-wrap gap-2 mt-8">
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/expertise/${s.slug}`}
                    className="text-xs tracking-[0.14em] uppercase text-white/35 border border-white/[0.07] rounded-full px-4 py-1.5 hover:text-white/75 hover:border-white/[0.18] transition-all duration-250 cursor-pointer"
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
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.18]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

          {/* Heading + filter */}
          <AnimatedSection className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="tracking-luxury text-white/50 mb-4">Practice Areas</p>
                <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                  Six disciplines, one team
                </h2>
              </div>

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
                    <span className={cn(
                      "relative z-10 transition-colors duration-200",
                      activeFilter === f.value ? "text-white" : "text-white/40 hover:text-white/65",
                    )}>
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Top border */}
          <div className="h-px bg-white/[0.06] mb-0" />

          {/* Service list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {filtered.map((service, idx) => (
                <motion.div
                  key={service.num}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="border-b border-white/[0.06]"
                >
                  <Link href={`/expertise/${service.slug}`} className="group relative flex items-start gap-6 md:gap-10 py-8 md:py-10 pl-5 cursor-pointer overflow-hidden">
                    {/* Hover background sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-light/80 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                    {/* Large number */}
                    <span className="relative font-serif text-[3.5rem] md:text-[5rem] leading-none text-white/[0.05] group-hover:text-white/[0.1] transition-colors duration-500 shrink-0 w-14 md:w-20 tabular-nums select-none -mt-1">
                      {service.num}
                    </span>

                    {/* Main content */}
                    <div className="relative flex-1 min-w-0 flex flex-col md:flex-row md:items-start md:gap-8">
                      <div className="flex-1 min-w-0">
                        <span className={cn(
                          "inline-block text-[10px] tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300",
                          categoryColor[service.category] ?? "text-primary-light/60",
                        )}>
                          {service.category}
                        </span>
                        <h3 className="font-serif text-2xl md:text-[1.85rem] text-foreground/80 tracking-wide leading-snug group-hover:text-foreground transition-colors duration-300 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/38 text-[15px] leading-relaxed max-w-xl line-clamp-2 group-hover:text-white/55 transition-colors duration-300">
                          {service.description[0]}
                        </p>
                      </div>

                      {/* Capability tags — hidden on small, right-rail on md+ */}
                      <div className="hidden md:flex flex-col items-end gap-2 shrink-0 w-56 pt-7">
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {service.capabilities.slice(0, 3).map((cap) => (
                            <span key={cap}
                              className="text-[11px] text-white/25 border border-white/[0.05] rounded px-2 py-0.5 group-hover:text-white/40 group-hover:border-white/[0.09] transition-colors duration-300">
                              {cap}
                            </span>
                          ))}
                          <span className="text-[11px] text-white/15 px-2 py-0.5">
                            +{service.capabilities.length - 3}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="relative shrink-0 self-center">
                      <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ====== INDUSTRIES ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Sector Experience</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              Industries we serve
            </h2>
            <p className="mt-5 text-white/50 max-w-xl mx-auto leading-relaxed">
              From regulated heavyweights to fast-moving ventures across Central Asia.
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
                    <IconComp className="relative w-9 h-9 md:w-10 md:h-10 text-white/60 transition-colors duration-500 glow-card-icon" strokeWidth={1} />
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
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-[0.18]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

          <AnimatedSection className="mb-14 md:mb-16">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">Track Record</p>
              <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
                Selected engagements of our team members
              </h2>
            </div>
          </AnimatedSection>

          {/* All engagements — uniform glow cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allEngagements.map((deal, i) => (
              <motion.div
                key={deal.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glow-card"
              >
                <div className="glow-card-spinner" />
                <div className="glow-card-backdrop" />
                <div className="glow-card-content p-7 md:p-8 flex flex-col h-full">
                  <div className="glow-card-glow" />

                  {/* Metric */}
                  <div className="mb-6">
                    <span className="font-serif text-3xl md:text-4xl text-foreground/85 tracking-tight leading-none glow-card-title">
                      {deal.metric}
                    </span>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-2">
                      {deal.metricLabel}
                    </p>
                  </div>

                  {/* Sector */}
                  <span className="inline-block text-xs tracking-[0.16em] uppercase text-red-400/70 mb-3">
                    {deal.sector}
                  </span>

                  {/* Headline */}
                  <p className="text-[14px] text-foreground/60 leading-snug font-light mb-6 flex-1 glow-card-desc">
                    {deal.headline}
                  </p>

                  {/* Disciplines */}
                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.05]">
                    {deal.disciplines.map((d) => (
                      <span key={d} className="text-[10px] tracking-[0.12em] uppercase text-white/30 border border-white/[0.06] rounded-full px-2.5 py-0.5">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[350px] h-[350px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-[0.14]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            {/* Decorative watermark letter */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.03 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[14rem] md:text-[20rem] text-foreground leading-none select-none pointer-events-none"
            >
              A
            </motion.span>

            <p className="tracking-luxury text-white/50 mb-6">Next Step</p>

            <TextReveal
              text="Ready to begin?"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />

            <RevealLine delay={0.2}>
              <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                Every engagement begins with a conversation. Let us understand
                your business before we propose solutions.
              </p>
            </RevealLine>

            <RevealLine delay={0.35}>
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
            </RevealLine>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
