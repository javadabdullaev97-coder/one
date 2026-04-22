"use client";

import Link from "next/link";
import { useState, useEffect, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Calculator,
  Cpu,
  Flame,
  Landmark,
  LayoutDashboard,
  LineChart,
  Scale,
  Stethoscope,
  Store,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { servicesData } from "@/lib/services";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

interface IndustryGroup {
  name: string;
  icon: LucideIcon;
  accent: string;
  image?: string;
  description: string;
  sectors: string[];
  offerings: string[];
}

const industryGroups: IndustryGroup[] = [
  {
    name: "Financial Services",
    icon: Landmark,
    accent: "30,64,138",
    image: "/industries/financial-services.jpg",
    description: "Banks, investment funds, PE firms, and digital asset operators across Central Asia rely on Advizen for licensing, regulatory compliance, fund structuring, and cross-border transaction advisory.",
    sectors: ["Banking & Finance", "Investment & Venture Funds", "Private Equity & Wealth", "Capital Markets", "Blockchain & Crypto"],
    offerings: ["Licensing and regulatory compliance", "Corporate governance advisory", "IFRS & NAS financial reporting", "Fund and SPV structuring", "M&A and restructuring support", "Transfer pricing documentation", "Digital asset legal structuring"],
  },
  {
    name: "Energy & Industrials",
    icon: Flame,
    accent: "194,65,12",
    image: "/industries/energy-industrials.jpg",
    description: "From nuclear power and renewables to oil & gas, agri-processing, and heavy manufacturing — we provide tax, customs, and legal advisory for capital-intensive projects and their investors across Uzbekistan.",
    sectors: ["Energy & Natural Resources", "Oil & Gas", "Manufacturing", "Agriculture & Agro-processing"],
    offerings: ["Tax and customs structuring for large projects", "Transfer pricing documentation", "Holdings and investment structuring", "Due diligence for energy and industrial assets", "Free economic zone advisory", "HR and payroll at scale"],
  },
  {
    name: "Technology & Digital",
    icon: Cpu,
    accent: "37,99,235",
    image: "/industries/technology.jpg",
    description: "Tech companies, fintechs, and telecoms entering Uzbekistan's growing digital economy rely on us for tax structuring, regulatory licensing, and the legal frameworks that support rapid scaling.",
    sectors: ["IT & Software", "Fintech", "Telecom", "Blockchain & Crypto"],
    offerings: ["Tax structuring for market entry", "Fintech regulatory compliance", "Software and IP licensing advisory", "Investment and shareholder structuring", "Digital asset legal structuring", "HR for engineering teams"],
  },
  {
    name: "Real Estate & Infrastructure",
    icon: Building2,
    accent: "71,85,105",
    image: "/industries/real-estate.jpg",
    description: "Large-scale property and infrastructure projects demand careful tax and legal planning from the outset. We advise developers, contractors, and investors on project structuring, permitting, and compliance.",
    sectors: ["Commercial Real Estate", "Residential Development", "Construction", "Infrastructure"],
    offerings: ["Project tax optimisation", "Contract architecture and review", "Labour law and workforce compliance", "Permitting and regulatory advisory", "Investment structuring for developers"],
  },
  {
    name: "Consumer & Lifestyle",
    icon: Store,
    accent: "180,83,9",
    image: "/industries/consumer.jpg",
    description: "From FMCG and retail to hospitality, media, and sports — we support consumer-facing businesses across Uzbekistan with market entry structuring, HR at scale, payroll, and operational compliance.",
    sectors: ["FMCG & Retail", "Hospitality & Tourism", "Media & Entertainment", "Sports"],
    offerings: ["Market entry and entity formation", "M&A and expansion structuring", "Payroll and HR outsourcing", "Franchise and distribution agreements", "IP and content contracts", "Event and sponsorship structuring"],
  },
  {
    name: "Healthcare & Social",
    icon: Stethoscope,
    accent: "13,148,136",
    image: "/industries/healthcare-social.jpg",
    description: "International pharma companies, healthcare operators, private schools, and universities rely on us for smooth market entry, licensing advisory, and the HR and compliance infrastructure needed to operate at scale.",
    sectors: ["Pharmaceuticals", "Healthcare Providers", "Private Education", "EdTech"],
    offerings: ["Market entry and product registration", "Regulatory compliance advisory", "HR, payroll, and EOR services", "Entity formation and licensing", "Foreign staff work permits", "Tax compliance and reporting"],
  },
];

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  funding: Landmark,
  corporate: Briefcase,
  "entity-management": LayoutDashboard,
};

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
  { value: "7", label: "Disciplines" },
  { value: "6", label: "Sectors" },
  { value: "8+", label: "Years" },
  { value: "$10B+", label: "Deals advised" },
];


function ServicesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.18]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-14 md:mb-16">
          <p className="tracking-luxury text-white/50 mb-4">Practice Areas</p>
          <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
            Seven disciplines, one team
          </h2>
          <p className="mt-5 text-white/45 max-w-2xl leading-relaxed">
            From regulatory compliance to strategic growth — integrated advisory
            built for the complexities of Central Asian markets.
          </p>
        </AnimatedSection>

        {/* Accordion rows */}
        <div className="border-t border-white/[0.08]">
          {servicesData.map((service, i) => {
            const isExpanded = expandedSlug === service.slug;
            const Icon = serviceIcons[service.slug] ?? ArrowUpRight;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "border-b border-white/[0.08] transition-colors duration-500",
                  isExpanded && "bg-white/[0.015]"
                )}
              >
                {/* Row header — clickable */}
                <button
                  type="button"
                  onClick={() => setExpandedSlug(isExpanded ? null : service.slug)}
                  className="w-full flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left group cursor-pointer"
                >
                  {/* Number */}
                  <span
                    className={cn(
                      "font-serif text-3xl md:text-4xl tabular-nums w-12 md:w-14 shrink-0 text-right transition-colors duration-300",
                      isExpanded ? "text-primary" : "text-white/10 group-hover:text-white/22"
                    )}
                  >
                    {service.num}
                  </span>

                  {/* Icon box */}
                  <span
                    className={cn(
                      "w-9 h-9 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300",
                      isExpanded
                        ? "bg-primary/10 border-primary/25"
                        : "bg-white/[0.02] border-white/[0.06] group-hover:border-white/[0.14] group-hover:bg-white/[0.04]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors duration-300",
                        isExpanded ? "text-primary" : "text-white/28 group-hover:text-white/50"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>

                  {/* Title */}
                  <h3
                    className={cn(
                      "font-serif text-xl md:text-2xl flex-1 tracking-wide transition-colors duration-300",
                      isExpanded ? "text-foreground" : "text-white/45 group-hover:text-white/78"
                    )}
                  >
                    {service.title}
                  </h3>
                </button>

                {/* Expandable detail panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[4.25rem] md:pl-[5.5rem] pb-8 md:pb-10 pt-2 pr-4 md:pr-8">
                        <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12">
                          {/* Left: descriptions + link */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-[14px] text-white/52 leading-relaxed mb-3">
                              {service.description[0]}
                            </p>
                            <p className="text-[13px] text-white/32 leading-relaxed">
                              {service.description[1]}
                            </p>
                          </motion.div>

                          {/* Right: capabilities */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.16, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-4">
                              Capabilities
                            </p>
                            <div className="space-y-2.5">
                              {service.capabilities.map((cap, ci) => (
                                <motion.div
                                  key={cap}
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.2 + ci * 0.04,
                                    duration: 0.3,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="flex items-center gap-2.5 text-[13px] text-white/65"
                                >
                                  <span className="w-[5px] h-[5px] rounded-full bg-primary/60 shrink-0" />
                                  {cap}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryGroups[activeIndex];

  useEffect(() => {
    industryGroups.forEach(({ image }) => {
      if (image) new window.Image().src = image;
    });
  }, []);

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-10 md:mb-12">
          <p className="tracking-luxury text-white/50 mb-3">Sector Experience</p>
          <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">
            Sectors we serve
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden md:h-[760px]">
          {/* Left — industry list */}
          <div className="border-r border-white/[0.07] divide-y divide-white/[0.04] flex flex-col h-full">
            {industryGroups.map((ind, i) => {
              const IconComp = ind.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative w-full flex flex-1 items-center gap-4 px-6 text-left transition-all duration-250 group outline-none",
                    isActive
                      ? "bg-white/[0.04] text-foreground"
                      : "text-white/45 hover:text-white/75 hover:bg-white/[0.02]"
                  )}
                >
                  {/* Active left border */}
                  <span
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300",
                      isActive ? "bg-primary opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Icon box */}
                  <span
                    className={cn(
                      "w-9 h-9 rounded flex items-center justify-center shrink-0 transition-all duration-250",
                      isActive ? "bg-primary/10" : "bg-white/[0.03] group-hover:bg-white/[0.06]"
                    )}
                  >
                    <IconComp
                      className={cn("w-[18px] h-[18px] shrink-0 transition-colors duration-250",
                        isActive ? "text-primary" : "text-white/40 group-hover:text-white/65"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className={cn("text-[13px] tracking-[0.07em] uppercase transition-all duration-250", isActive ? "font-semibold" : "font-medium")}>
                    {ind.name}
                  </span>

                  <ArrowRight
                    className={cn(
                      "ml-auto w-4 h-4 shrink-0 transition-all duration-250",
                      isActive ? "text-primary opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="relative bg-[#080808] h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-6 md:p-8 overflow-y-auto"
              >
                {/* Industry image */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-44 md:h-52 rounded-xl overflow-hidden mb-6"
                  style={{
                    background: `linear-gradient(145deg, rgba(${active.accent},0.2) 0%, #0d0d0d 55%, rgba(${active.accent},0.06) 100%)`,
                  }}
                >
                  {active.image && (
                    <img
                      src={active.image}
                      alt={active.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      fetchPriority="high"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <active.icon className="w-14 h-14 text-white/[0.06]" strokeWidth={0.6} />
                  </div>
                </motion.div>

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-3"
                >
                  <active.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.25} />
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide leading-tight">
                    {active.name}
                  </h3>
                </motion.div>

                {/* Sector chips */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-1.5 mb-5"
                >
                  {active.sectors.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] tracking-[0.1em] uppercase text-white/40 border border-white/[0.07] px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14px] text-white/52 leading-relaxed mb-6"
                >
                  {active.description}
                </motion.p>

                {/* Offerings */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-3.5"
                >
                  What we offer
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {active.offerings.map((item, oi) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.28, delay: 0.28 + oi * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 px-3 py-2 border border-white/[0.07] bg-white/[0.02] text-[12px] text-white/52 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-white/80 transition-all duration-250 cursor-default"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertisePage() {

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
              <p className="text-lg text-white/50 max-w-2xl mt-8 leading-relaxed">
                Seven core disciplines. Six industry sectors. One cohesive advisory
                practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            {/* Stats */}
            <div className="mt-12 pt-10 border-t border-white/[0.08] flex flex-wrap gap-x-12 gap-y-6">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="font-serif text-4xl md:text-5xl text-foreground font-light tabular-nums leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* ====== SERVICES ====== */}
      <ServicesSection />

      {/* ====== INDUSTRIES ====== */}
      <IndustriesSection />

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
