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
  Calculator,
  Cpu,
  Factory,
  Film,
  Flame,
  Gem,
  Globe,
  Landmark,
  LineChart,
  Medal,
  Megaphone,
  Plus,
  Scale,
  Sprout,
  Stethoscope,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { servicesData } from "@/lib/services";
import AuroraBackground from "@/components/AuroraBackground";
import { cn } from "@/lib/utils";

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

interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
  offerings: string[];
}

const industries: Industry[] = [
  {
    name: "Agriculture",
    icon: Sprout,
    description: "Uzbekistan's agri-sector is undergoing rapid liberalisation. We help producers, exporters, and agro-processors navigate evolving tax incentives, export regulations, and workforce compliance.",
    offerings: ["Tax structuring for agro-exporters", "Regulatory & licensing compliance", "HR & payroll for seasonal labour", "Land use and property advisory", "Foreign investment structuring"],
  },
  {
    name: "Banking & Finance",
    icon: Landmark,
    description: "We serve banks, NBFIs, and payment institutions operating in or entering Uzbekistan — advising on licensing, governance, IFRS reporting, and cross-border transaction structures.",
    offerings: ["Licensing and regulatory compliance", "Corporate governance advisory", "IFRS & NAS financial reporting", "M&A and restructuring support", "Transfer pricing documentation"],
  },
  {
    name: "Blockchain & Crypto",
    icon: BitcoinSquare,
    description: "As Uzbekistan builds out its digital asset regulatory framework, we advise exchanges, funds, and Web3 businesses on the legal and tax treatment of crypto operations in the jurisdiction.",
    offerings: ["Tax treatment of digital assets", "Legal entity structuring for Web3", "Regulatory framework navigation", "Licensing advisory", "Compliance monitoring"],
  },
  {
    name: "Commerce & Retail",
    icon: Store,
    description: "From market entry to multi-location expansion, we support retailers and FMCG operators with structuring, HR at scale, payroll optimisation, and consumer-facing compliance.",
    offerings: ["Market entry and entity formation", "M&A and expansion structuring", "Payroll and HR outsourcing", "Franchise and distribution agreements", "Marketing compliance"],
  },
  {
    name: "Construction & Real Estate",
    icon: Building2,
    description: "Large-scale construction and property projects demand careful tax and legal planning from the outset. We advise developers, contractors, and investors on project structuring and compliance.",
    offerings: ["Project tax optimisation", "Contract architecture and review", "Labour law and workforce compliance", "Permitting advisory", "Investment structuring for developers"],
  },
  {
    name: "Education",
    icon: BookOpen,
    description: "We support private schools, universities, EdTech ventures, and training centres with entity formation, licensing, and the HR infrastructure needed to operate at scale.",
    offerings: ["Entity formation and licensing", "HR and payroll management", "Tax compliance and reporting", "Foreign staff work permits", "Operational compliance monitoring"],
  },
  {
    name: "Energy & Natural Resources",
    icon: Flame,
    description: "With deep experience in Uzbekistan's energy sector — including nuclear, renewables, and oil & gas — we provide tax, customs, and legal advisory for large infrastructure projects and their investors.",
    offerings: ["Tax and customs structuring for projects", "Transfer pricing documentation", "Holdings and investment structuring", "Due diligence for energy assets", "Regulatory compliance advisory"],
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: Stethoscope,
    description: "International pharma companies and healthcare operators rely on us for smooth market entry, ongoing compliance, and the HR frameworks needed to manage clinical and administrative teams.",
    offerings: ["Market entry and product registration", "Regulatory compliance advisory", "HR, payroll, and EOR services", "Contract and distribution structuring", "Tax planning for pharma imports"],
  },
  {
    name: "Hospitality & Tourism",
    icon: BedDouble,
    description: "Hotels, resorts, travel agencies, and tourism platforms operating in Central Asia benefit from our integrated advisory on entity setup, HR, tax, and operational compliance.",
    offerings: ["Entity formation and licensing", "HR management and payroll", "Tax planning and compliance", "Franchise and management agreement review", "Expatriate work permits"],
  },
  {
    name: "Immigration",
    icon: Globe,
    description: "We manage the full lifecycle of work authorisations and residency applications for expatriate personnel, enabling foreign companies to deploy talent into Uzbekistan without friction.",
    offerings: ["Work permit and visa administration", "Residency and accreditation advisory", "Expatriate HR compliance", "Employer obligations and reporting", "Legal support for relocations"],
  },
  {
    name: "IT, Fintech & Telecom",
    icon: Cpu,
    description: "Tech companies entering Uzbekistan's growing digital market rely on us for tax structuring, licensing, and legal frameworks that support rapid scaling and cross-border operations.",
    offerings: ["Tax structuring for tech market entry", "Software and IP licensing advisory", "Fintech regulatory compliance", "Investment and shareholder structuring", "HR for engineering teams"],
  },
  {
    name: "Investment & Venture Funds",
    icon: TrendingUp,
    description: "We advise venture funds, family offices, and institutional investors on fund structuring, due diligence, and the legal and tax frameworks governing investments in Central Asian assets.",
    offerings: ["Fund and SPV structuring", "Tax advisory for fund operations", "Legal documentation and governance", "Tax and legal due diligence", "Portfolio company advisory"],
  },
  {
    name: "Manufacture",
    icon: Factory,
    description: "Manufacturers operating in Uzbekistan's growing industrial base need rigorous tax, customs, and HR compliance. We provide end-to-end advisory from greenfield setup through ongoing operations.",
    offerings: ["Tax and customs optimisation", "HR and payroll at scale", "M&A and corporate restructuring", "Free economic zone advisory", "Regulatory and labour compliance"],
  },
  {
    name: "Media & Entertainment",
    icon: Film,
    description: "Content creators, production companies, and media platforms benefit from our IP, contract, and HR advisory — ensuring that creative and commercial interests are properly protected.",
    offerings: ["Intellectual property structuring", "Content and production contracts", "HR and talent agreements", "Tax planning for royalties", "Event and sponsorship structuring"],
  },
  {
    name: "Private Equity & Wealth",
    icon: Gem,
    description: "PE funds and high-net-worth individuals investing in Uzbekistan trust us to structure holdings efficiently, manage compliance, and provide the reporting frameworks their stakeholders require.",
    offerings: ["Holding and fund structure design", "Tax advisory and optimisation", "Legal compliance and governance", "Financial reporting (IFRS)", "Asset protection structuring"],
  },
  {
    name: "Sports",
    icon: Medal,
    description: "Sports clubs, federations, and athlete management firms call on us to handle the contractual, HR, and tax complexities that arise in professional sports operating across Central Asian markets.",
    offerings: ["Athlete and club contracts", "IP and sponsorship licensing", "HR and payroll for sports entities", "Event and tournament structuring", "Tax planning for prize and licensing income"],
  },
];

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  marketing: Megaphone,
  funding: Landmark,
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
  { value: "6", label: "Disciplines" },
  { value: "16", label: "Industries" },
  { value: "8+", label: "Years" },
  { value: "$10B+", label: "Deals advised" },
];

