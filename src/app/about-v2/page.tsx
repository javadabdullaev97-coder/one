"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
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
  Mail,
  Medal,
  Megaphone,
  Phone,
  Scale,
  Search,
  Sprout,
  Stethoscope,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";
import CountUp from "@/components/CountUp";
import UzbekistanMap from "@/components/UzbekistanMap";
import { cn } from "@/lib/utils";

/* ── Data ─────────────────────────────────────────────── */

const metrics = [
  { value: 8, suffix: "+", label: "Years in Uzbekistan Market" },
  { value: 6, suffix: "", label: "Practice Areas" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Languages: EN / RU / UZ" },
];

const principles = [
  {
    num: "01",
    title: "Precision",
    summary: "Meticulous where it matters.",
    body: "Central Asia's regulatory environment rewards attention to detail and punishes assumptions. Every recommendation we make is backed by the relevant statute, the specific market nuance, and a clear path to execution.",
  },
  {
    num: "02",
    title: "Partnership",
    summary: "Embedded, not transactional.",
    body: "Our best engagements feel like an extension of your leadership team. Present in the room when decisions are made, accountable for outcomes, and invested in the long arc of your business.",
  },
  {
    num: "03",
    title: "Local Mastery",
    summary: "International calibre, local fluency.",
    body: "Uzbekistan is not a market you can consult on from abroad. Our operators have spent years building first-hand fluency with the legal code, bureaucratic rhythm, and unwritten norms, then paired it with international standards.",
  },
];

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

const disciplines: {
  num: string;
  title: string;
  short: string;
  blurb: string;
  icon: LucideIcon;
}[] = [
  { num: "01", title: "Tax", short: "Tax", blurb: "Strategy, compliance, and cross-border structuring.", icon: Calculator },
  { num: "02", title: "Legal", short: "Legal", blurb: "Corporate, contract, and regulatory counsel.", icon: Scale },
  { num: "03", title: "Finance & Accounting", short: "Finance", blurb: "Reporting, controls, and advisory to IFRS standards.", icon: LineChart },
  { num: "04", title: "HR", short: "HR", blurb: "Employer of record, talent, and labour compliance.", icon: Users },
  { num: "05", title: "Marketing", short: "Marketing", blurb: "Brand, positioning, and market-entry strategy.", icon: Megaphone },
  { num: "06", title: "Funding & Grants", short: "Funding", blurb: "Access to capital, IFI programmes, and incentives.", icon: Landmark },
];

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

const team = [
  {
    initials: "JD",
    name: "Partner Name",
    role: "Managing Partner",
    bio: "20+ years advising multinational and local businesses across Central Asia. Former Big Four. Leads tax, legal, and market-entry mandates.",
  },
  {
    initials: "AK",
    name: "Partner Name",
    role: "Partner, Finance & Operations",
    bio: "IFRS specialist with deep experience in banking, fintech, and energy. Oversees finance, accounting, and compliance engagements.",
  },
  {
    initials: "SM",
    name: "Partner Name",
    role: "Partner, Strategy & Growth",
    bio: "Background in venture capital and IFI advisory. Leads funding, marketing, and HR practice areas for international clients entering Uzbekistan.",
  },
];

const caseStudies = [
  {
    sector: "Fintech",
    headline: "Market-entry structuring for a European fintech",
    result: "Operational in 90 days",
    disciplines: ["Tax", "Legal", "HR"],
  },
  {
    sector: "Agriculture",
    headline: "Cross-border supply chain advisory for a major exporter",
    result: "30% reduction in compliance overhead",
    disciplines: ["Tax", "Finance", "Legal"],
  },
  {
    sector: "Energy",
    headline: "IFI grant programme navigation for a renewables venture",
    result: "$2.5M in secured funding",
    disciplines: ["Funding", "Legal", "Finance"],
  },
];

const credentials = [
  "Member, American Chamber of Commerce in Uzbekistan",
  "ACCA-qualified finance practitioners",
  "Registered tax advisory licence, Republic of Uzbekistan",
  "IFRS implementation partner",
  "IFI programme consultants (ADB, EBRD, IFC)",
  "ISO 9001-aligned internal processes",
];

const howWeWork = [
  {
    num: "01",
    title: "Discovery",
    desc: "We map your regulatory exposure, commercial objectives, and operational reality in a focused scoping session.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Our team builds an integrated plan across every relevant discipline with clear deliverables and timelines.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "We deliver, implement, and stay accountable through the outcome. One point of contact, no handoff gaps.",
  },
];

/* ── Disciplines Integration Panel ───────────────────── */
function DisciplinesIntegration() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const N = disciplines.length;
  const PULSE_MS = 1000;

  useEffect(() => {
    if (!shouldReduce && !hovered) return;
    if (hovered) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % N);
    }, PULSE_MS);
    return () => clearInterval(id);
  }, [shouldReduce, hovered, N]);

  const advance = () => {
    if (!hovered) setActive((p) => (p + 1) % N);
  };

  const current = disciplines[active];
  const Icon = current.icon;

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex items-start">
        {/* LEFT — Advizen tile */}
        <div className="relative z-10 flex flex-col items-center gap-5 shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border border-white/10 bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Advizen"
              width={160}
              height={134}
              className="w-16 h-auto md:w-[72px] opacity-95"
            />
          </div>
          <span className="text-xs tracking-[0.22em] uppercase text-white/50">
            Advizen
          </span>
        </div>

        {/* MIDDLE — beam track */}
        <div
          className="relative flex-1 h-28 md:h-32 z-0 -mx-14 md:-mx-16"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={`line-${i}`}
              className="absolute inset-x-0 h-px bg-white/[0.06]"
              style={{ top: `calc(50% + ${(i - 1) * 12}px - 0.5px)` }}
            />
          ))}
          {!shouldReduce &&
            !hovered &&
            [0, 1, 2].map((i) => (
              <motion.div
                key={`pulse-${active}-${i}`}
                className="absolute h-px w-20 md:w-24 -ml-10 md:-ml-12"
                style={{
                  top: `calc(50% + ${(i - 1) * 12}px - 0.5px)`,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(237,88,99,0.95) 50%, transparent 100%)",
                  boxShadow: "0 0 14px rgba(237,88,99,0.55)",
                }}
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: PULSE_MS / 1000,
                  ease: [0.42, 0, 0.58, 1],
                }}
                onAnimationComplete={i === 2 ? advance : undefined}
              />
            ))}
        </div>

        {/* RIGHT — cycling service tile */}
        <div className="relative z-10 flex flex-col items-center gap-5 shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border border-white/10 bg-[#0D0D0D] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: "-70%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "70%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Icon
                  className="w-16 h-16 md:w-[72px] md:h-[72px] text-primary-light"
                  strokeWidth={1.15}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative h-5 min-w-[108px] md:min-w-[132px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 text-center text-xs tracking-[0.22em] uppercase text-white/60 whitespace-nowrap"
              >
                {current.short}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">
              Current discipline: {current.title}
            </span>
          </div>
        </div>
      </div>

      {/* Discipline progress ticks */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {disciplines.map((d, j) => (
          <button
            key={j}
            onClick={() => setActive(j)}
            className={cn(
              "h-px transition-all duration-500 ease-out cursor-pointer",
              active === j ? "w-10 bg-primary-light" : "w-5 bg-white/15 hover:bg-white/30",
            )}
            aria-label={`Show ${d.title}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}

function StatBlock({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center lg:text-left"
    >
      <div className="font-serif text-4xl md:text-5xl font-extralight text-foreground tabular-nums leading-none">
        <CountUp target={value} suffix={suffix} triggerOnView duration={1.4} />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function AboutV2Page() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <>
      {/* ====== HERO — clean, with CTA ====== */}
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="tracking-luxury text-white/50 mb-6"
                >
                  About the Firm
                </motion.p>
                <TextReveal
                  text="Advisory built for Central Asia's most complex market"
                  as="h1"
                  mode="line"
                  className="heading-luxury text-4xl md:text-6xl text-foreground leading-[1.05] max-w-3xl mb-10"
                  delay={0.2}
                />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-4"
                >
                  <MagneticButton variant="primary" as="a" href="/contact">
                    Schedule a consultation
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                  <MagneticButton variant="outline" as="a" href="/expertise">
                    Our expertise
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </motion.div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex flex-col items-start lg:items-end"
                >
                  <span className="tracking-luxury text-white/50 mb-2">Since</span>
                  <span className="font-serif text-5xl md:text-6xl text-foreground leading-none tabular-nums font-light">
                    2024
                  </span>
                  <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary-light/80 to-transparent" />
                  <span className="mt-3 text-xs text-white/50 tracking-[0.2em] uppercase">
                    Tashkent, Uzbekistan
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* ====== METRICS — refined labels ====== */}
      <section className="py-20 md:py-28 bg-black border-y border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
            {metrics.map((m, i) => (
              <StatBlock
                key={m.label}
                value={m.value}
                suffix={m.suffix}
                label={m.label}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== THE THESIS — tightened, 2 paragraphs ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <p className="tracking-luxury text-white/50 mb-4">The Thesis</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight">
                A modern mandate for a rapidly evolving market
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-7">
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Uzbekistan is among the fastest-growing economies in Central
                    Asia and among the most complex to operate in. For years,
                    businesses navigated this environment through a patchwork of
                    specialists. A tax firm here, a law firm there, an HR vendor
                    somewhere else. The cost of coordination often exceeded the
                    value of the advice.
                  </p>
                </RevealLine>
                <RevealLine delay={0.08}>
                  <p className="text-white/55 leading-relaxed">
                    Advizen was founded to change that. One firm covering every
                    discipline your business depends on, staffed by operators who
                    understand Uzbekistan&apos;s legal code, bureaucratic rhythm,
                    and unwritten norms. Every engagement held to
                    international standards.
                  </p>
                </RevealLine>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== PRINCIPLES — click-driven tabs, no scroll-jack ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Left — eyebrow + tab buttons */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <p className="tracking-luxury text-white/50 mb-6">Our Principles</p>
                <div className="space-y-1">
                  {principles.map((p, i) => (
                    <button
                      key={p.num}
                      onClick={() => setActivePrinciple(i)}
                      className={cn(
                        "w-full text-left px-5 py-4 rounded-lg transition-all duration-300 flex items-center gap-4 group",
                        activePrinciple === i
                          ? "bg-white/[0.04]"
                          : "hover:bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-xs tracking-[0.2em] transition-colors duration-300",
                          activePrinciple === i ? "text-primary-light" : "text-white/50",
                        )}
                      >
                        {p.num}
                      </span>
                      <span
                        className={cn(
                          "font-serif text-xl md:text-2xl tracking-tight transition-colors duration-300",
                          activePrinciple === i ? "text-foreground" : "text-white/40 group-hover:text-white/60",
                        )}
                      >
                        {p.title}
                      </span>
                    </button>
                  ))}
                </div>
                {/* Progress ticks */}
                <div className="flex items-center gap-3 mt-8 ml-5">
                  {principles.map((_, j) => (
                    <span
                      key={j}
                      className={cn(
                        "h-px transition-all duration-500 ease-out",
                        activePrinciple === j
                          ? "w-12 bg-primary-light"
                          : "w-6 bg-white/15",
                      )}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — active principle content */}
            <div className="lg:col-span-7 relative min-h-[220px] md:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <p className="text-xl md:text-2xl text-foreground/90 leading-snug mb-6 max-w-2xl font-light tracking-tight">
                    {principles[activePrinciple].summary}
                  </p>
                  <p className="text-[15px] md:text-base text-white/55 leading-relaxed max-w-2xl">
                    {principles[activePrinciple].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== DISCIPLINES — faster pulse, pause-on-hover ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Integrated Coverage</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              One partner, every discipline
            </h2>
            <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
              Tax, legal, finance, HR, marketing, and funding. Working in
              concert on a shared view of your business.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisciplinesIntegration />
          </AnimatedSection>
        </div>
      </section>

      {/* ====== INDUSTRIES — min 12px labels ====== */}
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

      {/* ====== LEADERSHIP (NEW) ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Leadership</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              The partners behind Advizen
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.initials}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-8 md:p-10"
              >
                {/* Placeholder avatar — swap for real photo */}
                <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6">
                  <span className="font-mono text-sm text-white/50 tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-xs tracking-[0.16em] uppercase text-primary-light/80 mb-5">
                  {member.role}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== HOW WE WORK (NEW) ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Engagement Model</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              How we work
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center md:text-left"
              >
                <span className="font-mono text-xs text-primary-light tracking-[0.2em]">
                  {step.num}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-3 mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== CASE STUDIES (TEMPLATE) ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Track Record</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              Selected engagements
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-8 md:p-10 flex flex-col"
              >
                <span className="text-xs tracking-[0.2em] uppercase text-primary-light/80 mb-4">
                  {cs.sector}
                </span>
                <h3 className="text-lg text-foreground mb-4 leading-snug font-light">
                  {cs.headline}
                </h3>
                <p className="text-sm text-white/50 mb-6">{cs.result}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {cs.disciplines.map((d) => (
                    <span
                      key={d}
                      className="text-xs tracking-[0.12em] uppercase text-white/50 border border-white/[0.08] rounded-full px-3 py-1"
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

      {/* ====== CREDENTIALS & AFFILIATIONS (TEMPLATE) ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-white/50 mb-4">Credentials</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground">
              Affiliations and qualifications
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {credentials.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-3 py-3 border-b border-white/[0.06]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light/60 mt-1.5 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== GEOGRAPHY ====== */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="tracking-luxury text-white/50 mb-4">Where We Operate</p>
              <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
                Based in Tashkent, serving all of Uzbekistan
              </h2>
              <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
                Our primary office is located in Tashkent. We serve clients across
                all regions of Uzbekistan, with additional reach into neighbouring
                Central Asian markets including Kazakhstan, Kyrgyzstan, and Tajikistan.
              </p>
            </div>

            {/* Animated map */}
            <UzbekistanMap />

            {/* City labels row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.16em] uppercase text-white/40 mt-8">
              <span className="text-white/70">Tashkent (HQ)</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Samarkand</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Bukhara</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Fergana Valley</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Urgench</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ====== CTA — stronger copy ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/50 mb-6">Next Step</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-6">
              Work with us
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Whether you are entering the Uzbekistan market or scaling existing
              operations, our firm is built to advise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton variant="primary" as="a" href="/contact">
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="/expertise">
                Explore our expertise
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>

            {/* Direct contact row */}
            <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <a
                href="mailto:info@advizenco.com"
                className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors outline-none focus-visible:text-foreground"
              >
                <Mail className="w-4 h-4 text-white/50 group-hover:text-primary-light transition-colors" />
                info@advizenco.com
              </a>
              <a
                href="tel:+998334884888"
                className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors outline-none focus-visible:text-foreground"
              >
                <Phone className="w-4 h-4 text-white/50 group-hover:text-primary-light transition-colors" />
                +998 33 488 4888
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
