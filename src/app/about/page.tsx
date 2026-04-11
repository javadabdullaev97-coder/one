"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Bitcoin,
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
import { cn } from "@/lib/utils";

/* ── Data ─────────────────────────────────────────────── */

const metrics = [
  { value: 8, suffix: "+", label: "Years Combined Expertise" },
  { value: 6, suffix: "", label: "Integrated Disciplines" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Working Languages" },
];

const principles = [
  {
    num: "01",
    title: "Integration",
    summary: "One partner, every discipline.",
    body: [
      "Most firms compartmentalise. A tax question goes to one advisor, a legal one to another, HR to a third — and the client spends more time coordinating than receiving counsel.",
      "We reject that model. At Advizen every discipline — legal, tax, finance, accounting, HR, and marketing — works in concert, on a shared view of your business. No silos, no gaps, no dropped context.",
    ],
  },
  {
    num: "02",
    title: "Precision",
    summary: "Meticulous where it matters.",
    body: [
      "Central Asia's regulatory environment rewards attention to detail and punishes assumptions. Our engagements are defined by meticulous technical work paired with commercial judgment.",
      "We don't trade in generalities. Every recommendation is backed by the relevant statute, the specific market nuance, and a clear path to execution.",
    ],
  },
  {
    num: "03",
    title: "Partnership",
    summary: "Embedded, not transactional.",
    body: [
      "We are not a call-centre for compliance. Our best engagements feel like an extension of your leadership team — present in the room when decisions are made, accountable for outcomes, and invested in the long arc of your business.",
      "Your challenges become ours. Your wins are the only metric that matters.",
    ],
  },
  {
    num: "04",
    title: "Local Mastery",
    summary: "International calibre, local fluency.",
    body: [
      "Uzbekistan is not a market you can consult on from abroad. It requires first-hand understanding of the legal code, the bureaucratic rhythm, and the unwritten norms that shape how business actually gets done.",
      "Our operators have spent years building that fluency — then paired it with international standards honed in mature markets. That combination is Advizen's edge.",
    ],
  },
];

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

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
  { name: "Blockchain & Crypto", icon: Bitcoin },
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

/* ── Principles: Pinned scroll-jack with label + content swap ──

   How it works:
   - The section is N * 100vh tall; a sticky child fills the viewport
     and stays pinned for the full scroll distance.
   - useScroll tracks progress (0 → 1) through the section.
   - Active index is derived from progress (floor(v * N)).
   - Both the left label title AND the right principle content swap
     via AnimatePresence as the active index changes. The left stays
     in place; only the text swaps. The right shows exactly ONE
     principle at a time, sliding in from below and out upward.
   - No cards, no borders, no chrome. Pure content.
   - Reduced motion falls through to a plain vertical list. */

function PrinciplesPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  const N = principles.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(N - 1, Math.floor(v * N)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  if (shouldReduce) return <PrinciplesFallbackList />;

  const current = principles[active];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${N * 50}vh` }}
      aria-label="Our principles"
    >
      <div className="sticky top-[20vh] h-[60vh] overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
              {/* Left — eyebrow + swapping title + ticks */}
              <div className="lg:col-span-5">
                <p className="tracking-luxury text-muted-dark mb-6">Our Principles</p>
                <div className="relative min-h-[56px] md:min-h-[72px] mb-8">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={active}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-x-0 font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-[1.05]"
                    >
                      {current.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-3">
                  {principles.map((_, j) => (
                    <span
                      key={j}
                      className={cn(
                        "h-px transition-all duration-500 ease-out",
                        active === j
                          ? "w-12 bg-primary-light"
                          : "w-6 bg-white/15",
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Right — active principle content, one at a time */}
              <div className="lg:col-span-7 relative min-h-[320px] md:min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[11px] text-primary-light tracking-[0.2em]">
                        {current.num}
                      </span>
                      <span className="font-mono text-[11px] text-white/30 tracking-[0.2em]">
                        {String(active + 1).padStart(2, "0")} /{" "}
                        {String(N).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-serif italic text-xl md:text-2xl lg:text-[1.625rem] text-foreground/90 leading-snug mb-8 max-w-2xl">
                      {current.summary}
                    </p>
                    <div className="space-y-5 max-w-2xl">
                      {current.body.map((p, i) => (
                        <p
                          key={i}
                          className="text-[15px] md:text-base text-white/55 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reduced-motion fallback — plain vertical list. */
function PrinciplesFallbackList() {
  return (
    <section className="py-24 md:py-32 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <div className="mb-16">
          <p className="tracking-luxury text-muted-dark mb-3">Our Principles</p>
          <h2 className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight">
            What guides every engagement
          </h2>
        </div>
        <div className="space-y-16">
          {principles.map((p, i) => (
            <article key={p.num}>
              <p className="font-mono text-[11px] text-primary-light tracking-[0.2em] mb-3">
                PRINCIPLE {p.num} /{" "}
                {String(principles.length).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide mb-5">
                {p.title}
              </h3>
              <p className="font-serif italic text-xl text-foreground/90 mb-5 max-w-xl leading-snug">
                {p.summary}
              </p>
              <div className="space-y-4 max-w-xl">
                {p.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[15px] text-white/55 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              {i < principles.length - 1 && (
                <div className="mt-16 h-px bg-white/[0.06]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Disciplines Integration Panel ─────────────────────
   Left: Advizen mark. Right: auto-cycling discipline icon + label.
   Middle: three horizontal beams with red pulses that emerge from
   behind the Advizen tile and travel into the service tile. The
   LAST pulse's onAnimationComplete advances the active discipline,
   so the swap is perfectly synced with the pulse arrival. */
function DisciplinesIntegration() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();
  const N = disciplines.length;
  const PULSE_MS = 2600;

  // Reduced-motion fallback: plain interval cycling, no pulses.
  useEffect(() => {
    if (!shouldReduce) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % N);
    }, PULSE_MS);
    return () => clearInterval(id);
  }, [shouldReduce, N]);

  const advance = () => setActive((p) => (p + 1) % N);

  const current = disciplines[active];
  const Icon = current.icon;

  return (
    <div className="relative mx-auto max-w-2xl">
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
          <span className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/60">
            Advizen
          </span>
        </div>

        {/* MIDDLE — beam track.
            Negative horizontal margin pulls the container under each
            tile by half-a-tile, so the beam lines start at the left
            tile's center and end at the right tile's center. Tiles
            are z-10 with opaque bg, so the pulses are hidden behind
            them at the endpoints and visually emerge / vanish. */}
        <div
          className="relative flex-1 h-28 md:h-32 z-0 -mx-14 md:-mx-16"
          aria-hidden="true"
        >
          {/* 3 static hairlines spanning the full (extended) width */}
          {[0, 1, 2].map((i) => (
            <div
              key={`line-${i}`}
              className="absolute inset-x-0 h-px bg-white/[0.06]"
              style={{ top: `calc(50% + ${(i - 1) * 12}px - 0.5px)` }}
            />
          ))}
          {/* Traveling pulses — all three move in sync; the last one
              drives the advance, locking icon swap to pulse arrival. */}
          {!shouldReduce &&
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
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 text-center text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/70 whitespace-nowrap"
              >
                {current.short}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Discipline progress ticks */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {disciplines.map((_, j) => (
          <span
            key={j}
            className={cn(
              "h-px transition-all duration-500 ease-out",
              active === j ? "w-10 bg-primary-light" : "w-5 bg-white/15",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Section Wrappers ─────────────────────────────────── */

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
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center lg:text-left"
    >
      <div className="font-serif text-4xl md:text-5xl font-extralight text-foreground tabular-nums leading-none">
        <CountUp target={value} suffix={suffix} triggerOnView duration={1.4} />
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-dark">
        {label}
      </p>
    </motion.div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] tracking-[0.18em] uppercase text-white/70 font-light">
      <span className="w-1 h-1 rounded-full bg-primary-light" aria-hidden="true" />
      {children}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* Hero — split layout */}
      <AuroraBackground>
        <section className="relative pt-36 pb-28 md:pt-44 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              {/* Left — Headline + chips */}
              <div className="lg:col-span-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="tracking-luxury text-muted-dark mb-6"
                >
                  About the Firm
                </motion.p>
                <TextReveal
                  text="Built on expertise, sustained by trust"
                  as="h1"
                  mode="line"
                  className="heading-luxury text-4xl md:text-6xl text-foreground leading-[1.05] max-w-3xl mb-10"
                  delay={0.2}
                />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-3"
                >
                  <Chip>8+ yrs combined expertise</Chip>
                  <Chip>6 integrated disciplines</Chip>
                  <Chip>15+ industries</Chip>
                </motion.div>
              </div>

              {/* Right — Editorial "Est. 2024" stamp */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex flex-col items-start lg:items-end"
                >
                  <span className="tracking-luxury text-white/40 mb-2">Established</span>
                  <span className="font-serif text-5xl md:text-6xl text-foreground leading-none tabular-nums font-light">
                    2024
                  </span>
                  <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary-light/80 to-transparent" />
                  <span className="mt-3 text-xs text-white/40 tracking-[0.2em] uppercase">
                    Tashkent · Uzbekistan
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* Metrics Strip */}
      <section className="py-20 md:py-28 bg-black border-y border-white/[0.06] relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
            {metrics.map((m, i) => (
              <StatBlock
                key={m.label}
                value={m.value}
                suffix={m.suffix}
                label={m.label}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-28 md:py-40 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <p className="tracking-luxury text-muted-dark mb-4">The Thesis</p>
              <TextReveal
                text="A modern mandate for a rapidly evolving market"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Uzbekistan is among the fastest-growing economies in Central
                    Asia — and among the most complex to operate in. Regulation
                    evolves quickly. Markets reward those who read the signals
                    early. Missteps are costly and rarely obvious.
                  </p>
                </RevealLine>
                <RevealLine delay={0.1}>
                  <p className="text-white/55 leading-relaxed">
                    For years we watched businesses — multinational and local alike —
                    navigate this environment through a patchwork of specialists.
                    A tax firm here, a law firm there, an HR vendor somewhere else.
                    The cost of coordination often exceeded the value of the advice.
                  </p>
                </RevealLine>
                <RevealLine delay={0.2}>
                  <p className="text-white/55 leading-relaxed">
                    Advizen was founded on a simple thesis: Central Asia&apos;s fastest-growing
                    market deserves advisory of the same calibre found in mature economies —
                    delivered by operators who speak its language, understand its rules,
                    and bring international standards to every engagement.
                  </p>
                </RevealLine>
                <RevealLine delay={0.3}>
                  <p className="font-serif italic text-white/70 leading-relaxed pt-4">
                    One firm. Six disciplines. One point of contact. That is the
                    mandate we set for ourselves in 2024.
                  </p>
                </RevealLine>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Principles — Pinned Split */}
      <PrinciplesPinned />

      <SectionDivider />

      {/* Disciplines Integration Showcase */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-muted-dark mb-4">Integrated Coverage</p>
            <TextReveal
              text="Six disciplines, one mandate"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground"
            />
            <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
              One partner, rendering every service your business depends on — in concert.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisciplinesIntegration />
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="ambient-glow ambient-glow-oxblood w-[420px] h-[420px] -top-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-14 md:mb-16 text-center">
            <p className="tracking-luxury text-muted-dark mb-4">Sector Experience</p>
            <TextReveal
              text="Industries our team has served"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground"
            />
            <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
              From regulated heavyweights to fast-moving ventures — we&apos;ve
              advised across the full sweep of sectors shaping Central Asia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay:
                      (i % 4) * 0.06 + Math.floor(i / 4) * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glow-card aspect-[5/4]"
                >
                  <div className="glow-card-spinner" />
                  <div className="glow-card-backdrop" />
                  <div className="glow-card-content flex flex-col items-center justify-center gap-4 p-5 md:p-6">
                    <div className="glow-card-glow" />
                    <IconComp
                      className="relative w-9 h-9 md:w-10 md:h-10 text-white/60 transition-colors duration-500 glow-card-icon"
                      strokeWidth={1}
                    />
                    <span className="relative text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-center leading-tight glow-card-title">
                      {ind.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Pull Quote */}
      <section className="py-32 md:py-44 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <blockquote className="text-center">
              <p className="font-serif text-2xl md:text-4xl lg:text-[2.5rem] text-foreground leading-[1.25] font-light italic">
                &ldquo;Central Asia&apos;s fastest-growing market deserves advisory
                of the same calibre found in mature economies — delivered by
                operators who speak its language and bring international
                standards.&rdquo;
              </p>
              <cite className="block mt-10 tracking-luxury text-muted-dark not-italic">
                The Advizen Thesis
              </cite>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">Next Step</p>
            <TextReveal
              text="Work with us"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-6"
            />
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Whether you are entering the market or scaling existing operations,
              our firm is prepared to advise.
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
                <Mail className="w-4 h-4 text-muted-dark group-hover:text-primary-light transition-colors" />
                info@advizenco.com
              </a>
              <a
                href="tel:+998334884888"
                className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors outline-none focus-visible:text-foreground"
              >
                <Phone className="w-4 h-4 text-muted-dark group-hover:text-primary-light transition-colors" />
                +998 33 488 4888
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