const serviceShortNames: Record<string, string> = {
  tax: "Tax", legal: "Legal", finance: "Finance",
  hr: "HR", marketing: "Marketing", funding: "Funding",
};

function ServicesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.18]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-14 md:mb-16">
          <p className="tracking-luxury text-white/50 mb-4">Practice Areas</p>
          <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
            Six disciplines, one team
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

                  {/* Capabilities count badge — visible when collapsed */}
                  <span
                    className={cn(
                      "hidden md:block text-[10px] tracking-[0.12em] uppercase transition-all duration-300 shrink-0",
                      isExpanded ? "text-white/20" : "text-white/18 group-hover:text-white/35"
                    )}
                  >
                    {service.capabilities.length} capabilities
                  </span>

                  {/* Expand indicator: + rotates to × */}
                  <span
                    className={cn(
                      "w-8 h-8 flex items-center justify-center shrink-0 border rounded-full transition-all duration-400",
                      isExpanded
                        ? "border-primary/30 bg-primary/[0.06] rotate-45"
                        : "border-white/[0.08] group-hover:border-white/[0.2]"
                    )}
                  >
                    <Plus
                      className={cn(
                        "w-3.5 h-3.5 transition-colors duration-300",
                        isExpanded ? "text-primary" : "text-white/25 group-hover:text-white/50"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
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
                            <p className="text-[13px] text-white/32 leading-relaxed mb-7">
                              {service.description[1]}
                            </p>
                            <Link
                              href={`/expertise/${service.slug}`}
                              className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-primary/80 hover:text-primary transition-colors group/link"
                            >
                              View full practice
                              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-250" />
                            </Link>
                          </motion.div>

                          {/* Right: capabilities */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.16, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-3.5">
                              Capabilities
                            </p>
                            <div className="space-y-2">
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
                                  className="flex items-center gap-2.5 text-[12px] text-white/48"
                                >
                                  <span className="w-[5px] h-[5px] rounded-full bg-primary/45 shrink-0" />
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
  const active = industries[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-10 md:mb-12">
          <p className="tracking-luxury text-white/50 mb-3">Sector Experience</p>
          <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">
            Industries we serve
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden">
          {/* Left — industry list */}
          <div className="border-r border-white/[0.07] divide-y divide-white/[0.04] overflow-y-auto md:max-h-[640px] scrollbar-none">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative w-full flex items-center gap-3.5 px-5 py-4 text-left transition-all duration-250 group outline-none",
                    isActive
                      ? "bg-white/[0.04] text-foreground"
                      : "text-white/38 hover:text-white/68 hover:bg-white/[0.02]"
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
                      "w-7 h-7 rounded flex items-center justify-center shrink-0 transition-all duration-250",
                      isActive ? "bg-primary/10" : "bg-white/[0.03] group-hover:bg-white/[0.06]"
                    )}
                  >
                    <IconComp
                      className={cn("w-3.5 h-3.5 shrink-0 transition-colors duration-250",
                        isActive ? "text-primary" : "text-white/30 group-hover:text-white/50"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className={cn("text-[11.5px] tracking-[0.09em] uppercase transition-all duration-250", isActive ? "font-medium" : "")}>
                    {ind.name}
                  </span>

                  <ArrowRight
                    className={cn(
                      "ml-auto w-3.5 h-3.5 shrink-0 transition-all duration-250",
                      isActive ? "text-primary opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="relative bg-[#080808] overflow-hidden min-h-[480px] md:min-h-0">
            {/* Static ambient glow — always present */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99,13,13,0.12) 0%, transparent 70%)" }}
            />

            {/* Animated watermark icon */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${active.name}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 right-0 pointer-events-none translate-x-8 translate-y-8"
              >
                <active.icon className="w-64 h-64 text-white/[0.025]" strokeWidth={0.5} />
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 md:p-10"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-md border border-primary/25 bg-primary/[0.07] flex items-center justify-center shrink-0 mt-0.5">
                    <active.icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide leading-tight">
                      {active.name}
                    </h3>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-1">
                      {active.offerings.length} services available
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/[0.05] mb-5" />

                {/* Description */}
                <p className="text-[14px] text-white/52 leading-relaxed mb-7">
                  {active.description}
                </p>

                {/* Offerings */}
                <p className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-3.5">
                  What we offer
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.offerings.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 px-3 py-2 border border-white/[0.07] bg-white/[0.02] text-[12px] text-white/52 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-white/80 transition-all duration-250 cursor-default"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </span>
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
